import { FadeIn } from './MotionWrapper';

export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <FadeIn className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </FadeIn>
  );
}
