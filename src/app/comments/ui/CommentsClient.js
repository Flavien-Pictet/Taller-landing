'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const commentGroups = [
  {
    id: 'grp-why-using',
    app: 'taller',
    title: 'why is everyone using this height app rn??',
    main: 'why is everyone using this height app rn??',
    replies: [
      "it's actually accurate af",
      "I downloaded just to see if i'm done growing 😭",
      'lowkey feels like a new trend'
    ],
    images: []
  },
  {
    id: 'grp-04-inches',
    app: 'taller',
    title: "used this & it said I had 0.4 inches left in me. I'm lowkey cooked",
    main: "used this & it said I had 0.4 inches left in me. I'm lowkey cooked",
    replies: [
      'mine said 0.2 ☠️ it\'s over',
      "I\'m literally drinking milk again bc of this app 😭",
      'you better start stretching fr'
    ],
    images: ['/images/comment_2.png', '/images/comment_16.png', '/images/comment_18.png']
  },
  {
    id: 'grp-app-name',
    app: 'taller',
    title: 'app name?',
    main: 'app name?',
    replies: [
      'taller'
    ],
    images: []
  },
  {
    id: 'grp-65-still-grow',
    app: 'taller',
    title: "bro I'm 6'5 and it told me I can still grow",
    main: "bro I'm 6'5 and it told me I can still grow",
    replies: [
      'nah post the screenshot bro i gotta see this 😭',
      'I need a second puberty fr and this app got me coping'
    ],
    images: [
      // '/images/comments/65-still-grow-1.png'
    ]
  },
  {
    id: 'grp-lil-bro-pass',
    app: 'taller',
    title: "ran it on my lil bro and it said he'll pass me in a year 😭",
    main: "ran it on my lil bro and it said he'll pass me in a year 😭",
    replies: [
      "same. my cousin's 11 and the app said he's on track for 6'3",
      'nah this app starting family beef 💀',
      'mine did that and now he walks around like he already passed me 😭'
    ],
    images: ['/images/comment_5.png', '/images/comment_19.png']
  },
  {
    id: 'grp-peak-19',
    app: 'taller',
    title: "mine says I'll peak at 19... anyone actually grown after that?",
    main: "mine says I'll peak at 19... anyone actually grown after that?",
    replies: [
      "same. it said 19 but now i'm taking magnesium just in case",
      'mine said 21',
      "I grew 4cm at 20 no cap. anything's possible"
    ],
    images: ['/images/comment_6.png']
  },
  {
    id: 'grp-im-so-cooked',
    app: 'taller',
    title: "I'm so cooked 💀",
    main: "I'm so cooked 💀",
    replies: [],
    images: ['/images/comment_7.png', '/images/comment_14.png', '/images/comment_15.png']
  },
  {
    id: 'grp-beat-dad',
    app: 'taller',
    title: "I only downloaded it to see if i beat my dad. I won't... 💀",
    main: "I only downloaded it to see if i beat my dad. I won't... 💀",
    replies: [
      'same bruh... this app told me my dad mogged me for life',
      'lowkey this app causing generational trauma 💀',
      "same dude! it told me I'm 2 inches short of beating him..."
    ],
    images: []
  },
  {
    id: 'grp-optimize',
    app: 'taller',
    title: "can someone explain the 'optimize up to' part to me??",
    main: "can someone explain the 'optimize up to' part to me??",
    replies: [
      'N/A'
    ],
    images: []
  },
  {
    id: 'grp-glitched',
    app: 'taller',
    title: 'just checked mine. praying the algorithm glitched 💀',
    main: 'just checked mine. praying the algorithm glitched 💀',
    replies: [
      'lmaoo same bruh 😭 I deleted the app outta pain',
      'mine just gave me a flat line at 19',
      'bro it said my predicted height is exactly what i am now 💀'
    ],
    images: ['/images/comment_11.png', '/images/comment_13.png']
  },
  {
    id: 'grp-64-at-15',
    app: 'taller',
    title: "6'4 at 15 is that good?",
    main: "6'4 at 15 is that good?",
    replies: [],
    images: ['/images/comment_17.png']
  },
  {
    id: 'grp-55-at-16',
    app: 'taller',
    title: "5'5 at 16 is that good?",
    main: "5'5 at 16 is that good?",
    replies: [],
    images: ['/images/comment_20.png']
  },
  {
    id: 'grp-what-app',
    app: 'taller',
    title: 'I saw this on my fyp like 4 vids today. wtf is this app fr?',
    main: 'I saw this on my fyp like 4 vids today. wtf is this app fr?',
    replies: [
      'its called Taller',
      "I think it's called taller"
    ],
    images: []
  }
];

