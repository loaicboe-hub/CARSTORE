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
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginView from './customer/auth/LoginView';
import SignupView from './customer/auth/SignupView';
import ForgotPasswordView from './customer/auth/ForgotPasswordView';
import CustomerLayout from './customer/CustomerLayout';
import DashboardOverview from './customer/views/DashboardOverview';
import MyListingsView from './customer/views/MyListingsView';
import SubmitListingView from './customer/views/SubmitListingView';
import ProfileView from './customer/views/ProfileView';

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

const AppRouter = () => {
  const { isAuthenticated: isCustomerAuth, isLoading: isAuthLoading } = useAuth();
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname.toLowerCase();
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      localStorage.getItem('autohaus_admin_auth') === 'true' ||
      sessionStorage.getItem('autohaus_admin_auth') === 'true'
    );
  });

  const [editingListing, setEditingListing] = useState(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (p.startsWith('/admin') || h.startsWith('#/admin') || h === '#admin') {
        setCurrentPath('/admin');
      } else {
        setCurrentPath(p || '/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path.toLowerCase());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAdmin = () => {
    navigateTo('/admin');
  };

  const navigateToPublic = () => {
    navigateTo('/');
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('autohaus_admin_auth');
    sessionStorage.removeItem('autohaus_admin_auth');
    setIsAdminAuthenticated(false);
  };

  // 1. Admin Dashboard Route (/admin)
  if (currentPath.startsWith('/admin')) {
    if (isAdminAuthenticated) {
      return <AdminLayout onNavigatePublic={navigateToPublic} onLogout={handleAdminLogout} />;
    }
    return (
      <AdminLogin
        onLoginSuccess={() => setIsAdminAuthenticated(true)}
        onNavigatePublic={navigateToPublic}
      />
    );
  }

  // 2. Customer Authentication Pages
  if (currentPath === '/login') {
    if (isCustomerAuth) {
      return (
        <CustomerLayout activeTab="overview" onNavigate={navigateTo}>
          <DashboardOverview onNavigate={navigateTo} />
        </CustomerLayout>
      );
    }
    return <LoginView onNavigate={navigateTo} />;
  }

  if (currentPath === '/signup') {
    if (isCustomerAuth) {
      return (
        <CustomerLayout activeTab="overview" onNavigate={navigateTo}>
          <DashboardOverview onNavigate={navigateTo} />
        </CustomerLayout>
      );
    }
    return <SignupView onNavigate={navigateTo} />;
  }

  if (currentPath === '/forgot-password') {
    return <ForgotPasswordView onNavigate={navigateTo} />;
  }

  // 3. Protected Customer Dashboard Routes (/account/*)
  if (currentPath.startsWith('/account')) {
    if (!isCustomerAuth) {
      // Unauthorized: redirect to login
      return <LoginView onNavigate={navigateTo} />;
    }

    if (currentPath === '/account/listings/new') {
      return (
        <CustomerLayout activeTab="new" onNavigate={navigateTo}>
          <SubmitListingView
            onNavigate={navigateTo}
            onSaveSuccess={() => navigateTo('/account/listings')}
          />
        </CustomerLayout>
      );
    }

    if (currentPath === '/account/listings/edit') {
      return (
        <CustomerLayout activeTab="listings" onNavigate={navigateTo}>
          <SubmitListingView
            onNavigate={navigateTo}
            editingListing={editingListing}
            onSaveSuccess={() => {
              setEditingListing(null);
              navigateTo('/account/listings');
            }}
          />
        </CustomerLayout>
      );
    }

    if (currentPath === '/account/listings') {
      return (
        <CustomerLayout activeTab="listings" onNavigate={navigateTo}>
          <MyListingsView
            onNavigate={navigateTo}
            onEditListing={(listing) => {
              setEditingListing(listing);
              navigateTo('/account/listings/edit');
            }}
          />
        </CustomerLayout>
      );
    }

    if (currentPath === '/account/profile') {
      return (
        <CustomerLayout activeTab="profile" onNavigate={navigateTo}>
          <ProfileView onNavigate={navigateTo} />
        </CustomerLayout>
      );
    }

    // Default Customer Dashboard (/account)
    return (
      <CustomerLayout activeTab="overview" onNavigate={navigateTo}>
        <DashboardOverview onNavigate={navigateTo} />
      </CustomerLayout>
    );
  }

  // 4. Default: Public Showroom Landing Page
  return <LandingPageContent onOpenAdmin={navigateToAdmin} />;
};

export const App = () => {
  return (
    <StoreProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </LanguageProvider>
    </StoreProvider>
  );
};

export default App;
