import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import VehicleShowcaseSection from './components/sections/VehicleShowcaseSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ManagementSection from './components/sections/ManagementSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CtaSection from './components/sections/CtaSection';
import VehicleInquiryModal from './components/modals/VehicleInquiryModal';
import ManagementModal from './components/modals/ManagementModal';

const LandingPageContent = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isManagementModalOpen, setIsManagementModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [inquiryType, setInquiryType] = useState('purchase');

  // Trigger inquiry modal with specific vehicle preloaded
  const handleInquireVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setInquiryType('purchase');
    setIsInquiryModalOpen(true);
  };

  // Trigger modal for valuation / trade-in appraisal
  const handleOpenValuation = () => {
    setSelectedVehicle(null);
    setInquiryType('tradein');
    setIsInquiryModalOpen(true);
  };

  // Trigger generic VIP consultation modal
  const handleOpenConsultation = () => {
    setSelectedVehicle(null);
    setInquiryType('purchase');
    setIsInquiryModalOpen(true);
  };

  // Smooth scroll helper
  const scrollToSection = (targetId) => {
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle service card action triggers
  const handleServiceSelect = (service) => {
    if (service.id === 'buy') {
      scrollToSection('inventory');
    } else {
      setSelectedVehicle(null);
      if (service.id === 'sell' || service.id === 'exchange') {
        setInquiryType('tradein');
      } else if (service.id === 'rent') {
        setInquiryType('rental');
      } else {
        setInquiryType('purchase');
      }
      setIsInquiryModalOpen(true);
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Sticky Luxury Navigation with Language Toggle */}
      <Navbar onOpenInquiry={handleOpenConsultation} />

      {/* Main Landing Page Content */}
      <main id="main-content">
        <HeroSection />

        <ServicesSection onServiceSelect={handleServiceSelect} />

        <VehicleShowcaseSection onInquireVehicle={handleInquireVehicle} />

        <WhyChooseUsSection onContactInspection={handleOpenConsultation} />
        
        <ManagementSection onOpenPortal={() => setIsManagementModalOpen(true)} />

        <TestimonialsSection />

        <CtaSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer with Bilingual Links & Copyright */}
      <Footer />

      {/* Interactive Concierge & Vehicle Reservation Modal */}
      <VehicleInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedVehicle={selectedVehicle}
        defaultType={inquiryType}
      />

      {/* Authorized Dealership Management Portal Modal */}
      <ManagementModal
        isOpen={isManagementModalOpen}
        onClose={() => setIsManagementModalOpen(false)}
      />
    </div>
  );
};

export const App = () => {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
};

export default App;
