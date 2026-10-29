import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShoppingBag,
  DollarSign,
  Star,
  CheckCircle,
  Eye,
  TrendingUp,
  Search,
  ArrowUpRight,
} from 'lucide-react';

export const BuyListingsView = ({ onNavigate }) => {
  const { vehicles, updateVehicle } = useStore();
  const { isArabic } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only vehicles that match search
  const buyListings = vehicles.filter((v) =>
    v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (v.titleAr && v.titleAr.includes(searchTerm)) ||
    v.year.toString().includes(searchTerm)
  );

  const totalBuyValue = buyListings.reduce((sum, v) => sum + (Number(v.price) || 0), 0);

  const handlePriceUpdate = (id, currentPrice) => {
    const newPriceStr = window.prompt(
      isArabic ? 'أدخل سعر البيع الجديد (ج.م):' : 'Enter new listing price (EGP):',
      currentPrice
    );
    if (newPriceStr && !isNaN(Number(newPriceStr))) {
      updateVehicle(id, { price: Number(newPriceStr) });
    }
  };

  const handleToggleBadge = (id, currentBadge) => {
    const newBadge =
      currentBadge === 'Certified Pre-Owned'
        ? 'Showroom Feature'
        : currentBadge === 'Showroom Feature'
        ? 'VIP Allocation'
        : 'Certified Pre-Owned';
    updateVehicle(id, { badge: newBadge });
  };

  const getStatusLabel = (status) => {
    if (!isArabic) return status;
    const map = {
      Available: 'متوفر',
      Reserved: 'محجوز',
      Sold: 'تم البيع',
    };
    return map[status] || status;
  };

  const getBadgeLabel = (badge) => {
    if (!isArabic) return badge;
    const map = {
      'Certified Pre-Owned': 'مستعمل معتمد',
      'Showroom Feature': 'عرض مميز',
      'VIP Allocation': 'تخصيص VIP',
    };
    return map[badge] || badge;
  };

  return (
    <div className="admin-buy-listings-view">
      {/* Top Banner KPI */}
      <div className="admin-stats-grid" style={{ marginBottom: '20px' }}>
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">
              {isArabic ? 'كتالوج سيارات الشراء المتاح' : 'Active Buy Catalog'}
            </span>
            <span className="admin-stat-val">
              {buyListings.length} {isArabic ? 'سيارة' : 'Units'}
            </span>
            <span className="admin-stat-hint">
              {isArabic ? 'معتمدة ومجهزة للتسليم الفوري' : 'Certified for immediate delivery'}
            </span>
          </div>
          <div className="admin-stat-icon-wrap gold">
            <ShoppingBag size={22} />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">
              {isArabic ? 'إجمالي قيمة الأسطول' : 'Total Asset Value'}
            </span>
            <span className="admin-stat-val">
              {totalBuyValue.toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
            </span>
            <span className="admin-stat-hint">
              {isArabic ? 'مخزون صالة العرض المباشر' : 'Direct showroom inventory'}
            </span>
          </div>
          <div className="admin-stat-icon-wrap emerald">
            <TrendingUp size={22} />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">
              {isArabic ? 'متوسط سعر السيارة' : 'Average Unit Price'}
            </span>
            <span className="admin-stat-val">
              {buyListings.length > 0 ? Math.round(totalBuyValue / buyListings.length).toLocaleString() : 0}{' '}
              {isArabic ? 'ج.م' : 'EGP'}
            </span>
            <span className="admin-stat-hint">
              {isArabic ? 'فئة السيارات الرياضية والتنفيذية' : 'Exotic & Executive bracket'}
            </span>
          </div>
          <div className="admin-stat-icon-wrap blue">
            <DollarSign size={22} />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ShoppingBag size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>{isArabic ? 'إدارة قوائم الشراء' : 'Buy Listings Management'}</span>
            </h3>
            <p className="admin-card-desc">
              {isArabic
                ? 'إدارة سيارات البيع بالمعرض، والشارات المميزة، والأسعار المباشرة.'
                : 'Manage purchase listings, featured showroom placement, and live client pricing.'}
            </p>
          </div>

          <div className="admin-search-box" style={{ maxWidth: '280px' }}>
            <Search size={16} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder={isArabic ? 'البحث في قوائم الشراء...' : 'Search buy listings...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{isArabic ? 'السيارة' : 'Vehicle'}</th>
                  <th>{isArabic ? 'الموديل والمواصفات' : 'Year & Specs'}</th>
                  <th>{isArabic ? 'سعر البيع' : 'Listing Price'}</th>
                  <th>{isArabic ? 'القسط الشهري التقديري' : 'Monthly Lease Est.'}</th>
                  <th>{isArabic ? 'شارة التمييز' : 'Showroom Badge'}</th>
                  <th>{isArabic ? 'الحالة' : 'Status'}</th>
                  <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراء' : 'Direct Action'}</th>
                </tr>
              </thead>
              <tbody>
                {buyListings.map((car) => (
                  <tr key={car.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={car.image}
                          alt={car.title}
                          className="admin-vehicle-thumb"
                          onError={(e) => {
                            e.target.src = '/images/hero_car.jpg';
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>
                            {isArabic && car.titleAr ? car.titleAr : car.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                            VIN: {car.vin || 'VERIFIED-CARIN'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.88rem' }}>{car.year} • {car.category}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {isArabic && car.mileageAr ? car.mileageAr : car.mileage}
                      </div>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--admin-accent-gold)', fontSize: '1rem' }}>
                        {car.priceFormatted
                          ? car.priceFormatted
                          : `${Number(car.price).toLocaleString()} ${isArabic ? 'ج.م' : 'EGP'}`}
                      </strong>
                    </td>
                    <td>
                      <span style={{ color: 'var(--admin-text-muted)' }}>
                        {car.monthlyEstimate || (isArabic ? 'استفسر الآن' : 'Inquire')}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={() => handleToggleBadge(car.id, car.badge)}
                        title={isArabic ? 'انقر لتبديل الشارة' : 'Click to cycle showroom badge'}
                      >
                        <Star size={12} style={{ color: 'var(--admin-accent-gold)' }} />
                        <span>{getBadgeLabel(car.badge || 'Showroom Feature')}</span>
                      </button>
                    </td>
                    <td>
                      <span className={`admin-badge ${car.status === 'Available' ? 'available' : car.status === 'Reserved' ? 'reserved' : 'sold'}`}>
                        {getStatusLabel(car.status)}
                      </span>
                    </td>
                    <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                        <button
                          type="button"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          onClick={() => handlePriceUpdate(car.id, car.price)}
                        >
                          <DollarSign size={13} />
                          <span>{isArabic ? 'تعديل السعر' : 'Change Price'}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyListingsView;
