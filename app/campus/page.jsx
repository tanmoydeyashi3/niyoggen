import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import CTA from '@/components/CTA';
import { campusSupport } from '@/data/siteData';

export const metadata = { title: 'Campus | NiyogGen' };

export default function CampusPage() {
  return (
    <>
      <Hero eyebrow="Campus partnerships" title="Helping campuses prepare, connect, and place students better." text="NiyogGen will support colleges, training teams, and placement cells with readiness programs, event workflows, employer access, and data-led insights." primaryLabel="Partner with us" secondaryHref="/hire" secondaryLabel="Hiring flow" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Campus support" title="How NiyogGen will help all campus stakeholders" text="Students get guidance, placement teams get visibility, and employers get better prepared talent." center />
        <CardGrid items={campusSupport} />
      </section>
      <section className="container quote-band">
        <h2>Campus success means every student knows what to prepare, where to improve, and how to reach the right opportunity.</h2>
      </section>
      <CTA title="Build a stronger placement ecosystem." text="Bring structured readiness, events, analytics, and employer engagement to your campus." />
    </>
  );
}
