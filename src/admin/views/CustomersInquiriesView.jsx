import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import {
  Users,
  Search,
  Plus,
  MessageCircle,
  Phone,
  Mail,
  Trash2,
  Clock,
  CheckCircle,
  UserCheck,
  X,
  ExternalLink,
} from 'lucide-react';

export const CustomersInquiriesView = () => {
  const { inquiries, addInquiry, updateInquiryStatus, deleteInquiry } = useStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newLead, setNewLead] = useState({
    fullName: '',
    phone: '',
    email: '',
    channel: 'whatsapp',
    type: 'purchase',
    vehicleTitle: 'General VIP Concierge',
    message: '',
  });

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      (inq.email && inq.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (inq.vehicleTitle && inq.vehicleTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = typeFilter === 'all' || inq.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleCreateLead = (e) => {
    e.preventDefault();
    if (!newLead.fullName.trim() || !newLead.phone.trim()) return;
    addInquiry(newLead);
    setIsModalOpen(false);
    setNewLead({
      fullName: '',
      phone: '',
      email: '',
      channel: 'whatsapp',
      type: 'purchase',
      vehicleTitle: 'General VIP Concierge',
      message: '',
    });
  };

  return (
    <div className="admin-inquiries-view">
      {/* Top Toolbar */}
      <div className="admin-toolbar">
        <div style={{ display: 'flex', gap: '12px', flex: 1, flexWrap: 'wrap' }}>
          <div className="admin-search-box">
            <Search size={18} className="admin-search-icon" />
            <input
              type="text"
              className="admin-search-input"
              placeholder="Search customer name, phone, email, or car..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="admin-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All Inquiry Types</option>
            <option value="purchase">Vehicle Purchase</option>
            <option value="tradein">Sell / Trade-In Appraisal</option>
            <option value="rental">Fleet Rental</option>
            <option value="testdrive">Private Test Drive</option>
          </select>

          <select
            className="admin-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Lead Statuses</option>
            <option value="new">New (Uncontacted)</option>
            <option value="contacted">Contacted</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed / Deal Won</option>
          </select>
        </div>

        <button
          type="button"
          className="admin-btn admin-btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={16} />
          <span>New Customer Lead</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">
              <Users size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Customer CRM & Concierge Leads</span>
              <span className="admin-counter-badge">{filteredInquiries.length} Inquiries</span>
            </h3>
            <p className="admin-card-desc">
              All direct inquiries captured from the website modal and showroom consultations.
            </p>
          </div>
        </div>

        <div className="admin-card-body" style={{ padding: 0 }}>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Contact Details</th>
                  <th>Inquiry Type</th>
                  <th>Vehicle / Subject</th>
                  <th>Client Message</th>
                  <th>Lead Status</th>
                  <th style={{ textAlign: 'right' }}>Direct Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{inq.fullName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        {inq.date || 'Recent'}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <a
                          href={`tel:${inq.phone.replace(/[^0-9+]/g, '')}`}
                          style={{ color: 'var(--admin-text-main)', fontSize: '0.85rem', fontWeight: 500 }}
                        >
                          {inq.phone}
                        </a>
                        {inq.email && (
                          <a
                            href={`mailto:${inq.email}`}
                            style={{ color: 'var(--admin-text-muted)', fontSize: '0.78rem' }}
                          >
                            {inq.email}
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge" style={{ background: '#F1F5F9', color: '#334155' }}>
                        {inq.type}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>
                        {inq.vehicleTitle || 'General Concierge'}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        Prefers: {inq.channel || 'WhatsApp'}
                      </div>
                    </td>
                    <td style={{ maxWidth: '240px' }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.82rem',
                          color: 'var(--admin-text-muted)',
                          lineHeight: 1.4,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {inq.message || 'No additional notes entered.'}
                      </p>
                    </td>
                    <td>
                      <select
                        className="admin-select"
                        style={{ height: '32px', fontSize: '0.78rem', padding: '0 8px' }}
                        value={inq.status}
                        onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Negotiation</option>
                        <option value="closed">Closed / Deal Won</option>
                      </select>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                        {/* WhatsApp Button */}
                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${inq.fullName}, thank you for contacting AUTOHAUS regarding: ${inq.vehicleTitle || 'our luxury showroom'}. How may our director assist you today?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                          style={{ color: '#059669' }}
                          title="Message on WhatsApp"
                        >
                          <MessageCircle size={14} />
                        </a>
                        <button
                          type="button"
                          className="admin-btn admin-btn-danger admin-btn-sm"
                          onClick={() => {
                            if (window.confirm(`Delete inquiry from ${inq.fullName}?`)) {
                              deleteInquiry(inq.id);
                            }
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredInquiries.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '36px' }}>
                      <Users size={36} style={{ color: 'var(--admin-text-light)', margin: '0 auto 8px auto' }} />
                      <div style={{ color: 'var(--admin-text-muted)' }}>No inquiries found matching your filter.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manual Add Lead Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Record New Customer Lead</h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateLead}>
              <div className="admin-modal-body">
                <div className="admin-form-grid">
                  <div className="admin-form-group">
                    <label className="admin-label">Full Name *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. William Sterling"
                      value={newLead.fullName}
                      onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Phone / WhatsApp *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="+1 (555) 000-0000"
                      value={newLead.phone}
                      onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Email Address</label>
                    <input
                      type="email"
                      className="admin-input"
                      placeholder="w.sterling@estate.com"
                      value={newLead.email}
                      onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Inquiry Category</label>
                    <select
                      className="admin-select"
                      value={newLead.type}
                      onChange={(e) => setNewLead({ ...newLead, type: e.target.value })}
                    >
                      <option value="purchase">Vehicle Purchase</option>
                      <option value="tradein">Trade-In Appraisal</option>
                      <option value="rental">Fleet Rental</option>
                      <option value="concierge">General Concierge</option>
                    </select>
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Interested Vehicle / Topic</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={newLead.vehicleTitle}
                      onChange={(e) => setNewLead({ ...newLead, vehicleTitle: e.target.value })}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Inquiry Notes / Client Requests</label>
                    <textarea
                      className="admin-textarea"
                      placeholder="Client preferences, delivery schedule, budget range..."
                      value={newLead.message}
                      onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
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
                  Save Customer Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersInquiriesView;
