import { google } from 'googleapis'
import { NextResponse } from 'next/server'

// Disable caching for this route to ensure fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
	try {
		// Check environment variables
		const requiredEnvVars = {
			GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
			GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
			GOOGLE_SHEET_NAME: process.env.GOOGLE_SHEET_NAME,
		}

		const missingVars = Object.entries(requiredEnvVars)
			.filter(([key, value]) => !value)
			.map(([key]) => key)

		if (missingVars.length > 0) {
			console.error('Missing environment variables:', missingVars)
			return NextResponse.json(
				{
					error: 'Server configuration error',
					details: `Missing environment variables: ${missingVars.join(', ')}`
				},
				{ status: 500 }
			)
		}

		// Configure Google Auth
		let auth
		try {
			auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
			})
		} catch (authError) {
			console.error('Error creating Google Auth:', authError)
			return NextResponse.json(
				{
					error: 'Authentication configuration error',
					details: authError.message
				},
				{ status: 500 }
			)
		}

		const sheets = google.sheets({ version: 'v4', auth })

		// Fetch all data from the sheet
		let sheetResponse
		try {
			sheetResponse = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: `${process.env.GOOGLE_SHEET_NAME}!A:T`, // Include column T for contractType
			})

			const rows = sheetResponse.data.values || []

			// Skip header row and map data to objects
			// Column order: A=tiktok, B=instagram, C=discord, D=deal type, E=cost/video,
			//               F=CPM, G=Bonus, H=Contract changed?, I=Contract changed date,
			//               J=Total paid, K=Tier, L=Cap, M=Paid December, N=referred?,
			//               O=Type, P=paypal, Q=Full Name, R=Date Signed, S=Signature, T=Contract Type
			const submissions = rows.slice(1).map((row) => {
				return {
					tiktokUsername: row[0] || '',
					discordUsername: row[2] || '',
					paypalUsername: row[15] || '',
					dealType: row[3] || '',
					costPerVideo: row[4] || '',
					cpm: row[5] || '',
					type: row[14] || '',
					fullName: row[16] || '',
					date: row[17] || '',
					signature: row[18] || '',
					contractType: row[19] || 'default', // T: Contract Type
				}
			}).filter(submission =>
				// Filter out empty rows
				submission.tiktokUsername || submission.discordUsername || submission.paypalUsername
			)

			console.log('Successfully fetched submissions:', submissions.length)

			return NextResponse.json({
				success: true,
				submissions: submissions,
				total: submissions.length,
			}, {
				headers: {
					'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
					'Pragma': 'no-cache',
					'Expires': '0',
				}
			})

		} catch (sheetsError) {
			console.error('Error reading from Google Sheets:', sheetsError)
			console.error('Error details:', {
				message: sheetsError.message,
				code: sheetsError.code,
				response: sheetsError.response?.data,
			})

			let errorMessage = 'Failed to read from Google Sheets'
			if (sheetsError.code === 403) {
				errorMessage = 'Permission denied. Check that the service account has access to the spreadsheet.'
			} else if (sheetsError.code === 404) {
				errorMessage = 'Spreadsheet not found. Check GOOGLE_SHEET_ID and GOOGLE_SHEET_NAME.'
			} else if (sheetsError.message) {
				errorMessage = sheetsError.message
			}

			return NextResponse.json(
				{
					error: errorMessage,
					details: sheetsError.message,
					code: sheetsError.code,
				},
				{ status: 500 }
			)
		}

	} catch (error) {
		console.error('Unexpected error in get-submissions:', error)
		console.error('Error stack:', error.stack)
		return NextResponse.json(
			{
				error: 'Failed to fetch submissions',
				details: error.message,
				type: error.constructor.name,
			},
			{ status: 500 }
		)
	}
}
