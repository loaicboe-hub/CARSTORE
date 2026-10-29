import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { getMyListings } from '../../services/customerListingService';
import {
  Car,
  CheckCircle2,
  Clock,
  PlusCircle,
  ShieldCheck,
  AlertCircle,
  Eye,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  XCircle,
} from 'lucide-react';

export const DashboardOverview = ({ onNavigate }) => {
  const { user } = useAuth();
  const { isArabic } = useLanguage();

  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const data = await getMyListings();
        if (isMounted) setListings(data);
      } catch (err) {
        if (isMounted) setErrorMsg(err.message || 'Could not load your listings.');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const totalListings = listings.length;
  const publishedListings = listings.filter((l) => l.status === 'approved').length;
  const pendingListings = listings.filter((l) => l.status === 'pending').length;
  const otherListings = listings.filter((l) => l.status === 'rejected' || l.status === 'sold' || l.status === 'draft').length;

  return (
    <div>
      {/* Welcome Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(194, 139, 20, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)',
          border: '1px solid rgba(194, 139, 20, 0.3)',
          borderRadius: '16px',
          padding: '28px 24px',
          marginBottom: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '20px',
              background: 'rgba(194, 139, 20, 0.2)',
              color: 'var(--accent-gold, #C28B14)',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            <ShieldCheck size={13} />
            <span>{isArabic ? 'حساب عميل موثق' : 'Verified Customer Dashboard'}</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              fontWeight: 800,
              margin: '0 0 6px 0',
              color: '#FFFFFF',
            }}
          >
            {isArabic ? `مرحباً بعودتك، ${user?.name || 'سيدي'}` : `Welcome back, ${user?.name || 'Valued Client'}`}
          </h1>
          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.9rem', maxWidth: '580px' }}>
            {isArabic
              ? 'قم بإدارة مركباتك المعروضة، متابعة حالة مراجعة الإعلانات، وعرض سيارات جديدة للبيع في معرض AUTOHAUS.'
              : 'Manage your vehicle listings, track review and approval statuses, and submit new luxury cars directly to the public showroom.'}
          </p>
        </div>

        {/* List a Car Gold Action Button */}
        <div>
          <button
            type="button"
            onClick={() => onNavigate('/account/listings/new')}
            style={{
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 22px',
              color: '#070B11',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(194, 139, 20, 0.4)',
              transition: 'transform 0.2s',
            }}
          >
            <PlusCircle size={18} />
            <span>{isArabic ? 'أضف سيارة جديدة للبيع' : 'List Your Car'}</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {/* Total Listings */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Car size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
              {isArabic ? 'إجمالي السيارات' : 'Total Listings'}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
              {totalListings}
            </div>
          </div>
        </div>

        {/* Published / Approved */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
              {isArabic ? 'معروضة في المعرض' : 'Published Listings'}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10B981', marginTop: '2px' }}>
              {publishedListings}
            </div>
          </div>
        </div>

        {/* Pending Approval */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.15)',
              color: '#F59E0B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Clock size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
              {isArabic ? 'قيد مراجعة الإدارة' : 'Pending Approval'}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F59E0B', marginTop: '2px' }}>
              {pendingListings}
            </div>
          </div>
        </div>

        {/* Sold / Rejected / Draft */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(148, 163, 184, 0.12)',
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <XCircle size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
              {isArabic ? 'مسودة أو مباعة' : 'Draft / Sold'}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#E2E8F0', marginTop: '2px' }}>
              {otherListings}
            </div>
          </div>
        </div>
      </div>

      {/* Your Submitted Vehicles Section */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                margin: '0 0 4px 0',
                color: '#FFFFFF',
              }}
            >
              {isArabic ? 'سياراتك المسجلة' : 'Your Vehicle Submissions'}
            </h2>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.84rem' }}>
              {isArabic
                ? 'فقط السيارات المعتمدة من الإدارة تظهر في المعرض العام'
                : 'Customer listings only appear publicly once verified and approved by administrators.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/account/listings')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold, #C28B14)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{isArabic ? 'عرض كل إعلاناتي' : 'View All My Listings'}</span>
            {isArabic ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>

        {/* Listings Content */}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94A3B8' }}>
            {isArabic ? 'جارِ تحميل مركباتك...' : 'Loading your vehicles...'}
          </div>
        ) : listings.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '10px',
              border: '1px dashed rgba(255, 255, 255, 0.1)',
            }}
          >
            <Car size={42} style={{ color: '#64748B', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
              {isArabic ? 'لم تقم بإضافة أي سيارة بعد' : 'No vehicles listed yet'}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', maxWidth: '380px', margin: '0 auto 20px auto' }}>
              {isArabic
                ? 'اعرض سيارتك الفاخرة للبيع أمام آلاف المشترين عبر منصة AUTOHAUS.'
                : 'List your luxury or exotic automobile to reach certified buyers across the network.'}
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/account/listings/new')}
              style={{
                background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                color: '#070B11',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              {isArabic ? 'أضف أول سيارة الآن' : 'Create Your First Listing'}
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {listings.slice(0, 3).map((item) => {
              const photo = item.photos && item.photos[0] ? item.photos[0] : '/images/hero_car.jpg';
              return (
                <div
                  key={item.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                    <img
                      src={photo}
                      alt={item.makeModel}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/images/hero_car.jpg';
                      }}
                    />
                    {/* Status Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        [isArabic ? 'left' : 'right']: '10px',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        background:
                          item.status === 'approved'
                            ? 'rgba(16, 185, 129, 0.9)'
                            : item.status === 'pending'
                            ? 'rgba(245, 158, 11, 0.9)'
                            : item.status === 'sold'
                            ? 'rgba(59, 130, 246, 0.9)'
                            : 'rgba(100, 116, 139, 0.9)',
                        color: '#FFFFFF',
                      }}
                    >
                      {item.status === 'approved'
                        ? isArabic
                          ? 'معتمد / معروض'
                          : 'Approved'
                        : item.status === 'pending'
                        ? isArabic
                          ? 'قيد المراجعة'
                          : 'Pending Approval'
                        : item.status === 'sold'
                        ? isArabic
                          ? 'تم البيع'
                          : 'Sold'
                        : item.status}
                    </div>
                  </div>

                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                      {item.makeModel}
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-gold, #C28B14)', marginBottom: '10px' }}>
                      ${Number(item.price).toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', display: 'flex', gap: '12px', marginBottom: '14px' }}>
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.mileage}</span>
                      <span>•</span>
                      <span>{item.city}</span>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => onNavigate('/account/listings')}
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {isArabic ? 'إدارة الإعلان' : 'Manage Listing'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
