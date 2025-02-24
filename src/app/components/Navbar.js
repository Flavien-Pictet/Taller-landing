'use client';
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProduct = (e) => {
    e.preventDefault();
    const element = document.getElementById('product');
    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`w-full border-b border-x border-white/10 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between w-full h-[68px] md:h-[78px] px-4 md:px-6 w-screen overflow-x-hidden gap-4 sm:gap-6">
            <Image 
              src={Logo} 
              alt="Logo" 
              width={50} 
              height={50}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px]"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-[30px] px-[50px] py-[14px] rounded-[60px] border border-white/10 shrink-0 absolute left-1/2 -translate-x-1/2">
              <a 
                href="https://quirky-daphne-313.notion.site/Taller-app-Affiliation-program-139793ad0b078092af4cf12458961c14"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
              >
                Become affiliate
              </a>
              <a 
                href="#features" 
                onClick={scrollToFeatures}
                className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
              >
                Features
              </a>
              <a 
                href="#product" 
                onClick={scrollToProduct}
                className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
              >
                Product
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2 flex-shrink-0">
              <a 
                href="https://apps.apple.com/us/app/taller-maximize-your-height/id6695758303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border border-white/15 transition-all duration-300 hover:bg-white/5 hover:border-white/25"
              >
                <Image 
                  src="/images/apple.svg" 
                  alt="Apple" 
                  width={12}
                  height={14}
                  className="w-[12px] h-[14px] sm:w-[14px] sm:h-[16px]"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border border-white/15 transition-all duration-300 hover:bg-white/5 hover:border-white/25"
              >
                <Image 
                  src="/images/android.svg" 
                  alt="Android" 
                  width={15}
                  height={14}
                  className="w-[15px] h-[14px] sm:w-[17px] sm:h-[16px]"
                />
              </a>

              <a 
                href="https://quirky-daphne-313.notion.site/Taller-app-Affiliation-program-139793ad0b078092af4cf12458961c14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[90px] h-[40px] px-3 py-[2px] rounded-[10px] bg-gradient-to-b from-[#8622FF] to-[#B374FF]"
              >
                <span className="text-white text-[13px] sm:text-[14px] whitespace-nowrap">Affiliation</span>
              </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4 flex-shrink-0">
              <a 
                href="https://apps.apple.com/us/app/taller-maximize-your-height/id6695758303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] bg-gradient-to-b from-[#8622FF] to-[#B374FF] transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              >
                <Image 
                  src="/images/apple.svg" 
                  alt="Apple" 
                  width={14} 
                  height={16}
                  className="-mt-[2px]"
                />
                <span className="text-white text-[14px] whitespace-nowrap">Apple</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] border border-white/15 transition-all duration-300 hover:bg-white/5 hover:border-white/25"
              >
                <Image 
                  src="/images/android.svg" 
                  alt="Android" 
                  width={17} 
                  height={16}
                />
                <span className="text-white text-[14px] whitespace-nowrap">Android</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[68px] md:h-[78px]" />
    </>
  );
};

export default Navbar; 