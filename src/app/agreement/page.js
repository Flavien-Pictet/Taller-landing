'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NextImage from 'next/image'
import jsPDF from 'jspdf'
import { useSearchParams } from 'next/navigation'
import { getContractConfig } from '../../lib/contractConfig'

function SignaturePad({ value, onChange, onClear, isFrench = false }) {
	const canvasRef = useRef(null)
	const [isDrawing, setIsDrawing] = useState(false)
	const [hasSignature, setHasSignature] = useState(false)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.strokeStyle = '#1a1a1a'
		ctx.lineWidth = 2.5
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'

		// Set canvas size
		const rect = canvas.getBoundingClientRect()
		canvas.width = rect.width * window.devicePixelRatio
		canvas.height = rect.height * window.devicePixelRatio
		ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

		// Load existing signature if any
		if (value) {
			const img = new Image()
			img.onload = () => {
				ctx.drawImage(img, 0, 0, rect.width, rect.height)
				setHasSignature(true)
			}
			img.src = value
		}
	}, [value])

	const getCoordinates = (e) => {
		const canvas = canvasRef.current
		if (!canvas) return null

		const rect = canvas.getBoundingClientRect()

		let clientX, clientY

		if (e.touches && e.touches.length > 0) {
			clientX = e.touches[0].clientX
			clientY = e.touches[0].clientY
		} else if (e.changedTouches && e.changedTouches.length > 0) {
			clientX = e.changedTouches[0].clientX
			clientY = e.changedTouches[0].clientY
		} else {
			clientX = e.clientX
			clientY = e.clientY
		}

		// Ensure we have valid coordinates
		if (clientX === undefined || clientY === undefined || isNaN(clientX) || isNaN(clientY)) return null

		return {
			x: clientX - rect.left,
			y: clientY - rect.top,
		}
	}

	const startDrawing = (e) => {
		if (e.cancelable) e.preventDefault()
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const coords = getCoordinates(e)
		if (!coords) return

		setIsDrawing(true)
		ctx.beginPath()
		ctx.moveTo(coords.x, coords.y)
	}

	const draw = (e) => {
		if (!isDrawing) return
		if (e.cancelable) e.preventDefault()

		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const coords = getCoordinates(e)
		if (!coords) return

		ctx.lineTo(coords.x, coords.y)
		ctx.stroke()
		setHasSignature(true)
	}

	const stopDrawing = (e) => {
		if (e && e.cancelable) e.preventDefault()
		if (isDrawing) {
			setIsDrawing(false)
			const canvas = canvasRef.current
			if (!canvas) return

			const dataURL = canvas.toDataURL('image/png')
			onChange(dataURL)
		}
	}

	const handleClear = () => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		setHasSignature(false)
		onChange('')
		onClear()
	}

	return (
		<div className="w-full">
			<div className="relative rounded-md border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-gray-400">
				<canvas
					ref={canvasRef}
					className="w-full h-32 cursor-crosshair touch-none rounded-md"
					onMouseDown={startDrawing}
					onMouseMove={draw}
					onMouseUp={stopDrawing}
					onMouseLeave={stopDrawing}
					onTouchStart={startDrawing}
					onTouchMove={draw}
					onTouchEnd={stopDrawing}
					onTouchCancel={stopDrawing}
				/>
				<AnimatePresence>
					{hasSignature && (
						<motion.button
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							type="button"
							onClick={handleClear}
							className="absolute top-2 right-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all"
						>
							{isFrench ? 'Effacer' : 'Clear'}
						</motion.button>
					)}
				</AnimatePresence>
			</div>
			{!hasSignature && (
				<p className="mt-2 text-xs text-gray-500 text-center">
					{isFrench ? 'Signez ci-dessus avec votre souris ou tactile' : 'Sign above with your mouse or touch'}
				</p>
			)}
		</div>
	)
}

function FormField({ label, name, type = 'text', value, onChange, required = false, placeholder, error, onEnter, inputRef, autoComplete = 'off', helperText }) {
	const [isFocused, setIsFocused] = useState(false)

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && onEnter) {
			e.preventDefault()
			onEnter()
		}
	}

	return (
		<div className="space-y-1.5">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{label}
				{required && <span className="text-red-500 ml-0.5">*</span>}
			</label>
			{helperText && (
				<p className="text-xs text-gray-500 -mt-0.5 mb-1.5">{helperText}</p>
			)}
			<div className="relative">
				<input
					ref={inputRef}
					type={type}
					id={name}
					name={name}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onKeyDown={handleKeyDown}
					required={required}
					placeholder={placeholder}
					autoComplete={autoComplete}
					inputMode={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'text'}
					className={`w-full px-4 py-2.5 text-sm text-gray-900 border rounded-md transition-all duration-200 ${
						error
							? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500'
							: isFocused
							? 'border-blue-500 bg-white focus:ring-2 focus:ring-blue-500/20'
							: 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
					} outline-none placeholder:text-gray-400 ${type === 'date' ? 'appearance-none' : ''}`}
					style={type === 'date' ? {
						WebkitAppearance: 'none',
						MozAppearance: 'textfield',
						textAlign: 'left'
					} : undefined}
				/>
			</div>
			{error && <p className="text-xs text-red-600">{error}</p>}
		</div>
	)
}

