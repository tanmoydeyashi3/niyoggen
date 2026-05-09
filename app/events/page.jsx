import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import CTA from '@/components/CTA';
import { eventTypes } from '@/data/siteData';

export const metadata = { title: 'Events | NiyogGen' };

export default function EventsPage() {
  return (
    <>
      <Hero eyebrow="Events engine" title="Events that turn preparation into real career momentum." text="NiyogGen events will bring students, campuses, mentors, and employers together through structured sessions, bootcamps, hiring weeks, and industry conversations." primaryLabel="Plan an event" secondaryHref="/campus" secondaryLabel="Campus support" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Program formats" title="Events designed for outcomes" text="Each event type supports awareness, readiness, networking, or hiring conversion." center />
        <CardGrid items={eventTypes} columns="four" />
      </section>
      <CTA title="Host programs people remember." text="Create career events that are organized, trackable, and connected to measurable outcomes." />
    </>
  );
}
