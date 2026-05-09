import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import { contactOptions } from '@/data/siteData';

export const metadata = { title: 'Contact | NiyogGen' };

export default function ContactPage() {
  return (
    <>
      <Hero eyebrow="Contact NiyogGen" title="Let’s talk about careers, campuses, events, and hiring." text="Reach out to collaborate, partner, host programs, or learn how NiyogGen can support your ecosystem." primaryLabel="Send message" secondaryHref="/about" secondaryLabel="About us" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Get in touch" title="We are open to meaningful partnerships" text="Tell us what you want to build with NiyogGen." center />
        <CardGrid items={contactOptions} columns="three" />
        <form className="contact-form">
          <input placeholder="Your name" />
          <input placeholder="Email address" />
          <select defaultValue="">
            <option value="" disabled>I am interested in...</option>
            <option>Campus partnership</option>
            <option>Hiring partnership</option>
            <option>Events collaboration</option>
            <option>General inquiry</option>
          </select>
          <textarea placeholder="Tell us about your requirement" rows="6" />
          <button type="button" className="btn primary">Submit inquiry</button>
        </form>
      </section>
    </>
  );
}
