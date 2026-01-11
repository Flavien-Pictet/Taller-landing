import { NextResponse } from 'next/server'
import { jsPDF } from 'jspdf'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
	try {
		const body = await request.json()
		const { fullName, paypalUsername, tiktokUsername, discordUsername, date, signature } = body

		console.log('Generating PDF for:', { fullName, date, hasSignature: !!signature })

		// Validate required fields
		if (!fullName || !paypalUsername || !discordUsername || !date) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			)
		}

		// Generate PDF using jsPDF (same as frontend)
		const doc = new jsPDF()
		const pageWidth = doc.internal.pageSize.getWidth()
		const margin = 20
		const contentWidth = pageWidth - 2 * margin
		let yPos = 20

		// Title
		doc.setFontSize(16)
		doc.setFont('times', 'bold')
		doc.text('TALLER APP - UGC AGREEMENT', pageWidth / 2, yPos, { align: 'center' })
		yPos += 12

		// Section I - PARTIES
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const partiesTitle = 'I. PARTIES: '
		const partiesTitleWidth = doc.getTextWidth(partiesTitle)
		doc.text(partiesTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const partiesText = `This agreement ("Contract") is between Asymmetric Labs FZC (the "Advertiser") and the content creator `

		doc.text(partiesText, margin + partiesTitleWidth, yPos)

		const partiesTextWidth = doc.getTextWidth(partiesText)
		let nameX = margin + partiesTitleWidth + partiesTextWidth

		doc.setFont('times', 'bold')
		const nameWidth = doc.getTextWidth(fullName)
		const nameUnderlineWidth = Math.max(nameWidth, 40)
		doc.setFont('times', 'normal')
		const remainingText = ' (the "Creator").'
		const remainingWidth = doc.getTextWidth(remainingText)

		const totalRemainingWidth = nameUnderlineWidth + remainingWidth
		const availableWidth = contentWidth - (nameX - margin)

		if (totalRemainingWidth > availableWidth) {
			yPos += 5
			nameX = margin
		}

		doc.setFont('times', 'bold')
		doc.text(fullName, nameX, yPos)
		doc.line(nameX, yPos + 1, nameX + nameUnderlineWidth, yPos + 1)

		doc.setFont('times', 'normal')
		doc.text(remainingText, nameX + nameUnderlineWidth, yPos)

		yPos += 10

		// PayPal, TikTok and Discord usernames
		doc.setFont('times', 'bold')
		const paypalLabel = 'PayPal username: '
		doc.text(paypalLabel, margin, yPos)
		const paypalX = margin + doc.getTextWidth(paypalLabel)
		doc.setFont('times', 'normal')
		doc.text(paypalUsername, paypalX, yPos)
		const paypalUnderlineWidth = Math.max(doc.getTextWidth(paypalUsername), 50)
		doc.line(paypalX, yPos + 1, paypalX + paypalUnderlineWidth, yPos + 1)
		yPos += 8

		doc.setFont('times', 'bold')
		const tiktokLabel = 'TikTok username: '
		doc.text(tiktokLabel, margin, yPos)
		const tiktokX = margin + doc.getTextWidth(tiktokLabel)
		doc.setFont('times', 'normal')
		doc.text(tiktokUsername, tiktokX, yPos)
		const tiktokUnderlineWidth = Math.max(doc.getTextWidth(tiktokUsername), 50)
		doc.line(tiktokX, yPos + 1, tiktokX + tiktokUnderlineWidth, yPos + 1)
		yPos += 8

		doc.setFont('times', 'bold')
		const discordLabel = 'Discord username: '
		doc.text(discordLabel, margin, yPos)
		const discordX = margin + doc.getTextWidth(discordLabel)
		doc.setFont('times', 'normal')
		doc.text(discordUsername, discordX, yPos)
		const discordUnderlineWidth = Math.max(doc.getTextWidth(discordUsername), 50)
		doc.line(discordX, yPos + 1, discordX + discordUnderlineWidth, yPos + 1)
		yPos += 10

		// Section II - TERM
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const termTitle = 'II. TERM: '
		const termTitleWidth = doc.getTextWidth(termTitle)
		doc.text(termTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const termText = 'This Contract is ongoing and can be terminated by either party with a 3-day notice.'
		const termLines = doc.splitTextToSize(termText, contentWidth - termTitleWidth)
		doc.text(termLines[0], margin + termTitleWidth, yPos)

		if (termLines.length > 1) {
			yPos += 5
			for (let i = 1; i < termLines.length; i++) {
				doc.text(termLines[i], margin, yPos)
				yPos += 5
			}
		}
		yPos += 8

		// Section III - CONTENT REQUIREMENTS
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const contentTitle = 'III. CONTENT REQUIREMENTS: '
		const contentTitleWidth = doc.getTextWidth(contentTitle)
		doc.text(contentTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const contentReqText = 'The Creator agrees to post User-Generated Content (UGC) for Taller by replicating two recommended formats provided.'
		const contentReqLines = doc.splitTextToSize(contentReqText, contentWidth - contentTitleWidth)
		doc.text(contentReqLines[0], margin + contentTitleWidth, yPos)

		if (contentReqLines.length > 1) {
			yPos += 5
			for (let i = 1; i < contentReqLines.length; i++) {
				doc.text(contentReqLines[i], margin, yPos)
				yPos += 5
			}
		}
		yPos += 8

		// Section IV - PAYMENT
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const paymentTitle = 'IV. PAYMENT: '
		const paymentTitleWidth = doc.getTextWidth(paymentTitle)
		doc.text(paymentTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const paymentText1 = ' The Advertiser pays the Creator $12.5 per video, with a monthly cap of 75 posts, meaning the monthly retainer can go up to $940. There\'s a $0.60 CPM on every 1,000 views generated, capped at $200 per video. The first 10,000 views per video are not eligible for the CPM; only views above that count. The creator may cross-post the same video on Instagram & YouTube shorts and earn a $0.50 CPM capped at $200 per video, allowing up to 225 uploads per month. All Instagram/YouTube views are eligible for this CPM. The $12.5 retainer applies only to TikTok.'

		const paymentLines1 = doc.splitTextToSize(paymentText1, contentWidth - paymentTitleWidth)
		doc.text(paymentLines1[0], margin + paymentTitleWidth, yPos)

		if (paymentLines1.length > 1) {
			yPos += 5
			for (let i = 1; i < paymentLines1.length; i++) {
				doc.text(paymentLines1[i], margin, yPos)
				yPos += 5
			}
		}

		yPos += 3

		const paymentText2 = 'Payments are made between the 1st and 4th of each month. Payouts are based on views generated in the previous month. Only views generated during the same calendar month in which a video is originally posted will be eligible for payout. For example, if a video is published on July 21st, only views accrued from July 21st through July 31st will be counted. Views from subsequent months for that same video will not be considered for payment.'

		const paymentLines2 = doc.splitTextToSize(paymentText2, contentWidth)
		paymentLines2.forEach(line => {
			doc.text(line, margin, yPos)
			yPos += 5
		})
		yPos += 3

		// Section V - HIGH PERFORMANCE VIEWS BONUS
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const bonusTitle = 'V. HIGH PERFORMANCE VIEWS BONUS: '
		const bonusTitleWidth = doc.getTextWidth(bonusTitle)
		doc.text(bonusTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const bonusText = 'If a creator publishes a video that exceeds 1,000,000 views, they will receive a one-time bonus payment of USD 100 for that video.'
		const bonusLines = doc.splitTextToSize(bonusText, contentWidth - bonusTitleWidth)
		doc.text(bonusLines[0], margin + bonusTitleWidth, yPos)

		if (bonusLines.length > 1) {
			yPos += 5
			for (let i = 1; i < bonusLines.length; i++) {
				doc.text(bonusLines[i], margin, yPos)
				yPos += 5
			}
		}
		yPos += 8

		// Section VI - INTELLECTUAL PROPERTY
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const ipTitle = 'VI. INTELLECTUAL PROPERTY & USAGE RIGHTS: '
		const ipTitleWidth = doc.getTextWidth(ipTitle)
		doc.text(ipTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const ipText = 'The Creator grants the Advertiser a perpetual, worldwide, royalty-free license to use, reproduce, modify, and distribute any content created under this Contract for any commercial or promotional purpose.'

		const firstLineMaxWidth = contentWidth - ipTitleWidth
		const words = ipText.split(' ')
		let firstLine = ''
		let ipRemainingText = ipText

		for (let i = 0; i < words.length; i++) {
			const testLine = words.slice(0, i + 1).join(' ')
			if (doc.getTextWidth(testLine) <= firstLineMaxWidth) {
				firstLine = testLine
				ipRemainingText = words.slice(i + 1).join(' ')
			} else {
				break
			}
		}

		doc.text(firstLine, margin + ipTitleWidth, yPos)
		yPos += 5

		if (ipRemainingText) {
			const remainingLines = doc.splitTextToSize(ipRemainingText, contentWidth)
			remainingLines.forEach(line => {
				doc.text(line, margin, yPos)
				yPos += 5
			})
		}
		yPos += 22

		// Signatures section
		doc.setFont('times', 'normal')
		doc.setFontSize(10)
		doc.text('Company: Asymmetric Labs FZC', margin, yPos)
		yPos += 10

		const leftCol = margin
		const rightCol = pageWidth / 2 + 10

		doc.text("Advertiser's Signature:", leftCol, yPos)
		const advertiserSigY = yPos + 6

		doc.text("Creator's Signature:", rightCol, yPos)
		const creatorSigY = yPos + 6

		// Add advertiser signature
		try {
			const advertiserSigPath = path.join(process.cwd(), 'public', 'images', 'signature.png')
			console.log('Looking for advertiser signature at:', advertiserSigPath)

			if (!fs.existsSync(advertiserSigPath)) {
				console.error('Advertiser signature file not found at:', advertiserSigPath)
			} else {
				const advertiserSigData = fs.readFileSync(advertiserSigPath)
				const advertiserSigBase64 = `data:image/png;base64,${advertiserSigData.toString('base64')}`
				const sigWidth = 25
				const sigHeight = sigWidth / 0.91
				doc.addImage(advertiserSigBase64, 'PNG', leftCol, advertiserSigY, sigWidth, sigHeight)
				console.log('Advertiser signature added successfully')
			}
		} catch (error) {
			console.error('Error adding advertiser signature:', error)
		}

		// Add creator signature if available
		if (signature) {
			try {
				console.log('Adding creator signature (length:', signature.length, ')')
				// Use same dimensions as frontend for consistency
				const sigWidth = 35
				const sigHeight = 15
				doc.addImage(signature, 'PNG', rightCol, creatorSigY, sigWidth, sigHeight)
				console.log('Creator signature added successfully')
			} catch (error) {
				console.error('Error adding creator signature:', error)
			}
		} else {
			console.log('No creator signature provided')
		}

		yPos += 40

		// Date
		doc.text('Date: ', leftCol, yPos)
		const dateX = leftCol + doc.getTextWidth('Date: ')
		doc.setFont('times', 'bold')
		doc.text(date, dateX, yPos)
		const dateUnderlineWidth = Math.max(doc.getTextWidth(date), 35)
		doc.line(dateX, yPos + 1, dateX + dateUnderlineWidth, yPos + 1)

		// Get PDF as buffer
		console.log('PDF generation complete, creating buffer...')
		const pdfBuffer = Buffer.from(doc.output('arraybuffer'))
		console.log('PDF buffer size:', pdfBuffer.length, 'bytes')

		// Return PDF as response
		return new NextResponse(pdfBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="Taller_Agreement_${fullName.replace(/\s+/g, '_')}_${date}.pdf"`,
			},
		})

	} catch (error) {
		console.error('Error generating PDF:', error)
		console.error('Error stack:', error.stack)
		return NextResponse.json(
			{
				error: 'Failed to generate PDF',
				details: error.message,
				stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
			},
			{ status: 500 }
		)
	}
}
