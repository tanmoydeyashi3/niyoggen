import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './MotionWrapper';

export default function CTA({ title, text, href = '#contact', label = 'Contact us' }) {
  return (
    <section className="container cta-wrap">
      <FadeIn className="cta">
        <div>
          <span className="eyebrow">Ready to move forward?</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href={href} className="btn light">{label}<ArrowRight size={18} /></Link>
      </FadeIn>
    </section>
  );
}
