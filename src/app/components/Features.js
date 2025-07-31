'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const features = [
  {
    icon: '/images/data.svg',
    title: 'Dynamic height prediction',
    description: 'Predict your future & potential height with real-time accuracy, updated monthly based on your progress, habits, and key growth factors.'
  },
  {
    icon: '/images/community.svg',
    title: 'Community',
    description: 'Our exclusive community gives you access to real discussions, shared experiences and the latest insights on what actually works.'
  },
  {
    icon: '/images/heart.svg',
    title: 'Fitness & Nutrition plan',
    description: 'A personalized fitness and nutrition plan designed to support your natural growth by optimizing key habits and routines.'
  },
  {
    icon: '/images/bot.svg',
    title: '24/7 AI Coach',
    description: 'From growth potential to posture, nutrition, sleep, and supplements — the AI knows your data and responds instantly to your questions.'
  },
  {
    icon: '/images/todo.svg',
    title: 'Optimal daily routine',
    description: 'From posture exercises to nutrition, sleep, supplement, every habit is customized and adapts over time based on your profile.'
  },
  {
    icon: '/images/cart.svg',
    title: 'Product recommendation',
    description: 'Personalized supplement and product recommendations tailored to your data to support natural growth.',
    badge: 'soon'
  }
];

export default function Features() {
  // Add JSON-LD structured data for features
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': features.map((feature, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': feature.title,
        'description': feature.description
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="features" 
      className="py-20 md:pt-[160px] md:pb-20"
      aria-label="Product Features"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 
          className="text-white font-rethink-sans text-[26px] md:text-[32px] font-bold leading-[46.8px] mb-4"
          id="features-heading"
        >
          Unlock your full potential.
        </h2>
        <p 
          className="mx-auto px-4 md:px-0 max-w-[280px] md:max-w-[376px] text-center font-rethink-sans text-[16px] md:text-[18px] font-medium leading-[1.3] md:leading-[22.4px] tracking-[0.32px] text-white/50"
          aria-describedby="features-heading"
        >
          We analyze your growth potential and{' '}
          give you a custom plan to make sure{' '}
          you reach it
        </p>
      </motion.div>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 max-w-[1200px] mx-auto px-4 relative w-full before:hidden md:before:block before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(180,119,255,0.00)_0%,rgba(180,119,255,0.20)_50%,rgba(180,119,255,0.00)_100%)]"
        role="list"
        aria-label="Feature list"
      >
        {features.map((feature, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`px-0 py-8 md:p-8 relative ${
              // Add right border with vertical gradient for first and second items in the top row (desktop only)
              (index === 0 || index === 1 ? ' after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(180deg,rgba(180,119,255,0.00)_0%,rgba(180,119,255,0.20)_100%)]' : '') +
              // Add right border with reversed vertical gradient for fourth and fifth items in the bottom row (desktop only)
              (index === 3 || index === 4 ? ' after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(0deg,rgba(180,119,255,0.00)_0%,rgba(180,119,255,0.20)_100%)]' : '') +
              // Add bottom gradient border for mobile view (except last item)
              (index !== features.length - 1 ? ' before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(180,119,255,0.00)_0%,rgba(180,119,255,0.20)_50%,rgba(180,119,255,0.00)_100%)]' : '')
            }`}
            role="listitem"
          >
            <div className="mb-4">
              <Image
                src={feature.icon}
                alt={`${feature.title} feature icon`}
                width={20}
                height={20}
                className="text-[#9844FF]"
                loading="lazy"
              />
            </div>
            <h3 
              className="text-white font-rethink-sans text-[18px] font-semibold leading-[22.4px] tracking-[0.32px] mb-2 flex items-center gap-2"
              id={`feature-${index}`}
            >
              {feature.title}
              {feature.badge && (
                <span 
                  className="flex justify-center items-center w-[42px] h-[15px] px-[9px] py-[4px] rounded-[300px] border border-[#954CEE]/50 bg-[#954CEE]/10 text-[#954CEE] text-xs"
                  aria-label={`${feature.badge} feature`}
                >
                  <span className="-translate-y-[1px]">{feature.badge}</span>
                </span>
              )}
            </h3>
            <p 
              className="text-white/50 font-rethink-sans text-[14px] font-medium leading-[22.4px] tracking-[0.32px]"
              aria-labelledby={`feature-${index}`}
            >
              {feature.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
