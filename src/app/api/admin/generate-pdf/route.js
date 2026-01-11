import { NextResponse } from 'next/server'
import { generateAgreementPDF } from '../../../../lib/generateAgreementPDF.js'

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

		// Generate PDF
		const pdfBuffer = await generateAgreementPDF({
			fullName,
			paypalUsername,
			tiktokUsername,
			discordUsername,
			date,
		})

		// Return PDF as response
		return new NextResponse(pdfBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="UGC_Agreement_${fullName.replace(/\s+/g, '_')}_${date}.pdf"`,
			},
		})

	} catch (error) {
		console.error('Error generating PDF:', error)
		return NextResponse.json(
			{
				error: 'Failed to generate PDF',
				details: error.message,
			},
			{ status: 500 }
		)
	}
}
