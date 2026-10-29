import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  ArrowLeftRight,
  Plus,
  Search,
  MessageCircle,
  Clock,
  Trash2,
  DollarSign,
  Car,
  CheckCircle,
  X,
} from 'lucide-react';

export const ExchangeView = () => {
  const {
    exchangeRequests,
    addExchangeRequest,
    updateExchangeStatus,
    deleteExchangeRequest,
    vehicles,
  } = useStore();
  const { isArabic } = useLanguage();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExchange, setNewExchange] = useState({
    customerName: '',
    phone: '',
    email: '',
    currentCar: '',
    currentCarMileage: '',
    currentCarValue: 80000,
    desiredCarTitle: vehicles[0]?.title || 'Showroom Vehicle',
    desiredCarPrice: vehicles[0]?.price || 150000,
    notes: '',
  });

  const filteredExchanges = exchangeRequests.filter((ex) => {
    const matchesSearch =
      ex.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.currentCar.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.desiredCarTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ex.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateExchange = (e) => {
    e.preventDefault();
    if (!newExchange.customerName.trim() || !newExchange.currentCar.trim()) return;

    const equityDiff = Number(newExchange.desiredCarPrice) - Number(newExchange.currentCarValue);
    addExchangeRequest({
      ...newExchange,
      equityDifference: equityDiff,
    });
    setIsModalOpen(false);
    setNewExchange({
      customerName: '',
      phone: '',
      email: '',
      currentCar: '',
      currentCarMileage: '',
      currentCarValue: 80000,
      desiredCarTitle: vehicles[0]?.title || 'Showroom Vehicle',
      desiredCarPrice: vehicles[0]?.price || 150000,
      notes: '',
    });
  };

  return (
    <div className="admin-exchange-view">
      {/* Top Toolbar */}
      <div className="admin-toolbar">
        <div style={{ display: 'flex', gap: '12px', flex: 1, flexWrap: 'wrap' }}>
          <div className="admin-search-box">
            <Search size={18} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder={
                isArabic
                  ? 'البحث بالعميل، السيارة الحالية أو المرغوبة...'
                  : 'Search trade-in customer, current or desired car...'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">{isArabic ? 'جميع حالات الاستبدال' : 'All Exchange Statuses'}</option>
            <option value="pending">{isArabic ? 'قيد التقييم' : 'Pending Evaluation'}</option>
            <option value="inspection_scheduled">{isArabic ? 'تم تحديد موعد الفحص' : 'Inspection Scheduled'}</option>
            <option value="offer_made">{isArabic ? 'تم تقديم عرض استبدال' : 'Offer Made'}</option>
            <option value="completed">{isArabic ? 'تم الاستبدال والترقية' : 'Completed & Upgraded'}</option>
            <option value="declined">{isArabic ? 'ملغي / مرفوض' : 'Declined'}</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          <span>{isArabic ? 'صفقة استبدال جديدة' : 'New Exchange Deal'}</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ArrowLeftRight size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>{isArabic ? 'طلبات الاستبدال وترقية الأسطول' : 'Bespoke Trade-In & Equity Transitions'}</span>
              <span className="admin-counter-badge">
                {isArabic ? `${filteredExchanges.length} صفقات` : `${filteredExchanges.length} Deals`}
              </span>
            </h3>
            <p className="admin-card-desc">
              {isArabic
                ? 'استبدال سيارة العميل الحالية وتحويل قيمتها مباشرة لاقتناء سيارة من المعرض.'
                : 'Customer vehicle equity applied directly toward new showroom acquisitions.'}
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{isArabic ? 'العميل' : 'Client'}</th>
                  <th>{isArabic ? 'السيارة الحالية للاستبدال' : 'Current Trade-In Vehicle'}</th>
                  <th>{isArabic ? 'السيارة المرغوبة من المعرض' : 'Desired Showroom Upgrade'}</th>
                  <th>{isArabic ? 'فارق القيمة' : 'Equity Difference'}</th>
                  <th>{isArabic ? 'مرحلة الصفقة' : 'Status Workflow'}</th>
                  <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredExchanges.map((ex) => (
                  <tr key={ex.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ex.customerName}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {ex.phone}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {ex.email}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ex.currentCar}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {ex.currentCarMileage} • {isArabic ? 'التقييم: ' : 'Valuation: '}
                        {(Number(ex.currentCarValue) || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ex.desiredCarTitle}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-accent-gold)' }}>
                        {isArabic ? 'السعر: ' : 'Price: '}
                        {(Number(ex.desiredCarPrice) || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                      </div>
                    </td>
                    <td>
                      <div>
                        {Number(ex.equityDifference) >= 0 ? (
                          <strong style={{ color: 'var(--admin-text-main)' }}>
                            +{(Number(ex.equityDifference) || 0).toLocaleString()} {isArabic ? 'ج.م (يدفع العميل)' : 'EGP (Client Pays)'}
                          </strong>
                        ) : (
                          <strong style={{ color: 'var(--admin-emerald)' }}>
                            {Math.abs(Number(ex.equityDifference)).toLocaleString()} {isArabic ? 'ج.م (فارق نقدي للعميل)' : 'EGP (Cashback)'}
                          </strong>
                        )}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {ex.notes || (isArabic ? 'استبدال عادي' : 'Standard equity swap')}
                      </div>
                    </td>
                    <td>
                      <select
                        className="admin-select"
                        style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                        value={ex.status}
                        onChange={(e) => updateExchangeStatus(ex.id, e.target.value)}
                      >
                        <option value="pending">{isArabic ? 'قيد التقييم' : 'Pending Evaluation'}</option>
                        <option value="inspection_scheduled">{isArabic ? 'موعد فحص مجدول' : 'Inspection Scheduled'}</option>
                        <option value="offer_made">{isArabic ? 'تم تقديم عرض' : 'Offer Made'}</option>
                        <option value="completed">{isArabic ? 'تم الاستبدال واكتمل' : 'Completed / Upgraded'}</option>
                        <option value="declined">{isArabic ? 'ملغي / مرفوض' : 'Declined'}</option>
                      </select>
                    </td>
                    <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                        <a
                          href={`https://wa.me/${ex.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            isArabic
                              ? `مرحباً ${ex.customerName}، يتواصل معك فريق كار إن بخصوص طلب استبدال (${ex.currentCar} مقابل ${ex.desiredCarTitle}).`
                              : `Hello ${ex.customerName}, this is CAR IN regarding your trade-in exchange inquiry (${ex.currentCar} for ${ex.desiredCarTitle}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          style={{ color: '#059669' }}
                          title={isArabic ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                        >
                          <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => {
                            if (window.confirm(isArabic ? `حذف صفقة استبدال ${ex.customerName}؟` : `Delete exchange deal for ${ex.customerName}?`)) {
                              deleteExchangeRequest(ex.id);
                            }
                          }}
                          title={isArabic ? 'حذف الصفقة' : 'Delete Deal'}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredExchanges.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '36px' }}>
                      <ArrowLeftRight size={36} style={{ color: 'var(--admin-text-light)', margin: '0 auto 8px auto' }} />
                      <div style={{ color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'لم يتم العثور على طلبات استبدال.' : 'No trade-in exchange requests found.'}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Log New Exchange Deal Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {isArabic ? 'تسجيل صفقة استبدال جديدة' : 'Log Trade-In Exchange Deal'}
              </h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateExchange}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم العميل *' : 'Client Name *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: كريم المنشاوي' : 'e.g. Victor Hernandez'}
                      value={newExchange.customerName}
                      onChange={(e) => setNewExchange({ ...newExchange, customerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'الهاتف / واتساب *' : 'Mobile / WhatsApp *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? '01012345678' : '+1 (555) 000-0000'}
                      value={newExchange.phone}
                      onChange={(e) => setNewExchange({ ...newExchange, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'السيارة الحالية للاستبدال *' : 'Current Trade-In Vehicle *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 2021 بي إم دبليو M5' : 'e.g. 2021 BMW M5 CS'}
                      value={newExchange.currentCar}
                      onChange={(e) => setNewExchange({ ...newExchange, currentCar: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'التقييم التقديري للسيارة الحالية (ج.م)' : 'Trade-In Valuation Estimate (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newExchange.currentCarValue}
                      onChange={(e) => setNewExchange({ ...newExchange, currentCarValue: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم السيارة المطلوبة من المعرض *' : 'Target Showroom Car Title *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newExchange.desiredCarTitle}
                      onChange={(e) => setNewExchange({ ...newExchange, desiredCarTitle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'سعر السيارة المطلوبة (ج.م)' : 'Target Car Price (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newExchange.desiredCarPrice}
                      onChange={(e) => setNewExchange({ ...newExchange, desiredCarPrice: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">
                      {isArabic ? 'شروط الاستبدال وملاحظات الفحص' : 'Exchange Terms & Inspection Remarks'}
                    </label>
                    <textarea
                      className="admin-textarea"
                      placeholder={
                        isArabic
                          ? 'شروط التمويل، موقع الفحص، طريقة سداد فارق القيمة...'
                          : 'Financing terms, inspection location, differential payoff...'
                      }
                      value={newExchange.notes}
                      onChange={(e) => setNewExchange({ ...newExchange, notes: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn admin-btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {isArabic ? 'تسجيل صفقة الاستبدال' : 'Record Exchange Deal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeView;

