import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getManagementTeam } from '../../services/api';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ShieldCheck, Award, Lock, ArrowUpRight, UserCheck } from 'lucide-react';

export const ManagementSection = ({ onOpenPortal }) => {
  const { t, isArabic } = useLanguage();
  const mgmt = t.management;
  const [team, setTeam] = useState(mgmt.team);

  useEffect(() => {
    let isMounted = true;
    async function loadTeam() {
      const liveData = await getManagementTeam();
      if (isMounted && liveData && liveData.length > 0) {
        const formatted = liveData.map((item) => ({
          id: item.id,
          name: isArabic && item.name_ar ? item.name_ar : item.name_en,
          role: isArabic && item.role_ar ? item.role_ar : item.role_en,
          bio: isArabic && item.bio_ar ? item.bio_ar : item.bio_en,
          credential: isArabic && item.credential_ar ? item.credential_ar : item.credential_en,
        }));
        setTeam(formatted);
      }
    }
    loadTeam();
    return () => {
      isMounted = false;
    };
  }, [isArabic]);

  return (
    <section id="management" className="management-section" aria-labelledby="mgmt-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="gold" size="md" icon={<ShieldCheck size={14} />}>
            {mgmt.eyebrow}
          </Badge>
          <h2 id="mgmt-heading" className="section-title">
            {mgmt.title} <span className="highlight-text">{mgmt.highlight}</span>
          </h2>
          <p className="section-subtitle">
            {mgmt.subtitle}
          </p>
        </div>

        {/* Executive Leadership Grid */}
        <div className="management-grid">
          {team.map((member) => (
            <article key={member.id} className="executive-card">
              <div className="executive-role-badge">
                <Badge variant="neutral" size="sm" icon={<UserCheck size={12} />}>
                  {member.role}
                </Badge>
              </div>

              <h3 className="executive-name">{member.name}</h3>
              <p className="executive-title">{member.role}</p>
              <p className="executive-desc">{member.bio}</p>

              <div className="executive-credential">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>{member.credential}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Authorized Dealership Portal Banner */}
        <div className="dealer-portal-banner">
          <div className="inspection-banner-content">
            <Badge variant="gold" size="sm" icon={<Lock size={12} />}>
              {mgmt.portalBadge}
            </Badge>
            <h3 className="inspection-banner-title" style={{ marginTop: '10px' }}>
              {mgmt.portalTitle}
            </h3>
            <p className="inspection-banner-desc">
              {mgmt.portalDesc}
            </p>
          </div>

          <div className="inspection-banner-action">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenPortal}
              iconLeft={<Lock size={16} />}
              iconRight={<ArrowUpRight size={16} className="rtl-flip" />}
            >
              {mgmt.portalBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
