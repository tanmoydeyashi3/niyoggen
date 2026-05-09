import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Timeline from '@/components/Timeline';
import CTA from '@/components/CTA';
import { hiringProcess } from '@/data/siteData';

export const metadata = { title: 'Hire | NiyogGen' };

export default function HirePage() {
  return (
    <>
      <Hero eyebrow="Hiring process" title="A hiring journey built for clarity, fairness, and speed." text="NiyogGen will help employers define hiring needs, discover prepared talent, evaluate consistently, communicate clearly, and track outcomes from one place." primaryLabel="Hire with us" secondaryHref="/dashboard" secondaryLabel="View dashboard" />
      <section className="container split section-pad-sm">
        <SectionHeader eyebrow="Employer workflow" title="How hiring will work on NiyogGen" text="The process is planned to reduce noise and improve hiring confidence for teams and candidates." />
        <Timeline items={hiringProcess} />
      </section>
      <CTA title="Make hiring more human and measurable." text="NiyogGen will connect employer needs with prepared talent and transparent funnel visibility." />
    </>
  );
}
