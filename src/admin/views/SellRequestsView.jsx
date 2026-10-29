import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShoppingBag,
  Plus,
  Search,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Trash2,
  AlertCircle,
  Edit3,
} from 'lucide-react';

export const SellRequestsView = () => {
  const { sellRequests, updateSellRequestStatus, addSellRequest, deleteSellRequest } = useStore();
  const { isArabic } = useLanguage();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    customerName: '',
    phone: '',
    email: '',
    vehicleTitle: '',
    year: 2023,
    mileage: '',
    condition: 'Excellent',
    askingPrice: 100000,
    estimatedValuation: 95000,
    notes: '',
  });

  const filteredRequests = sellRequests.filter((req) => {
    const matchesSearch =
      req.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.vehicleTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.phone.includes(searchTerm);

    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateRequest = (e) => {
    e.preventDefault();
    if (!newRequest.customerName.trim() || !newRequest.vehicleTitle.trim()) return;
    addSellRequest(newRequest);
    setIsModalOpen(false);
    setNewRequest({
      customerName: '',
      phone: '',
      email: '',
      vehicleTitle: '',
      year: 2023,
      mileage: '',
      condition: 'Excellent',
      askingPrice: 100000,
      estimatedValuation: 95000,
      notes: '',
    });
  };

  const handleUpdateValuation = (id, currentValuation) => {
    const newVal = window.prompt(
      isArabic ? 'أدخل التقييم التقديري الجديد (ج.م):' : 'Enter new valuation appraisal (EGP):',
      currentValuation
    );
    if (newVal && !isNaN(Number(newVal))) {
      updateSellRequestStatus(id, undefined, Number(newVal));
    }
  };

  const getStatusLabel = (status) => {
    if (!isArabic) return status;
    const map = {
      new: 'طلب جديد',
      under_review: 'قيد المراجعة',
      offer_sent: 'تم تقديم عرض',
      approved: 'تمت الموافقة والاستحواذ',
      rejected: 'مرفوض',
    };
    return map[status] || status;
  };

  const getConditionLabel = (condition) => {
    if (!isArabic) return condition;
    const map = {
      Excellent: 'حالة ممتازة (فابريكا)',
      Good: 'حالة جيدة جداً',
      Fair: 'حالة مقبولة',
    };
    return map[condition] || condition;
  };

  return (
    <div className="admin-sell-requests-view">
      {/* Top Toolbar */}
      <div className="admin-toolbar">
        <div style={{ display: 'flex', gap: '12px', flex: 1, flexWrap: 'wrap' }}>
          <div className="admin-search-box">
            <Search size={18} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder={isArabic ? 'البحث بالعميل، السيارة، أو الهاتف...' : 'Search customer, vehicle, or phone...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">{isArabic ? 'جميع حالات الطلب' : 'All Request Statuses'}</option>
            <option value="new">{isArabic ? 'طلبات جديدة' : 'New Inquiries'}</option>
            <option value="under_review">{isArabic ? 'قيد المراجعة' : 'Under Review'}</option>
            <option value="offer_sent">{isArabic ? 'تم إرسال العرض' : 'Offer Sent'}</option>
            <option value="approved">{isArabic ? 'تمت الموافقة والاستحواذ' : 'Approved & Acquired'}</option>
            <option value="rejected">{isArabic ? 'مرفوض' : 'Rejected / Passed'}</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          <span>{isArabic ? 'تسجيل تقييم بائع' : 'Log Seller Appraisal'}</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ShoppingBag size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>{isArabic ? 'قائمة طلبات البيع والتقييم' : 'Sell & Consignment Pipeline'}</span>
              <span className="admin-counter-badge">
                {isArabic ? `${filteredRequests.length} طلبات` : `${filteredRequests.length} Requests`}
              </span>
            </h3>
            <p className="admin-card-desc">
              {isArabic
                ? 'طلبات بيع سيارات العملاء، تقييمات التسعير، ومفاوضات الشراء.'
                : 'Customer vehicle submissions, valuation underwriting, and acquisition negotiations.'}
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{isArabic ? 'العميل' : 'Client'}</th>
                  <th>{isArabic ? 'تفاصيل السيارة' : 'Vehicle Details'}</th>
                  <th>{isArabic ? 'الحالة والمسافة' : 'Condition & Mileage'}</th>
                  <th>{isArabic ? 'المطلوب مقابل التقييم' : 'Asking vs Appraisal'}</th>
                  <th>{isArabic ? 'مرحلة الطلب' : 'Status Workflow'}</th>
                  <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req) => (
                  <tr key={req.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{req.customerName}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {req.phone}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {req.email}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{req.vehicleTitle}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {req.notes || (isArabic ? 'لا توجد ملاحظات فحص' : 'No inspection notes')}
                      </div>
                    </td>
                    <td>
                      <div>{getConditionLabel(req.condition)}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {req.mileage}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.88rem' }}>
                        {isArabic ? 'المطلوب: ' : 'Asking: '}
                        <strong>{(Number(req.askingPrice) || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}</strong>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--admin-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>
                          {isArabic ? 'التقييم: ' : 'Appraisal: '}
                          {(Number(req.estimatedValuation) || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleUpdateValuation(req.id, req.estimatedValuation)}
                          style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--admin-accent-gold)', padding: 0 }}
                          title={isArabic ? 'تعديل التقييم التقديري' : 'Edit appraisal valuation'}
                        >
                          <Edit3 size={12} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <select
                        className="admin-select"
                        style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                        value={req.status}
                        onChange={(e) => updateSellRequestStatus(req.id, e.target.value)}
                      >
                        <option value="new">{isArabic ? 'طلب جديد' : 'New Submission'}</option>
                        <option value="under_review">{isArabic ? 'قيد المراجعة' : 'Under Review'}</option>
                        <option value="offer_sent">{isArabic ? 'تم تقديم عرض' : 'Offer Sent'}</option>
                        <option value="approved">{isArabic ? 'تمت الموافقة والاستحواذ' : 'Approved & Acquired'}</option>
                        <option value="rejected">{isArabic ? 'مرفوض' : 'Declined'}</option>
                      </select>
                    </td>
                    <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                        {/* Direct WhatsApp Concierge Button */}
                        <a
                          href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            isArabic
                              ? `مرحباً ${req.customerName}، يتواصل معك فريق التقييم التنفيذي من كار إن بخصوص سيارتك ${req.vehicleTitle}.`
                              : `Hello ${req.customerName}, this is the executive appraisal team from CAR IN regarding your ${req.vehicleTitle}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          style={{ color: '#059669' }}
                          title={isArabic ? 'تواصل مع البائع عبر واتساب' : 'Chat with Seller on WhatsApp'}
                        >
                          <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => {
                            if (window.confirm(isArabic ? `حذف طلب ${req.customerName}؟` : `Delete request from ${req.customerName}?`)) {
                              deleteSellRequest(req.id);
                            }
                          }}
                          title={isArabic ? 'حذف الطلب' : 'Delete Request'}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredRequests.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '36px' }}>
                      <ShoppingBag size={36} style={{ color: 'var(--admin-text-light)', margin: '0 auto 8px auto' }} />
                      <div style={{ color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'لا توجد طلبات بيع مطابقة للمحددات.' : 'No sell requests match your filter.'}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Log New Seller Appraisal Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {isArabic ? 'تسجيل تقييم سيارة بائع بالصالة' : 'Log In-Person Seller Appraisal'}
              </h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <XCircle size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateRequest}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم البائع بالكامل *' : 'Seller Full Name *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: م. أحمد عبد الرحمن' : 'e.g. Jonathan Pierce'}
                      value={newRequest.customerName}
                      onChange={(e) => setNewRequest({ ...newRequest, customerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'رقم الهاتف / واتساب *' : 'Mobile / WhatsApp *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? '01012345678' : '+1 (555) 000-0000'}
                      value={newRequest.phone}
                      onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'موديل وتفاصيل السيارة *' : 'Vehicle Title (Make & Model) *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 2023 مرسيدس C180 AMG' : 'e.g. 2023 Bentley Continental GT'}
                      value={newRequest.vehicleTitle}
                      onChange={(e) => setNewRequest({ ...newRequest, vehicleTitle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'المسافة المقطوعة' : 'Mileage'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 12,000 كم' : 'e.g. 5,100 mi'}
                      value={newRequest.mileage}
                      onChange={(e) => setNewRequest({ ...newRequest, mileage: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'السعر المطلوب من البائع (ج.م)' : 'Seller Asking Price (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newRequest.askingPrice}
                      onChange={(e) => setNewRequest({ ...newRequest, askingPrice: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'قيمة التقييم التقديري (ج.م)' : 'Underwriting Appraisal Value (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newRequest.estimatedValuation}
                      onChange={(e) => setNewRequest({ ...newRequest, estimatedValuation: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">
                      {isArabic ? 'ملاحظات الفحص وحالة السيارة' : 'Inspection & Condition Notes'}
                    </label>
                    <textarea
                      className="admin-textarea"
                      placeholder={
                        isArabic
                          ? 'سجل الصيانة، قياس دهان الفابريكا، حالة الفرش الداخلي، وملاحظات الميكانيكا...'
                          : 'Service history, paint depth, interior wear, mechanical remarks...'
                      }
                      value={newRequest.notes}
                      onChange={(e) => setNewRequest({ ...newRequest, notes: e.target.value })}
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
                  {isArabic ? 'حفظ طلب التقييم' : 'Save Appraisal Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellRequestsView;
