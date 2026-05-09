import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Timeline from '@/components/Timeline';
import { CardGrid } from '@/components/CardGrid';
import CTA from '@/components/CTA';
import { careerSteps, ecosystemCards } from '@/data/siteData';

export const metadata = { title: 'Careers | NiyogGen' };

export default function CareersPage() {
  return (
    <>
      <Hero eyebrow="Careers mission" title="Careers should be guided, inclusive, and connected to real opportunity." text="NiyogGen is not starting with job listings alone. We are building a mission-driven career ecosystem where people understand their path, prepare with confidence, and connect with the right communities and employers." primaryLabel="Join the mission" secondaryHref="/connect" secondaryLabel="Explore connect" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="What we will do" title="Career growth with structure" text="Our platform will support discovery, preparation, mentoring, events, and measurable progress so every individual can move from uncertainty to action." center />
        <CardGrid items={ecosystemCards} />
      </section>
      <section className="container split section-pad-sm">
        <SectionHeader eyebrow="Career steps" title="A simple journey for every individual" text="Each stage is designed to reduce confusion and increase readiness before opportunities arrive." />
        <Timeline items={careerSteps} />
      </section>
      <CTA title="Careers are more than openings." text="NiyogGen will help individuals build direction, confidence, and long-term employability." />
    </>
  );
}
