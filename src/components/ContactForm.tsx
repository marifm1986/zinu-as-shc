import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
export function ContactForm() {
  const inputVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  return <section id="contact" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#f5f8fc] p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#1a4b8e] mb-6 text-center">
                Have any questions?
              </h2>
              <p className="text-gray-700 mb-8 text-center">
                Fill out the form below and one of our credit experts will
                contact you within 24 hours.
              </p>
              <form className="space-y-6">
                {[{
                type: 'text',
                placeholder: 'Full Name'
              }, {
                type: 'email',
                placeholder: 'Email'
              }, {
                type: 'tel',
                placeholder: 'Phone'
              }].map((input, index) => <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} variants={inputVariants}>
                    <input type={input.type} placeholder={input.placeholder} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4b8e] focus:border-transparent transition-all" />
                  </motion.div>)}
                <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{
                once: true
              }} variants={inputVariants}>
                  <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a4b8e] focus:border-transparent transition-all"></textarea>
                </motion.div>
                <motion.button type="submit" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full bg-[#1a3a5f] text-white py-3 px-6 rounded-md hover:bg-[#0d2c4a] transition-colors font-medium">
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
}