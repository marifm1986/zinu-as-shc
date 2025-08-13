import { motion } from 'framer-motion';
interface FloatingCTAProps {
  openModal: () => void;
}
export function FloatingCTA({
  openModal
}: FloatingCTAProps) {
  return <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 max-sm:bottom-[110px] z-40">
    <motion.button onClick={openModal} initial={{
      opacity: 0,
      y: 100
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1,
      duration: 0.5
    }} whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} className="bg-orange-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-600 transition-colors font-medium shadow-lg flex items-center text-xs sm:text-base">
      Get Your Free Credit Analysis
    </motion.button>
  </div>;
}