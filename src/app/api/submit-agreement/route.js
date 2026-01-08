import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		const body = await request.json()
		const { fullName, paypalUsername, tiktokUsername, discordUsername, date } = body

		// Validate required fields
		if (!fullName || !paypalUsername || !discordUsername || !date) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			)
		}

		// Configure Google Sheets API
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		})

		const sheets = google.sheets({ version: 'v4', auth })

		// Prepare row data matching your sheet structure
		// Columns: tiktok username, instagram username, discord username, deal type, cost/video, CPM,
		//          Bonus eligibility, Contract has changed?, Contract changed date, Total paid,
		//          Tier, Cap per video, Paid December, reffered?, Type
		const row = [
			tiktokUsername || '', // tiktok username
			'', // instagram username (empty)
			discordUsername, // discord username
			'', // deal type (empty)
			'', // cost/video (empty)
			'', // CPM (empty)
			'', // Bonus eligibility (empty)
			'', // Contract has changed? (empty)
			'', // Contract changed date (empty)
			'', // Total paid (empty)
			'', // Tier (empty)
			'', // Cap per video (empty)
			'', // Paid December (empty)
			'', // reffered? (empty)
			'', // Type (empty)
		]

		// Append row to sheet
		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: `${process.env.GOOGLE_SHEET_NAME}!A:O`, // A to O covers all 15 columns
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [row],
			},
		})

		return NextResponse.json({
			success: true,
			message: 'Agreement submitted successfully'
		})

	} catch (error) {
		console.error('Error submitting to Google Sheets:', error)
		return NextResponse.json(
			{ error: 'Failed to submit agreement', details: error.message },
			{ status: 500 }
		)
	}
}
