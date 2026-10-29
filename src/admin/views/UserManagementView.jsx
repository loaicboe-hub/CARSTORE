import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  getAdminUsers,
  getAdminUserDetails,
  updateAdminUser,
  deleteAdminUser,
  updateListingApproval,
} from '../../services/adminUsersService';
import {
  Users,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Clock,
  Car,
  X,
  Shield,
  Phone,
  Mail,
  MapPin,
  Calendar,
  UserCheck,
  UserX,
  Check,
  ExternalLink,
} from 'lucide-react';

export const UserManagementView = () => {
  const { isArabic } = useLanguage();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Modals state
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [deleteListingsToo, setDeleteListingsToo] = useState(false);

  const [actionMsg, setActionMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch users
  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const data = await getAdminUsers({
        search,
        status: statusFilter,
        activity: activityFilter,
        dateRange: dateFilter,
      });
      setUsers(data);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to load users.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [search, statusFilter, activityFilter, dateFilter]);

  // Open details modal
  const handleOpenDetails = async (userItem) => {
    setSelectedUser(userItem);
    setIsLoadingDetails(true);
    try {
      const details = await getAdminUserDetails(userItem.id);
      setUserDetails(details);
    } catch (err) {
      alert(err.message || 'Error fetching user details.');
    } finally {
      setIsLoadingDetails(false);
    }
  };

  // Quick toggle status
  const handleQuickStatusChange = async (userId, newStatus) => {
    try {
      await updateAdminUser(userId, { status: newStatus });
      setActionMsg(`User status updated to "${newStatus}".`);
      setTimeout(() => setActionMsg(''), 3000);
      loadUsers();
      if (userDetails && userDetails.id === userId) {
        setUserDetails({ ...userDetails, status: newStatus });
      }
    } catch (err) {
      alert(err.message || 'Failed to update status.');
    }
  };

  // Save edit form
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await updateAdminUser(editingUser.id, editingUser);
      setEditingUser(null);
      setActionMsg(`User "${editingUser.name}" updated successfully.`);
      setTimeout(() => setActionMsg(''), 3000);
      loadUsers();
    } catch (err) {
      alert(err.message || 'Failed to update user.');
    }
  };

  // Execute delete
  const handleConfirmDelete = async () => {
    if (!deletingUser) return;
    try {
      await deleteAdminUser(deletingUser.id, deleteListingsToo);
      setDeletingUser(null);
      setActionMsg(`Account for "${deletingUser.name}" has been removed.`);
      setTimeout(() => setActionMsg(''), 3000);
      loadUsers();
    } catch (err) {
      alert(err.message || 'Failed to delete user.');
    }
  };

  // Approve or Reject listing inside user details modal
  const handleListingApproval = async (listingId, action) => {
    try {
      await updateListingApproval(listingId, action, `Reviewed by admin in User Management`);
      setActionMsg(`Listing ${action === 'approve' ? 'Approved' : 'Rejected'}.`);
      setTimeout(() => setActionMsg(''), 3000);
      // Refresh user details
      if (selectedUser) {
        const refreshed = await getAdminUserDetails(selectedUser.id);
        setUserDetails(refreshed);
      }
      loadUsers();
    } catch (err) {
      alert(err.message || 'Failed to update listing.');
    }
  };

  const getStatusLabel = (status) => {
    if (!isArabic) return status;
    const map = {
      active: 'نشط',
      suspended: 'موقوف',
      inactive: 'غير نشط',
    };
    return map[status] || status;
  };

  const getListingStatusLabel = (status) => {
    if (!isArabic) {
      return status === 'approved' ? 'Live in Showroom' : status;
    }
    const map = {
      approved: 'معروض بالمعرض',
      pending: 'قيد المراجعة',
      rejected: 'مرفوض',
    };
    return map[status] || status;
  };

  return (
    <div className="admin-user-management">
      {/* View Header */}
      <div className="admin-view-header">
        <div>
          <h2 className="admin-view-title">{isArabic ? 'إدارة المستخدمين' : 'User Management'}</h2>
          <p className="admin-view-subtitle">
            {isArabic
              ? 'البحث وفحص وإدارة حسابات العملاء المسجلين والسيارات المقدمة منهم.'
              : 'Search, inspect, and administer registered customer accounts and their submitted vehicles.'}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(194, 139, 20, 0.15)',
              color: 'var(--admin-accent-gold)',
              fontSize: '0.82rem',
              fontWeight: 700,
            }}
          >
            {users.length} {isArabic ? 'حسابات مسجلة' : 'Registered Accounts'}
          </span>
        </div>
      </div>

      {/* Action Notification */}
      {actionMsg && (
        <div
          style={{
            background: 'var(--admin-emerald-light, rgba(16, 185, 129, 0.15))',
            color: 'var(--admin-emerald, #10B981)',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '0.88rem',
          }}
        >
          <CheckCircle size={16} />
          <span>{actionMsg}</span>
        </div>
      )}

      {/* Search & Filter Toolbar */}
      <div
        className="admin-card"
        style={{
          marginBottom: '20px',
          padding: '16px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <input
            type="text"
            className="admin-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isArabic ? 'البحث بالاسم، الإيميل، الهاتف، المدينة...' : 'Search by name, email, phone, city...'}
            style={{
              [isArabic ? 'paddingRight' : 'paddingLeft']: '38px',
              [isArabic ? 'paddingLeft' : 'paddingRight']: '14px',
              height: '40px',
            }}
          />
          <Search
            size={16}
            style={{
              position: 'absolute',
              [isArabic ? 'right' : 'left']: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--admin-text-muted)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Filters Group */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {/* Status Filter */}
          <select
            className="admin-input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ height: '40px', width: 'auto', minWidth: '130px' }}
          >
            <option value="all">{isArabic ? 'جميع الحالات' : 'All Statuses'}</option>
            <option value="active">{isArabic ? 'الحسابات النشطة' : 'Active Accounts'}</option>
            <option value="suspended">{isArabic ? 'الحسابات الموقوفة' : 'Suspended Accounts'}</option>
            <option value="inactive">{isArabic ? 'الحسابات غير النشطة' : 'Inactive Accounts'}</option>
          </select>

          {/* Activity Filter */}
          <select
            className="admin-input"
            value={activityFilter}
            onChange={(e) => setActivityFilter(e.target.value)}
            style={{ height: '40px', width: 'auto', minWidth: '140px' }}
          >
            <option value="all">{isArabic ? 'جميع الأنشطة' : 'All Activity'}</option>
            <option value="has_listings">{isArabic ? 'لديه سيارات معروضة' : 'Has Vehicle Listings'}</option>
            <option value="no_listings">{isArabic ? 'بدون سيارات' : 'No Listings'}</option>
          </select>

          {/* Date Filter */}
          <select
            className="admin-input"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={{ height: '40px', width: 'auto', minWidth: '130px' }}
          >
            <option value="all">{isArabic ? 'جميع أوقات التسجيل' : 'All Registration'}</option>
            <option value="7days">{isArabic ? 'آخر 7 أيام' : 'Past 7 Days'}</option>
            <option value="30days">{isArabic ? 'آخر 30 يوماً' : 'Past 30 Days'}</option>
            <option value="older">{isArabic ? 'أقدم من 30 يوماً' : 'Older than 30 Days'}</option>
          </select>
        </div>
      </div>

      {/* Registered Users Table */}
      <div className="admin-card">
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{isArabic ? 'المستخدم المسجل' : 'Registered User'}</th>
                <th>{isArabic ? 'رقم الهاتف' : 'Phone Number'}</th>
                <th>{isArabic ? 'المدينة / الموقع' : 'City / Location'}</th>
                <th>{isArabic ? 'تاريخ التسجيل' : 'Registered Date'}</th>
                <th>{isArabic ? 'حالة الحساب' : 'Account Status'}</th>
                <th>{isArabic ? 'السيارات المعروضة' : 'Vehicle Listings'}</th>
                <th style={{ textAlign: isArabic ? 'left' : 'right' }}>{isArabic ? 'الإجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--admin-text-muted)' }}>
                    {isArabic ? 'جارِ تحميل المستخدمين المسجلين...' : 'Loading registered users...'}
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--admin-text-muted)' }}>
                    {isArabic ? 'لم يتم العثور على مستخدمين مطابقين لبحثك.' : 'No users found matching your search criteria.'}
                  </td>
                </tr>
              ) : (
                users.map((u) => {
                  const isActive = u.status === 'active';
                  const isSuspended = u.status === 'suspended';
                  const isInactive = u.status === 'inactive';

                  return (
                    <tr key={u.id}>
                      {/* Name & Email */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: 'rgba(194, 139, 20, 0.2)',
                              color: 'var(--admin-accent-gold)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '0.82rem',
                            }}
                          >
                            {u.avatar || u.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                              {u.name}
                              {u.role === 'admin' && (
                                <span
                                  style={{
                                    [isArabic ? 'marginRight' : 'marginLeft']: '6px',
                                    fontSize: '0.68rem',
                                    padding: '1px 6px',
                                    borderRadius: '10px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    color: '#60A5FA',
                                    fontWeight: 800,
                                  }}
                                >
                                  {isArabic ? 'مدير' : 'Admin'}
                                </span>
                              )}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>{u.email}</div>
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td style={{ fontSize: '0.85rem' }}>{u.phone || '—'}</td>

                      {/* City */}
                      <td style={{ fontSize: '0.85rem' }}>{u.city || '—'}</td>

                      {/* Registration Date */}
                      <td style={{ fontSize: '0.82rem', color: 'var(--admin-text-muted)' }}>
                        {new Date(u.createdAt).toLocaleDateString()}
                      </td>

                      {/* Status */}
                      <td>
                        <span
                          className={`admin-status-badge ${
                            isActive ? 'active' : isSuspended ? 'pending' : 'inactive'
                          }`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            textTransform: 'capitalize',
                          }}
                        >
                          {isActive && <CheckCircle size={11} />}
                          {isSuspended && <Clock size={11} />}
                          {isInactive && <UserX size={11} />}
                          <span>{getStatusLabel(u.status)}</span>
                        </span>
                      </td>

                      {/* Listings count */}
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: '12px',
                              background: u.listingsCount > 0 ? 'rgba(194, 139, 20, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                              color: u.listingsCount > 0 ? 'var(--admin-accent-gold)' : 'var(--admin-text-muted)',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                            }}
                          >
                            {u.listingsCount} {isArabic ? 'سيارات' : 'Listings'}
                          </span>
                          {u.pendingCount > 0 && (
                            <span
                              style={{
                                padding: '2px 6px',
                                borderRadius: '10px',
                                background: 'rgba(245, 158, 11, 0.2)',
                                color: '#F59E0B',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                              }}
                              title={isArabic ? 'بانتظار المراجعة' : 'Pending Review'}
                            >
                              {u.pendingCount} {isArabic ? 'معلق' : 'pending'}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td style={{ textAlign: isArabic ? 'left' : 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          {/* View details */}
                          <button
                            type="button"
                            className="admin-btn admin-btn-sm admin-btn-secondary"
                            onClick={() => handleOpenDetails(u)}
                            title={isArabic ? 'عرض الملف والسيارات المعروضة' : 'View Full Profile & Submitted Listings'}
                          >
                            <Eye size={13} />
                            <span>{isArabic ? 'التفاصيل' : 'Details'}</span>
                          </button>

                          {/* Edit user */}
                          <button
                            type="button"
                            className="admin-btn admin-btn-sm"
                            style={{ background: 'rgba(255, 255, 255, 0.06)' }}
                            onClick={() => setEditingUser({ ...u })}
                            title={isArabic ? 'تعديل بيانات العميل' : 'Edit User Information'}
                          >
                            <Edit size={13} />
                          </button>

                          {/* Quick Status toggle */}
                          {isActive ? (
                            <button
                              type="button"
                              className="admin-btn admin-btn-sm"
                              style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}
                              onClick={() => handleQuickStatusChange(u.id, 'suspended')}
                              title={isArabic ? 'إيقاف الحساب' : 'Suspend Account'}
                            >
                              {isArabic ? 'إيقاف' : 'Suspend'}
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="admin-btn admin-btn-sm"
                              style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}
                              onClick={() => handleQuickStatusChange(u.id, 'active')}
                              title={isArabic ? 'تنشيط الحساب' : 'Activate Account'}
                            >
                              {isArabic ? 'تنشيط' : 'Activate'}
                            </button>
                          )}

                          {/* Delete user */}
                          {u.role !== 'admin' && (
                            <button
                              type="button"
                              className="admin-btn admin-btn-sm admin-btn-danger"
                              onClick={() => setDeletingUser(u)}
                              title={isArabic ? 'حذف الحساب' : 'Delete Account'}
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================= */}
      {/* 1. DEDICATED USER DETAILS MODAL (Profile + All Listings) */}
      {/* ======================================================= */}
      {selectedUser && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedUser(null);
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '860px',
              maxHeight: '90vh',
              background: '#0B111A',
              border: '1px solid rgba(194, 139, 20, 0.35)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(15, 23, 42, 0.6)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
                    color: '#070B11',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                  }}
                >
                  {selectedUser.avatar || selectedUser.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>{selectedUser.name}</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)' }}>{selectedUser.email}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--admin-text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
              {isLoadingDetails ? (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--admin-text-muted)' }}>
                  {isArabic ? 'جارِ تحميل سجل العميل الكامل وأسطول السيارات...' : 'Loading complete user record and vehicle fleet...'}
                </div>
              ) : userDetails ? (
                <div>
                  {/* Profile Summary Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '14px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      marginBottom: '24px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'رقم الهاتف' : 'Phone Number'}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '2px' }}>
                        {userDetails.phone || (isArabic ? 'غير محدد' : 'Not provided')}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'المدينة / الموقع' : 'City / Location'}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '2px' }}>
                        {userDetails.city || (isArabic ? 'غير محدد' : 'Not provided')}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'حالة الحساب' : 'Account Status'}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '2px', textTransform: 'capitalize' }}>
                        {getStatusLabel(userDetails.status)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>
                        {isArabic ? 'تاريخ التسجيل' : 'Registered Since'}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '2px' }}>
                        {new Date(userDetails.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Customer Vehicle Listings */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Car size={18} style={{ color: 'var(--admin-accent-gold)' }} />
                        <span>
                          {isArabic
                            ? `السيارات المقدمة من العميل (${userDetails.listings ? userDetails.listings.length : 0})`
                            : `Submitted Vehicle Listings (${userDetails.listings ? userDetails.listings.length : 0})`}
                        </span>
                      </h4>
                    </div>

                    {!userDetails.listings || userDetails.listings.length === 0 ? (
                      <div
                        style={{
                          textAlign: 'center',
                          padding: '30px',
                          background: 'rgba(255, 255, 255, 0.02)',
                          borderRadius: '8px',
                          color: 'var(--admin-text-muted)',
                          fontSize: '0.88rem',
                        }}
                      >
                        {isArabic ? 'لم يقم هذا العميل بإضافة أي سيارات بعد.' : 'This user has not submitted any vehicles yet.'}
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {userDetails.listings.map((item) => {
                          const isApproved = item.status === 'approved';
                          const isPending = item.status === 'pending';
                          const photo = item.photos && item.photos[0] ? item.photos[0] : '/images/hero_car.jpg';

                          return (
                            <div
                              key={item.id}
                              style={{
                                background: 'rgba(15, 23, 42, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '10px',
                                padding: '14px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '16px',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <img
                                  src={photo}
                                  alt={item.makeModel}
                                  style={{ width: '90px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                                  onError={(e) => {
                                    e.target.src = '/images/hero_car.jpg';
                                  }}
                                />
                                <div>
                                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.makeModel}</div>
                                  <div style={{ fontSize: '0.88rem', color: 'var(--admin-accent-gold)', fontWeight: 700 }}>
                                    {Number(item.price).toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}
                                  </div>
                                  <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>
                                    {item.year} • {item.mileage} • {item.city}
                                  </div>
                                </div>
                              </div>

                              {/* Status & Approval Actions */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span
                                  className={`admin-status-badge ${
                                    isApproved ? 'active' : isPending ? 'pending' : 'inactive'
                                  }`}
                                  style={{ textTransform: 'capitalize' }}
                                >
                                  {getListingStatusLabel(item.status)}
                                </span>

                                {/* Approve / Reject Buttons */}
                                {isPending && (
                                  <>
                                    <button
                                      type="button"
                                      className="admin-btn admin-btn-sm"
                                      style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}
                                      onClick={() => handleListingApproval(item.id, 'approve')}
                                    >
                                      {isArabic ? 'موافقة' : 'Approve'}
                                    </button>
                                    <button
                                      type="button"
                                      className="admin-btn admin-btn-sm admin-btn-danger"
                                      onClick={() => handleListingApproval(item.id, 'reject')}
                                    >
                                      {isArabic ? 'رفض' : 'Reject'}
                                    </button>
                                  </>
                                )}

                                {isApproved && (
                                  <button
                                    type="button"
                                    className="admin-btn admin-btn-sm"
                                    style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}
                                    onClick={() => handleListingApproval(item.id, 'reject')}
                                    title={isArabic ? 'إلغاء النشر من المعرض' : 'Unpublish from Showroom'}
                                  >
                                    {isArabic ? 'إلغاء النشر' : 'Unpublish'}
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '16px 24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'flex-end',
                background: 'rgba(15, 23, 42, 0.4)',
              }}
            >
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                onClick={() => setSelectedUser(null)}
              >
                {isArabic ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* 2. EDIT USER MODAL                                      */}
      {/* ======================================================= */}
      {editingUser && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setEditingUser(null);
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              background: '#0B111A',
              border: '1px solid rgba(194, 139, 20, 0.35)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>
                {isArabic ? 'تعديل بيانات العميل' : 'Edit Customer Information'}
              </h3>
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit}>
              <div className="admin-form-group" style={{ marginBottom: '14px' }}>
                <label className="admin-label">{isArabic ? 'الاسم بالكامل' : 'Full Name'}</label>
                <input
                  type="text"
                  className="admin-input"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group" style={{ marginBottom: '14px' }}>
                <label className="admin-label">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input
                  type="email"
                  className="admin-input"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group" style={{ marginBottom: '14px' }}>
                <label className="admin-label">{isArabic ? 'رقم الهاتف' : 'Phone Number'}</label>
                <input
                  type="tel"
                  className="admin-input"
                  value={editingUser.phone || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                />
              </div>

              <div className="admin-form-group" style={{ marginBottom: '14px' }}>
                <label className="admin-label">{isArabic ? 'المدينة / الموقع' : 'City / Location'}</label>
                <input
                  type="text"
                  className="admin-input"
                  value={editingUser.city || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, city: e.target.value })}
                />
              </div>

              <div className="admin-form-group" style={{ marginBottom: '14px' }}>
                <label className="admin-label">{isArabic ? 'حالة الحساب' : 'Account Status'}</label>
                <select
                  className="admin-input"
                  value={editingUser.status}
                  onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                >
                  <option value="active">{isArabic ? 'نشط (صلاحية كاملة)' : 'Active (Full access)'}</option>
                  <option value="suspended">{isArabic ? 'موقوف (محظور مؤقتاً)' : 'Suspended (Access blocked)'}</option>
                  <option value="inactive">{isArabic ? 'غير نشط' : 'Inactive / Deactivated'}</option>
                </select>
              </div>

              <div className="admin-form-group" style={{ marginBottom: '20px' }}>
                <label className="admin-label">{isArabic ? 'ملاحظات إدارية' : 'Administrative Notes'}</label>
                <textarea
                  className="admin-input"
                  rows={3}
                  value={editingUser.notes || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, notes: e.target.value })}
                  placeholder={isArabic ? 'ملاحظات داخلية حول هذا العميل...' : 'Internal notes about this customer...'}
                  style={{ height: 'auto', padding: '10px' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  className="admin-btn admin-btn-secondary"
                  onClick={() => setEditingUser(null)}
                >
                  {isArabic ? 'إلغاء' : 'Cancel'}
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {isArabic ? 'حفظ التعديلات' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* 3. DELETE USER CONFIRMATION MODAL                       */}
      {/* ======================================================= */}
      {deletingUser && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '460px',
              background: '#0B111A',
              border: '1px solid rgba(225, 29, 72, 0.4)',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#FB7185' }}>
              <AlertTriangle size={24} />
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
                {isArabic ? 'تأكيد حذف الحساب' : 'Confirm Account Deletion'}
              </h3>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              {isArabic ? (
                <>هل أنت متأكد من رغبتك في حذف حساب <strong>{deletingUser.name}</strong> ({deletingUser.email}) نهائياً؟</>
              ) : (
                <>Are you sure you want to permanently delete the account for <strong>{deletingUser.name}</strong> ({deletingUser.email})?</>
              )}
            </p>

            <div style={{ marginBottom: '20px', background: 'rgba(255, 255, 255, 0.04)', padding: '12px', borderRadius: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.84rem' }}>
                <input
                  type="checkbox"
                  checked={deleteListingsToo}
                  onChange={(e) => setDeleteListingsToo(e.target.checked)}
                  style={{ accentColor: 'var(--admin-accent-gold)' }}
                />
                <span>
                  {isArabic
                    ? 'حذف جميع إعلانات السيارات المقدمة من هذا العميل أيضاً'
                    : 'Also delete all vehicle listings submitted by this customer'}
                </span>
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                onClick={() => setDeletingUser(null)}
              >
                {isArabic ? 'إلغاء' : 'Cancel'}
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-danger"
                onClick={handleConfirmDelete}
              >
                {isArabic ? 'تأكيد حذف الحساب' : 'Confirm Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementView;