async function trackCopy({ groupId, itemType, index }) {
  try {
    await fetch('/api/comments/copy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupId, itemType, index })
    });
  } catch {}
}

function CopyButton({ value, onCopied, onCount, groupId, itemType, index }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      onCopied && onCopied();
      onCount && onCount();
      setTimeout(() => setIsCopied(false), 1000);
      trackCopy({ groupId, itemType, index });
    } catch (e) {
      console.error('Copy failed', e);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`h-7 px-2 rounded-[8px] border text-xs transition ${isCopied ? 'border-[#954CEE] bg-[#954CEE]/10 text-[#954CEE]' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
    >
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  );
}

async function loadImageAsPngBlob(src) {
  // If the image is already a PNG, return as-is
  const res = await fetch(src, { cache: 'no-store' });
  const blob = await res.blob();
  if (blob.type === 'image/png') return blob;

  // Convert to PNG using a canvas for maximum compatibility
  const dataUrl = await new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = reject;
    img.src = src;
  });

  const binary = atob(dataUrl.split(',')[1]);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) array[i] = binary.charCodeAt(i);
  return new Blob([array], { type: 'image/png' });
}

function ImageCopyButton({ src, groupId, index, onCount }) {
  const [isCopied, setIsCopied] = useState(false);

  function triggerDownload(blob, name) {
    try {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name || `comment_${groupId}_${(index ?? 0) + 1}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch {}
  }

  async function handleCopyImage() {
    try {
      const pngBlob = await loadImageAsPngBlob(src);
      const fileName = `comment_${groupId}_${(index ?? 0) + 1}.png`;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

      // On mobile, prefer the native share sheet
      if (navigator.share) {
        try {
          const file = new File([pngBlob], fileName, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ title: 'Taller Asset', files: [file] });
          } else {
            // iOS Safari cannot share binary files from the web. Avoid copying placeholder text.
            // Prefer download on iOS, otherwise share URL on other mobile browsers.
            if (isIOS) {
              throw new Error('ios-no-file-share');
            }
            const absoluteUrl = new URL(src, window.location.origin).toString();
            await navigator.share({ title: 'Taller Asset', url: absoluteUrl });
          }
          setIsCopied(true);
          onCount && onCount();
          setTimeout(() => setIsCopied(false), 1000);
          trackCopy({ groupId, itemType: 'image', index });
          return;
        } catch (e) {
          // If user cancels share, silently ignore; if it's another error, fall back to download
        }
      }

      // Desktop or fallback: auto-download PNG
      triggerDownload(pngBlob, fileName);
      setIsCopied(true);
      onCount && onCount();
      setTimeout(() => setIsCopied(false), 1000);
      trackCopy({ groupId, itemType: 'image', index });
    } catch (e) {
      console.error('Image copy failed', e);
      try {
        // As last resort, fetch and download
        const pngBlob = await loadImageAsPngBlob(src);
        const fileName = `comment_${groupId}_${(index ?? 0) + 1}.png`;
        triggerDownload(pngBlob, fileName);
        setIsCopied(true);
        onCount && onCount();
        setTimeout(() => setIsCopied(false), 1000);
        trackCopy({ groupId, itemType: 'image', index });
      } catch {}
    }
  }

  return (
    <button
      onClick={handleCopyImage}
      className={`h-7 px-2 rounded-[8px] border text-xs transition ${isCopied ? 'border-[#954CEE] bg-[#954CEE]/10 text-[#954CEE]' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
    >
      {isCopied ? 'Done' : '📎 Share or Copy'}
    </button>
  );
}

export default function CommentsClient() {
  const [selectedApp, setSelectedApp] = useState('taller');
  const [counts, setCounts] = useState({});

  async function refreshCounts(groups) {
    try {
      const keys = [];
      groups.forEach((g) => {
        keys.push(`comments:copy:${g.id}:main`);
        g.replies.forEach((_, i) => keys.push(`comments:copy:${g.id}:reply:${i}`));
        g.images.forEach((_, i) => keys.push(`comments:copy:${g.id}:image:${i}`));
      });
      const url = `/api/comments/copy?${keys.map((k) => `keys=${encodeURIComponent(k)}`).join('&')}`;
      const res = await fetch(url, { cache: 'no-store' });
      const data = await res.json();
      if (data?.ok) setCounts(data.data || {});
    } catch {}
  }

  // initial load
  if (typeof window !== 'undefined' && Object.keys(counts).length === 0) {
    // fire and forget without blocking first paint
    setTimeout(() => refreshCounts(commentGroups), 0);
  }

  function incrementLocalCount(groupId, itemType, index) {
    const key = `comments:copy:${groupId}:${itemType}${typeof index === 'number' ? `:${index}` : ''}`;
    setCounts((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }));
  }
  // No free-text search for now; app filter is applied at render-time.

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <header className="w-full max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between bg-[#0F0F0F] border border-white/10 rounded-[16px] px-4 md:px-6 py-3">
          <h1 className="text-[22px] md:text-[26px] font-bold">Comments bank</h1>
          <div className="relative">
            <select
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
              className="appearance-none h-9 w-[120px] md:w-[150px] shrink-0 rounded-[10px] bg-black/30 border border-white/10 pl-3 pr-8 text-sm outline-none focus:border-white/20"
            >
              <option value="taller">Taller</option>
              <option value="ivymatch">IvyMatch (empty)</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 md:right-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-10 mb-16">
        <div className="grid grid-cols-1 gap-4">
          {(commentGroups.filter((g) => g.app === selectedApp)).map((group) => (
            <motion.section
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-[20px] bg-white/[0.025] border border-white/5 p-4 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-white text-[16px] md:text-[18px] font-semibold leading-snug">
                  {group.main}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs tabular-nums">
                    {counts[`comments:copy:${group.id}:main`] ?? 0}
                  </span>
                  <CopyButton
                    value={group.main}
                    groupId={group.id}
                    itemType="main"
                    onCount={() => incrementLocalCount(group.id, 'main')}
                  />
                </div>
              </div>

              {group.replies?.length > 0 && (
                <div className="mt-4 space-y-2">
                  {group.replies.map((reply, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-3">
                      <div className="text-white/80 text-[14px] md:text-[16px] leading-snug">{reply}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-xs tabular-nums">
                          {counts[`comments:copy:${group.id}:reply:${idx}`] ?? 0}
                        </span>
                        <CopyButton
                          value={reply}
                          groupId={group.id}
                          itemType="reply"
                          index={idx}
                          onCount={() => incrementLocalCount(group.id, 'reply', idx)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="text-white text-sm mb-3">Main comment assets</div>
                {group.images?.length ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {group.images.map((src, i) => (
                      <div key={i} className="rounded-[12px] overflow-hidden bg-black/40 border border-white/10 p-2 flex flex-col gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={`asset-${i}`} className="w-full h-auto rounded-[8px]" />
                        <div className="flex items-center justify-between">
                          <span className="text-white/40 text-xs tabular-nums">
                            {counts[`comments:copy:${group.id}:image:${i}`] ?? 0}
                          </span>
                          <ImageCopyButton
                            src={src}
                            groupId={group.id}
                            index={i}
                            onCount={() => incrementLocalCount(group.id, 'image', i)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[12px] border border-dashed border-white/10 bg-black/30 p-4 text-white/50 text-sm">
                    {selectedApp === 'ivymatch' ? 'No content yet for IvyMatch.' : 'No images yet. Upload assets later and just add their paths here.'}
                  </div>
                )}
              </div>
            </motion.section>
          ))}
          {commentGroups.filter((g) => g.app === selectedApp).length === 0 && (
            <div className="rounded-[16px] border border-white/10 bg-[#0F0F0F] p-6 text-white/60">
              No comments yet for this app.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


