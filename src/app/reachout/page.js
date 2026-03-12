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
		outreach1: [
			"hey what's up! we have a collab offer we'd like to share! We could basically pay you 600$ / month to create 2 short videos a day (takes 15 minutes to create & we are flexible on the frequency). the content would be on a fresh account not this one + we would add 0.50$ for every 1k views you generate with a 10,000$ monthly cap. Let us know if you'd like more info",
		],
		outreach2: [
			"Great! So here's the kind of videos we are looking for:",
			'https://www.tiktok.com/@dobbin.chong/video/7492930138611617070?q=dobbin%20&t=1764921282597',
			'https://www.tiktok.com/@jays.taller/video/7582335457204112671',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			'https://www.tiktok.com/@rytsotall/video/7580971456901893431',
			'https://www.tiktok.com/@beck13213/video/7453486785952304406',
			"If that's sounds like something you'd be interested in please join our discord & we'll share the next steps to get started + the agreement :)",
			'https://discord.gg/GhAb3npQuD',
			"we can also chat on Imessage/Whatsapp if you'd like to! my number is +41 79 379 71 72",
		],
	},
	fr: {
		label: 'FR',
		flag: '🇫🇷',
		outreach1: [
			"Hello! On a une collab à te proposer! En gros on pourrait te payer 600$ / mois pour créer 2 vidéos UGC par jour (ça prend 15 minutes à faire et on est flexibles sur le volume). Le contenu serait posté sur un nouveau compte pas le tien + on t'ajouterait 0,50$ pour chaque 1k vues que tu génères avec un plafond de 5,000$ par mois. Let me know si tu veux plus d'infos :)",
		],
		outreach2: [
			"Super ! Voici le genre de vidéos qu'on recherche :",
			'https://www.tiktok.com/@dobbin.chong/video/7492930138611617070?q=dobbin%20&t=1764921282597',
			'https://www.tiktok.com/@jays.taller/video/7582335457204112671',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			'https://www.tiktok.com/@rytsotall/video/7580971456901893431',
			'https://www.tiktok.com/@beck13213/video/7453486785952304406',
			"Si ça t'intéresse, rejoins notre discord et on te partagera les prochaines étapes pour commencer + l'accord :)",
			'https://discord.gg/GhAb3npQuD',
			"On peut aussi discuter sur iMessage/WhatsApp si tu préfères ! Mon numéro est le +41 79 379 71 72",
		],
	},
	de: {
		label: 'DE',
		flag: '🇩🇪',
		outreach1: [
			"Hallo! we have a collab offer we'd like to share! We could basically pay you 600$ / month to create 2 short videos a day (takes 15 minutes to create & we are flexible on the frequency). the content would be on a fresh account not this one + we would add 0.50$ for every 1k views you generate with a 10,000$ monthly cap. Let us know if you'd like more info",
		],
		outreach2: [
			"Super! Hier sind die Arten von Videos, nach denen wir suchen:",
			'https://www.tiktok.com/@dobbin.chong/video/7492930138611617070?q=dobbin%20&t=1764921282597',
			'https://www.tiktok.com/@jays.taller/video/7582335457204112671',
			'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
			'https://www.tiktok.com/@rytsotall/video/7580971456901893431',
			'https://www.tiktok.com/@beck13213/video/7453486785952304406',
			"Wenn dich das interessiert, tritt unserem Discord bei und wir teilen die nächsten Schritte + die Vereinbarung mit dir :)",
			'https://discord.gg/GhAb3npQuD',
			"Wir können auch über iMessage/WhatsApp schreiben, wenn du möchtest! Meine Nummer ist +41 79 379 71 72",
		],
	},
}

export default function ReachoutPage() {
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
				{content.outreach1.map((template, idx) => (
					<MessageRow key={idx} label={`Option ${idx + 1}`} text={template} />
				))}
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
