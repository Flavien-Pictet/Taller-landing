'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";

export default function Footer() {
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
    <footer className="w-full bg-[#0B0B0B] py-16 mt-20" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Branding */}
          <div className="mb-12 md:mb-0">
            <Link href="/" aria-label="Taller App Home">
              <Image
                src={Logo}
                alt="Taller - Height Growth Tracking App"
                width={56}
                height={56}
                className="rounded-[14px]"
                priority={false}
              />
            </Link>
            <p className="text-white/60 mt-3 text-sm max-w-[280px]">
              The #1 App to track & optimize your height growth.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-8 sm:gap-16" aria-label="Footer Navigation">
            <div>
              <h2 className="text-white font-semibold mb-4">About</h2>
              <ul className="space-y-3" role="list">
                <li>
                  <a 
                    href="#features" 
                    onClick={scrollToFeatures}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Learn about our features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#product" 
                    onClick={scrollToProduct}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="View our product details"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <Link 
                    href="https://quirky-daphne-313.notion.site/Taller-app-Affiliation-program-139793ad0b078092af4cf12458961c14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Join our affiliate program"
                  >
                    Affiliate program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-semibold mb-4">Company</h2>
              <ul className="space-y-3" role="list">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Read our privacy policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="View our terms and conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            <Link 
              href="https://asymmetriclabs.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white/60 transition-colors"
              aria-label="Visit Asymmetric Labs website"
            >
              ASYMMETRIC LABS FZC
            </Link>
            {" "}© {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export function DownloadButtons() {
  return (
    <div className="flex gap-4" role="group" aria-label="App download options">
      <Link 
        href="#" 
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full"
        aria-label="Download on the App Store"
      >
        <Image
          src={Logo}
          alt="App Store"
          width={15}
          height={17}
          priority={false}
        />
        Apple
      </Link>
      
      <Link 
        href="#" 
        className="flex items-center gap-2 bg-[#1C1C1E] text-white px-6 py-3 rounded-full"
        aria-label="Get it on Google Play"
      >
        <Image
          src="/images/android-icon.svg"
          alt="Google Play"
          width={20}
          height={20}
          priority={false}
        />
        Android
      </Link>
    </div>
  );
}