function AgreementPageContent() {
	// Get contract type and language from URL
	const searchParams = useSearchParams()
	const contractType = searchParams.get('type') || 'default'
	const lang = searchParams.get('lang') || 'en'
	const isFrench = lang === 'fr'
	const contract = getContractConfig(contractType)

	const [formData, setFormData] = useState({
		fullName: '',
		paypalUsername: '',
		tiktokUsername: '',
		discordUsername: '',
		signature: '',
		date: new Date().toISOString().split('T')[0],
		contractType, // Store contract type in form data
	})

	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	// Create refs for each input field
	const fullNameRef = useRef(null)
	const paypalRef = useRef(null)
	const tiktokRef = useRef(null)
	const discordRef = useRef(null)
	const dateRef = useRef(null)

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }))
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: '' }))
		}
	}

	const handleSignatureChange = (signature) => {
		setFormData((prev) => ({ ...prev, signature }))
		if (errors.signature) {
			setErrors((prev) => ({ ...prev, signature: '' }))
		}
	}

	const validateForm = () => {
		const newErrors = {}
		if (!formData.fullName.trim()) newErrors.fullName = isFrench ? 'Le nom complet est requis' : 'Full name is required'
		if (!formData.paypalUsername.trim()) newErrors.paypalUsername = isFrench ? 'L\'email de paiement est requis' : 'Payout email is required'
		if (!formData.discordUsername.trim()) newErrors.discordUsername = isFrench ? 'Le nom d\'utilisateur Discord est requis' : 'Discord username is required'
		if (!formData.signature) newErrors.signature = isFrench ? 'La signature est requise' : 'Signature is required'
		if (!formData.date) newErrors.date = isFrench ? 'La date est requise' : 'Date is required'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const generatePDF = async () => {
		const doc = new jsPDF()
		const pageWidth = doc.internal.pageSize.getWidth()
		const margin = 20
		const contentWidth = pageWidth - 2 * margin
		let yPos = 20

		// Title
		doc.setFontSize(16)
		doc.setFont('times', 'bold')
		doc.text(isFrench ? 'TALLER APP - CONTRAT UGC' : 'TALLER APP - UGC AGREEMENT', pageWidth / 2, yPos, { align: 'center' })
		yPos += 12

		// Section I - PARTIES
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const partiesTitle = isFrench ? 'I. PARTIES : ' : 'I. PARTIES: '
		const partiesTitleWidth = doc.getTextWidth(partiesTitle)
		doc.text(partiesTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const partiesText = isFrench 
			? `Ce contrat ("Contrat") est conclu entre Asymmetric Labs FZC (l'"Annonceur") et le createur de contenu `
			: `This agreement ("Contract") is between Asymmetric Labs FZC (the "Advertiser") and the content creator `

		// Write first part of text
		doc.text(partiesText, margin + partiesTitleWidth, yPos)

		// Calculate position for name
		const partiesTextWidth = doc.getTextWidth(partiesText)
		let nameX = margin + partiesTitleWidth + partiesTextWidth

		// Check if we need to wrap to next line
		doc.setFont('times', 'bold')
		const nameWidth = doc.getTextWidth(formData.fullName)
		const nameUnderlineWidth = Math.max(nameWidth, 40)
		doc.setFont('times', 'normal')
		const remainingText = ' (the "Creator").'
		const remainingWidth = doc.getTextWidth(remainingText)

		const totalRemainingWidth = nameUnderlineWidth + remainingWidth
		const availableWidth = contentWidth - (nameX - margin)

		if (totalRemainingWidth > availableWidth) {
			// Move to next line
			yPos += 5
			nameX = margin
		}

		// Write name with underline
		doc.setFont('times', 'bold')
		doc.text(formData.fullName, nameX, yPos)
		doc.line(nameX, yPos + 1, nameX + nameUnderlineWidth, yPos + 1)

		// Write remaining text
		doc.setFont('times', 'normal')
		const remainingTextFinal = isFrench ? ' (le "Createur").' : remainingText
		doc.text(remainingTextFinal, nameX + nameUnderlineWidth, yPos)

		yPos += 10

		// PayPal, TikTok and Discord usernames
		doc.setFont('times', 'bold')
		const paypalLabel = isFrench ? 'Email de paiement : ' : 'Payout Email: '
		doc.text(paypalLabel, margin, yPos)
		const paypalX = margin + doc.getTextWidth(paypalLabel)
		doc.setFont('times', 'normal')
		doc.text(formData.paypalUsername, paypalX, yPos)
		const paypalUnderlineWidth = Math.max(doc.getTextWidth(formData.paypalUsername), 50)
		doc.line(paypalX, yPos + 1, paypalX + paypalUnderlineWidth, yPos + 1)
		yPos += 8

		doc.setFont('times', 'bold')
		const tiktokLabel = isFrench ? 'Nom d\'utilisateur TikTok : ' : 'TikTok username: '
		doc.text(tiktokLabel, margin, yPos)
		const tiktokX = margin + doc.getTextWidth(tiktokLabel)
		doc.setFont('times', 'normal')
		doc.text(formData.tiktokUsername, tiktokX, yPos)
		const tiktokUnderlineWidth = Math.max(doc.getTextWidth(formData.tiktokUsername), 50)
		doc.line(tiktokX, yPos + 1, tiktokX + tiktokUnderlineWidth, yPos + 1)
		yPos += 8

		doc.setFont('times', 'bold')
		const discordLabel = isFrench ? 'Nom d\'utilisateur Discord : ' : 'Discord username: '
		doc.text(discordLabel, margin, yPos)
		const discordX = margin + doc.getTextWidth(discordLabel)
		doc.setFont('times', 'normal')
		doc.text(formData.discordUsername, discordX, yPos)
		const discordUnderlineWidth = Math.max(doc.getTextWidth(formData.discordUsername), 50)
		doc.line(discordX, yPos + 1, discordX + discordUnderlineWidth, yPos + 1)
		yPos += 10

		// Section II - TERM
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const termTitle = isFrench ? 'II. DUREE : ' : 'II. TERM: '
		const termTitleWidth = doc.getTextWidth(termTitle)
		doc.text(termTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const termText = isFrench 
			? 'Le contrat est en cours et peut etre resilie par l\'une ou l\'autre partie avec un preavis de 3 jours.'
			: 'This Contract is ongoing and can be terminated by either party with a 3-day notice.'
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
		const contentTitle = isFrench ? 'III. EXIGENCES DE CONTENU : ' : 'III. CONTENT REQUIREMENTS: '
		const contentTitleWidth = doc.getTextWidth(contentTitle)
		doc.text(contentTitle, margin, yPos)

		doc.setFont('times', 'normal')
		const contentReqText = isFrench 
			? 'Le Createur s\'engage a publier du Contenu Genere par l\'Utilisateur (UGC) pour Taller en repliquant deux formats recommandes fournis.'
			: 'The Creator agrees to post User-Generated Content (UGC) for Taller by replicating two recommended formats provided.'
		const contentReqLines = doc.splitTextToSize(contentReqText, contentWidth - contentTitleWidth)
		doc.text(contentReqLines[0], margin + contentTitleWidth, yPos)

		if (contentReqLines.length > 1) {
			yPos += 5
			for (let i = 1; i < contentReqLines.length; i++) {
				doc.text(contentReqLines[i], margin, yPos)
				yPos += 5
			}
		}
		yPos += 5

		if (contract.retainer > 0) {
			const dailyCapText = isFrench
				? 'Le Createur s\'engage a publier un maximum de 2 videos par jour pour Taller. Publier plus de 2 videos en une seule journee n\'est pas autorise selon cet accord. Comme la cross-publication sur Instagram est autorisee, cela equivaut effectivement a un maximum de 4 publications par jour sur les deux plateformes.'
				: 'The Creator agrees to post a maximum of 2 videos per day for Taller. Posting more than 2 videos in a single day is not permitted under this agreement. As cross-posting on Instagram is allowed, this effectively equals up to 4 uploads per day across both platforms.'
			const dailyCapLines = doc.splitTextToSize(dailyCapText, contentWidth)
			for (let i = 0; i < dailyCapLines.length; i++) {
				doc.text(dailyCapLines[i], margin, yPos)
				yPos += 5
			}
		}
		yPos += 3

		// Section IV - PAYMENT
		doc.setFontSize(10)
		doc.setFont('times', 'bold')
		const paymentTitle = isFrench ? 'IV. PAIEMENT : ' : 'IV. PAYMENT: '
		const paymentTitleWidth = doc.getTextWidth(paymentTitle)
		doc.text(paymentTitle, margin, yPos)

		doc.setFont('times', 'normal')
		// First paragraph - Use dynamic contract config with French translation
		const paymentText1 = isFrench
			? ' L\'Annonceur paie le Createur 10EUR par video, avec un plafond mensuel de 60 publications, ce qui signifie que l\'acompte mensuel peut aller jusqu\'a 600EUR. Il y a un 0,50EUR CPM pour chaque 1 000 vues generees, plafonne a 150EUR par video. Les premieres 10 000 vues par video ne sont pas eligibles au CPM ; seules les vues au-dessus de ce seuil comptent. Le createur peut republier la meme video sur Instagram et gagner un 0,50EUR CPM plafonne a 150EUR par video, permettant jusqu\'a 120 publications par mois. Toutes les vues sous le plafond de 150EUR sont eligibles sur Instagram. L\'acompte de 10EUR s\'applique uniquement a TikTok.'
			: ' ' + contract.paymentText

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

		// Second paragraph
		const paymentText2 = isFrench
			? 'Les paiements sont effectues entre le 1er et le 4 de chaque mois. Les paiements sont bases sur les vues generees le mois precedent. Seules les vues generees pendant le meme mois calendaire ou une video est initialement publiee seront eligibles au paiement. Par exemple, si une video est publiee le 21 juillet, seules les vues accumulees du 21 au 31 juillet seront comptabilisees. Les vues des mois suivants pour cette meme video ne seront pas prises en compte pour le paiement.'
			: 'Payments are made between the 1st and 4th of each month. Payouts are based on views generated in the previous month. Only views generated during the same calendar month in which a video is originally posted will be eligible for payout. For example, if a video is published on July 21st, only views accrued from July 21st through July 31st will be counted. Views from subsequent months for that same video will not be considered for payment.'

		const paymentLines2 = doc.splitTextToSize(paymentText2, contentWidth)
		paymentLines2.forEach(line => {
			doc.text(line, margin, yPos)
			yPos += 5
		})
		yPos += 3

		// Section V - HIGH PERFORMANCE VIEWS BONUS (Only for English version)
		if (!isFrench) {
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
		}

		// Section VI - INTELLECTUAL PROPERTY (Only for English version)
		if (!isFrench) {
			doc.setFontSize(10)
			doc.setFont('times', 'bold')
			const ipTitle = 'VI. INTELLECTUAL PROPERTY & USAGE RIGHTS: '
			const ipTitleWidth = doc.getTextWidth(ipTitle)
			doc.text(ipTitle, margin, yPos)

			doc.setFont('times', 'normal')
			const ipText = 'The Creator grants the Advertiser a perpetual, worldwide, royalty-free license to use, reproduce, modify, and distribute any content created under this Contract for any commercial or promotional purpose.'

			// Split text considering full width for better wrapping
			const firstLineMaxWidth = contentWidth - ipTitleWidth
			const words = ipText.split(' ')
			let firstLine = ''
			let ipRemainingText = ipText

			// Build first line that fits after title
			for (let i = 0; i < words.length; i++) {
				const testLine = words.slice(0, i + 1).join(' ')
				if (doc.getTextWidth(testLine) <= firstLineMaxWidth) {
					firstLine = testLine
					ipRemainingText = words.slice(i + 1).join(' ')
				} else {
					break
				}
			}

			// Write first line next to title
			doc.text(firstLine, margin + ipTitleWidth, yPos)
			yPos += 5

			// Write remaining text using full width
			if (ipRemainingText) {
				const remainingLines = doc.splitTextToSize(ipRemainingText, contentWidth)
				remainingLines.forEach(line => {
					doc.text(line, margin, yPos)
					yPos += 5
				})
			}
			yPos += 22
		} else {
			yPos += 15
		}

		// Signatures section
		doc.setFont('times', 'normal')
		doc.setFontSize(10)
		doc.text(isFrench ? 'Entreprise : Asymmetric Labs FZC' : 'Company: Asymmetric Labs FZC', margin, yPos)
		yPos += 10

		// Two columns for signatures
		const leftCol = margin
		const rightCol = pageWidth / 2 + 10

		// Advertiser signature (left)
		doc.text(isFrench ? "Signature de l'Annonceur :" : "Advertiser's Signature:", leftCol, yPos)
		const advertiserSigY = yPos + 6

		// Creator signature (right)
		doc.text(isFrench ? "Signature du Createur :" : "Creator's Signature:", rightCol, yPos)
		const creatorSigY = yPos + 6

		// Load and add advertiser signature image
		try {
			const advertiserSigImg = await new Promise((resolve, reject) => {
				const img = new Image()
				img.crossOrigin = 'anonymous'
				img.onload = () => resolve(img)
				img.onerror = reject
				img.src = '/images/signature.png'
			})
			// Smaller signature dimensions
			const sigWidth = 20  // Reduced from 25 to 20
			const sigHeight = sigWidth / 0.91
			doc.addImage(advertiserSigImg, 'PNG', leftCol, advertiserSigY, sigWidth, sigHeight)
		} catch (error) {
			console.error('Error loading advertiser signature:', error)
		}

		// Add creator signature
		if (formData.signature) {
			try {
				const sigWidth = 25
				const sigHeight = sigWidth / 0.91
				doc.addImage(formData.signature, 'PNG', rightCol, creatorSigY, sigWidth, sigHeight)
			} catch (error) {
				console.error('Error adding creator signature:', error)
			}
		}

		yPos += 40

		// Date
		const dateLabel = isFrench ? 'Date : ' : 'Date: '
		doc.text(dateLabel, leftCol, yPos)
		const dateX = leftCol + doc.getTextWidth(dateLabel)
		doc.setFont('times', 'bold')
		doc.text(formData.date, dateX, yPos)
		const dateUnderlineWidth = Math.max(doc.getTextWidth(formData.date), 35)
		doc.line(dateX, yPos + 1, dateX + dateUnderlineWidth, yPos + 1)

		// Save PDF
		const filename = isFrench 
			? `Taller_Contrat_${formData.fullName.replace(/\s+/g, '_')}_${formData.date}.pdf`
			: `Taller_Agreement_${formData.fullName.replace(/\s+/g, '_')}_${formData.date}.pdf`

		// Check if on mobile device and Web Share API is available
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

		if (isMobile && navigator.share && navigator.canShare) {
			try {
				// Get PDF as blob
				const pdfBlob = doc.output('blob')

				// Create file from blob
				const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' })

				// Check if we can share this file
				if (navigator.canShare({ files: [pdfFile] })) {
					await navigator.share({
						files: [pdfFile],
						title: isFrench ? 'Contrat Taller' : 'Taller Agreement',
						text: isFrench ? 'Votre contrat UGC signe' : 'Your signed UGC agreement'
					})
					return // Exit after successful share
				}
			} catch (error) {
				console.error('Error sharing PDF:', error)
				// Fall back to regular download if sharing fails
			}
		}

		// Default download behavior for desktop or if sharing not available
		doc.save(filename)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)
		setSubmitStatus(null)

		try {
			// Submit to backend API
			const response = await fetch('/api/submit-agreement', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fullName: formData.fullName,
					paypalUsername: formData.paypalUsername,
					tiktokUsername: formData.tiktokUsername,
					discordUsername: formData.discordUsername,
					date: formData.date,
					signature: formData.signature,
					contractType: formData.contractType,
					lang: lang,
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				// Show more detailed error message
				const errorMsg = data.details 
					? `${data.error}: ${data.details}`
					: data.error || (isFrench ? 'Échec de la soumission du contrat' : 'Failed to submit agreement')
				throw new Error(errorMsg)
			}

			setIsSubmitting(false)
			setSubmitStatus('success')
		} catch (error) {
			console.error('Error submitting form:', error)
			setIsSubmitting(false)
			setSubmitStatus('error')
			setErrors({ submit: error.message || (isFrench ? 'Échec de la soumission du contrat. Veuillez réessayer.' : 'Failed to submit agreement. Please try again.') })
		}
	}

	const isFormValid = () => {
		return (
			formData.fullName &&
			formData.paypalUsername &&
			formData.tiktokUsername &&
			formData.discordUsername &&
			formData.signature &&
			formData.date
		)
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<h1 className="text-2xl font-semibold text-gray-900">
						{isFrench ? 'Taller - Contrat UGC' : 'Taller - UGC Agreement'}
					</h1>
					<p className="text-sm text-gray-500 mt-1">
						{isFrench ? 'Veuillez compléter tous les champs pour soumettre' : 'Please complete all fields to submit'}
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				<div className="space-y-8">
					{/* Form First */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
					>
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-10">
							<form onSubmit={handleSubmit} className="space-y-5">
								<h3 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
									{isFrench ? 'Informations du Créateur' : 'Creator Information'}
								</h3>

								<FormField
									label={isFrench ? "Nom Complet" : "Full Name"}
									name="fullName"
									value={formData.fullName}
									onChange={(value) => handleInputChange('fullName', value)}
									onEnter={() => paypalRef.current?.focus()}
									inputRef={fullNameRef}
									required
									placeholder={isFrench ? "Jean Dupont" : "John Doe"}
									error={errors.fullName}
									autoComplete="name"
								/>

								<div className="space-y-1.5">
									<FormField
										label={isFrench ? "Email de Paiement" : "Payout Email"}
										name="paypalUsername"
										value={formData.paypalUsername}
										onChange={(value) => handleInputChange('paypalUsername', value)}
										onEnter={() => tiktokRef.current?.focus()}
										inputRef={paypalRef}
										required
										placeholder={isFrench ? "vous@email.com" : "you@email.com"}
										error={errors.paypalUsername}
										autoComplete="email"
										helperText={isFrench ? "Email utilisé pour recevoir les paiements via Grade (supporte PayPal, Wise & plus)" : "Email used to receive payouts via Grade (supports PayPal, Wise & more)"}
									/>
									<div className="flex items-center justify-between">
										<a
											href="https://usegrade.com/get-paid"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
										>
											{isFrench ? 'En savoir plus sur Grade' : 'Learn more about Grade'}
											<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>
										<span className="inline-flex items-center gap-1 text-xs text-amber-600">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											{isFrench ? 'Assurez-vous d\'avoir accès à cet email' : 'Make sure you have access to this email'}
										</span>
									</div>
								</div>

								<FormField
									label={isFrench ? "Nom d'utilisateur TikTok (Compte Contenu Taller)" : "TikTok Username (Taller Content Account)"}
									name="tiktokUsername"
									value={formData.tiktokUsername}
									onChange={(value) => handleInputChange('tiktokUsername', value)}
									onEnter={() => discordRef.current?.focus()}
									inputRef={tiktokRef}
									placeholder="@username.taller"
									helperText={isFrench ? "Compte où vous publierez les vidéos Taller. Utilisez un nouveau compte ou renommez-en un avec '.taller' dans le nom." : "Account where you'll post Taller videos. Use a fresh account or rebrand an existing one with '.taller' in the name."}
									error={errors.tiktokUsername}
									autoComplete="username"
								/>

								<FormField
									label={isFrench ? "Nom d'utilisateur Discord" : "Discord Username"}
									name="discordUsername"
									value={formData.discordUsername}
									onChange={(value) => handleInputChange('discordUsername', value)}
									onEnter={() => dateRef.current?.focus()}
									inputRef={discordRef}
									required
									placeholder="username#1234"
									error={errors.discordUsername}
									autoComplete="username"
								/>

								<div className="space-y-1.5">
									<label className="block text-sm font-medium text-gray-700">
										{isFrench ? 'Signature du Créateur' : "Creator's Signature"} <span className="text-red-500 ml-0.5">*</span>
									</label>
									<SignaturePad
										value={formData.signature}
										onChange={handleSignatureChange}
										onClear={() => handleInputChange('signature', '')}
										isFrench={isFrench}
									/>
									{errors.signature && <p className="text-xs text-red-600">{errors.signature}</p>}
								</div>

								<div className="space-y-1.5">
									<label htmlFor="date" className="block text-sm font-medium text-gray-700">
										{isFrench ? 'Date' : 'Date'} <span className="text-red-500 ml-0.5">*</span>
									</label>
									<div className="relative">
										<input
											ref={dateRef}
											type="date"
											id="date"
											name="date"
											value={formData.date}
											readOnly
											required
											className="w-full px-4 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed outline-none appearance-none"
											style={{
												WebkitAppearance: 'none',
												MozAppearance: 'textfield',
												textAlign: 'left'
											}}
										/>
									</div>
								</div>

								<div className="pt-4 border-t border-gray-200">
									<button
										type="submit"
										disabled={!isFormValid() || isSubmitting}
										className="w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900 shadow-sm"
									>
										{isSubmitting ? (
											<span className="flex items-center justify-center gap-2">
												<svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
													<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
													<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
												</svg>
												{isFrench ? 'Envoi en cours...' : 'Submitting...'}
											</span>
										) : submitStatus === 'success' ? (
											<span className="flex items-center justify-center gap-2">
												<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
												{isFrench ? 'Soumis' : 'Submitted'}
											</span>
										) : (
											isFrench ? 'Soumettre le Contrat' : 'Submit Agreement'
										)}
									</button>

									<AnimatePresence>
										{submitStatus === 'success' && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												className="mt-2.5"
											>
												<div className="p-3 sm:p-4 rounded-md bg-green-50 border border-green-200">
													<p className="text-sm text-green-800 text-center">
														{isFrench ? 'Merci ! Votre contrat a été soumis.' : 'Thank you! Your agreement has been submitted.'}
													</p>
												</div>
												<button
													type="button"
													onClick={generatePDF}
													className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2.5"
												>
													<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
													</svg>
													{isFrench ? 'Télécharger le Contrat PDF' : 'Download Agreement PDF'}
												</button>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</form>
						</div>
					</motion.div>

					{/* Contract Terms - PDF Style */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-10">
							{/* Document Header */}
							<div className="mb-8 pb-6 border-b border-gray-200">
								<h2 className="text-2xl font-bold text-gray-900 mb-2 break-words">
									{isFrench ? 'Taller - Contrat' : 'Taller - Agreement'}
								</h2>
								<p className="text-sm text-gray-600">Asymmetric Labs FZC</p>
							</div>

							<div className="space-y-8 text-sm leading-relaxed text-gray-700">
								{/* Section I */}
								<section>
									<h3 className="text-base font-semibold text-gray-900 mb-3">
										{isFrench ? 'I. PARTIES' : 'I. PARTIES'}
									</h3>
									<p className="text-gray-700">
										{isFrench ? (
											<>
												Ce contrat ("Contrat") est conclu entre <strong className="font-semibold text-gray-900">Asymmetric Labs FZC</strong> (l'"Annonceur")
												et le créateur de contenu (le "Créateur").
											</>
										) : (
											<>
												This agreement ("Contract") is between <strong className="font-semibold text-gray-900">Asymmetric Labs FZC</strong> (the
												"Advertiser") and the content creator (the "Creator").
											</>
										)}
									</p>
								</section>

								{/* Section II */}
								<section>
									<h3 className="text-base font-semibold text-gray-900 mb-3">
										{isFrench ? 'II. DURÉE' : 'II. TERM'}
									</h3>
									<p className="text-gray-700">
										{isFrench ? (
											<>
												Le contrat est en cours et peut être résilié par l'une ou l'autre partie avec un <strong className="font-semibold">préavis de 3 jours</strong>.
											</>
										) : (
											<>
												The contract is ongoing and can be terminated by either party with a <strong className="font-semibold">3-day notice</strong>.
											</>
										)}
									</p>
								</section>

								{/* Section III */}
								<section>
									<h3 className="text-base font-semibold text-gray-900 mb-3">
										{isFrench ? 'III. EXIGENCES DE CONTENU' : 'III. CONTENT REQUIREMENTS'}
									</h3>
									<p className="text-gray-700">
										{isFrench ? (
											<>
												Le Créateur s'engage à publier du Contenu Généré par l'Utilisateur (UGC) pour Taller en répliquant <strong className="font-semibold">deux
												formats recommandés</strong> fournis.
											</>
										) : (
											<>
												The Creator agrees to post User-Generated Content (UGC) for Taller by replicating <strong className="font-semibold">two
												recommended formats</strong> provided.
											</>
										)}
									</p>
									{contract.retainer > 0 && (
										<p className="text-gray-700 mt-2">
											{isFrench ? (
												<>
													Le Créateur s'engage à publier un maximum de <strong className="font-semibold">2 vidéos par jour</strong> pour Taller. Publier plus de 2 vidéos en une seule journée n'est pas autorisé selon cet accord. Comme la cross-publication sur Instagram est autorisée, cela équivaut effectivement à un maximum de <strong className="font-semibold">4 publications par jour</strong> sur les deux plateformes.
												</>
											) : (
												<>
													The Creator agrees to post a maximum of <strong className="font-semibold">2 videos per day</strong> for Taller. Posting more than 2 videos in a single day is not permitted under this agreement. As cross-posting on Instagram is allowed, this effectively equals up to <strong className="font-semibold">4 uploads per day</strong> across both platforms.
												</>
											)}
										</p>
									)}
								</section>

								{/* Section IV */}
								<section>
									<h3 className="text-base font-semibold text-gray-900 mb-3">
										{isFrench ? 'IV. PAIEMENT' : 'IV. PAYMENT'}
									</h3>
									<div className="space-y-4 text-gray-700">
										{contract.retainer > 0 ? (
											<p>
												{isFrench ? (
													<>
														L'Annonceur paie le Créateur <strong className="font-semibold">{contract.retainer}€ par vidéo</strong>, avec un plafond mensuel
														de <strong className="font-semibold">{contract.monthlyCapPosts} publications</strong>, ce qui signifie que l'acompte mensuel peut aller jusqu'à <strong className="font-semibold">{contract.monthlyRetainerMax}€</strong>.
													</>
												) : (
													<>
														The Advertiser pays the Creator <strong className="font-semibold">${contract.retainer} per video</strong>, with a monthly
														cap of <strong className="font-semibold">{contract.monthlyCapPosts} posts</strong>, meaning the monthly retainer can go up to <strong className="font-semibold">${contract.monthlyRetainerMax}</strong>.
													</>
												)}
											</p>
										) : (
											<p>
												{isFrench ? (
													<>
														L'Annonceur paie le Créateur sur la base de la <strong className="font-semibold">performance uniquement (pas d'acompte)</strong>.
													</>
												) : (
													<>
														The Advertiser pays the Creator based on <strong className="font-semibold">performance only (no retainer)</strong>.
													</>
												)}
											</p>
										)}
										<p>
											{isFrench ? (
												<>
													Il y a un <strong className="font-semibold">{contract.cpm.toFixed(2)}€ CPM</strong> pour chaque <strong className="font-semibold">1 000 vues</strong> générées, plafonné à{' '}
													<strong className="font-semibold">{contract.capPerVideo}€ par vidéo</strong>.{' '}
													{contract.viewThreshold > 0 ? (
														<>Les premières <strong className="font-semibold">{contract.viewThreshold >= 5000 ? '10 000' : contract.viewThreshold} vues par vidéo</strong> ne sont
														pas éligibles au CPM ; seules les vues au-dessus de ce seuil comptent.</>
													) : (
														<>Toutes les vues sont éligibles au CPM dès la première vue.</>
													)}
												</>
											) : (
												<>
													There's a <strong className="font-semibold">${contract.cpm.toFixed(2)} CPM</strong> on every <strong className="font-semibold">1,000 views</strong> generated, capped at{' '}
													<strong className="font-semibold">${contract.capPerVideo} per video</strong>.{' '}
													{contract.viewThreshold > 0 ? (
														<>The first <strong className="font-semibold">{contract.viewThreshold >= 5000 ? '10,000' : contract.viewThreshold} views per video</strong> are
														not eligible for the CPM; only views above that count.</>
													) : (
														<>All views are eligible for the CPM from the first view.</>
													)}
												</>
											)}
										</p>
										{contract.crossPost.enabled && (
											<p>
												{isFrench ? (
													<>
														Le créateur peut republier la même vidéo sur {contract.crossPost.platform} et gagner un{' '}
														<strong className="font-semibold">{contract.crossPost.cpm.toFixed(2)}€ CPM</strong> plafonné à <strong className="font-semibold">{contract.crossPost.capPerVideo}€ par vidéo</strong>
														{contract.crossPost.totalUploadsPerMonth && (
															<>, permettant jusqu'à <strong className="font-semibold">{contract.crossPost.totalUploadsPerMonth} publications par mois</strong></>
														)}. Toutes les vues sous le plafond de {contract.crossPost.capPerVideo}€ sont éligibles sur {contract.crossPost.platform}.
													</>
												) : (
													<>
														The creator may cross-post the same video on {contract.crossPost.platform} and earn a{' '}
														<strong className="font-semibold">${contract.crossPost.cpm.toFixed(2)} CPM</strong> capped at <strong className="font-semibold">${contract.crossPost.capPerVideo} per video</strong>
														{contract.crossPost.totalUploadsPerMonth && (
															<>, allowing up to <strong className="font-semibold">{contract.crossPost.totalUploadsPerMonth} uploads per month</strong></>
														)}. Every views under the ${contract.crossPost.capPerVideo} cap are eligible on {contract.crossPost.platform}.
													</>
												)}
											</p>
										)}
										{contract.retainer > 0 && (
											<p>
												{isFrench ? (
													<>L'<strong className="font-semibold">acompte de {contract.retainer}€ s'applique uniquement à TikTok</strong>.</>
												) : (
													<>The <strong className="font-semibold">${contract.retainer} retainer applies only to TikTok</strong>.</>
												)}
											</p>
										)}
										<p>
											{isFrench ? (
												<>
													Les paiements sont effectués entre le <strong className="font-semibold">1er et le 4 de chaque mois</strong>. Les paiements sont
													basés sur les vues générées le <strong className="font-semibold">mois précédent</strong>.
												</>
											) : (
												<>
													Payments are made between the <strong className="font-semibold">1st and 4th of each month</strong>. Payouts are
													based on views generated in the <strong className="font-semibold">previous month</strong>.
												</>
											)}
										</p>
										<p>
											{isFrench ? (
												<>
													Seules les vues générées pendant le <strong className="font-semibold">même mois calendaire</strong> où une vidéo est
													initialement publiée seront éligibles au paiement. Par exemple, si une vidéo est publiée le
													21 juillet, seules les vues accumulées du 21 au 31 juillet seront comptabilisées. Les vues
													des mois suivants pour cette même vidéo ne seront pas prises en compte pour le paiement.
												</>
											) : (
												<>
													Only views generated during the <strong className="font-semibold">same calendar month</strong> in which a video is
													originally posted will be eligible for payout. For example, if a video is published on
													July 21st, only views accrued from July 21st through July 31st will be counted. Views
													from subsequent months for that same video will not be considered for payment.
												</>
											)}
										</p>
									</div>
								</section>

								{/* Section V - Only show if NOT French */}
								{!isFrench && (
									<section>
										<h3 className="text-base font-semibold text-gray-900 mb-3">V. HIGH PERFORMANCE VIEWS BONUS</h3>
										<p className="text-gray-700">
											If a creator publishes a video that exceeds <strong className="font-semibold">1,000,000 views</strong>, they will receive
											a <strong className="font-semibold">one-time bonus payment of USD 100</strong> for that video.
										</p>
									</section>
								)}

								{/* Section VI - Only show if NOT French */}
								{!isFrench && (
									<section>
										<h3 className="text-base font-semibold text-gray-900 mb-3">VI. INTELLECTUAL PROPERTY & USAGE RIGHTS</h3>
										<p className="text-gray-700">
											The Creator grants the Advertiser a perpetual, worldwide, royalty-free license to use,
											reproduce, modify, and distribute any content created under this Contract for any commercial or
											promotional purpose.
										</p>
									</section>
								)}
							</div>

							{/* Advertiser Signature */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="mt-12 pt-8 border-t border-gray-200"
							>
								<div className="flex flex-col items-start space-y-2">
									<p className="text-xs font-medium text-gray-500 mb-4">
										{isFrench ? "Signature de l'Annonceur :" : "Advertiser's Signature:"}
									</p>
									<div className="relative w-48 h-16">
										<NextImage
											src="/images/signature.png"
											alt={isFrench ? "Signature de l'Annonceur" : "Advertiser Signature"}
											fill
											className="object-contain"
											priority
										/>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default function AgreementPage() {
	return (
		<Suspense fallback={
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
			</div>
		}>
			<AgreementPageContent />
		</Suspense>
	)
}
