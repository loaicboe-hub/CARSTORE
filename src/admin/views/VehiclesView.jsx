import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Car,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  X,
  Image as ImageIcon,
  DollarSign,
  Tag,
  Gauge,
  Sparkles,
} from 'lucide-react';

export const VehiclesView = () => {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle, updateVehicleStatus } = useStore();
  const { isArabic } = useLanguage();

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    titleAr: '',
    brand: '',
    category: 'coupe',
    year: 2024,
    price: 150000,
    mileage: '2,500 mi',
    mileageAr: '4,000 كم',
    engine: '4.0L Twin-Turbo V8',
    transmission: '8-Speed Sport Shift',
    acceleration: '0-60 in 3.4s',
    badge: 'Showroom Feature',
    badgeAr: 'عرض مميز',
    status: 'Available',
    image: '/images/hero_car.jpg',
  });

  // Filtered vehicles
  const filteredVehicles = vehicles.filter((v) => {
    const matchesSearch =
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (v.titleAr && v.titleAr.includes(searchTerm)) ||
      (v.brand && v.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
      v.year.toString().includes(searchTerm);

    const matchesCategory = categoryFilter === 'all' || v.category === categoryFilter;
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'available' && v.status === 'Available') ||
      (statusFilter === 'reserved' && v.status === 'Reserved') ||
      (statusFilter === 'sold' && v.status === 'Sold');

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleOpenAddModal = () => {
    setEditingVehicleId(null);
    setFormData({
      title: '',
      titleAr: '',
      brand: '',
      category: 'coupe',
      year: 2024,
      price: 150000,
      mileage: '2,500 mi',
      mileageAr: '4,000 كم',
      engine: '4.0L Twin-Turbo V8',
      transmission: '8-Speed Sport Shift',
      acceleration: '0-60 in 3.4s',
      badge: 'Showroom Feature',
      badgeAr: 'عرض مميز',
      status: 'Available',
      image: '/images/hero_car.jpg',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (vehicle) => {
    setEditingVehicleId(vehicle.id);
    setFormData({
      title: vehicle.title || '',
      titleAr: vehicle.titleAr || '',
      brand: vehicle.brand || '',
      category: vehicle.category || 'coupe',
      year: vehicle.year || 2024,
      price: vehicle.price || 0,
      mileage: vehicle.mileage || '',
      mileageAr: vehicle.mileageAr || '',
      engine: vehicle.engine || vehicle.power || '',
      transmission: vehicle.transmission || '',
      acceleration: vehicle.acceleration || '',
      badge: vehicle.badge || 'Showroom Feature',
      badgeAr: vehicle.badgeAr || '',
      status: vehicle.status || 'Available',
      image: vehicle.image || '/images/hero_car.jpg',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingVehicleId) {
      updateVehicle(editingVehicleId, formData);
    } else {
      addVehicle(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(isArabic ? `هل أنت متأكد من حذف "${title}" من المخزون؟` : `Are you sure you want to delete "${title}" from inventory?`)) {
      deleteVehicle(id);
    }
  };

  const getCategoryLabel = (cat) => {
    if (!isArabic) return cat;
    const map = {
      coupe: 'سيارات رياضية وسوبركار',
      suv: 'دفع رباعي فاخر',
      sedan: 'سيدان تنفيذي',
      electric: 'كهربائية وهيبرد GT',
    };
    return map[cat] || cat;
  };

  const getVehicleStatusLabel = (status) => {
    if (!isArabic) return status;
    const map = {
      Available: 'متوفر',
      Reserved: 'محجوز',
      Sold: 'تم البيع',
    };
    return map[status] || status;
  };

  return (
    <div className="admin-vehicles-view">
      {/* Top Header & Action */}
      <div className="admin-toolbar">
        <div style={{ display: 'flex', gap: '12px', flex: 1, flexWrap: 'wrap' }}>
          {/* Search Bar */}
          <div className="admin-search-box">
            <Search size={18} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder={isArabic ? 'البحث بالاسم، الماركة، سنة الصنع...' : 'Search by title, brand, year...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select
            className="admin-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">{isArabic ? 'جميع الفئات' : 'All Categories'}</option>
            <option value="coupe">{isArabic ? 'سيارات رياضية وسوبركار' : 'Supercars & Coupes'}</option>
            <option value="suv">{isArabic ? 'دفع رباعي فاخر' : 'Luxury SUVs'}</option>
            <option value="sedan">{isArabic ? 'سيدان تنفيذي' : 'Executive Sedans'}</option>
            <option value="electric">{isArabic ? 'كهربائية GT' : 'Electric GT'}</option>
          </select>

          {/* Status Filter */}
          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">{isArabic ? 'جميع الحالات' : 'All Statuses'}</option>
            <option value="available">{isArabic ? 'متوفر' : 'Available'}</option>
            <option value="reserved">{isArabic ? 'محجوز' : 'Reserved'}</option>
            <option value="sold">{isArabic ? 'تم البيع' : 'Sold'}</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={handleOpenAddModal}
        >
          <Plus size={16} />
          <span>{isArabic ? 'إضافة سيارة جديدة' : 'Add New Vehicle'}</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <Car size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>{isArabic ? 'كتالوج المخزون' : 'Inventory Catalog'}</span>
              <span className="admin-counter-badge">
                {isArabic ? `${filteredVehicles.length} مسجلة` : `${filteredVehicles.length} Listed`}
              </span>
            </h3>
            <p className="admin-card-desc">
              {isArabic
                ? 'إدارة السيارات، الأسعار، الحالات، والأوصاف ثنائية اللغة.'
                : 'Manage vehicles, pricing, availability, and bilingual descriptions.'}
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{isArabic ? 'السيارة' : 'Vehicle'}</th>
                  <th>{isArabic ? 'الفئة' : 'Category'}</th>
                  <th>{isArabic ? 'السنة' : 'Year'}</th>
                  <th>{isArabic ? 'السعر' : 'Price'}</th>
                  <th>{isArabic ? 'المسافة' : 'Mileage'}</th>
                  <th>{isArabic ? 'الحالة' : 'Status'}</th>
                  <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={vehicle.image}
                          alt={vehicle.title}
                          className="admin-vehicle-thumb"
                          onError={(e) => {
                            e.target.src = '/images/hero_car.jpg';
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>
                            {isArabic && vehicle.titleAr ? vehicle.titleAr : vehicle.title}
                          </div>
                          {(isArabic ? vehicle.title : vehicle.titleAr) && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                              {isArabic ? vehicle.title : vehicle.titleAr}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ textTransform: 'capitalize' }}>
                        {getCategoryLabel(vehicle.category)}
                      </span>
                    </td>
                    <td>{vehicle.year}</td>
                    <td>
                      <strong style={{ color: 'var(--admin-accent-gold)' }}>
                        {vehicle.priceFormatted
                          ? vehicle.priceFormatted
                          : `${Number(vehicle.price).toLocaleString()} ${isArabic ? 'ج.م' : 'EGP'}`}
                      </strong>
                    </td>
                    <td>{isArabic && vehicle.mileageAr ? vehicle.mileageAr : vehicle.mileage}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          className={`admin-badge ${vehicle.status === 'Available' ? 'available' : ''}`}
                          style={{
                            border: 'none',
                            cursor: 'pointer',
                            opacity: vehicle.status === 'Available' ? 1 : 0.4,
                          }}
                          onClick={() => updateVehicleStatus(vehicle.id, 'Available', 'متوفرة للتسليم')}
                          title={isArabic ? 'تعيين كمتوفر' : 'Mark Available'}
                        >
                          {isArabic ? 'متوفر' : 'Available'}
                        </button>
                        <button
                          type="button"
                          className={`admin-badge ${vehicle.status === 'Reserved' ? 'reserved' : ''}`}
                          style={{
                            border: 'none',
                            cursor: 'pointer',
                            opacity: vehicle.status === 'Reserved' ? 1 : 0.4,
                          }}
                          onClick={() => updateVehicleStatus(vehicle.id, 'Reserved', 'محجوزة')}
                          title={isArabic ? 'تعيين كمحجوز' : 'Mark Reserved'}
                        >
                          {isArabic ? 'محجوز' : 'Reserved'}
                        </button>
                        <button
                          type="button"
                          className={`admin-badge ${vehicle.status === 'Sold' ? 'sold' : ''}`}
                          style={{
                            border: 'none',
                            cursor: 'pointer',
                            opacity: vehicle.status === 'Sold' ? 1 : 0.4,
                          }}
                          onClick={() => updateVehicleStatus(vehicle.id, 'Sold', 'تم البيع')}
                          title={isArabic ? 'تعيين كتم البيع' : 'Mark Sold'}
                        >
                          {isArabic ? 'تم البيع' : 'Sold'}
                        </button>
                      </div>
                    </td>
                    <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: isArabic ? 'flex-start' : 'flex-end' }}>
                        <button
                          type="button"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          onClick={() => handleOpenEditModal(vehicle)}
                          title={isArabic ? 'تعديل السيارة' : 'Edit Vehicle'}
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => handleDelete(vehicle.id, vehicle.title)}
                          title={isArabic ? 'حذف السيارة' : 'Delete Vehicle'}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredVehicles.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '36px' }}>
                      <Car size={36} style={{ color: 'var(--admin-text-light)', margin: '0 auto 8px auto' }} />
                      <div style={{ color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'لا توجد سيارات مطابقة لبحثك.' : 'No vehicles matching your query.'}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add / Edit Vehicle Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {editingVehicleId
                  ? (isArabic ? 'تعديل بيانات السيارة' : 'Edit Vehicle Details')
                  : (isArabic ? 'إضافة سيارة فاخرة جديدة' : 'Add New Luxury Vehicle')}
              </h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  {/* Title (English) */}
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم وموديل السيارة (بالإنجليزية) *' : 'Vehicle Title (English) *'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Aston Martin Vantage V8"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  {/* Title (Arabic) */}
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'اسم وموديل السيارة (بالعربية)' : 'Vehicle Title (Arabic)'}
                    </label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="مثال: أستون مارتن فانتاج V8"
                      dir="rtl"
                      value={formData.titleAr}
                      onChange={(e) => setFormData({ ...formData, titleAr: e.target.value })}
                    />
                  </div>

                  {/* Category */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'الفئة' : 'Category'}</label>
                    <select
                      className="admin-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="coupe">{isArabic ? 'سيارات رياضية وسوبركار' : 'Supercars & Coupes'}</option>
                      <option value="suv">{isArabic ? 'دفع رباعي فاخر' : 'Luxury SUVs'}</option>
                      <option value="sedan">{isArabic ? 'سيدان تنفيذي' : 'Executive Sedans'}</option>
                      <option value="electric">{isArabic ? 'كهربائية وهيبرد GT' : 'Electric & Hybrid GT'}</option>
                    </select>
                  </div>

                  {/* Year */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'سنة الصنع' : 'Model Year'}</label>
                    <input
                      type="number"
                      className="admin-input"
                      min={2015}
                      max={2027}
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                    />
                  </div>

                  {/* Price */}
                  <div className="admin-form-group">
                    <label className="admin-label">
                      {isArabic ? 'سعر البيع (ج.م) *' : 'Listing Price (EGP) *'}
                    </label>
                    <input
                      type="number"
                      className="admin-input"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      required
                    />
                  </div>

                  {/* Mileage */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'المسافة المقطوعة' : 'Mileage'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 4,000 كم' : 'e.g. 2,400 mi'}
                      value={formData.mileage}
                      onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    />
                  </div>

                  {/* Engine Specs */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'المحرك / القوة' : 'Engine / Output'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 4.0L توين تيربو V8 (656 حصان)' : 'e.g. 4.0L Twin-Turbo V8 (656 HP)'}
                      value={formData.engine}
                      onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                    />
                  </div>

                  {/* Acceleration */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'التسارع 0-100 كم/س' : '0-60 Acceleration'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: 0-100 في 3.4 ثانية' : 'e.g. 0-60 in 3.4s'}
                      value={formData.acceleration}
                      onChange={(e) => setFormData({ ...formData, acceleration: e.target.value })}
                    />
                  </div>

                  {/* Image Selector / URL */}
                  <div className="admin-form-group full">
                    <label className="admin-label">
                      {isArabic ? 'رابط صورة السيارة' : 'Vehicle Image URL or Asset Path'}
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="text"
                        className="admin-input"
                        placeholder="/images/hero_car.jpg or external HTTPS URL"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      />
                    </div>
                    {/* Quick Demo Image Presets */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
                      {[
                        { label: isArabic ? 'سوبركار' : 'Supercar', path: '/images/hero_car.jpg' },
                        { label: 'Porsche GT3', path: '/images/porsche_gt3.jpg' },
                        { label: 'AMG G63', path: '/images/amg_g63.jpg' },
                        { label: 'Audi RSQ8', path: '/images/audi_rsq8.jpg' },
                        { label: 'S-Class', path: '/images/mercedes_sclass.jpg' },
                        { label: 'Electric GT', path: '/images/electric_gt.jpg' },
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          onClick={() => setFormData({ ...formData, image: preset.path })}
                        >
                          <Sparkles size={12} />
                          <span>{preset.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'شارة التمييز' : 'Highlight Badge'}</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder={isArabic ? 'مثال: عرض الصالة المميز' : 'e.g. Showroom Feature'}
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    />
                  </div>

                  {/* Initial Status */}
                  <div className="admin-form-group">
                    <label className="admin-label">{isArabic ? 'الحالة الأولية' : 'Initial Status'}</label>
                    <select
                      className="admin-select"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="Available">{isArabic ? 'متوفر' : 'Available'}</option>
                      <option value="Reserved">{isArabic ? 'محجوز' : 'Reserved'}</option>
                      <option value="Sold">{isArabic ? 'تم البيع' : 'Sold'}</option>
                    </select>
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
                  {editingVehicleId
                    ? (isArabic ? 'حفظ التعديلات' : 'Save Changes')
                    : (isArabic ? 'نشر في المعرض' : 'Publish to Showroom')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclesView;
