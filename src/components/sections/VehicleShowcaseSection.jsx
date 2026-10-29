import React, { useState, useEffect } from 'react';
import { vehicleCategories } from '../../data/vehiclesData';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import SectionHeader from '../common/SectionHeader';
import VehicleCard from './VehicleCard';
import { Car } from 'lucide-react';

export const VehicleShowcaseSection = ({ onInquireVehicle }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { vehicles: storeVehicles } = useStore();
  const [vehicles, setVehicles] = useState(storeVehicles);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    const filtered = activeCategory === 'all'
      ? storeVehicles
      : storeVehicles.filter((veh) => veh.category === activeCategory);
    setVehicles(filtered);
  }, [activeCategory, storeVehicles]);

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

        {/* Filter Tabs Bar */}
        <div className="filter-tabs-wrapper" role="tablist" aria-label="Vehicle Categories">
          {vehicleCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {isArabic && category.labelAr ? category.labelAr : category.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onInquire={onInquireVehicle}
            />
          ))}
        </div>

        {vehicles.length === 0 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-md)', color: 'var(--text-secondary)' }}>
            <Car size={48} style={{ opacity: 0.3, marginBottom: '12px' }} />
            <p>{t.inventory.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleShowcaseSection;
