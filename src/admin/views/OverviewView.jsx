import React from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Car,
  ShoppingBag,
  ArrowLeftRight,
  Key,
  Users,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const OverviewView = ({ onNavigate }) => {
  const {
    vehicles,
    sellRequests,
    rentalFleet,
    exchangeRequests,
    inquiries,
    cmsContent,
  } = useStore();
  const { isArabic } = useLanguage();

  const totalInventoryValue = vehicles.reduce((sum, v) => sum + (Number(v.price) || 0), 0);
  const pendingSellCount = sellRequests.filter((r) => r.status === 'new' || r.status === 'under_review').length;
  const pendingExchangeCount = exchangeRequests.filter((r) => r.status === 'pending' || r.status === 'inspection_scheduled').length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'new').length;

  const getStatusLabel = (status) => {
    if (!isArabic) return status;
    const map = {
      new: 'جديد',
      contacted: 'تم التواصل',
      resolved: 'مكتمل',
      pending: 'قيد الانتظار',
      closed: 'مغلق',
      in_progress: 'جاري المعالجة',
    };
    return map[status] || status;
  };

  const getTypeLabel = (type) => {
    if (!isArabic) return type;
    const map = {
      purchase: 'شراء',
      tradein: 'استبدال',
      rental: 'إيجار',
      testdrive: 'تجربة قيادة',
      sell: 'بيع',
    };
    return map[type] || type;
  };

  return (
    <div className="admin-overview-view">
      {/* Top Banner Notice */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(194, 139, 20, 0.12) 0%, #FFFFFF 100%)',
          border: '1px solid rgba(194, 139, 20, 0.3)',
          borderRadius: 'var(--admin-radius)',
          padding: '20px 24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="admin-role-pill">
              {isArabic ? 'جناح إدارة كار إن التنفيذي' : 'CAR IN EXECUTIVE SUITE'}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)' }}>
              {isArabic ? 'المؤشرات التشغيلية المباشرة' : 'Operational Telematics'}
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 800 }}>
            {isArabic
              ? `مرحباً بك في لوحة تحكم ${cmsContent.brandNameAr || 'كار إن'}`
              : `Welcome to ${cmsContent.brandName || 'CAR IN'} Executive Portal`}
          </h2>
          <p style={{ margin: '4px 0 0 0', color: 'var(--admin-text-muted)', fontSize: '0.9rem' }}>
            {isArabic
              ? 'مركز إدارة المعرض والأسطول المباشر، مزامنة فورية، وطلبات العملاء وإدارة المحتوى.'
              : 'Live dealership control center. Real-time fleet synchronization, inbound client appraisals, and CMS publishing.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={() => onNavigate('vehicles')}
          >
            <Car size={16} />
            <span>{isArabic ? 'إدارة المعرض' : 'Manage Vehicles'}</span>
          </button>
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => onNavigate('inquiries')}
          >
            <Users size={16} />
            <span>
              {isArabic ? `مراجعة الطلبات (${newInquiriesCount})` : `Review Leads (${newInquiriesCount})`}
            </span>
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="admin-stats-grid">
        {/* Total Showroom Inventory */}
        <div className="admin-stat-card" onClick={() => onNavigate('vehicles')} style={{ cursor: 'pointer' }}>
          <div className="admin-stat-info">
            <span className="admin-stat-label">{isArabic ? 'أسطول المعرض' : 'Showroom Fleet'}</span>
            <span className="admin-stat-val">{vehicles.length}</span>
            <span className="admin-stat-hint">
              {isArabic
                ? `القيمة: ${(totalInventoryValue / 1000000).toFixed(1)} مليون ج.م`
                : `Valuation: ${(totalInventoryValue / 1000000).toFixed(1)}M EGP`}
            </span>
          </div>
          <div className="admin-stat-icon-wrap gold">
            <Car size={22} />
          </div>
        </div>

        {/* Sell / Consignment Inquiries */}
        <div className="admin-stat-card" onClick={() => onNavigate('sell')} style={{ cursor: 'pointer' }}>
          <div className="admin-stat-info">
            <span className="admin-stat-label">{isArabic ? 'طلبات البيع' : 'Sell Requests'}</span>
            <span className="admin-stat-val">{sellRequests.length}</span>
            <span className="admin-stat-hint" style={{ color: pendingSellCount > 0 ? 'var(--admin-amber)' : 'inherit' }}>
              {isArabic ? `${pendingSellCount} بانتظار التقييم` : `${pendingSellCount} pending appraisal`}
            </span>
          </div>
          <div className="admin-stat-icon-wrap amber">
            <ShoppingBag size={22} />
          </div>
        </div>

        {/* Rental Fleet */}
        <div className="admin-stat-card" onClick={() => onNavigate('rentals')} style={{ cursor: 'pointer' }}>
          <div className="admin-stat-info">
            <span className="admin-stat-label">{isArabic ? 'أسطول التأجير' : 'Rental Fleet'}</span>
            <span className="admin-stat-val">{rentalFleet.length}</span>
            <span className="admin-stat-hint">
              {isArabic
                ? `${rentalFleet.filter((c) => c.status === 'available').length} متاح اليوم`
                : `${rentalFleet.filter((c) => c.status === 'available').length} available today`}
            </span>
          </div>
          <div className="admin-stat-icon-wrap emerald">
            <Key size={22} />
          </div>
        </div>

        {/* Trade-In Exchange Requests */}
        <div className="admin-stat-card" onClick={() => onNavigate('exchanges')} style={{ cursor: 'pointer' }}>
          <div className="admin-stat-info">
            <span className="admin-stat-label">{isArabic ? 'طلبات الاستبدال' : 'Trade-In Exchanges'}</span>
            <span className="admin-stat-val">{exchangeRequests.length}</span>
            <span className="admin-stat-hint" style={{ color: pendingExchangeCount > 0 ? 'var(--admin-blue)' : 'inherit' }}>
              {isArabic ? `${pendingExchangeCount} في مرحلة الفحص` : `${pendingExchangeCount} evaluation pipeline`}
            </span>
          </div>
          <div className="admin-stat-icon-wrap blue">
            <ArrowLeftRight size={22} />
          </div>
        </div>

        {/* Customer Leads */}
        <div className="admin-stat-card" onClick={() => onNavigate('inquiries')} style={{ cursor: 'pointer' }}>
          <div className="admin-stat-info">
            <span className="admin-stat-label">{isArabic ? 'طلبات العملاء VIP' : 'VIP Client Leads'}</span>
            <span className="admin-stat-val">{inquiries.length}</span>
            <span className="admin-stat-hint" style={{ color: newInquiriesCount > 0 ? 'var(--admin-rose)' : 'inherit' }}>
              {isArabic ? `${newInquiriesCount} رسائل جديدة` : `${newInquiriesCount} new messages`}
            </span>
          </div>
          <div className="admin-stat-icon-wrap gold">
            <Users size={22} />
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Inquiries + Quick Actions */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginTop: '24px',
        }}
      >
        {/* Recent Inquiries Panel */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">
                <Clock size={18} style={{ color: 'var(--admin-accent-gold)' }} />
                <span>{isArabic ? 'أحدث استفسارات العملاء' : 'Recent Client Inquiries'}</span>
              </h3>
              <p className="admin-card-desc">
                {isArabic ? 'أحدث الطلبات الواردة عبر كونسيرج الموقع' : 'Latest incoming leads from website concierge'}
              </p>
            </div>
            <button
              type="button"
              className="admin-btn admin-btn-secondary admin-btn-sm"
              onClick={() => onNavigate('inquiries')}
            >
              <span>{isArabic ? 'عرض الكل' : 'View All'}</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="admin-card-body" style={{ padding: 0 }}>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>{isArabic ? 'العميل' : 'Customer'}</th>
                    <th>{isArabic ? 'النوع' : 'Type'}</th>
                    <th>{isArabic ? 'السيارة' : 'Vehicle'}</th>
                    <th>{isArabic ? 'الحالة' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.slice(0, 5).map((inq) => (
                    <tr key={inq.id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{inq.fullName}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                          {inq.phone}
                        </div>
                      </td>
                      <td>
                        <span style={{ textTransform: 'capitalize', fontWeight: 500 }}>
                          {getTypeLabel(inq.type)}
                        </span>
                      </td>
                      <td style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {inq.vehicleTitle || (isArabic ? 'استفسار عام' : 'General')}
                      </td>
                      <td>
                        <span className={`admin-badge ${inq.status}`}>
                          {getStatusLabel(inq.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Category Breakdown & Fleet Health */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">
                <TrendingUp size={18} style={{ color: 'var(--admin-accent-gold)' }} />
                <span>{isArabic ? 'توزيع المخزون' : 'Inventory Distribution'}</span>
              </h3>
              <p className="admin-card-desc">
                {isArabic ? 'فئات السيارات المعروضة بصالة العرض' : 'Vehicle categories represented in showroom'}
              </p>
            </div>
            <button
              type="button"
              className="admin-btn admin-btn-secondary admin-btn-sm"
              onClick={() => onNavigate('vehicles')}
            >
              <span>{isArabic ? 'إضافة سيارة' : 'Add Vehicle'}</span>
            </button>
          </div>

          <div className="admin-card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { cat: 'coupe', label: isArabic ? 'سيارات رياضية وسوبركار' : 'Supercars & Coupes', color: 'var(--admin-accent-gold)' },
                { cat: 'suv', label: isArabic ? 'دفع رباعي فاخر' : 'Luxury SUVs', color: 'var(--admin-emerald)' },
                { cat: 'sedan', label: isArabic ? 'سيدان تنفيذي' : 'Executive Sedans', color: 'var(--admin-blue)' },
                { cat: 'electric', label: isArabic ? 'كهربائية وهيبرد GT' : 'Electric & Hybrid GT', color: 'var(--admin-amber)' },
              ].map(({ cat, label, color }) => {
                const count = vehicles.filter((v) => v.category === cat).length;
                const percent = vehicles.length > 0 ? Math.round((count / vehicles.length) * 100) : 0;
                return (
                  <div key={cat}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 600 }}>{label}</span>
                      <span style={{ color: 'var(--admin-text-muted)' }}>
                        {isArabic ? `${count} سيارة (${percent}%)` : `${count} cars (${percent}%)`}
                      </span>
                    </div>
                    <div
                      style={{
                        height: '8px',
                        background: '#F1F5F9',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${percent}%`,
                          background: color,
                          borderRadius: '4px',
                          transition: 'width 0.4s ease',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Status Pill Info */}
            <div
              style={{
                marginTop: '24px',
                padding: '14px',
                background: 'var(--admin-content-bg)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <CheckCircle size={20} style={{ color: 'var(--admin-emerald)' }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--admin-text-muted)' }}>
                {isArabic ? (
                  <>شهادة فحص معتمدة <strong>180 نقطة فحص شامل</strong> ومتزامنة مع الموقع العام.</>
                ) : (
                  <><strong>All 180-Point Master Inspections</strong> certified & synchronized with public website.</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewView;
