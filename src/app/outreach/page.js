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

export default function OutreachPage() {
	const outreach1Template =
		"Hey {name}! we have a collab offer we’d like to share! We could basically pay you 300$ / month to create one short video each day (takes 15 minutes to create & it’s always the same). The content could be on a fresh account & not this one if you prefer + we would add some bonuses based on views milestone so you could reach +1k$ / month. Let us know if you’d like more info."

	const outreach1Text = outreach1Template

	const outreach2Messages = [
		"Cool! So that’s exactly the kind of videos we are looking for",
		'https://www.tiktok.com/@dobbingotall/video/7565657663913200910',
		'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
		'If that’s sounds like something you could do please join our discord &',
		"we’ll share the next steps to get started + send you the agreement :)",
		'https://discord.gg/ukunXdjMNC',
		"Just let me know once you're inside & share your discord username here please",
	]

	return (
		<div className="mx-auto max-w-3xl px-6 py-10">
			<h1 className="text-2xl font-bold tracking-tight text-white">
				TikTok Outreach Helper
			</h1>

			<section className="mt-8 space-y-4">
				<h2 className="text-lg font-semibold text-white">Outreach 1</h2>

				<MessageRow text={outreach1Text} />
			</section>

			<section className="mt-10 space-y-4">
				<h2 className="text-lg font-semibold text-white">
					Outreach 2 (after reply)
				</h2>
				{outreach2Messages.map((msg, idx) => (
					<MessageRow key={idx} label={`Message ${idx + 1}`} text={msg} />
				))}
			</section>
		</div>
	)
}


