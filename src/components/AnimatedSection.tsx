import React, { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
export function AnimatedSection({
  children,
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.8,
    delay: delay,
    ease: [0.25, 0.1, 0.25, 1.0]
  }} className={className}>
      {children}
    </motion.div>;
}