import React from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t, isArabic } = useLanguage();

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          highlight={t.testimonials.highlight}
          subtitle={t.testimonials.subtitle}
          align="center"
        />

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              {/* Star Rating */}
              <div className="testimonial-rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-gold)" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="testimonial-quote">
                "{isArabic && item.commentAr ? item.commentAr : item.comment}"
              </blockquote>

              {/* Author Row */}
              <div className="testimonial-author-row">
                <div className="testimonial-avatar" aria-hidden="true">
                  {isArabic && item.avatarAr ? item.avatarAr : item.avatar}
                </div>

                <div className="testimonial-info">
                  <span className="testimonial-name">
                    {isArabic && item.authorAr ? item.authorAr : item.author}
                  </span>
                  <span className="testimonial-role">
                    {isArabic && item.roleAr ? item.roleAr : item.role}
                  </span>
                  <span className="testimonial-car-tag">
                    {isArabic && item.vehicleAcquiredAr ? item.vehicleAcquiredAr : item.vehicleAcquired} •{' '}
                    {isArabic && item.serviceTypeAr ? item.serviceTypeAr : item.serviceType}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
