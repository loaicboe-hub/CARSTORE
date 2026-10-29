import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { getTestimonials } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [items, setItems] = useState(testimonialsData);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    let isMounted = true;
    async function loadTestimonials() {
      const data = await getTestimonials();
      if (isMounted && data && data.length > 0) {
        setItems(data);
      }
    }
    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

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
          {items.map((item) => (
            <article key={item.id} className="testimonial-card">
              {/* Star Rating */}
              <div className="testimonial-rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                {[...Array(item.rating || 5)].map((_, i) => (
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
                    {isArabic && item.vehicleAcquiredAr ? item.vehicleAcquiredAr : item.vehicleAcquired}
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
