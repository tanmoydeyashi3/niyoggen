import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn, FloatingCard } from './MotionWrapper';

export default function Hero({ eyebrow, title, text, primaryHref = '/contact', primaryLabel = 'Start with NiyogGen', secondaryHref = '/about', secondaryLabel = 'Learn more', visual = true }) {
  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <FadeIn className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> {eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="hero-actions">
            <Link href={primaryHref} className="btn primary">{primaryLabel}<ArrowRight size={18} /></Link>
            <Link href={secondaryHref} className="btn ghost">{secondaryLabel}</Link>
          </div>
        </FadeIn>
        {visual && (
          <FloatingCard className="hero-card glass-card">
            <div className="gradient-bg" />

            <div className="hero-visual-content">
              <div className="hero-badge">
                Building Future Careers
              </div>

              <h3>
                Connecting Talent,
                <br />
                Opportunity & Growth
              </h3>

              <p>
                NiyogGen is focused on creating a modern ecosystem
                where students, campuses, and companies grow together.
              </p>

              <div className="hero-tags">
                <span>Innovation</span>
                <span>Campus Network</span>
                <span>Career Growth</span>
              </div>
            </div>
          </FloatingCard>
        )}
      </div>
    </section>
  );
}
