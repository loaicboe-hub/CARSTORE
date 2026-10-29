import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
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
            <span>Rental Fleet Vehicles ({rentalFleet.length})</span>
          </button>
          <button
            type="button"
            className={`admin-btn ${activeTab === 'inquiries' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <Calendar size={16} />
            <span>Booking Reservations ({rentalInquiries.length})</span>
          </button>
        </div>

        {activeTab === 'fleet' && (
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} />
            <span>Add Rental Vehicle</span>
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
                <span>Exotic & Executive Rental Fleet</span>
              </h3>
              <p className="admin-card-desc">
                Daily and weekly rental rates, security deposits, and real-time fleet availability.
              </p>
            </div>

            <div className="admin-search-box" style={{ maxWidth: '280px' }}>
              <Search size={16} className="admin-search-icon" />
              <input
                type="text"
                className="admin-search-input"
                placeholder="Search fleet..."
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
                    <th>Category</th>
                    <th>Daily Rate</th>
                    <th>Weekly Rate</th>
                    <th>Deposit</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
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
                              {car.fuel} • {car.seats} Seats
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{car.category}</td>
                      <td>
                        <strong style={{ color: 'var(--admin-accent-gold)' }}>
                          ${car.dailyRate} / day
                        </strong>
                      </td>
                      <td>${car.weeklyRate} / week</td>
                      <td>${car.deposit}</td>
                      <td>
                        <select
                          className="admin-select"
                          style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                          value={car.status}
                          onChange={(e) => updateRentalCar(car.id, { status: e.target.value })}
                        >
                          <option value="available">Available</option>
                          <option value="rented">Currently Rented</option>
                          <option value="maintenance">Maintenance</option>
                        </select>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                          <button
                            type="button"
                            className="admin-btn admin-btn-danger admin-btn-sm"
                            onClick={() => {
                              if (window.confirm(`Delete ${car.title} from rental fleet?`)) {
                                deleteRentalCar(car.id);
                              }
                            }}
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
                <span>Rental Booking Reservations</span>
              </h3>
              <p className="admin-card-desc">
                Inbound customer fleet reservations, rental schedules, and delivery logistics.
              </p>
            </div>
          </div>

          <div className="admin-card-body" style={{ padding: 0 }}>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Requested Vehicle</th>
                    <th>Rental Dates</th>
                    <th>Duration & Total</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Contact</th>
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
                        <div>{inq.days} Days</div>
                        <div style={{ fontWeight: 700, color: 'var(--admin-accent-gold)' }}>
                          ${(inq.totalEstimated || 0).toLocaleString()}
                        </div>
                      </td>
                      <td>
                        <select
                          className="admin-select"
                          style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                          value={inq.status}
                          onChange={(e) => updateRentalInquiryStatus(inq.id, e.target.value)}
                        >
                          <option value="pending">Pending Review</option>
                          <option value="confirmed">Confirmed & Scheduled</option>
                          <option value="completed">Returned / Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                          <a
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                              `Hello ${inq.customerName}, regarding your AUTOHAUS rental reservation for ${inq.vehicleTitle}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="admin-btn admin-btn-secondary admin-btn-sm"
                            style={{ color: '#059669' }}
                            title="Chat on WhatsApp"
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
              <h3 className="admin-modal-title">Add Vehicle to Rental Fleet</h3>
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
                    <label className="admin-label">Vehicle Name *</label>
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
                    <label className="admin-label">Category</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Supercar / Grand Tourer"
                      value={newCar.category}
                      onChange={(e) => setNewCar({ ...newCar, category: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Daily Rental Rate ($ USD) *</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.dailyRate}
                      onChange={(e) => setNewCar({ ...newCar, dailyRate: Number(e.target.value) })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Weekly Rate ($ USD)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.weeklyRate}
                      onChange={(e) => setNewCar({ ...newCar, weeklyRate: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Security Deposit ($ USD)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newCar.deposit}
                      onChange={(e) => setNewCar({ ...newCar, deposit: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Engine / Spec</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Twin-Turbo V6 Hybrid (819 HP)"
                      value={newCar.fuel}
                      onChange={(e) => setNewCar({ ...newCar, fuel: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Image Path or URL</label>
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
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Add to Fleet
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
