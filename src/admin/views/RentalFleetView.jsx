import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Key,
  Plus,
  Search,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  Trash2,
  Edit2,
  MessageCircle,
  X,
  Car,
} from 'lucide-react';

export const RentalFleetView = () => {
  const {
    rentalFleet,
    rentalInquiries,
    addRentalCar,
    updateRentalCar,
    deleteRentalCar,
    updateRentalInquiryStatus,
  } = useStore();
  const { isArabic } = useLanguage();

  const [activeTab, setActiveTab] = useState('fleet'); // 'fleet' or 'inquiries'
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCar, setNewCar] = useState({
    title: '',
    category: 'Exotic Supercar',
    dailyRate: 1500,
    weeklyRate: 9000,
    deposit: 4000,
    fuel: 'Twin-Turbo V8',
    seats: 2,
    image: '/images/hero_car.jpg',
    status: 'available',
  });

  const filteredFleet = rentalFleet.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInquiries = rentalInquiries.filter((inq) =>
    inq.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.vehicleTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCar = (e) => {
    e.preventDefault();
    if (!newCar.title.trim()) return;
    addRentalCar(newCar);
    setIsModalOpen(false);
    setNewCar({
      title: '',
      category: 'Exotic Supercar',
      dailyRate: 1500,
      weeklyRate: 9000,
      deposit: 4000,
      fuel: 'Twin-Turbo V8',
      seats: 2,
      image: '/images/hero_car.jpg',
      status: 'available',
    });
  };

  return (
    <div className="admin-rental-fleet-view">
      {/* Top Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className={`admin-btn ${activeTab === 'fleet' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
            onClick={() => setActiveTab('fleet')}
          >
            <Car size={16} />
            <span>
              {isArabic
                ? `أسطول التأجير (${rentalFleet.length})`
                : `Rental Fleet Vehicles (${rentalFleet.length})`}
            </span>
          </button>
          <button
            type="button"
            className={`admin-btn ${activeTab === 'inquiries' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <Calendar size={16} />
            <span>
              {isArabic
                ? `حجوزات الإيجار (${rentalInquiries.length})`
                : `Booking Reservations (${rentalInquiries.length})`}
            </span>
          </button>
        </div>

        {activeTab === 'fleet' && (
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} />
            <span>{isArabic ? 'إضافة سيارة تأجير' : 'Add Rental Vehicle'}</span>
          </button>
        )}
      </div>

      {/* Tab 1: Rental Fleet Vehicles */}
      {activeTab === 'fleet' && (
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">
                <Key size={18} style={{ color: 'var(--admin-accent-gold)' }} />
                <span>
                  {isArabic
                    ? 'أسطول السيارات الفاخرة والتنفيذية للإيجار'
                    : 'Exotic & Executive Rental Fleet'}
                </span>
              </h3>
              <p className="admin-card-desc">
                {isArabic
                  ? 'أسعار الإيجار اليومي والأسبوعي، مبالغ التأمين، وحالة توافر الأسطول الفورية.'
                  : 'Daily and weekly rental rates, security deposits, and real-time fleet availability.'}
              </p>
            </div>

            <div className="admin-search-box" style={{ maxWidth: '280px' }}>
              <Search size={16} className="admin-search-icon" />
              <input
                type="text"
                className="admin-search-input"
                placeholder={isArabic ? 'البحث في الأسطول...' : 'Search fleet...'}
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
                    <th>{isArabic ? 'الفئة' : 'Category'}</th>
                    <th>{isArabic ? 'السعر اليومي' : 'Daily Rate'}</th>
                    <th>{isArabic ? 'السعر الأسبوعي' : 'Weekly Rate'}</th>
                    <th>{isArabic ? 'التأمين' : 'Deposit'}</th>
                    <th>{isArabic ? 'الحالة' : 'Status'}</th>
                    <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراءات' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFleet.map((car) => (
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
                            <div style={{ fontWeight: 600 }}>{car.title}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                              {car.fuel} • {car.seats} {isArabic ? 'مقاعد' : 'Seats'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{car.category}</td>
                      <td>
                        <strong style={{ color: 'var(--admin-accent-gold)' }}>
                          {(Number(car.dailyRate) || 0).toLocaleString()} {isArabic ? 'ج.م / يوم' : 'EGP / day'}
                        </strong>
                      </td>
                      <td>
                        {(Number(car.weeklyRate) || 0).toLocaleString()} {isArabic ? 'ج.م / أسبوع' : 'EGP / week'}
                      </td>
                      <td>
                        {(Number(car.deposit) || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                      </td>
                      <td>
                        <select
                          className="admin-select"
                          style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                          value={car.status}
                          onChange={(e) => updateRentalCar(car.id, { status: e.target.value })}
                        >
                          <option value="available">{isArabic ? 'متاح للتأجير' : 'Available'}</option>
                          <option value="rented">{isArabic ? 'مؤجرة حالياً' : 'Currently Rented'}</option>
                          <option value="maintenance">{isArabic ? 'صيانة دورية' : 'Maintenance'}</option>
                        </select>
                      </td>
                      <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                        <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                          <button
                            type="button"
                            className="admin-btn admin-btn-danger admin-btn-sm"
                            onClick={() => {
                              if (window.confirm(isArabic ? `حذف ${car.title} من أسطول التأجير؟` : `Delete ${car.title} from rental fleet?`)) {
                                deleteRentalCar(car.id);
                              }
                            }}
                            title={isArabic ? 'حذف السيارة' : 'Delete Vehicle'}
                          >
                            <Trash2 size={14} />
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
      )}

      {/* Tab 2: Rental Booking Inquiries */}
      {activeTab === 'inquiries' && (
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">
                <Calendar size={18} style={{ color: 'var(--admin-accent-gold)' }} />
                <span>{isArabic ? 'حجوزات وطلبات التأجير' : 'Rental Booking Reservations'}</span>
              </h3>
              <p className="admin-card-desc">
                {isArabic
                  ? 'طلبات حجز العملاء الواردة، جداول الاستلام، ولوجستيات التسليم.'
                  : 'Inbound customer fleet reservations, rental schedules, and delivery logistics.'}
              </p>
            </div>
          </div>

          <div className="admin-card-body" style={{ padding: 0 }}>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>{isArabic ? 'العميل' : 'Customer'}</th>
                    <th>{isArabic ? 'السيارة المطلوبة' : 'Requested Vehicle'}</th>
                    <th>{isArabic ? 'تواريخ الإيجار' : 'Rental Dates'}</th>
                    <th>{isArabic ? 'المدة والإجمالي' : 'Duration & Total'}</th>
                    <th>{isArabic ? 'الحالة' : 'Status'}</th>
                    <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'التواصل' : 'Contact'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inq) => (
                    <tr key={inq.id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{inq.customerName}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                          {inq.phone}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{inq.vehicleTitle}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                          {inq.notes}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem' }}>
                          {inq.startDate} &rarr; {inq.endDate}
                        </div>
                      </td>
                      <td>
                        <div>{inq.days} {isArabic ? 'أيام' : 'Days'}</div>
                        <div style={{ fontWeight: 700, color: 'var(--admin-accent-gold)' }}>
                          {(inq.totalEstimated || 0).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                        </div>
                      </td>
                      <td>
                        <select
                          className="admin-select"
                          style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                          value={inq.status}
                          onChange={(e) => updateRentalInquiryStatus(inq.id, e.target.value)}
                        >
                          <option value="pending">{isArabic ? 'قيد المراجعة' : 'Pending Review'}</option>
                          <option value="confirmed">{isArabic ? 'مؤكد ومجدول' : 'Confirmed & Scheduled'}</option>
                          <option value="completed">{isArabic ? 'تم الإرجاع واكتمل' : 'Returned / Completed'}</option>
                          <option value="cancelled">{isArabic ? 'ملغي' : 'Cancelled'}</option>
                        </select>
                      </td>
                      <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                        <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                          <a
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                              isArabic
                                ? `مرحباً ${inq.customerName}، بخصوص حجز سيارة ${inq.vehicleTitle} من كار إن.`
                                : `Hello ${inq.customerName}, regarding your CAR IN rental reservation for ${inq.vehicleTitle}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="admin-btn admin-btn-secondary admin-btn-sm"
                            style={{ color: '#059669' }}
                            title={isArabic ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                          >
                            <MessageCircle size={14} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Add Rental Vehicle Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {isArabic ? 'إضافة سيارة لأسطول التأجير' : 'Add Vehicle to Rental Fleet'}
              </h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateCar}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم السيارة والموديل *' : 'Vehicle Name *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Ferrari 296 GTB"
                      value={newCar.title}
                      onChange={(e) => setNewCar({ ...newCar, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'الفئة' : 'Category'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: سوبركار / جراند تورر' : 'e.g. Supercar / Grand Tourer'}
                      value={newCar.category}
                      onChange={(e) => setNewCar({ ...newCar, category: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'سعر الإيجار اليومي (ج.م) *' : 'Daily Rental Rate (EGP) *'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.dailyRate}
                      onChange={(e) => setNewCar({ ...newCar, dailyRate: Number(e.target.value) })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'سعر الإيجار الأسبوعي (ج.م)' : 'Weekly Rate (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.weeklyRate}
                      onChange={(e) => setNewCar({ ...newCar, weeklyRate: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'مبلغ التأمين المسترد (ج.م)' : 'Security Deposit (EGP)'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.deposit}
                      onChange={(e) => setNewCar({ ...newCar, deposit: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'المحرك والمواصفات' : 'Engine / Spec'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: توين تيربو V6 هايبرد (819 حصان)' : 'e.g. Twin-Turbo V6 Hybrid (819 HP)'}
                      value={newCar.fuel}
                      onChange={(e) => setNewCar({ ...newCar, fuel: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">
                      {isArabic ? 'رابط أو مسار الصورة' : 'Image Path or URL'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newCar.image}
                      onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
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
                  {isArabic ? 'إضافة إلى الأسطول' : 'Add to Fleet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalFleetView;
