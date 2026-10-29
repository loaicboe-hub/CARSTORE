import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { StoreProvider } from './context/StoreContext';
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
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';

const LandingPageContent = ({ onOpenAdmin }) => {
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
      <Navbar onOpenInquiry={handleOpenConsultation} onOpenAdmin={onOpenAdmin} />

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
      <Footer onOpenAdmin={onOpenAdmin} />

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
        onOpenAdmin={onOpenAdmin}
      />
    </div>
  );
};

export const App = () => {
  const checkIsAdmin = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return path.startsWith('/admin') || hash.startsWith('#/admin') || hash === '#admin';
  };

  const [isAdminView, setIsAdminView] = useState(checkIsAdmin);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      localStorage.getItem('autohaus_admin_auth') === 'true' ||
      sessionStorage.getItem('autohaus_admin_auth') === 'true'
    );
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAdminView(checkIsAdmin());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToAdmin = () => {
    window.history.pushState({}, '', '/admin');
    setIsAdminView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPublic = () => {
    window.history.pushState({}, '', '/');
    setIsAdminView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('autohaus_admin_auth');
    sessionStorage.removeItem('autohaus_admin_auth');
    setIsAuthenticated(false);
  };

  return (
    <StoreProvider>
      <LanguageProvider>
        {isAdminView ? (
          isAuthenticated ? (
            <AdminLayout onNavigatePublic={navigateToPublic} onLogout={handleLogout} />
          ) : (
            <AdminLogin
              onLoginSuccess={() => setIsAuthenticated(true)}
              onNavigatePublic={navigateToPublic}
            />
          )
        ) : (
          <LandingPageContent onOpenAdmin={navigateToAdmin} />
        )}
      </LanguageProvider>
    </StoreProvider>
  );
};

export default App;
