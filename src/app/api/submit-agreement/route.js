import { google } from 'googleapis'
import { NextResponse } from 'next/server'
import { generateAgreementPDF } from '../../../lib/generateAgreementPDF.js'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
	try {
		const body = await request.json()
		const { fullName, paypalUsername, tiktokUsername, discordUsername, date, signature } = body

		// Validate required fields
		if (!fullName || !paypalUsername || !discordUsername || !date) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			)
		}

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

		// Configure Google Auth for Sheets only
		let auth
		try {
			auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
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

		// Prepare row data in the exact order of columns in the Google Sheet
		// Column order: A=tiktok username, B=instagram username, C=discord username,
		//               D=deal type, E=cost/video, F=CPM, G=Bonus eligibility,
		//               H=Contract has changed?, I=Contract changed date, J=Total paid,
		//               K=Tier, L=Cap per video, M=Paid December, N=reffered?, O=Type, P=paypal,
		//               Q=Full Name, R=Date Signed, S=Signature
		const row = [
			tiktokUsername || '',        // A: tiktok username
			'',                          // B: instagram username (empty)
			discordUsername,             // C: discord username
			'CPM + UGC',                 // D: deal type
			'$12.50',                    // E: cost / video
			'$1.00',                     // F: CPM
			'no',                        // G: Bonus eligibility
			'no',                        // H: Contract has changed?
			'',                          // I: Contract changed date (empty)
			'',                          // J: Total paid (empty)
			'',                          // K: Tier (empty)
			'$200.00',                   // L: Cap per video
			'',                          // M: Paid December (empty)
			'',                          // N: reffered? (empty)
			'Voice-over',                // O: Type
			paypalUsername,              // P: paypal
			fullName,                    // Q: Full Name
			date,                        // R: Date Signed
			signature || '',             // S: Signature (base64 image data)
		]

		console.log('Row data to append:', row)

		// Append row to sheet
		let sheetResponse
		try {
			sheetResponse = await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: `${process.env.GOOGLE_SHEET_NAME}!A:S`, // A to S covers all 19 columns
				valueInputOption: 'USER_ENTERED',
				requestBody: {
					values: [row],
				},
			})

			console.log('Successfully appended row to Google Sheets:', sheetResponse.data)

			return NextResponse.json({
				success: true,
				message: 'Agreement submitted successfully'
			})

		} catch (sheetsError) {
			console.error('Error appending to Google Sheets:', sheetsError)
			console.error('Error details:', {
				message: sheetsError.message,
				code: sheetsError.code,
				response: sheetsError.response?.data,
			})

			// Provide more specific error messages
			let errorMessage = 'Failed to write to Google Sheets'
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
		console.error('Unexpected error in submit-agreement:', error)
		console.error('Error stack:', error.stack)
		return NextResponse.json(
			{ 
				error: 'Failed to submit agreement', 
				details: error.message,
				type: error.constructor.name,
			},
			{ status: 500 }
		)
	}
}
