'use client'
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { CardGrid } from '@/components/CardGrid';
import Timeline from '@/components/Timeline';
import CTA from '@/components/CTA';
import { aboutValues, contactOptions, dashboardMetrics, ecosystemHighlights, homeStats, selectionProcess, whatWeDoCards } from '@/data/siteData';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const wrapperRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowForm(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
      }
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero
        eyebrow="Career, campus & hiring ecosystem"
        title="NiyogGen connects talent, campuses, events, and employers in one simple journey."
        text="A single-page platform concept built to explain NiyogGen’s mission, selection process, ecosystem, and contact flow with a clean responsive experience."
        primaryHref="#selection-process"
        primaryLabel="View selection process"
        secondaryHref="#what-we-do"
        secondaryLabel="What we do"
      />

      <section className="container stats-row" aria-label="NiyogGen highlights">
        {homeStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section data-section="selection-process" className="container split section-pad anchor-section">
        <SectionHeader
          eyebrow="Our selection process"
          title="A clear path from discovery to opportunity."
          text="NiyogGen is designed to make hiring easier to understand for candidates and easier to manage for campuses and employers."
        />
        <Timeline items={selectionProcess} />
      </section>

      <section data-section="what-we-do" className="container section-pad-sm anchor-section">
        <SectionHeader
          eyebrow="What we do"
          title="We create one ecosystem for career readiness and hiring."
          text="NiyogGen brings multiple stakeholders together so talent preparation, campus collaboration, events, and hiring can happen with more structure."
          center
        />
        <CardGrid items={whatWeDoCards} />
      </section>

      <section data-section="about" className="container section-pad-sm anchor-section">
        <div className="story-card">
          <span className="eyebrow">About NiyogGen</span>
          <h2>Our mission is to make career movement more transparent, guided, and opportunity-driven.</h2>
          <p>
            NiyogGen will support students, campuses, employers, mentors, and event organizers with a practical ecosystem where people can prepare, connect, get discovered, and move forward with confidence.
          </p>
        </div>
        <div className="about-grid-gap">
          <CardGrid items={aboutValues} />
        </div>
      </section>

      <section className="container section-pad-sm">
        <SectionHeader
          eyebrow="Ecosystem"
          title="Built for collaboration, not isolated workflows."
          text="Every part of NiyogGen is planned around visibility, trust, readiness, and measurable progress."
          center
        />
        <CardGrid items={ecosystemHighlights} columns="three" />
      </section>

      <section data-section="contact" className="container section-pad-sm anchor-section">
        <SectionHeader
          eyebrow="Our contact"
          title="Let’s build the future of career and hiring together."
          text="Use this contact section for campus partnerships, employer hiring discussions, mentor programs, event collaboration, or general questions."
          center
        />
        <CardGrid items={contactOptions} columns="three" />
        <div ref={wrapperRef} className="form-embed-card">
          {showForm ? (
            <iframe
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAa1N2VFUN0RWR0xKN1BRTFlWUUg0NkpPR0ZDSTczWC4u"
              className="contact-iframe"
              scrolling="no"
              title="Niyoggen Contact Form"
              tabIndex="-1"
            >
              Loading…
            </iframe>
          ) : (
            <div className="form-loading-placeholder">
              Loading contact form...
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Ready to explore NiyogGen?"
        text="Start with the selection process, understand the ecosystem, and connect with us for collaboration."
      />
    </>
  );
}
