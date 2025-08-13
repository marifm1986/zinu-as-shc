import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
export function Testimonials() {
  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  return <section className="w-full py-16 bg-[#1a3a5f] text-white">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="text-3xl font-bold text-center mb-12">
          Why choose us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[{
          title: 'Experience',
          description: 'With over 10 years of experience in credit repair, we have the knowledge and expertise to handle any situation.'
        }, {
          title: 'Excellent Service',
          description: 'We pride ourselves on providing personalized attention and support throughout your credit repair journey.'
        }, {
          title: 'Proven Results',
          description: 'Our clients consistently see significant improvements in their credit scores and financial situations.'
        }].map((feature, index) => <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={featureVariants} className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>)}
        </div>
        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto">
          <motion.div whileHover={{
          y: -5
        }} transition={{
          duration: 0.2
        }} className="bg-white bg-opacity-5 p-8 rounded-lg relative">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Alex T.</h4>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-300">
                  "Working with Zinu was the best decision I made for my
                  financial future. Their team was professional, knowledgeable,
                  and genuinely cared about helping me improve my credit. Within
                  just a few months, my score increased by over 100 points, and
                  I was able to qualify for a mortgage with a great interest
                  rate!"
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white bg-opacity-30'}`}></div>)}
            </div>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20">
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20">
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>;
}