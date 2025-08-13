import React from 'react';
import { motion } from 'framer-motion';
interface HeroProps {
  openModal: () => void;
}
export function Hero({
  openModal
}: HeroProps) {
  return <section className="w-full bg-[#1a3a5f] py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      opacity: 0.3
    }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your journey starts with us.
          </motion.h1>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="text-lg md:text-xl text-gray-200 mb-8">
            Zinu Credit Repair offers expert guidance to help you achieve
            financial freedom through improved credit scores and personalized
            solutions.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.6
        }} className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={openModal} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium">
              Get Started Now
            </button>
            <a href="#services" className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}