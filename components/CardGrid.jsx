import { FadeIn } from './MotionWrapper';

export function CardGrid({ items, columns = 'four' }) {
  return (
    <div className={`card-grid ${columns}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <FadeIn key={item.title} delay={index * 0.08} className="feature-card">
            {Icon && <div className="icon-bubble"><Icon size={24} /></div>}
            {item.date && <span className="pill">{item.date}</span>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </FadeIn>
        );
      })}
    </div>
  );
}
