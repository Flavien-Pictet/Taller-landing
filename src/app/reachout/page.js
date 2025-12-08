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
		"hey what's up! we have a collab offer we’d like to share! We could basically pay you 300$ / month to create one short video each day (takes 15 minutes to create & we are flexible on the frequency). the content could be on a fresh account not this one if you prefer + we would add 1$ for every 1k views you generate with a 5k$ monthly cap. Let us know if you’d like more info"

	const outreach1Text = outreach1Template

	const outreach2Messages = [
		"Great! So here's the kind of videos we are looking for:",
		'https://www.tiktok.com/@dobbin.chong/video/7492930138611617070?q=dobbin%20&t=1764921282597',
		'https://www.tiktok.com/@quickclips4life/video/7565878110944595214',
		'https://www.tiktok.com/@rytsotall/video/7580971456901893431',
		'https://www.tiktok.com/@beck13213/video/7453486785952304406',
		"If that's sounds like something you'd be interested in please join our discord & we'll share the next steps to get started + the agreement :)",
		'https://discord.gg/GhAb3npQuD',
		'we can also chat on Imessage/Whatsapp if you prefer! my number is +41 79 379 71 72',
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

