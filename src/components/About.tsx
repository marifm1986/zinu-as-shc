import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
interface AboutProps {
  openModal: () => void;
}
export function About({
  openModal
}: AboutProps) {
  return <section id="about" className="w-full py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-[#1a4b8e] mb-6">
            Work with trustworthy professionals
          </h2>
          <p className="text-gray-700 mb-4">
            At Zinu, we take pride in our team of dedicated credit repair
            specialists who are committed to helping you achieve financial
            freedom through improved credit scores.
          </p>
          <p className="text-gray-700 mb-4">
            Our experts have years of experience navigating the complexities
            of credit reporting systems and have successfully helped thousands
            of clients rebuild their credit profiles.
          </p>
          <p className="text-gray-700 mb-6">
            We understand that each client's situation is unique, which is why
            we develop personalized strategies tailored to your specific needs
            and goals.
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.button onClick={openModal} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium shadow-md">
              Speak to a Counselor
            </motion.button>
          </div>
        </motion.div>
        <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="md:w-1/2 md:pl-12">
          <div className="rounded-lg overflow-hidden shadow-lg ">
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Credit counseling session" className="w-full h-[400px] object-cover " />
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}