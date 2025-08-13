import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
interface ProcessProps {
  openModal: () => void;
}
export function Process({
  openModal
}: ProcessProps) {
  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  return <section id="process" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Credit score improvement strategies" className="rounded-lg shadow-md w-full" />
          </motion.div>
          <div className="md:w-1/2 md:pl-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-[#1a4b8e] mb-6">
                Solutions that meet your needs
              </h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive approach to credit repair is designed to
                address all aspects of your credit profile and help you achieve
                your financial goals.
              </p>
            </AnimatedSection>
            <div className="space-y-4">
              <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={stepVariants} className="flex items-start">
                <div className="w-8 h-8 bg-[#e6f0ff] rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-[#1a4b8e] font-semibold">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a4b8e] mb-1">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-700">
                    We begin with a thorough review of your credit reports and
                    financial situation.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={stepVariants} className="flex items-start">
                <div className="w-8 h-8 bg-[#e6f0ff] rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-[#1a4b8e] font-semibold">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a4b8e] mb-1">
                    Credit Analysis
                  </h3>
                  <p className="text-gray-700">
                    Our experts identify errors, inaccuracies, and negative
                    items affecting your score.
                  </p>
                </div>
              </motion.div>
              <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={stepVariants} className="flex items-start">
                <div className="w-8 h-8 bg-[#e6f0ff] rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-[#1a4b8e] font-semibold">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a4b8e] mb-1">
                    Dispute Strategy
                  </h3>
                  <p className="text-gray-700">
                    We develop a customized plan to address each issue on your
                    credit report.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="mt-8 text-center md:text-left">
              <motion.button onClick={openModal} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium shadow-md">
                Start Your Credit Repair Today
              </motion.button>
            </motion.div>
          </div>
        </div>
        <AnimatedSection delay={0.2}>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#1a4b8e] mb-6 text-center">
              Results that provide peace of mind
            </h3>
            <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Our clients see an average improvement of 53-187 points in their
              credit scores. Take the first step toward financial freedom today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[{
              client: 'Client 1',
              points: '+87',
              months: 2
            }, {
              client: 'Client 2',
              points: '+124',
              months: 4
            }, {
              client: 'Client 3',
              points: '+165',
              months: 6
            }, {
              client: 'Client 4',
              points: '+187',
              months: 8
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className="text-center">
                  <p className="text-gray-500 text-sm mb-1">{item.client}</p>
                  <p className="text-2xl font-bold text-[#1a4b8e] mb-1">
                    {item.points}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Points improved after {item.months} months
                  </p>
                </motion.div>)}
            </div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }} className="text-center">
              <motion.button onClick={openModal} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors inline-block font-medium">
                Get Your Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
}