import React, { useState, useEffect } from 'react';
import { vehiclesData, vehicleCategories } from '../../data/vehiclesData';
import { getVehicles } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import VehicleCard from './VehicleCard';
import { Car, Loader2 } from 'lucide-react';

export const VehicleShowcaseSection = ({ onInquireVehicle }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vehicles, setVehicles] = useState(vehiclesData);
  const [loading, setLoading] = useState(false);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    async function loadLiveVehicles() {
      setLoading(true);
      const data = await getVehicles(activeCategory);
      if (isMounted) {
        if (data && data.length > 0) {
          setVehicles(data);
        } else if (data === null) {
          // If PostgreSQL backend is not currently connected, filter local dataset
          const filtered = activeCategory === 'all'
            ? vehiclesData
            : vehiclesData.filter((veh) => veh.category === activeCategory);
          setVehicles(filtered);
        } else {
          setVehicles([]);
        }
        setLoading(false);
      }
    }

    loadLiveVehicles();

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

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

        {/* Loading Indicator */}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--space-2xl) 0' }}>
            <Loader2 className="animate-spin" size={32} style={{ color: 'var(--accent-gold)' }} />
          </div>
        )}

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

        {!loading && vehicles.length === 0 && (
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
