'use client'

import { useState } from 'react'

function CopyButton({ text, onCopiedLabel = 'Copied!' }) {
	const [copied, setCopied] = useState(false)

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			setTimeout(() => setCopied(false), 1200)
		} catch {
			// Silently ignore clipboard errors
		}
	}

	return (
		<button
			onClick={handleCopy}
			className="shrink-0 rounded-md bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.98]"
		>
			{copied ? onCopiedLabel : 'Copy'}
		</button>
	)
}

function MessageRow({ label, text }) {
	return (
		<div className="flex items-start justify-between gap-3 rounded-lg bg-white/10 p-4 shadow-sm">
			<div className="min-w-0">
				{label ? (
					<p className="mb-1 text-xs font-semibold uppercase tracking-wide text-white">
						{label}
					</p>
				) : null}
				<p className="whitespace-pre-wrap break-words text-sm text-white">
					{text}
				</p>
			</div>
			<CopyButton text={text} />
		</div>
	)
}

const LANGUAGES = {
	en: {
		label: 'EN',
		flag: '🇬🇧',
		outreach1: "Hey {name}! We would love to collab with you, let us know if you'd like more info",
		outreach2: [
			"Great! So we could basically pay you $1 for every 1k views you generate promoting Taller, without any video amount limitation. It would be the most seamless integrations, not sales-y at all. You'll simply need to reproduce our winning formats (your choice) while smoothly integrating Taller into your content.",
			"here's some examples:",
			'https://www.tiktok.com/@dobbingotall/video/7565657663913200910',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			"If that's sounds like something you'd be interested in please join our discord & we'll share the next steps to get started + the agreement :)",
			'https://discord.gg/ud34eGVzSN',
		],
	},
	fr: {
		label: 'FR',
		flag: '🇫🇷',
		outreach1: "Hey {name}! On aimerait vraiment faire une collab avec toi, dis-nous si tu veux plus d'infos !",
		outreach2: [
			"Super ! En gros on pourrait te payer 1$ pour chaque 1k vues que tu génères en promouvant Taller, sans aucune limite de nombre de vidéos. Ce serait l'intégration la plus naturelle possible, pas du tout commercial. Tu n'as qu'à reproduire nos formats qui fonctionnent bien (ton choix) en intégrant Taller de façon fluide dans ton contenu.",
			"Voici quelques exemples :",
			'https://www.tiktok.com/@dobbingotall/video/7565657663913200910',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			"Si ça t'intéresse, rejoins notre discord et on te partagera les prochaines étapes pour commencer + l'accord :)",
			'https://discord.gg/ud34eGVzSN',
		],
	},
	de: {
		label: 'DE',
		flag: '🇩🇪',
		outreach1: "Hey {name}! Wir würden gerne mit dir zusammenarbeiten – meld dich, wenn du mehr Infos möchtest!",
		outreach2: [
			"Super! Wir könnten dir im Grunde 1$ für je 1.000 Views zahlen, die du durch die Promotion von Taller generierst – ohne Begrenzung der Videoanzahl. Es wäre die nahtloseste Integration, überhaupt nicht verkäuferisch. Du müsstest einfach unsere bewährten Formate nachahmen (deine Wahl) und Taller dabei natürlich in deinen Content einbauen.",
			"Hier ein paar Beispiele:",
			'https://www.tiktok.com/@dobbingotall/video/7565657663913200910',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			"Wenn dich das interessiert, tritt unserem Discord bei und wir teilen die nächsten Schritte + die Vereinbarung mit dir :)",
			'https://discord.gg/ud34eGVzSN',
		],
	},
}

export default function OutreachPage() {
	const [lang, setLang] = useState('en')
	const content = LANGUAGES[lang]

	return (
		<div className="mx-auto max-w-3xl px-6 py-10">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold tracking-tight text-white">
					TikTok Outreach Helper
				</h1>

				{/* Language switcher */}
				<div className="flex items-center gap-1 rounded-xl bg-white/10 p-1">
					{Object.entries(LANGUAGES).map(([key, { label, flag }]) => (
						<button
							key={key}
							onClick={() => setLang(key)}
							className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
								lang === key
									? 'bg-white text-black shadow'
									: 'text-white/70 hover:text-white'
							}`}
						>
							{flag} {label}
						</button>
					))}
				</div>
			</div>

			<section className="mt-8 space-y-4">
				<h2 className="text-lg font-semibold text-white">Outreach 1</h2>
				<MessageRow text={content.outreach1} />
			</section>

			<section className="mt-10 space-y-4">
				<h2 className="text-lg font-semibold text-white">
					Outreach 2 (after reply)
				</h2>
				{content.outreach2.map((msg, idx) => (
					<MessageRow key={idx} label={`Message ${idx + 1}`} text={msg} />
				))}
			</section>
		</div>
	)
}
