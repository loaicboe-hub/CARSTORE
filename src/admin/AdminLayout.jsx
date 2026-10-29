import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useLanguage } from '../context/LanguageContext';
import OverviewView from './views/OverviewView';
import VehiclesView from './views/VehiclesView';
import BuyListingsView from './views/BuyListingsView';
import SellRequestsView from './views/SellRequestsView';
import RentalFleetView from './views/RentalFleetView';
import ExchangeView from './views/ExchangeView';
import CustomersInquiriesView from './views/CustomersInquiriesView';
import ContentCMSView from './views/ContentCMSView';
import SettingsView from './views/SettingsView';
import UserManagementView from './views/UserManagementView';
import './styles/admin.css';

import {
  LayoutDashboard,
  Car,
  ShoppingBag,
  ArrowLeftRight,
  Key,
  Users,
  UserCheck,
  FileText,
  Settings,
  Menu,
  X,
  ExternalLink,
  Globe,
  Bell,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

export const AdminLayout = ({ onNavigatePublic, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    vehicles,
    sellRequests,
    rentalFleet,
    exchangeRequests,
    inquiries,
    cmsContent,
  } = useStore();

  const { isArabic, toggleLanguage } = useLanguage();

  const pendingSellCount = sellRequests.filter((r) => r.status === 'new' || r.status === 'under_review').length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'new').length;

  const navItems = [
    { id: 'overview', label: isArabic ? 'لوحة المتابعة العامة' : 'Overview', icon: LayoutDashboard },
    { id: 'vehicles', label: isArabic ? 'أسطول السيارات' : 'Vehicles Fleet', icon: Car, badge: vehicles.length },
    { id: 'buy', label: isArabic ? 'طلبات الشراء' : 'Buy Listings', icon: ShoppingBag },
    { id: 'sell', label: isArabic ? 'طلبات البيع والتقييم' : 'Sell Requests', icon: ShoppingBag, badge: pendingSellCount, alert: pendingSellCount > 0 },
    { id: 'rentals', label: isArabic ? 'أسطول التأجير' : 'Rental Fleet', icon: Key, badge: rentalFleet.length },
    { id: 'exchanges', label: isArabic ? 'طلبات الاستبدال' : 'Exchange / Trade-In', icon: ArrowLeftRight },
    { id: 'inquiries', label: isArabic ? 'العملاء والاستفسارات' : 'Customers & Leads', icon: Users, badge: newInquiriesCount, alert: newInquiriesCount > 0 },
    { id: 'users', label: isArabic ? 'إدارة المستخدمين' : 'User Management', icon: UserCheck },
    { id: 'cms', label: isArabic ? 'محتوى الموقع (CMS)' : 'Website CMS', icon: FileText },
    { id: 'settings', label: isArabic ? 'إعدادات النظام' : 'Settings', icon: Settings },
  ];

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTitle = () => {
    const item = navItems.find((n) => n.id === activeTab);
    return item ? item.label : (isArabic ? 'لوحة تحكم الإدارة' : 'Admin Dashboard');
  };

  return (
    <div className="admin-shell">
      {/* Mobile Drawer Backdrop */}
      <div
        className={`admin-mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar (Desktop + Mobile Slide-Over) */}
      <aside className={`admin-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Brand Monogram Header */}
        <div className="admin-sidebar-brand">
          <div className="admin-brand-link">
            <div className="admin-brand-emblem">{isArabic ? 'ك' : 'C'}</div>
            <div className="admin-brand-text">
              CAR<span style={{ color: 'var(--admin-accent-gold, #C28B14)' }}>IN</span>
              <span className="admin-subtag">{isArabic ? 'الجناح الإداري' : 'Executive Suite'}</span>
            </div>
          </div>
          <button
            type="button"
            className="admin-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: '#FFFFFF' }}
            aria-label={isArabic ? 'إغلاق القائمة' : 'Close navigation'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <ul className="admin-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="admin-nav-item">
                <button
                  type="button"
                  className={`admin-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectTab(item.id)}
                >
                  <div className="admin-nav-btn-inner">
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`admin-counter-badge ${item.alert ? 'alert' : ''}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Sidebar Footer Link */}
        <div className="admin-sidebar-footer">
          <button
            type="button"
            className="admin-public-site-link"
            onClick={onNavigatePublic}
            style={{ width: '100%', cursor: 'pointer', border: 'none' }}
          >
            <ExternalLink size={15} />
            <span>{isArabic ? 'معاينة المعرض العام' : 'View Public Showroom'}</span>
          </button>

          {onLogout && (
            <button
              type="button"
              className="admin-btn admin-btn-danger admin-btn-sm"
              onClick={onLogout}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <LogOut size={14} />
              <span>{isArabic ? 'تسجيل الخروج' : 'Sign Out'}</span>
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-main">
        {/* Top Header Sticky Bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              type="button"
              className="admin-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation sidebar"
            >
              <Menu size={22} />
            </button>
            <h1 className="admin-topbar-title">{getTitle()}</h1>
          </div>

          <div className="admin-topbar-right">
            {/* Language Switcher */}
            <button
              type="button"
              className="admin-btn admin-btn-secondary admin-btn-sm"
              onClick={toggleLanguage}
              title={isArabic ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe size={14} />
              <span>{isArabic ? 'EN' : 'العربية'}</span>
            </button>

            {/* Public Showroom Link */}
            <button
              type="button"
              className="admin-btn admin-btn-primary admin-btn-sm"
              onClick={onNavigatePublic}
            >
              <ExternalLink size={14} />
              <span>{isArabic ? 'المعرض العام' : 'Showroom'}</span>
            </button>

            {/* Logout Button */}
            {onLogout && (
              <button
                type="button"
                className="admin-btn admin-btn-danger admin-btn-sm"
                onClick={onLogout}
                title={isArabic ? 'تسجيل الخروج' : 'Sign Out'}
              >
                <LogOut size={14} />
                <span>{isArabic ? 'خروج' : 'Logout'}</span>
              </button>
            )}
          </div>
        </header>

        {/* Dynamic View Body */}
        <main className="admin-body">
          {activeTab === 'overview' && <OverviewView onNavigate={handleSelectTab} />}
          {activeTab === 'vehicles' && <VehiclesView />}
          {activeTab === 'buy' && <BuyListingsView onNavigate={handleSelectTab} />}
          {activeTab === 'sell' && <SellRequestsView />}
          {activeTab === 'rentals' && <RentalFleetView />}
          {activeTab === 'exchanges' && <ExchangeView />}
          {activeTab === 'inquiries' && <CustomersInquiriesView />}
          {activeTab === 'users' && <UserManagementView />}
          {activeTab === 'cms' && <ContentCMSView onNavigatePublic={onNavigatePublic} />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>

      {/* Mobile Bottom Quick-Access Bar (Phone Thumb Navigation) */}
      <nav className="admin-mobile-bottom-bar" aria-label="Mobile Bottom Navigation">
        <button
          type="button"
          className={`admin-mobile-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleSelectTab('overview')}
        >
          <LayoutDashboard size={18} />
          <span>{isArabic ? 'الرئيسية' : 'Overview'}</span>
        </button>

        <button
          type="button"
          className={`admin-mobile-tab-btn ${activeTab === 'vehicles' ? 'active' : ''}`}
          onClick={() => handleSelectTab('vehicles')}
        >
          <Car size={18} />
          <span>{isArabic ? 'السيارات' : 'Vehicles'}</span>
        </button>

        <button
          type="button"
          className={`admin-mobile-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
          onClick={() => handleSelectTab('inquiries')}
        >
          <Users size={18} />
          <span>{isArabic ? 'العملاء' : 'Leads'}</span>
        </button>

        <button
          type="button"
          className={`admin-mobile-tab-btn ${activeTab === 'cms' ? 'active' : ''}`}
          onClick={() => handleSelectTab('cms')}
        >
          <FileText size={18} />
          <span>{isArabic ? 'المحتوى' : 'CMS'}</span>
        </button>

        <button
          type="button"
          className="admin-mobile-tab-btn"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={18} />
          <span>{isArabic ? 'القائمة' : 'Menu'}</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminLayout;
