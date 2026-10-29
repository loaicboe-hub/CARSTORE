import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
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
    const newVal = window.prompt('Enter new valuation appraisal (EGP / ج.م):', currentValuation);
    if (newVal && !isNaN(Number(newVal))) {
      updateSellRequestStatus(id, undefined, Number(newVal));
    }
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
              placeholder="Search customer, vehicle, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Request Statuses</option>
            <option value="new">New Inquiries</option>
            <option value="under_review">Under Review</option>
            <option value="offer_sent">Offer Sent</option>
            <option value="approved">Approved & Acquired</option>
            <option value="rejected">Rejected / Passed</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          <span>Log Seller Appraisal</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <ShoppingBag size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Sell & Consignment Pipeline</span>
              <span className="admin-counter-badge">{filteredRequests.length} Requests</span>
            </h3>
            <p className="admin-card-desc">
              Customer vehicle submissions, valuation underwriting, and acquisition negotiations.
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Vehicle Details</th>
                  <th>Condition & Mileage</th>
                  <th>Asking vs Appraisal</th>
                  <th>Status Workflow</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
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
                        {req.notes || 'No inspection notes'}
                      </div>
                    </td>
                    <td>
                      <div>{req.condition}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                        {req.mileage}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.88rem' }}>
                        Asking:{' '}
                        <strong>{(Number(req.askingPrice) || 0).toLocaleString()} EGP</strong>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--admin-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>Appraisal: {(Number(req.estimatedValuation) || 0).toLocaleString()} EGP</span>
                        <button
                          type="button"
                          onClick={() => handleUpdateValuation(req.id, req.estimatedValuation)}
                          style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--admin-accent-gold)', padding: 0 }}
                          title="Edit appraisal valuation"
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
                        <option value="new">New Submission</option>
                        <option value="under_review">Under Review</option>
                        <option value="offer_sent">Offer Sent</option>
                        <option value="approved">Approved & Acquired</option>
                        <option value="rejected">Declined</option>
                      </select>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                        {/* Direct WhatsApp Concierge Button */}
                        <a
                          href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${req.customerName}, this is the executive appraisal team from AUTOHAUS regarding your ${req.vehicleTitle}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          style={{ color: '#059669' }}
                          title="Chat with Seller on WhatsApp"
                        >
                          <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => {
                            if (window.confirm(`Delete request from ${req.customerName}?`)) {
                              deleteSellRequest(req.id);
                            }
                          }}
                          title="Delete Request"
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
                      <div style={{ color: 'var(--admin-text-muted)' }}>No sell requests match your filter.</div>
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
              <h3 className="admin-modal-title">Log In-Person Seller Appraisal</h3>
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
                    <label className="admin-label">Seller Full Name *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Jonathan Pierce"
                      value={newRequest.customerName}
                      onChange={(e) => setNewRequest({ ...newRequest, customerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Mobile / WhatsApp *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="+1 (555) 000-0000"
                      value={newRequest.phone}
                      onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Vehicle Title (Make & Model) *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. 2023 Bentley Continental GT"
                      value={newRequest.vehicleTitle}
                      onChange={(e) => setNewRequest({ ...newRequest, vehicleTitle: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Mileage</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. 5,100 mi"
                      value={newRequest.mileage}
                      onChange={(e) => setNewRequest({ ...newRequest, mileage: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Seller Asking Price (EGP / ج.م)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newRequest.askingPrice}
                      onChange={(e) => setNewRequest({ ...newRequest, askingPrice: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Underwriting Appraisal Value (EGP / ج.م)</label>
                    <input
                      type="number"
                      className="admin-input"
                      value={newRequest.estimatedValuation}
                      onChange={(e) => setNewRequest({ ...newRequest, estimatedValuation: Number(e.target.value) })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Inspection & Condition Notes</label>
                    <textarea
                      className="admin-textarea"
                      placeholder="Service history, paint depth, interior wear, mechanical remarks..."
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
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  Save Appraisal Request
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
