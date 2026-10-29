import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import {
  ShoppingBag,
  DollarSign,
  Star,
  CheckCircle,
  Eye,
  TrendingUp,
  Search,
  ArrowUpRight,
} from 'lucide-react';

export const BuyListingsView = ({ onNavigate }) => {
  const { vehicles, updateVehicle } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only vehicles that are in Buy status or catalog
  const buyListings = vehicles.filter((v) =>
    v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.year.toString().includes(searchTerm)
  );

  const totalBuyValue = buyListings.reduce((sum, v) => sum + (Number(v.price) || 0), 0);

  const handlePriceUpdate = (id, currentPrice) => {
    const newPriceStr = window.prompt('Enter new listing price (EGP / ج.م):', currentPrice);
    if (newPriceStr && !isNaN(Number(newPriceStr))) {
      updateVehicle(id, { price: Number(newPriceStr) });
    }
  };

  const handleToggleBadge = (id, currentBadge) => {
    const newBadge =
      currentBadge === 'Certified Pre-Owned'
        ? 'Showroom Feature'
        : currentBadge === 'Showroom Feature'
        ? 'VIP Allocation'
        : 'Certified Pre-Owned';
    updateVehicle(id, { badge: newBadge });
  };

  return (
    <div className="admin-buy-listings-view">
      {/* Top Banner KPI */}
      <div className="admin-stats-grid" style={{ marginBottom: '20px' }}>
        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">Active Buy Catalog</span>
            <span className="admin-stat-val">{buyListings.length} Units</span>
            <span className="admin-stat-hint">Certified for immediate delivery</span>
          </div>
          <div className="admin-stat-icon-wrap gold">
            <ShoppingBag size={22} />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">Total Asset Value</span>
            <span className="admin-stat-val">${totalBuyValue.toLocaleString()}</span>
            <span className="admin-stat-hint">Direct showroom inventory</span>
          </div>
          <div className="admin-stat-icon-wrap emerald">
            <TrendingUp size={22} />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-info">
            <span className="admin-stat-label">Average Unit Price</span>
            <span className="admin-stat-val">
              ${buyListings.length > 0 ? Math.round(totalBuyValue / buyListings.length).toLocaleString() : 0}
            </span>
            <span className="admin-stat-hint">Exotic & Executive bracket</span>
          </div>
          <div className="admin-stat-icon-wrap blue">
            <DollarSign size={22} />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ShoppingBag size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Buy Listings Management</span>
            </h3>
            <p className="admin-card-desc">
              Manage purchase listings, featured showroom placement, and live client pricing.
            </p>
          </div>

          <div className="admin-search-box" style={{ maxWidth: '280px' }}>
            <Search size={16} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder="Search buy listings..."
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
                  <th>Vehicle</th>
                  <th>Year & Specs</th>
                  <th>Listing Price</th>
                  <th>Monthly Lease Est.</th>
                  <th>Showroom Badge</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Direct Action</th>
                </tr>
              </thead>
              <tbody>
                {buyListings.map((car) => (
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
                            VIN: {car.vin || 'VERIFIED-AUTOHAUS'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.88rem' }}>{car.year} • {car.category}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {car.mileage}
                      </div>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--admin-accent-gold)', fontSize: '1rem' }}>
                        {car.priceFormatted || `${Number(car.price).toLocaleString()} ج.م`}
                      </strong>
                    </td>
                    <td>
                      <span style={{ color: 'var(--admin-text-muted)' }}>
                        {car.monthlyEstimate || 'Inquire'}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={() => handleToggleBadge(car.id, car.badge)}
                        title="Click to cycle showroom badge"
                      >
                        <Star size={12} style={{ color: 'var(--admin-accent-gold)' }} />
                        <span>{car.badge || 'Showroom Feature'}</span>
                      </button>
                    </td>
                    <td>
                      <span className={`admin-badge ${car.status === 'Available' ? 'available' : car.status === 'Reserved' ? 'reserved' : 'sold'}`}>
                        {car.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                        <button
                          type="button"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          onClick={() => handlePriceUpdate(car.id, car.price)}
                        >
                          <DollarSign size={13} />
                          <span>Change Price</span>
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
    </div>
  );
};

export default BuyListingsView;
