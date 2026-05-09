import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import CTA from '@/components/CTA';
import { aboutValues } from '@/data/siteData';

export const metadata = { title: 'About Us | NiyogGen' };

export default function AboutPage() {
  return (
    <>
      <Hero eyebrow="About NiyogGen" title="We are building a practical bridge between ambition and opportunity." text="NiyogGen exists to simplify career growth and hiring. Our vision is to create a connected ecosystem where individuals prepare better, campuses operate smarter, and employers hire with stronger signals." primaryLabel="Work with us" secondaryHref="/careers" secondaryLabel="Our mission" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Our values" title="Built around readiness, trust, and momentum" text="Every product decision is designed to help people move forward with more clarity." center />
        <CardGrid items={aboutValues} />
      </section>
      <section className="container story-card">
        <h2>Our story</h2>
        <p>NiyogGen is designed for a future where career preparation, campus collaboration, events, community support, and hiring are not separate experiences. We believe opportunity should be easier to discover, easier to understand, and easier to act on.</p>
      </section>
      <CTA title="Join the NiyogGen journey." text="Be part of a career ecosystem that gives every learner, campus, and employer a clearer path forward." />
    </>
  );
}
