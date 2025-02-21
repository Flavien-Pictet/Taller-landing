'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Product() {
  return (
    <div id="product" className="w-full max-w-[1100px] mx-auto px-4 mt-[50px] md:mt-[300px]">
      {/* Height Prediction Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <Image
            src="/images/HeightChart.svg"
            alt="Height prediction chart"
            width={600}
            height={400}
            className="w-full h-auto rounded-[20px]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
        >
          <h2 className="text-white font-rethink-sans text-[26px] font-bold mb-4">
            Predict your future height
          </h2>
          <p className="text-white/50 text-[16px]">
            Our dynamic height prediction updates every month based on your activity and progress tracking. We rely on machine learning and environmental factors to estimate your potential height and track changes over time.
          </p>
        </motion.div>
      </motion.div>

      {/* Maximization Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <Image
            src="/images/TodoCard.svg"
            alt="Daily tasks and habits"
            width={600}
            height={400}
            className="w-full h-auto rounded-[20px]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
        >
          <h2 className="text-white font-rethink-sans text-[26px] font-bold mb-4">
            Maximize your potential
          </h2>
          <p className="text-white/50 text-[16px]">
            From posture exercises to nutrition, every habit is customized and adapts over time based on your progress. Stay on track, build better habits, and give yourself the best chance to reach your full potential.
          </p>
        </motion.div>
      </motion.div>

      {/* Community Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <Image
            src="/images/CommunityCard.svg"
            alt="Community engagement"
            width={600}
            height={400}
            className="w-full h-auto rounded-[20px]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
        >
          <h2 className="text-white font-rethink-sans text-[26px] font-bold mb-4">
            Engage with the community
          </h2>
          <p className="text-white/50 text-[16px]">
            Height growth isn't a solo journey. Our community gives you access to real experiences, shared knowledge, and support from others on the same path.
          </p>
        </motion.div>
      </motion.div>

      {/* AI Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 order-2 md:order-1"
        >
          <Image
            src="/images/AICard.svg"
            alt="AI chat interface"
            width={600}
            height={400}
            className="w-full h-auto rounded-[20px]"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
        >
          <h2 className="text-white font-rethink-sans text-[26px] font-bold mb-4">
            Ask Taller AI
          </h2>
          <p className="text-white/50 text-[16px]">
            Have questions about your height potential? Taller AI gives you real-time, data-driven answers based on your unique profile. Whether you're wondering how much you can grow, what factors influence height, or how to maximize your potential, our AI provides clear, personalized insights.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
