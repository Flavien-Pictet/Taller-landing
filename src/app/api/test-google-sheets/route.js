import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function GET(request) {
	const testResults = {
		envVars: {},
		auth: null,
		sheetAccess: null,
		writeTest: null,
		timestamp: new Date().toISOString(),
	}

	try {
		// Test 1: Check environment variables
		testResults.envVars = {
			GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
			GOOGLE_SHEET_ID: !!process.env.GOOGLE_SHEET_ID,
			GOOGLE_SHEET_NAME: !!process.env.GOOGLE_SHEET_NAME,
		}

		const missingVars = Object.entries(testResults.envVars)
			.filter(([key, value]) => !value)
			.map(([key]) => key)

		if (missingVars.length > 0) {
			return NextResponse.json({
				success: false,
				error: 'Missing environment variables',
				missing: missingVars,
				details: testResults,
			}, { status: 400 })
		}

		// Test 2: Test authentication
		try {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
			})

			const authClient = await auth.getClient()
			testResults.auth = {
				success: true,
				email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			}
		} catch (error) {
			testResults.auth = {
				success: false,
				error: error.message,
			}
			return NextResponse.json({
				success: false,
				error: 'Authentication failed',
				details: testResults,
			}, { status: 401 })
		}

		// Test 3: Test sheet access (read)
		try {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
			})

			const sheets = google.sheets({ version: 'v4', auth })

			// Try to read the first row to verify access
			const readResponse = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: `${process.env.GOOGLE_SHEET_NAME}!A1:O1`,
			})

			testResults.sheetAccess = {
				success: true,
				sheetName: process.env.GOOGLE_SHEET_NAME,
				sheetId: process.env.GOOGLE_SHEET_ID,
				headerRow: readResponse.data.values?.[0] || [],
			}
		} catch (error) {
			testResults.sheetAccess = {
				success: false,
				error: error.message,
			}
			return NextResponse.json({
				success: false,
				error: 'Sheet access failed',
				details: testResults,
			}, { status: 403 })
		}

		// Test 4: Test write capability (append a test row)
		try {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
			})

			const sheets = google.sheets({ version: 'v4', auth })

			const testRow = [
				'[TEST]',
				'',
				'[TEST]',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
			]

			const writeResponse = await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: `${process.env.GOOGLE_SHEET_NAME}!A:O`,
				valueInputOption: 'USER_ENTERED',
				requestBody: {
					values: [testRow],
				},
			})

			testResults.writeTest = {
				success: true,
				updatedRange: writeResponse.data.updates?.updatedRange,
				updatedRows: writeResponse.data.updates?.updatedRows,
			}
		} catch (error) {
			testResults.writeTest = {
				success: false,
				error: error.message,
			}
			return NextResponse.json({
				success: false,
				error: 'Write test failed',
				details: testResults,
			}, { status: 500 })
		}

		// All tests passed
		return NextResponse.json({
			success: true,
			message: 'All tests passed! Google Sheets connection is working.',
			details: testResults,
		})

	} catch (error) {
		return NextResponse.json({
			success: false,
			error: 'Unexpected error',
			message: error.message,
			details: testResults,
		}, { status: 500 })
	}
}

