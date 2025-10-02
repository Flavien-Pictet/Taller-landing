'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';

const glancyr = localFont({
    src: '../../../public/fonts/Glancyr-Medium.otf',
    variable: '--font-glancyr',
    display: 'swap'
});

export default function TikTokLanding() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    return (
        <div className={`min-h-screen bg-[#0B0B0B] text-white ${glancyr.variable}`}>
            <header className="max-w-[1100px] mx-auto pt-6 relative z-20 px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between bg-[#0F0F0F] border border-white/10 rounded-[16px] px-4 md:px-6 lg:px-8 py-3 md:py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-[40px] h-[40px] rounded-[12px] overflow-hidden">
                            <Image src="/images/logo.png" alt="Taller" fill className="object-cover" />
                        </div>
                        <span className="text-[22px] font-bold tracking-wide" style={{ fontFamily: 'var(--font-glancyr)' }}>TALLER</span>
                    </Link>

                    <motion.button
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 p-0 m-0 bg-transparent border-0 rounded-none flex items-center justify-center"
                        animate={{ scale: menuOpen ? 1.02 : 1 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                        <Image src="/images/hamburger.png" alt="Menu" width={22} height={22} />
                    </motion.button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <>
                            <motion.div
                                className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                onClick={() => setMenuOpen(false)}
                            />
                            <motion.nav
                                role="menu"
                                aria-label="Main menu"
                                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                onClick={() => setMenuOpen(false)}
                            >
                                <motion.div
                                    className="w-[300px] md:w-[360px] bg-[#0F0F0F] border border-white/10 rounded-[16px] overflow-hidden shadow-2xl"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <a
                                        href="https://apps.apple.com/us/app/taller-maximize-your-height/id6695758303"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-5 py-4 hover:bg-white/5"
                                        role="menuitem"
                                    >
                                        Apple App Store
                                    </a>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-5 py-4 hover:bg-white/5"
                                        role="menuitem"
                                    >
                                        Google Play Store
                                    </a>
                                    <Link href="/affiliation" className="block px-5 py-4 hover:bg-white/5" role="menuitem">
                                        Become a creator
                                    </Link>
                                </motion.div>
                            </motion.nav>
                        </>
                    )}
                </AnimatePresence>
            </header>

            <AnimatePresence>
                {copied && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="px-4 py-2 rounded-[12px] bg-[#0F0F0F] border border-white/10 text-white text-[14px] shadow-lg pointer-events-auto"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                        >
                            Copied
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="max-w-[1100px] mx-auto mt-6 md:mt-10 mb-[60px] px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 min-[1070px]:grid-cols-[500px_500px] min-[1070px]:justify-center gap-[14px]">
                        {/* Android Card */}
                        <motion.div
                            className="rounded-[20px] bg-white/[0.025] border border-white/5 p-6 w-full min-[1070px]:w-[500px]"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            whileHover={{ y: -2 }}
                        >
                            <h2 className="text-white text-[20px] font-bold">Android</h2>
                            <p className="text-white/50 text-[16px] mt-2">Download Taller on Google Play store</p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center justify-center w-full h-[56px] rounded-[16px] bg-[#9844FF] hover:opacity-90 transition gap-3"
                            >
                                <Image src="/images/android.svg" alt="Android" width={20} height={20} />
                                <span className="text-white text-[16px] font-medium">Google Play Store</span>
                            </a>
                        </motion.div>

                        {/* iPhone Card */}
                        <motion.div
                            className="rounded-[20px] bg-white/[0.025] border border-white/5 p-6 flex flex-col w-full min-[1070px]:w-[500px]"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
                            whileHover={{ y: -2 }}
                        >
                            <h2 className="text-white text-[20px] font-bold">Iphone</h2>
                            <p className="text-white/50 text-[16px] mt-2">Search “Taller” in the App Store.</p>
                            <p className="text-white/50 text-[16px] whitespace-nowrap">Here’s what it looks like:</p>

                            <div className="w-full mt-4">
                                <img 
                                    src="/images/appstore.png" 
                                    alt="App Store preview"
                                    className="w-full h-auto rounded-[20px]"
                                />
                            </div>

                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('https://apps.apple.com/us/app/taller-maximize-your-height/id6695758303'); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
                                className="mt-5 inline-flex items-center justify-center w-full h-[56px] rounded-[16px] border border-[#954CEE] bg-[#954CEE]/10 hover:bg-[#954CEE]/10 transition gap-3"
                            >
                                <svg width="18" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M11.5187 8.45511C11.5115 7.14416 12.1045 6.15469 13.3047 5.42599C12.6332 4.4651 11.6187 3.93643 10.2792 3.83284C9.01108 3.73282 7.62511 4.57226 7.11787 4.57226C6.58206 4.57226 5.35327 3.86856 4.38881 3.86856C2.39559 3.90071 0.277344 5.45814 0.277344 8.62657C0.277344 9.56245 0.448803 10.5293 0.791723 11.5271C1.24895 12.8381 2.89925 16.0529 4.62099 15.9993C5.52115 15.9779 6.15698 15.3599 7.32863 15.3599C8.46455 15.3599 9.05394 15.9993 10.0577 15.9993C11.7937 15.9743 13.2869 13.0524 13.7226 11.7379C11.3937 10.6412 11.5187 8.52298 11.5187 8.45511ZM9.49688 2.58976C10.4721 1.4324 10.3828 0.37864 10.3542 0C9.49331 0.0500091 8.4967 0.585821 7.92873 1.24666C7.30362 1.95393 6.9357 2.82909 7.01428 3.81498C7.9466 3.88642 8.79675 3.40776 9.49688 2.58976Z" fill="#954CEE"/>
                                </svg>
                                <span className="text-[#954CEE] text-[16px] font-medium">Copy Apple Store Link</span>
                            </a>

                            <p className="text-white/50 text-[14px] mt-4">Paste the link in Safari or any other browser</p>
                        </motion.div>
                </div>
            </main>

            
        </div>
    );
}


