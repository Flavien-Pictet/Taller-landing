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
		"Hey {name}! We would love to collab with you, let us know if you'd like more info"

	const outreach1Text = outreach1Template

	const outreach2Messages = [
		"Great! So we could basically pay you $1 for every 1k views you generate promoting Taller, without any video amount limitation. It would be the most seamless integrations, not sales-y at all. You'll simply need to reproduce our winning formats (your choice) while smoothly integrating Taller into your content.",
		"If that's sounds like something you'd be interested in please join our discord & we'll share the next steps to get started + the agreement :)",
		'https://discord.gg/ukunXdjMNC',
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


