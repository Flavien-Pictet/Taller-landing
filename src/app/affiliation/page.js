'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import localFont from 'next/font/local';

// Optimisation: Charger seulement les polices nécessaires
const rethinkSans = localFont({
  src: '../../../public/fonts/RethinkSans-Bold.ttf',
  variable: '--font-rethink-sans',
  display: 'swap', // Améliore le chargement
  preload: true
});

const manrope = localFont({
  src: '../../../public/fonts/Manrope-Bold.ttf',
  variable: '--font-manrope',
  display: 'swap'
});

const interSemiBold = localFont({
  src: '../../../public/fonts/Inter_18pt-SemiBold.ttf',
  variable: '--font-inter-semi-bold',
  display: 'swap'
});

export default function Affiliation() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  
  // Optimisation: Debounce les handlers pour éviter les re-renders excessifs
  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleResume = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    // Add the keyframes animation to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-280px * 8 - 6px * 8));
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Clean up on unmount
      document.head.removeChild(style);
    };
  }, []);



  return (
    <div className={`min-h-screen bg-[#0B0B0B] ${rethinkSans.variable} ${manrope.variable} ${interSemiBold.variable}`}>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        
        /* Optimisations performance */
        .video-container {
          will-change: transform;
          contain: layout style paint;
          transform: translate3d(0, 0, 0);
        }
        
        iframe {
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        /* Optimisation animations */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Navbar 
        isAffiliationPage={true} 
        homepageLinks={true}
      />
      <main>
        <AnimatedSection>
          <header>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-[80px] text-center font-inter-semi-bold text-[40px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] max-w-[600px] w-[90%] mx-auto tracking-[-1px] md:tracking-[-2.53px] bg-gradient-to-b from-white from-10% to-[#9844FF] to-75% bg-clip-text text-transparent pb-8 md:pb-8 [@media(max-width:768px)]:text-[32px] [@media(max-width:768px)]:font-manrope [@media(max-width:768px)]:pb-3"
                          >
                TALLER APP<br />CREATOR PROGRAM
              </motion.h1>
          </header>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-center max-w-[600px] w-[90%] mx-auto text-center font-rethink-sans text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-white/50 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[350px] [@media(max-width:768px)]:leading-[1.35]"
          >
            <div className="hidden md:block"><span className="text-white font-bold">Earn $1 per 1k</span> <span className="text-white font-bold">views</span> by smoothly integrating our app</div>
            <div className="hidden md:block">into your already successful Tiktok & Reels.</div>
            <div className="md:hidden"><span className="text-white font-bold">Earn $1 per 1k views</span> by smoothly</div>
            <div className="md:hidden">integrating our app into your already</div>
            <div className="md:hidden">successful Tiktok & Reels.</div>
          </motion.div>
        </AnimatedSection>

                <AnimatedSection>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center items-center gap-2 mt-8"
          >
            <motion.a
              href="https://eu.jotform.com/sign/251796473251059/invite/01jyyqbk9f73c9a238dcdac73b"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
              
              <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
              
              <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                <span className="text-white font-rethink-sans">💰 Join our program</span>
              </span>
            </motion.a>

            <motion.a
              href="https://quirky-daphne-313.notion.site/Taller-app-Creator-program-139793ad0b078092af4cf12458961c14?pvs=74"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
              
              <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
              
              <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                <span className="text-white font-rethink-sans">📖 Guidelines</span>
              </span>
            </motion.a>
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-[60px] w-[90%] max-w-[1000px] mx-auto rounded-[30px] bg-white/10 overflow-hidden relative"
          >
            <LazyYouTubeVideo videoId="zAQsAYt72WE" />
          </motion.div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div 
            className="mt-[120px] md:mt-[120px] mt-[80px] w-[90%] max-w-[700px] mx-auto space-y-4 md:space-y-6 space-y-3"
            style={{ 
              willChange: 'transform, opacity',
              contain: 'layout style paint'
            }}
          >
            {/* Step 1 */}
            <div 
              className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150"
              onClick={() => window.open('https://eu.jotform.com/sign/251796473251059/invite/01jyyqbk9f73c9a238dcdac73b', '_blank')}
            >
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  SIGN THE AGREEMENT <span className="ml-2">📩</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                Join the program by submitting your Paypal & a quick e-signature.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div 
              className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150"
              onClick={() => window.open('https://quirky-daphne-313.notion.site/Taller-app-Creator-program-139793ad0b078092af4cf12458961c14?pvs=74', '_blank')}
            >
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  READ OUR GUIDELINES <span className="ml-2">🤖</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                Discover how to feature the app smoothly in your videos.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div 
              className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdHDpzipdK2Glb8vKd66eb74WlVZfORfIQy2F7uA5K5tHLF0g/viewform?usp=sf_link', '_blank')}
            >
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  SUBMIT YOUR CONTENT<span className="ml-2">🎥</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                Submit all videos via our Google Form so we can track all your views.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative">
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  EARN MONEY <span className="ml-2">💸</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                  Get pay 1$ for every 1k views.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Video Examples Section */}
        <div className="mt-[140px] md:mt-[140px] mt-[100px] py-[80px] md:py-[80px] py-[40px] bg-[#141414] overflow-hidden">
          <div className="w-full max-w-none">
            <h2 className="text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
              Videos examples
            </h2>
            
            <p className="text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px] px-4 md:px-0">
              Check out these high-performing videos <br className="md:hidden" /> 
              from our top creators.
              <br className="hidden md:block" />
              <span className="hidden md:inline">Follow their content style, farm views, and start earning today!</span>
            </p>
            
            <div className="relative w-full overflow-hidden">
              <div 
                className="flex w-full video-container"
                style={{
                  animation: 'scroll 60s linear infinite',
                  animationPlayState: isPaused ? 'paused' : 'running',
                  width: 'fit-content',
                  display: 'flex'
                }}
              >
                {/* Define links array once outside of the mapping functions */}
                {(() => {
                  const links = [
                    "https://www.tiktok.com/embed/v2/7462046421919812886?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7460792937895562504?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7474749431812918530?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7453486785952304406?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7473163099193855254?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7446983956806896902?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7494434758039080238?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz",
                    "https://www.tiktok.com/embed/v2/7489572799351115030?lang=en&referrer=https%3A%2F%2Ftallerapp.xyz"
                  ];
                  
                  // Render both sets of videos using the same links array
                  return (
                    <>
                      {/* First set of videos */}
                      {Array.from({ length: links.length }).map((_, index) => {
                        const linkIndex = index;
                        
                        return (
                          <div 
                            key={`video-${index}`} 
                            className="flex-shrink-0 w-[280px] md:w-[320px] mx-3"
                            onMouseEnter={handlePause}
                            onMouseLeave={handleResume}
                            onClick={handlePause}
                          >
                            <LazyTikTokVideo 
                              src={links[linkIndex]} 
                              index={index}
                            />
                          </div>
                        );
                      })}
                      
                      {/* Duplicate the first set for seamless looping */}
                      {Array.from({ length: links.length }).map((_, index) => {
                        const linkIndex = index;
                        
                        return (
                          <div 
                            key={`video-duplicate-${index}`} 
                            className="flex-shrink-0 w-[280px] md:w-[320px] mx-3"
                            onMouseEnter={handlePause}
                            onMouseLeave={handleResume}
                            onClick={handlePause}
                          >
                            <LazyTikTokVideo 
                              src={links[linkIndex]} 
                              index={`duplicate-${index}`}
                            />
                          </div>
                        );
                      })}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <AnimatedSection>
          <div className="mt-[100px] md:mt-[100px] mt-[60px] mb-[100px] md:mb-[100px] mb-[60px]">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-[90%] max-w-[1000px] mx-auto"
            >
              <h2 className="text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
                Frequently Asked Questions
              </h2>
              
              <p className="text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px]">
                Get quick answers to the most common
                <br />
                questions about our creator program.
              </p>
              
              <FaqSection />
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

function FaqItem({ question, answer, isOpen, toggleFaq, id }) {
  return (
    <div className="rounded-[20px] bg-[#0F0F0F] border border-white/5 overflow-hidden">
      <button 
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => toggleFaq(id)}
      >
        <span className="text-white text-[18px] md:text-[20px] font-medium">{question}</span>
        <span className="text-white text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-white/70">
          {answer}
        </div>
      </motion.div>
      
      {isOpen && <div className="border-t border-white/5 mx-6 mb-0"></div>}
    </div>
  );
}

function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState(null);
  
  const toggleFaq = useCallback((id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  }, [openFaqId]);
  
  const faqItems = [
    {
      id: 1,
      question: "When are payments processed?",
      answer: "Taller™ creators are paid on the 1st of each month. We take a snapshot of all the views generated during the previous month and pay you the corresponding amount."
    },
    {
      id: 2,
      question: "What payment methods do we support?",
      answer: "We currently only support PayPal or Bank payments for amounts above 500$ (this may change in the future)."
    },
    {
      id: 3,
      question: "Can I post unlimited content?",
      answer: "Yes, you can post as much content as you want. We will pay you for all the views generated."
    },
    {
      id: 4,
      question: "Can I post the same content multiple times?",
      answer: "No! You need to create new content for each post."
    },
    {
      id: 5,
      question: "When can I start making content?",
      answer: "Once you sign the agreement, you can start making content. (Takes 2 minutes)"
    },
    {
      id: 6,
      question: "Is there a minimum payout?",
      answer: "Yes, the minimum payout is 10$."
    },
    {
      id: 7,
      question: "Is there a revenue cap per video?",
      answer: "Yes, we have a revenue cap of 500$ per video."
    },
    {
      id: 8,
      question: "How long are my video views counted towards payment?",
      answer: "Views are only counted during the same calendar month in which the video is posted. For example, if you post on the 10th of the month, your views will be tracked and counted for 20–21 days, until the end of that month. Views after that won’t be included for payment purposes."
    },

  ];
  
  return (
    <div className="space-y-4 md:space-y-4 space-y-2 max-w-[700px] mx-auto">
      {faqItems.map(item => (
        <FaqItem 
          key={item.id}
          id={item.id}
          question={item.question} 
          answer={item.answer}
          isOpen={openFaqId === item.id}
          toggleFaq={toggleFaq}
        />
      ))}
    </div>
  );
}

// Composant optimisé pour lazy loading des vidéos YouTube
function LazyYouTubeVideo({ videoId }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="aspect-video w-full">
      {isVisible ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-[20px]">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?si=j334hmDg-cS3Q5Hr`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className="rounded-[20px]"
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          />
        </>
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-[20px]">
          <div className="text-white/50">Click to load video</div>
        </div>
      )}
    </div>
  );
}

// Composant optimisé pour lazy loading des vidéos TikTok
function LazyTikTokVideo({ src, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '200px' // Commencer à charger 200px avant
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={videoRef}
      className="aspect-[9/16] w-full bg-black rounded-[20px] overflow-hidden relative"
    >
      {isVisible ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={src}
            className="w-full h-full rounded-[20px] border-0"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'black',
              transform: 'scale(1.02)',
              transformOrigin: 'center center',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </>
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="text-white/30 text-xs">Loading...</div>
        </div>
      )}
    </div>
  );
}

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Change to true pour éviter les re-renders
    amount: 0.05, // Réduire encore plus le threshold
    margin: "0px 0px -50px 0px" // Trigger plus tôt
  });

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-300 ease-out ${isInView ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transform: isInView ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
}
