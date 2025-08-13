import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
// import { Testimonials } from './components/Testimonials';
// import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { ContactFormModal } from './components/ContactFormModal';
import { SuccessModal } from './components/SuccessModal';
import { FloatingCTA } from './components/FloatingCTA';
import { motion, AnimatePresence } from 'framer-motion';
import { HowCreditRepairWorks } from './components/HowCreditRepairWorks';
export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalType, setSuccessModalType] = useState<'success' | 'error'>('success');
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSuccess = (message: string) => {
    setSuccessMessage(message);
    setSuccessModalType('success');
    setIsModalOpen(false); // Close form modal
    setShowSuccessModal(true); // Show success modal

    // Auto close after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
      setSuccessMessage('');
    }, 3000);
  };

  const handleFormError = (message: string) => {
    setSuccessMessage(message);
    setSuccessModalType('error');
    setIsModalOpen(false); // Close form modal
    setShowSuccessModal(true); // Show error modal

    // Auto close after 5 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
      setSuccessMessage('');
    }, 5000);
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="flex flex-col min-h-screen w-full bg-white">
    <Header openModal={openModal} />
    <main className="flex-grow">
      <Hero openModal={openModal} />
      <HowCreditRepairWorks />
      <Services openModal={openModal} />
      <About openModal={openModal} />
      <Process openModal={openModal} />
      {/* <Testimonials /> */}
    </main>
    <Footer />
    <FloatingCTA openModal={openModal} />
    <AnimatePresence>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactFormModal 
          onClose={closeModal}
          onSuccess={handleFormSuccess}
          onError={handleFormError}
        />
      </Modal>}
    </AnimatePresence>

    {/* Success/Error Modal - Rendered at App level */}
    <SuccessModal
      isOpen={showSuccessModal}
      message={successMessage}
      type={successModalType}
      onClose={() => setShowSuccessModal(false)}
    />
  </motion.div>;
}