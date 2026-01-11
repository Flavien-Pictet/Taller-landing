import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function generateAgreementPDF(formData) {
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595.28, 841.89]) // A4 size in points

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    const { width, height } = page.getSize()
    const margin = 50
    let yPosition = height - margin

    // Helper function to draw text
    const drawText = (text, options = {}) => {
        const {
            font = helvetica,
            size = 11,
            color = rgb(0, 0, 0),
            align = 'left',
            maxWidth = width - 2 * margin
        } = options

        const textWidth = font.widthOfTextAtSize(text, size)
        let x = margin

        if (align === 'center') {
            x = (width - textWidth) / 2
        }

        page.drawText(text, {
            x,
            y: yPosition,
            size,
            font,
            color,
        })

        yPosition -= size + 5
    }

    // Helper function to draw wrapped text
    const drawWrappedText = (text, options = {}) => {
        const {
            font = helvetica,
            size = 11,
            color = rgb(0, 0, 0),
            maxWidth = width - 2 * margin,
            lineHeight = size * 1.5
        } = options

        const words = text.split(' ')
        let line = ''

        for (const word of words) {
            const testLine = line + word + ' '
            const testWidth = font.widthOfTextAtSize(testLine, size)

            if (testWidth > maxWidth && line !== '') {
                page.drawText(line.trim(), {
                    x: margin,
                    y: yPosition,
                    size,
                    font,
                    color,
                })
                yPosition -= lineHeight
                line = word + ' '
            } else {
                line = testLine
            }
        }

        if (line.trim() !== '') {
            page.drawText(line.trim(), {
                x: margin,
                y: yPosition,
                size,
                font,
                color,
            })
            yPosition -= lineHeight
        }
    }

    // Helper function to draw bullet list
    const drawBulletList = (items, options = {}) => {
        const { font = helvetica, size = 11 } = options

        for (const item of items) {
            page.drawText('•', {
                x: margin + 10,
                y: yPosition,
                size,
                font,
            })

            const words = item.split(' ')
            let line = ''
            const bulletIndent = 25

            for (const word of words) {
                const testLine = line + word + ' '
                const testWidth = font.widthOfTextAtSize(testLine, size)

                if (testWidth > width - 2 * margin - bulletIndent && line !== '') {
                    page.drawText(line.trim(), {
                        x: margin + bulletIndent,
                        y: yPosition,
                        size,
                        font,
                    })
                    yPosition -= size * 1.5
                    line = word + ' '
                } else {
                    line = testLine
                }
            }

            if (line.trim() !== '') {
                page.drawText(line.trim(), {
                    x: margin + bulletIndent,
                    y: yPosition,
                    size,
                    font,
                })
                yPosition -= size * 1.5
            }
        }
    }

    // Title
    drawText('UGC CREATOR AGREEMENT', { font: helveticaBold, size: 24, align: 'center' })
    yPosition -= 20

    // Introduction
    drawWrappedText('This Agreement is made between Taller App ("Company") and the Creator identified below.')
    yPosition -= 10

    // Section 1: Scope of Work
    drawText('1. SCOPE OF WORK', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Creator agrees to produce User-Generated Content (UGC) for Company, including but not limited to:')
    yPosition -= 5
    drawBulletList([
        'Short-form video content (15-60 seconds)',
        'Voice-over narration for provided scripts',
        'Product demonstrations and reviews',
        'Social media content as specified by Company'
    ])
    yPosition -= 10

    // Section 2: Compensation
    drawText('2. COMPENSATION', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Company agrees to pay Creator according to the following structure:')
    yPosition -= 5
    drawBulletList([
        'Base Rate: $12.50 per video',
        'CPM Bonus: $1.00 per 1,000 views',
        'Maximum Cap: $200.00 per video (including CPM bonuses)',
        'Payment Method: PayPal to the provided username'
    ])
    yPosition -= 10

    // Section 3: Content Rights
    drawText('3. CONTENT RIGHTS AND LICENSE', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Creator grants Company:')
    yPosition -= 5
    drawBulletList([
        'Exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute all created content',
        'Right to use Creator\'s name, likeness, and voice in connection with the content',
        'Right to use content across all media platforms and formats',
        'Right to edit, modify, or adapt content as needed'
    ])
    yPosition -= 10

    // Section 4: Creator Obligations
    drawText('4. CREATOR OBLIGATIONS', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Creator agrees to:')
    yPosition -= 5
    drawBulletList([
        'Deliver content within agreed-upon timelines',
        'Ensure all content is original and does not infringe on third-party rights',
        'Follow Company\'s brand guidelines and content specifications',
        'Make reasonable revisions as requested by Company',
        'Maintain confidentiality regarding Company information'
    ])
    yPosition -= 10

    // Section 5: Payment Terms
    drawText('5. PAYMENT TERMS', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Payment schedule and conditions:')
    yPosition -= 5
    drawBulletList([
        'Base payment ($12.50) will be processed within 30 days of content approval',
        'CPM bonuses calculated and paid monthly based on verified view counts',
        'All payments made via PayPal to the provided username',
        'Creator responsible for any applicable taxes'
    ])
    yPosition -= 10

    // Section 6: Termination
    drawText('6. TERMINATION', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawWrappedText('Either party may terminate this agreement with 7 days written notice. Upon termination, Creator will be paid for all completed and approved work. Company retains all rights to previously created content.')
    yPosition -= 15

    // Creator Information
    drawText('CREATOR INFORMATION', { font: helveticaBold, size: 14 })
    yPosition -= 5
    drawText(`Full Name: ${formData.fullName}`)
    drawText(`PayPal Username: ${formData.paypalUsername}`)
    if (formData.tiktokUsername) {
        drawText(`TikTok Username: ${formData.tiktokUsername}`)
    }
    drawText(`Discord Username: ${formData.discordUsername}`)
    drawText(`Date Signed: ${formData.date}`)
    yPosition -= 15

    // Signature section
    drawWrappedText('By submitting this form, Creator acknowledges that they have read, understood, and agree to be bound by the terms of this Agreement.', { size: 10 })
    yPosition -= 10

    // Footer
    const generatedDate = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    drawText(`Document generated on: ${generatedDate}`, { size: 9, align: 'center' })

    const pdfBytes = await pdfDoc.save()
    return Buffer.from(pdfBytes)
}
