import React from 'react';
import { FileText, TrendingUp, Shield, Rocket, Loader, Flame } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
interface ServicesProps {
  openModal: () => void;
}
export function Services({
  openModal
}: ServicesProps) {
  const cardVariants = {
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
  return <section id="services" className="w-full py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="text-red-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Free Consultation
          </h3>
          <p className="text-gray-700">
            Start with a detailed credit analysis to identify issues affecting
            your credit score and develop a personalized plan.
          </p>
        </motion.div>
        <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-blue-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Credit Score Analysis
          </h3>
          <p className="text-gray-700">
            Professional review of your credit reports to identify errors,
            negative items, and opportunities for improvement.
          </p>
        </motion.div>
        <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-green-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Dispute Resolution
          </h3>
          <p className="text-gray-700">
            Our team works directly with credit bureaus to challenge
            inaccuracies and resolve negative items on your behalf.
          </p>
        </motion.div>
        <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket className="text-pink-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Launch Dispute Process
          </h3>
          <p className="text-gray-700">
            Now that you have indicated questionable entries on your credit report, it's our turn to launch the dispute process on your behalf.
          </p>
        </motion.div>
        <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Loader className="text-purple-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Await Updated Credit Bureau Report
          </h3>
          <p className="text-gray-700">
            The final step in the dispute process is waiting on the credit bureau to finish their investigation - to be completed within 30-45 days.
          </p>
        </motion.div>
        <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={cardVariants} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center" whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }}>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Flame className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#1a4b8e]">
            Get Started Now
          </h3>
          <p className="text-gray-700">
            by filling out our online form and submitting your information to us for evaluation. It's easy to apply and even easier to follow our process!.
          </p>
        </motion.div>
      </div>
      <AnimatedSection delay={0.5} className="mt-8 sm:mt-12 text-center px-4">
        <button onClick={openModal} className="bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md hover:bg-orange-600 transition-colors font-medium shadow-md text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-md mx-auto">
          Start Your Credit Repair Journey Today
        </button>
      </AnimatedSection>
    </div>
  </section>;
}