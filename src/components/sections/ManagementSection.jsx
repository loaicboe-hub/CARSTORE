import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getManagementTeam } from '../../services/api';
import Badge from '../common/Badge';
import { ShieldCheck, Award, UserCheck } from 'lucide-react';

export const ManagementSection = () => {
  const { t, isArabic } = useLanguage();
  const mgmt = t.management;
  const [team, setTeam] = useState(mgmt.team);

  useEffect(() => {
    let isMounted = true;
    setTeam(t.management.team);
    async function loadTeam() {
      try {
        const liveData = await getManagementTeam();
        if (isMounted && liveData && liveData.length > 0) {
          const formatted = liveData.map((item) => ({
            id: item.id,
            name: isArabic && item.name_ar ? item.name_ar : (item.name_en || item.name),
            role: isArabic && item.role_ar ? item.role_ar : (item.role_en || item.role),
            bio: isArabic && item.bio_ar ? item.bio_ar : (item.bio_en || item.bio),
            credential: isArabic && item.credential_ar ? item.credential_ar : (item.credential_en || item.credential),
          }));
          setTeam(formatted);
        }
      } catch {
        // Fallback to dictionary
      }
    }
    loadTeam();
    return () => {
      isMounted = false;
    };
  }, [isArabic, t]);

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
      </div>
    </section>
  );
};

export default ManagementSection;
