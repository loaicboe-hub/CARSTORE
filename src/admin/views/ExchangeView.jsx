import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
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
              placeholder="Search trade-in customer, current or desired car..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Exchange Statuses</option>
            <option value="pending">Pending Evaluation</option>
            <option value="inspection_scheduled">Inspection Scheduled</option>
            <option value="offer_made">Offer Made</option>
            <option value="completed">Completed & Upgraded</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          <span>New Exchange Deal</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ArrowLeftRight size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Bespoke Trade-In & Equity Transitions</span>
              <span className="admin-counter-badge">{filteredExchanges.length} Deals</span>
            </h3>
            <p className="admin-card-desc">
              Customer vehicle equity applied directly toward new showroom acquisitions.
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Current Trade-In Vehicle</th>
                  <th>Desired Showroom Upgrade</th>
                  <th>Equity Difference</th>
                  <th>Status Workflow</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
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
                        {ex.currentCarMileage} • Valuation: ${(Number(ex.currentCarValue) || 0).toLocaleString()}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ex.desiredCarTitle}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-accent-gold)' }}>
                        Price: ${(Number(ex.desiredCarPrice) || 0).toLocaleString()}
                      </div>
                    </td>
                    <td>
                      <div>
                        {Number(ex.equityDifference) >= 0 ? (
                          <strong style={{ color: 'var(--admin-text-main)' }}>
                            +${(Number(ex.equityDifference) || 0).toLocaleString()} (Client Pays)
                          </strong>
                        ) : (
                          <strong style={{ color: 'var(--admin-emerald)' }}>
                            ${Math.abs(Number(ex.equityDifference)).toLocaleString()} (Cashback)
                          </strong>
                        )}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {ex.notes || 'Standard equity swap'}
                      </div>
                    </td>
                    <td>
                      <select
                        className="admin-select"
                        style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                        value={ex.status}
                        onChange={(e) => updateExchangeStatus(ex.id, e.target.value)}
                      >
                        <option value="pending">Pending Evaluation</option>
                        <option value="inspection_scheduled">Inspection Scheduled</option>
                        <option value="offer_made">Offer Made</option>
                        <option value="completed">Completed / Upgraded</option>
                        <option value="declined">Declined</option>
                      </select>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                        <a
                          href={`https://wa.me/${ex.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${ex.customerName}, this is AUTOHAUS regarding your trade-in exchange inquiry (${ex.currentCar} for ${ex.desiredCarTitle}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          style={{ color: '#059669' }}
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => {
                            if (window.confirm(`Delete exchange deal for ${ex.customerName}?`)) {
                              deleteExchangeRequest(ex.id);
                            }
                          }}
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
                      <div style={{ color: 'var(--admin-text-muted)' }}>No trade-in exchange requests found.</div>
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
              <h3 className="admin-modal-title">Log Trade-In Exchange Deal</h3>
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
                    <label className="admin-label">Client Name *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Victor Hernandez"
                      value={newExchange.customerName}
                      onChange={(e) => setNewExchange({ ...newExchange, customerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Mobile / WhatsApp *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="+1 (555) 000-0000"
                      value={newExchange.phone}
                      onChange={(e) => setNewExchange({ ...newExchange, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Current Trade-In Vehicle *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. 2021 BMW M5 CS"
                      value={newExchange.currentCar}
                      onChange={(e) => setNewExchange({ ...newExchange, currentCar: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Trade-In Valuation Estimate ($ USD)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newExchange.currentCarValue}
                      onChange={(e) => setNewExchange({ ...newExchange, currentCarValue: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Target Showroom Car Title *</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newExchange.desiredCarTitle}
                      onChange={(e) => setNewExchange({ ...newExchange, desiredCarTitle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Target Car Price ($ USD)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newExchange.desiredCarPrice}
                      onChange={(e) => setNewExchange({ ...newExchange, desiredCarPrice: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Exchange Terms & Inspection Remarks</label>
                    <textarea
                      className="admin-textarea"
                      placeholder="Financing terms, inspection location, differential payoff..."
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
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Record Exchange Deal
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
