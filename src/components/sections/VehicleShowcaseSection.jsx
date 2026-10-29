import React, { useState, useMemo } from 'react';
import { vehicleCategories } from '../../data/vehiclesData';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import SectionHeader from '../common/SectionHeader';
import VehicleCard from './VehicleCard';
import VehicleDetailsModal from '../modals/VehicleDetailsModal';
import { Search, X, SlidersHorizontal, ArrowUpDown, RotateCcw, Car } from 'lucide-react';

export const VehicleShowcaseSection = ({ onInquireVehicle }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedDetailVehicle, setSelectedDetailVehicle] = useState(null);

  const { vehicles: storeVehicles } = useStore();
  const { t, isArabic } = useLanguage();

  const getNumericalPrice = (veh) => {
    if (typeof veh.price === 'number') return veh.price;
    const clean = String(veh.price || '').replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
  };

  const getNumericalMileage = (veh) => {
    const clean = String(veh.mileage || '').replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
  };

  // Filter and sort the vehicles
  const filteredAndSortedVehicles = useMemo(() => {
    let list = [...storeVehicles];

    // 1. Category Filter
    if (activeCategory !== 'all') {
      list = list.filter((veh) => veh.category === activeCategory);
    }

    // 2. Real-time Search Filter
    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      list = list.filter((veh) => {
        const titleEn = (veh.title || '').toLowerCase();
        const titleAr = (veh.titleAr || '').toLowerCase();
        const subtitleEn = (veh.subtitle || '').toLowerCase();
        const subtitleAr = (veh.subtitleAr || '').toLowerCase();
        const fuelEn = (veh.fuel || '').toLowerCase();
        const fuelAr = (veh.fuelAr || '').toLowerCase();
        const catLabelEn = (veh.categoryLabel || '').toLowerCase();
        const catLabelAr = (veh.categoryLabelAr || '').toLowerCase();
        const yearStr = String(veh.year || '');

        // Auto-handle common brand synonyms (e.g. G-Wagon, Porsche, Ferrari, etc.)
        const synonyms = [];
        if (titleEn.includes('amg g') || titleEn.includes('g 63')) {
          synonyms.push('g-wagon', 'gwagon', 'g wagon', 'g63', 'جي واجون', 'جي كلاس');
        }
        if (titleEn.includes('911 gt3') || titleEn.includes('porsche')) {
          synonyms.push('gt3', '911', 'porsche', 'بورشه', 'بورش');
        }
        if (titleEn.includes('vantage') || titleEn.includes('aston')) {
          synonyms.push('aston martin', 'aston', 'vantage', 'فانتاج', 'أستون');
        }
        if (titleEn.includes('s 580') || titleEn.includes('mercedes')) {
          synonyms.push('s-class', 'sclass', 'mercedes', 'مرسيدس');
        }
        if (titleEn.includes('rs q8') || titleEn.includes('audi')) {
          synonyms.push('rsq8', 'audi', 'أودي');
        }
        if (titleEn.includes('battista') || titleEn.includes('hyper')) {
          synonyms.push('battista', 'pininfarina', 'electric', 'كهربائية', 'باتيستا');
        }

        const matchesSynonym = synonyms.some(
          (syn) => syn.includes(q) || q.includes(syn)
        );

        return (
          titleEn.includes(q) ||
          titleAr.includes(q) ||
          subtitleEn.includes(q) ||
          subtitleAr.includes(q) ||
          fuelEn.includes(q) ||
          fuelAr.includes(q) ||
          catLabelEn.includes(q) ||
          catLabelAr.includes(q) ||
          yearStr.includes(q) ||
          matchesSynonym
        );
      });
    }

    // 3. Sorting
    if (sortBy === 'price_asc') {
      list.sort((a, b) => getNumericalPrice(a) - getNumericalPrice(b));
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => getNumericalPrice(b) - getNumericalPrice(a));
    } else if (sortBy === 'year_desc') {
      list.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortBy === 'year_asc') {
      list.sort((a, b) => (a.year || 0) - (b.year || 0));
    } else if (sortBy === 'mileage_asc') {
      list.sort((a, b) => getNumericalMileage(a) - getNumericalMileage(b));
    }

    return list;
  }, [storeVehicles, activeCategory, searchTerm, sortBy]);

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory !== 'all' || searchTerm.trim() !== '' || sortBy !== 'featured';

  return (
    <section className="inventory-section" id="inventory">
      <div className="container">
        <SectionHeader
          eyebrow={t.inventory.eyebrow}
          title={t.inventory.title}
          highlight={t.inventory.highlight}
          subtitle={t.inventory.subtitle}
          align="center"
        />

        {/* Real-time Search & Sort Toolbar */}
        <div className="showroom-toolbar">
          {/* Instant Search Bar */}
          <div className="showroom-search-wrapper">
            <Search size={18} className="showroom-search-icon" />
            <input
              type="text"
              className="showroom-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.inventory.searchPlaceholder || (isArabic ? 'ابحث بالاسم أو الموديل (مثل: Porsche, Ferrari, G-Wagon)...' : 'Search by make, model, or keyword...')}
              aria-label={t.inventory.searchLabel || 'Search collection'}
            />
            {searchTerm && (
              <button
                type="button"
                className="showroom-search-clear"
                onClick={() => setSearchTerm('')}
                aria-label={isArabic ? 'مسح البحث' : 'Clear search'}
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Sort Dropdown Selector */}
          <div className="showroom-sort-wrapper">
            <div className="showroom-sort-label">
              <ArrowUpDown size={15} className="showroom-sort-icon" />
              <span>{t.inventory.sortByLabel || (isArabic ? 'الترتيب حسب:' : 'Sort by:')}</span>
            </div>
            <select
              className="showroom-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label={t.inventory.sortByLabel || 'Sort vehicles'}
            >
              <option value="featured">
                {t.inventory.sortOptions?.featured || (isArabic ? 'المميز في الصالة' : 'Featured Selection')}
              </option>
              <option value="price_asc">
                {t.inventory.sortOptions?.priceAsc || (isArabic ? 'السعر: من الأقل للأعلى' : 'Price: Low to High')}
              </option>
              <option value="price_desc">
                {t.inventory.sortOptions?.priceDesc || (isArabic ? 'السعر: من الأعلى للأقل' : 'Price: High to Low')}
              </option>
              <option value="year_desc">
                {t.inventory.sortOptions?.yearDesc || (isArabic ? 'سنة الصنع: الأحدث أولاً' : 'Year: Newest First')}
              </option>
              <option value="year_asc">
                {t.inventory.sortOptions?.yearAsc || (isArabic ? 'سنة الصنع: الأقدم أولاً' : 'Year: Oldest First')}
              </option>
              <option value="mileage_asc">
                {t.inventory.sortOptions?.mileageAsc || (isArabic ? 'المسافة: الأقل أولاً' : 'Mileage: Lowest First')}
              </option>
            </select>
          </div>
        </div>

        {/* Filter Tabs Bar with Results Badge */}
        <div className="showroom-filters-row">
          <div className="filter-tabs-wrapper" role="tablist" aria-label="Vehicle Categories">
            {vehicleCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleCount(12);
                }}
              >
                {isArabic && category.labelAr ? category.labelAr : category.label}
              </button>
            ))}
          </div>

          <div className="showroom-results-summary">
            <span className="results-badge">
              {isArabic
                ? `عرض ${filteredAndSortedVehicles.length} من أصل ${storeVehicles.length} سيارة`
                : `Showing ${filteredAndSortedVehicles.length} of ${storeVehicles.length} motorcars`}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                className="clear-filters-btn"
                onClick={handleClearFilters}
              >
                <RotateCcw size={13} />
                <span>{t.inventory.clearFilters || (isArabic ? 'إعادة ضبط' : 'Reset')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="vehicles-grid">
          {filteredAndSortedVehicles.slice(0, visibleCount).map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onInquire={onInquireVehicle}
              onViewDetails={(veh) => setSelectedDetailVehicle(veh)}
            />
          ))}
        </div>

        {/* Load More Action Bar */}
        {visibleCount < filteredAndSortedVehicles.length && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '36px', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              style={{
                padding: '12px 28px',
                borderRadius: '50px',
                border: '1px solid var(--accent-gold, #C28B14)',
                background: 'rgba(194, 139, 20, 0.08)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>
                {isArabic
                  ? `عرض المزيد من السيارات (${filteredAndSortedVehicles.length - visibleCount} متبقية)`
                  : `Load More Cars (${filteredAndSortedVehicles.length - visibleCount} remaining)`}
              </span>
            </button>
            <button
              type="button"
              className="btn btn-outline btn-lg"
              onClick={() => setVisibleCount(filteredAndSortedVehicles.length)}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: '1px solid var(--border-subtle, #E2E8F0)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <span>{isArabic ? `عرض كل السيارات (${filteredAndSortedVehicles.length})` : `Show All (${filteredAndSortedVehicles.length})`}</span>
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredAndSortedVehicles.length === 0 && (
          <div className="showroom-empty-state">
            <div className="empty-icon-wrap">
              <Car size={46} />
            </div>
            <h3>{isArabic ? 'لا توجد سيارات مطابقة لبحثك' : 'No matching vehicles found'}</h3>
            <p>{t.inventory.empty}</p>
            {hasActiveFilters && (
              <button
                type="button"
                className="btn-reset-filters-large"
                onClick={handleClearFilters}
              >
                <RotateCcw size={16} />
                <span>{t.inventory.clearFilters || (isArabic ? 'إعادة ضبط البحث والفلاتر' : 'Reset Search & Filters')}</span>
              </button>
            )}
          </div>
        )}

        {/* Luxury Vehicle Quick View & Details Modal */}
        <VehicleDetailsModal
          isOpen={!!selectedDetailVehicle}
          vehicle={selectedDetailVehicle}
          onClose={() => setSelectedDetailVehicle(null)}
          onInquire={(veh) => {
            setSelectedDetailVehicle(null);
            if (onInquireVehicle) {
              onInquireVehicle(veh);
            }
          }}
        />
      </div>
    </section>
  );
};

export default VehicleShowcaseSection;
