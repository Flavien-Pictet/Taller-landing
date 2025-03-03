'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import localFont from 'next/font/local';
import Features from "./components/Features";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { motion, useInView } from "framer-motion";

const rethinkSans = localFont({
  src: '../../public/fonts/RethinkSans-Bold.ttf',
  variable: '--font-rethink-sans'
});

const glancyr = localFont({
  src: [
    {
      path: '../../public/fonts/Glancyr-Medium.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-glancyr'
});

const shadowsIntoLight = localFont({
  src: [
    {
      path: '../../public/fonts/ShadowsIntoLight-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-shadows'
});

const manrope = localFont({
  src: '../../public/fonts/Manrope-Bold.ttf',
  variable: '--font-manrope'
});

const interSemiBold = localFont({
  src: '../../public/fonts/Inter_18pt-SemiBold.ttf',
  variable: '--font-inter-semi-bold'
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#0B0B0B] ${rethinkSans.variable} ${glancyr.variable} ${shadowsIntoLight.variable} ${manrope.variable} ${interSemiBold.variable}`}>
      <Navbar />
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
              Predict & Maximize your Height Potential
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
            className="flex flex-col justify-center max-w-[364px] w-[90%] mx-auto text-center font-rethink-sans text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-white/50 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[300px]"
          >
            You can't control genetics, but you can optimize growth. 500,000+ men agree.
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
            href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&ct=website&mt=8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] mx-auto mt-8 rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
            
            <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
            
            <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
              <Image
                src="/images/downloads.svg"
                alt="Download icon"
                width={17}
                height={16}
                className="mr-2"
              />
              <span className="text-white font-rethink-sans">Download Taller</span>
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
            className="mt-[30px] w-full md:w-[100%] lg:w-full max-w-[1000px] mx-auto px-4"
          >
            <Image
              src="/images/mokeup.png"
              alt="Taller app interface showing height prediction and growth tracking features for maximizing height potential"
              width={1000}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </AnimatedSection>

        <section aria-label="Accuracy Statistics" className="mt-[100px] mx-auto w-[90%] max-w-[1100px] flex justify-center items-center py-[72px] rounded-[30px] border border-dashed border-white/10 bg-[#0D0D0D]">
          <div className="text-center">
            <p className="text-white font-shadows text-[24px] mb-4" style={{ fontFamily: 'var(--font-shadows)' }}>Prediction accuracy 🎯</p>
            <div className="text-white font-glancyr text-[60px] md:text-[80px] font-bold tracking-[-2px]" style={{ fontFamily: 'var(--font-glancyr)' }}>
              <Counter targetNumber={98.5} duration={750} />
            </div>
          </div>
        </section>
        
        <Features />
        <Product />
        <Testimonials />
        
        <AnimatedSection>
          <section aria-label="Download Call to Action" className="w-full max-w-[1200px] mx-auto px-4 mt-32 mb-20">
            <div className="w-full rounded-[30px] border border-white/10 bg-gradient-to-b from-[#0B0B0B] to-[#150B1D] p-16 text-center relative overflow-hidden">
              <h2 className="text-[26px] md:text-[26px] font-bold text-white mb-4">
                Ready to reach your true potential?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-[500px] mx-auto">
                If you're in your teens or early 20s, small changes can help you reach your full height potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a
                  href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&ct=website&mt=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <Image
                    src="/images/BlackApple.svg"
                    alt="Apple logo"
                    width={15}
                    height={17}
                  />
                  <span>Apple</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10 rounded-[3000px]"
                >
                  <Image
                    src="/images/android.svg"
                    alt="Android logo"
                    width={20}
                    height={20}
                  />
                  <span>Android</span>
                </a>
              </div>
              <Image
                src="/images/Gradient.png"
                alt="Gradient effect"
                width={1200}
                height={300}
                className="absolute bottom-0 left-0 w-full h-auto object-cover"
              />
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} style={{ opacity: isInView ? 1 : 0 }}>
      {children}
    </div>
  );
}

function Counter({ targetNumber, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(targetNumber * percentage);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetNumber, duration, isInView]);

  return <span ref={counterRef} aria-live="polite" aria-atomic="true">{count.toFixed(1)}%</span>;
}
