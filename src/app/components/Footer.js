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
    <footer className="w-full bg-[#0B0B0B] py-16 mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* App Info */}
          <div className="mb-12 md:mb-0">
            <Image
              src={Logo}
              alt="Taller App Icon"
              width={56}
              height={56}
              className="rounded-[14px]"
            />
            <p className="text-white/60 mt-3 text-sm max-w-[280px]">
              The #1 App to track & optimize your height growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#features" 
                    onClick={scrollToFeatures}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#product" 
                    onClick={scrollToProduct}
                    className="text-white/60 hover:text-white transition-colors"
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
                  >
                    Affiliate program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="https://tallerapp.xyz/privacy.html" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="https://tallerapp.xyz/terms.html" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            <Link href="https://asymmetriclabs.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              ASYMMETRIC LABS FZC
            </Link>
            {" "}© All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export function DownloadButtons() {
  return (
    <div className="flex gap-4">
      <Link 
        href="#" 
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full"
      >
        <Image
          src={Logo}
          alt="Apple Icon"
          width={15}
          height={17}
        />
        Apple
      </Link>
      
      <Link 
        href="#" 
        className="flex items-center gap-2 bg-[#1C1C1E] text-white px-6 py-3 rounded-full"
      >
        <Image
          src="/images/android-icon.svg"
          alt="Android Icon"
          width={20}
          height={20}
        />
        Android
      </Link>
    </div>
  );
}
