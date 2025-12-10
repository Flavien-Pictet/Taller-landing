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

export default function ReachoutPage() {
	const outreach1Template =
		"hey what's up! we have a collab offer we’d like to share! We could basically pay you 300$ / month to create one short video each day. the content would be on a fresh account not this one + we would add 2$ for every 1k views you generate with a 10k$ monthly cap. Let us know if you’d like more info"

	const outreach1Text = outreach1Template

	const outreach2Messages = [
		"Great! So here's the kind of videos we are looking for but adapted to our app:",
		'https://www.instagram.com/reel/DRYs-wQjfv7/',
		'https://www.instagram.com/reel/DMRfRA3stbd/?igsh=MXo2YjNqYnZpaXU4',
		'https://www.instagram.com/reel/DG1hPJkSojZ/',
		"If that's sounds like something you'd be interested in please join our discord & we'll share the next steps to get started + the agreement :)",
		'https://discord.gg/PvN7a8QKcY',
		'we can also chat on Imessage/Whatsapp if you\'d like to! my number is +41 79 379 71 72',
	]

	return (
		<div className="mx-auto max-w-3xl px-6 py-10">
			<h1 className="text-2xl font-bold tracking-tight text-white">
				BookSniper Outreach Helper
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

