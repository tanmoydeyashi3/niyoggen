import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { FadeIn } from '@/components/MotionWrapper';
import CTA from '@/components/CTA';
import { dashboardMetrics } from '@/data/siteData';

export const metadata = { title: 'Dashboard | NiyogGen' };

export default function DashboardPage() {
  return (
    <>
      <Hero eyebrow="Dashboard preview" title="A command center for careers, campus activity, events, and hiring funnels." text="The NiyogGen dashboard will give every stakeholder a clear view of progress, readiness, participation, engagement, and hiring outcomes." primaryLabel="Request access" secondaryHref="/contact" secondaryLabel="Contact team" />
      <section className="container section-pad-sm">
        <SectionHeader eyebrow="Platform intelligence" title="Everything important, visible at a glance" text="Dashboards will transform scattered activity into structured insights." center />
        <div className="dashboard-grid">
          {dashboardMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <FadeIn key={metric.label} delay={index * 0.08} className="dashboard-card">
                <Icon size={28} />
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.change} this cycle</small>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn className="dashboard-preview">
          <div className="preview-sidebar"><b>NiyogGen</b><span /> <span /> <span /> <span /></div>
          <div className="preview-main">
            <div className="preview-header"><h3>Hiring & Campus Overview</h3><button>Export</button></div>
            <div className="chart-bars"><i /><i /><i /><i /><i /><i /></div>
            <div className="preview-table"><span /><span /><span /><span /></div>
          </div>
        </FadeIn>
      </section>
      <CTA title="See the whole ecosystem in one dashboard." text="Track readiness, events, community engagement, and hiring progress with confidence." />
    </>
  );
}
