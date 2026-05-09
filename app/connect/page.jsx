import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import CTA from '@/components/CTA';
import { connectFeatures } from '@/data/siteData';

export const metadata = { title: 'Connect | NiyogGen' };

export default function ConnectPage() {
  return (
    <>
      <Hero eyebrow="NiyogGen Connect" title="A trusted network for students, mentors, alumni, campuses, and companies." text="Connect will make career conversations easier through mentor circles, verified communities, opportunity updates, and meaningful introductions." primaryLabel="Start connecting" secondaryHref="/events" secondaryLabel="View events" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Community layer" title="People grow faster when they are connected" text="NiyogGen Connect is designed to make support discoverable and collaboration practical." center />
        <CardGrid items={connectFeatures} />
      </section>
      <CTA title="Create meaningful career connections." text="Use NiyogGen to build relationships that lead to guidance, confidence, and opportunity." />
    </>
  );
}
