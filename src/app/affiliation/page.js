'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import localFont from 'next/font/local';

const rethinkSans = localFont({
  src: '../../../public/fonts/RethinkSans-Bold.ttf',
  variable: '--font-rethink-sans'
});

const glancyr = localFont({
  src: [
    {
      path: '../../../public/fonts/Glancyr-Medium.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-glancyr'
});

const shadowsIntoLight = localFont({
  src: [
    {
      path: '../../../public/fonts/ShadowsIntoLight-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-shadows'
});

const manrope = localFont({
  src: '../../../public/fonts/Manrope-Bold.ttf',
  variable: '--font-manrope'
});

const interSemiBold = localFont({
  src: '../../../public/fonts/Inter_18pt-SemiBold.ttf',
  variable: '--font-inter-semi-bold'
});

export default function Affiliation() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

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

  // Function to handle pausing the animation
  const handlePause = () => {
    setIsPaused(true);
  };

  // Function to handle resuming the animation
  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div className={`min-h-screen bg-[#0B0B0B] ${rethinkSans.variable} ${glancyr.variable} ${shadowsIntoLight.variable} ${manrope.variable} ${interSemiBold.variable}`}>
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
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="mt-[80px] text-center font-inter-semi-bold text-[40px] md:text-[50px] font-bold leading-[1.1] md:leading-[1.1] max-w-[415px] w-[90%] mx-auto tracking-[-1px] md:tracking-[-2.53px] bg-gradient-to-b from-white from-10% to-[#9844FF] to-75% bg-clip-text text-transparent pb-8 md:pb-8 [@media(max-width:768px)]:text-[32px] [@media(max-width:768px)]:font-manrope [@media(max-width:768px)]:pb-3"
            >
              TALLER APP<br />AFFILIATION
            </motion.h1>
          </header>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center max-w-[500px] w-[90%] mx-auto text-center font-rethink-sans text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-white/50 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[300px]"
          >
            Do you have a basketball audience and want an easy way to start monetizing it? We got you!
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <motion.a 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#"
            className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] mx-auto mt-8 rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
            
            <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
            
            <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
              <span className="text-white font-rethink-sans">💰 Join our program</span>
            </span>
          </motion.a>
        </AnimatedSection>
        
        <AnimatedSection>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-[60px] w-[90%] max-w-[1000px] mx-auto rounded-[30px] bg-white/10 overflow-hidden relative"
          >
            <div className="aspect-video w-full flex items-center justify-center">
              <button 
                className="absolute z-10 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                aria-label="Play video"
              >
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
              </button>
              
              {/* Replace with your actual video component or embed */}
              <div className="w-full h-full bg-black/50 absolute inset-0">
                {/* Video will be loaded here */}
                {/* You can replace this with an actual video element or iframe */}
              </div>
            </div>
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
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-[80px] md:mt-[80px] mt-[40px] w-[90%] max-w-[700px] mx-auto space-y-4 md:space-y-6 space-y-3"
          >
            {/* Step 1 */}
            <div className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative">
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  JOIN OUR PROGRAM <span className="ml-2">📩</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                  Submit your application
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative">
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  SETUP MANYCHAT <span className="ml-2">🤖</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                  Setup a simple Manychat DM automation
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative">
              <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#9844FF] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                  PUBLISH CONTENT<span className="ml-2">🎥</span>
                </h3>
                <p className="text-white/50 text-[14px] md:text-[16px] mt-1">
                  Post height-related content
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
                  Get pay 0.07$ for all the clicks you generate
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
        
        {/* Video Examples Section */}
        <div className="mt-[100px] md:mt-[100px] mt-[60px] py-[80px] md:py-[80px] py-[40px] bg-[#141414] overflow-hidden">
          <div className="w-full max-w-none">
            <h2 className="text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
              Videos examples
            </h2>
            
            <p className="text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px] px-4 md:px-0">
              Check out these high-performing videos<br className="md:hidden" /> 
              from our top affiliates.
              <br className="hidden md:block" />
              <span className="hidden md:inline">Follow their content style, drive clicks, and start earning today!</span>
            </p>
            
            <div className="relative w-full overflow-hidden">
              <div 
                className="flex w-full"
                style={{
                  animation: 'scroll 60s linear infinite',
                  animationPlayState: isPaused ? 'paused' : 'running',
                  width: 'fit-content', // Make sure the container fits all items
                  display: 'flex',
                }}
              >
                {/* Define links array once outside of the mapping functions */}
                {(() => {
                  const links = [
                    "https://www.instagram.com/reel/DFmCnk8M9wN/embed/",
                    "https://www.instagram.com/reel/DG1bk95SI5d/embed/",
                    "https://www.instagram.com/reel/DG0mnHNR3U8/embed/",
                    "https://www.instagram.com/reel/DGpEyQOtqe4/embed/",
                    "https://www.instagram.com/reel/DHBXr1MMt0f/embed/",
                    "https://www.instagram.com/reel/DGDpOHYT2LQ/embed/",
                    "https://www.instagram.com/reel/DGyB0IuxjWg/embed/"
                  ];
                  
                  // Render both sets of videos using the same links array
                  return (
                    <>
                      {/* First set of videos */}
                      {Array.from({ length: 8 }).map((_, index) => {
                        const linkIndex = index % links.length;
                        
                        return (
                          <div 
                            key={`video-${index}`} 
                            className="flex-shrink-0 w-[280px] md:w-[320px] mx-3"
                            onMouseEnter={handlePause}
                            onMouseLeave={handleResume}
                            onClick={handlePause}
                          >
                            <div className="aspect-[9/16] w-full">
                              <iframe
                                src={links[linkIndex]}
                                className="w-full h-full rounded-[20px]"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Duplicate the first set for seamless looping */}
                      {Array.from({ length: 8 }).map((_, index) => {
                        const linkIndex = index % links.length;
                        
                        return (
                          <div 
                            key={`video-duplicate-${index}`} 
                            className="flex-shrink-0 w-[280px] md:w-[320px] mx-3"
                            onMouseEnter={handlePause}
                            onMouseLeave={handleResume}
                            onClick={handlePause}
                          >
                            <div className="aspect-[9/16] w-full">
                              <iframe
                                src={links[linkIndex]}
                                className="w-full h-full rounded-[20px]"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                              ></iframe>
                            </div>
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
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="w-[90%] max-w-[1000px] mx-auto"
            >
              <h2 className="text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
                Frequently Asked Questions
              </h2>
              
              <p className="text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px]">
                Get quick answers to the most common
                <br />
                questions about our affiliate program
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
  
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const faqItems = [
    {
      id: 1,
      question: "When are payments processed?",
      answer: "Taller™ creators are paid on the 1st of each month. We take a snapshot of all the clicks generated during the previous month on ManyChat and pay you the corresponding amount."
    },
    {
      id: 2,
      question: "What payment methods do we support?",
      answer: "We currently only support PayPal payments or Bank payments (this may change in the future)."
    },
    {
      id: 3,
      question: "Can I post unlimited content?",
      answer: "Yes, you can post as much content as you want. We will pay you for all the clicks generated."
    },
    {
      id: 4,
      question: "Can I post the same content multiple times?",
      answer: "Yes! You can post the same video as much times as you want."
    },
    {
      id: 5,
      question: "When can I start making content?",
      answer: "Once we review your application (usually within 6 to 12 hours), we will send you an email with a partnership agreement. After you sign it, you can start creating content and earning money."
    }
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

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
      {children}
    </div>
  );
}
