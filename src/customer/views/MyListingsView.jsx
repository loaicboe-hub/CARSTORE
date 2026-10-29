import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getMyListings, deleteListing, markListingStatus } from '../../services/customerListingService';
import {
  Car,
  PlusCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Edit3,
  Trash2,
  Check,
  Eye,
  Info,
} from 'lucide-react';

export const MyListingsView = ({ onNavigate, onEditListing }) => {
  const { isArabic } = useLanguage();

  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'approved', 'pending', 'draft', 'sold'
  const [isLoading, setIsLoading] = useState(true);
  const [actionMsg, setActionMsg] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await getMyListings();
      setListings(data);
    } catch (err) {
      console.error('Error fetching listings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteListing(id);
      setDeleteConfirmId(null);
      setActionMsg(isArabic ? 'تم حذف الإعلان بنجاح.' : 'Listing deleted successfully.');
      setTimeout(() => setActionMsg(''), 3000);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to delete listing.');
    }
  };

  const handleMarkSold = async (id) => {
    try {
      await markListingStatus(id, 'sold');
      setActionMsg(isArabic ? 'تم تحديث حالة السيارة إلى: تم البيع.' : 'Vehicle marked as Sold.');
      setTimeout(() => setActionMsg(''), 3000);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to update status.');
    }
  };

  const filteredListings = listings.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              fontWeight: 800,
              margin: '0 0 4px 0',
              color: '#FFFFFF',
            }}
          >
            {isArabic ? 'إدارة سياراتي المعروضة' : 'My Vehicle Listings'}
          </h1>
          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.88rem' }}>
            {isArabic
              ? 'متابعة وإدارة سياراتك، تعديل المواصفات ومراجعة حالة النشر'
              : 'Track, edit, or archive your luxury automobile submissions across the platform.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('/account/listings/new')}
          style={{
            background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
            border: 'none',
            borderRadius: '8px',
            padding: '11px 20px',
            color: '#070B11',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 18px rgba(194, 139, 20, 0.35)',
          }}
        >
          <PlusCircle size={17} />
          <span>{isArabic ? 'أضف سيارة جديدة' : 'List New Vehicle'}</span>
        </button>
      </div>

      {/* Action Notification */}
      {actionMsg && (
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: '#34D399',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.88rem',
          }}
        >
          <CheckCircle2 size={16} />
          <span>{actionMsg}</span>
        </div>
      )}

      {/* Status Notice Card */}
      <div
        style={{
          background: 'rgba(194, 139, 20, 0.08)',
          border: '1px solid rgba(194, 139, 20, 0.25)',
          borderRadius: '10px',
          padding: '14px 18px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.84rem',
          color: '#ECC880',
        }}
      >
        <Info size={18} style={{ flexShrink: 0 }} />
        <span>
          {isArabic
            ? 'ملاحظة: الإعلانات الجديدة والسيارات المعدلة تخضع لمراجعة إدارة المعرض (Pending Approval) قبل ظهورها في المعرض العام.'
            : 'Policy Notice: New and modified listings default to "Pending Approval" to ensure catalogue quality. Once approved by our team, your car immediately appears in the public showroom.'}
        </span>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}
      >
        {[
          { id: 'all', label: isArabic ? 'الكل' : 'All', count: listings.length },
          { id: 'approved', label: isArabic ? 'معتمدة / معروضة' : 'Approved', count: listings.filter((l) => l.status === 'approved').length },
          { id: 'pending', label: isArabic ? 'قيد المراجعة' : 'Pending Review', count: listings.filter((l) => l.status === 'pending').length },
          { id: 'draft', label: isArabic ? 'مسودات' : 'Drafts', count: listings.filter((l) => l.status === 'draft').length },
          { id: 'sold', label: isArabic ? 'تم البيع' : 'Sold', count: listings.filter((l) => l.status === 'sold').length },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.84rem',
              fontWeight: 600,
              background: filter === tab.id ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
              color: filter === tab.id ? '#FFFFFF' : '#94A3B8',
              border: filter === tab.id ? '1px solid rgba(194, 139, 20, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{tab.label}</span>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '2px 6px',
                borderRadius: '10px',
                fontSize: '0.72rem',
              }}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Listings List */}
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#94A3B8' }}>
          {isArabic ? 'جارِ التحميل...' : 'Loading listings...'}
        </div>
      ) : filteredListings.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: 'rgba(15, 23, 42, 0.5)',
            borderRadius: '12px',
            border: '1px dashed rgba(255, 255, 255, 0.1)',
          }}
        >
          <Car size={36} color="#64748B" style={{ marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.1rem', margin: '0 0 6px 0' }}>
            {isArabic ? 'لا توجد سيارات في هذا التصنيف' : 'No listings in this category'}
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.84rem', margin: '0 0 16px 0' }}>
            {isArabic ? 'يمكنك إضافة سيارة جديدة في أي وقت' : 'You can submit a luxury car for review anytime.'}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/account/listings/new')}
            style={{
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              border: 'none',
              borderRadius: '8px',
              padding: '9px 18px',
              color: '#070B11',
              fontWeight: 700,
              fontSize: '0.86rem',
              cursor: 'pointer',
            }}
          >
            {isArabic ? 'أضف سيارة' : 'List a Car'}
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredListings.map((item) => {
            const photo = item.photos && item.photos[0] ? item.photos[0] : '/images/hero_car.jpg';
            const isApproved = item.status === 'approved';
            const isPending = item.status === 'pending';
            const isSold = item.status === 'sold';
            const isDraft = item.status === 'draft';
            const isRejected = item.status === 'rejected';

            return (
              <div
                key={item.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: isPending
                    ? '1px solid rgba(245, 158, 11, 0.35)'
                    : isApproved
                    ? '1px solid rgba(16, 185, 129, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  alignItems: 'center',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Vehicle Thumbnail */}
                <div
                  style={{
                    width: '180px',
                    height: '110px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <img
                    src={photo}
                    alt={item.makeModel}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = '/images/hero_car.jpg';
                    }}
                  />
                  {item.photos && item.photos.length > 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '6px',
                        right: '6px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                      }}
                    >
                      +{item.photos.length - 1} photos
                    </div>
                  )}
                </div>

                {/* Main Details */}
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{item.makeModel}</h3>
                    {/* Status Pill */}
                    <div
                      style={{
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        background: isApproved
                          ? 'rgba(16, 185, 129, 0.15)'
                          : isPending
                          ? 'rgba(245, 158, 11, 0.15)'
                          : isSold
                          ? 'rgba(59, 130, 246, 0.15)'
                          : 'rgba(148, 163, 184, 0.15)',
                        color: isApproved
                          ? '#10B981'
                          : isPending
                          ? '#F59E0B'
                          : isSold
                          ? '#60A5FA'
                          : '#CBD5E1',
                        border: isApproved
                          ? '1px solid rgba(16, 185, 129, 0.4)'
                          : isPending
                          ? '1px solid rgba(245, 158, 11, 0.4)'
                          : '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isApproved && <CheckCircle2 size={12} />}
                      {isPending && <Clock size={12} />}
                      {isSold && <Check size={12} />}
                      {isRejected && <XCircle size={12} />}
                      <span>
                        {isApproved
                          ? isArabic
                            ? 'معتمد في المعرض العام'
                            : 'Live in Showroom'
                          : isPending
                          ? isArabic
                            ? 'قيد مراجعة الإدارة'
                            : 'Pending Approval'
                          : isSold
                          ? isArabic
                            ? 'تم البيع'
                            : 'Sold'
                          : isDraft
                          ? isArabic
                            ? 'مسودة'
                            : 'Draft'
                          : isArabic
                          ? 'مرفوض'
                          : 'Rejected'}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-gold, #C28B14)', marginBottom: '8px' }}>
                    ${Number(item.price).toLocaleString()}
                  </div>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', fontSize: '0.82rem', color: '#94A3B8' }}>
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.mileage}</span>
                    <span>•</span>
                    <span>{item.transmission}</span>
                    <span>•</span>
                    <span>{item.fuelType}</span>
                    <span>•</span>
                    <span>{item.city}</span>
                  </div>

                  {/* Admin notes if any */}
                  {item.adminNotes && (
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '8px 12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        color: isRejected ? '#FB7185' : '#E2E8F0',
                      }}
                    >
                      <strong>{isArabic ? 'ملاحظة الإدارة:' : 'Administrator Remarks:'}</strong> {item.adminNotes}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
                  <button
                    type="button"
                    onClick={() => onEditListing(item)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#FFFFFF',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Edit3 size={15} />
                    <span>{isArabic ? 'تعديل الإعلان' : 'Edit Listing'}</span>
                  </button>

                  {!isSold && (
                    <button
                      type="button"
                      onClick={() => handleMarkSold(item.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        background: 'rgba(59, 130, 246, 0.12)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '6px',
                        color: '#93C5FD',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <Check size={15} />
                      <span>{isArabic ? 'تحديد كمباع' : 'Mark as Sold'}</span>
                    </button>
                  )}

                  {deleteConfirmId === item.id ? (
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        style={{
                          flex: 1,
                          padding: '7px 10px',
                          background: '#E11D48',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {isArabic ? 'تأكيد الحذف' : 'Confirm'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeleteConfirmId(null)}
                        style={{
                          padding: '7px 10px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                        }}
                      >
                        {isArabic ? 'إلغاء' : 'Cancel'}
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDeleteConfirmId(item.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '7px 12px',
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                      }}
                    >
                      <Trash2 size={14} />
                      <span>{isArabic ? 'حذف الإعلان' : 'Delete Listing'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyListingsView;
