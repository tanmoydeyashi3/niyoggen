import { FadeIn } from './MotionWrapper';

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.07} className="timeline-item">
          <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
