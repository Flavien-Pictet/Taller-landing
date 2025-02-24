'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AppleIcon from '../../../public/images/apple.svg';
import { useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I didn't expect much when I downloaded the app but tracking my progress was surprisingly easy. I used to think height was 100% out of my control but this app proved otherwise. By following daily habits my posture improved and I feel more confident.",
      name: "Arslan Temirhanov",
      username: "@beck13213",
      avatar: "/images/Review1.png"
    },
    {
      text: "At first I doubted how accurate a height prediction could be. But after entering my details and tracking progress for a few months I was shocked at how accurate it was. The app considered my growth patterns and habits, making it feel personalized rather than random. It also improved my posture.",
      name: "Gabriel Dridi",
      username: "@hyperiddaren",
      avatar: "/images/Review2.png"
    },
    {
      text: "The private community is a game changer. It's not just about tracking height but it's about learning from others on the same journey. Seeing progress, sharing tips and getting support keeps me motivated. It's made a huge difference in how I approach my height goals.",
      name: "Julian Haage",
      username: "@julsn.214",
      avatar: "/images/Review3.png"
    }
  ];

  // Add JSON-LD structured data for reviews
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': testimonials.map((testimonial, index) => ({
        '@type': 'Review',
        'position': index + 1,
        'author': {
          '@type': 'Person',
          'name': testimonial.name
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5',
          'bestRating': '5'
        },
        'reviewBody': testimonial.text
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
      className="w-full max-w-[1200px] mx-auto px-4 mt-[100px]"
      aria-label="Customer Testimonials"
    >
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-left mb-8"
      >
        <span role="text" className="text-[16px] text-white/50 font-rethink-sans border border-white/10 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.02)] shadow-[inset_0px_1px_10px_0px_rgba(255,255,255,0.05)] inline-block mb-[10px]">Users feedback</span>
        <h2 className="mt-4 text-[26px] md:text-[40px] font-bold text-white font-rethink-sans leading-[35px] md:leading-[45px] flex flex-col">
          <span>There's a reason thousands rely on our app to</span>
          <div className="flex flex-col md:flex-row md:gap-2">
            <span>optimize their growth,</span>
            <span className="text-[#949FA6]">try it yourself.</span>
          </div>
        </h2>
        <p className="mt-4 text-[18px] text-white/50 w-full max-w-[734px] min-h-[58px]">
          It's not a miracle fix, but for many our app has helped them take real, measurable steps toward maximizing their height potential and that's what truly matters.
        </p>
      </motion.header>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-start mt-[60px]"
        role="list"
      >
        {testimonials.map((testimonial, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="w-full flex flex-col justify-between bg-[#0D0D0D] rounded-[20px] p-6 border border-white/10"
            role="listitem"
          >
            <blockquote>
              <p className="text-[#949FA6] font-rethink-sans text-[18px] font-normal leading-[29.333px] mb-6">
                {testimonial.text}
              </p>
            </blockquote>
            <footer>
              <div className="flex items-center gap-3">
                <a 
                  href={`https://www.tiktok.com/${testimonial.username}?lang=fr`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                  aria-label={`Visit ${testimonial.name}'s TikTok profile`}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={`Profile picture of ${testimonial.name}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                    quality={90}
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.username}</p>
                  </div>
                </a>
              </div>
              <div className="flex gap-1 mt-3" aria-label="5 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Image 
                    key={i} 
                    src="/images/Star.svg" 
                    alt="" 
                    width={16} 
                    height={16}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
