import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  LineChart,
  Mail,
  MapPinned,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from 'lucide-react';

export const navLinks = [
  { label: 'Selection Process', href: '#selection-process', id: 'selection-process' },
  { label: 'What We Do', href: '#what-we-do', id: 'what-we-do' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

export const brand = {
  name: 'NiyogGen',
  tagline: 'Where talent, campus, and opportunity move together.',
  email: 'niyoggen@outlook.com',
  phone: '+91 62968 66104',
  location: 'Kalikata, Amta, Howrah, WB - 711401'
};

export const homeStats = [
  { value: '360°', label: 'Career ecosystem' },
  { value: '5x', label: 'Faster talent discovery' },
  { value: '24/7', label: 'Dashboard visibility' },
  { value: '1', label: 'Unified hiring journey' }
];

export const selectionProcess = [
  { title: 'Profile discovery', text: 'We understand candidate goals, skills, interests, education, and preferred career direction.' },
  { title: 'Readiness mapping', text: 'Candidates are guided through resume strength, communication ability, practical skills, and interview preparation.' },
  { title: 'Smart matching', text: 'NiyogGen connects prepared talent with suitable campuses, mentors, events, and employer opportunities.' },
  { title: 'Assessment & shortlist', text: 'Structured tasks, scorecards, and interview stages help hiring teams evaluate candidates fairly.' },
  { title: 'Offer & growth tracking', text: 'The platform keeps candidates, campuses, and employers aligned from shortlist to final outcome.' }
];

export const whatWeDoCards = [
  {
    icon: GraduationCap,
    title: 'For students & freshers',
    text: 'We help early talent build profiles, prepare for interviews, join career events, and become visible to employers.'
  },
  {
    icon: Target,
    title: 'For campuses',
    text: 'Placement teams can organize readiness programs, campus drives, employer collaboration, and outcome tracking.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'For employers',
    text: 'Companies can discover verified talent, run structured hiring funnels, and improve hiring decisions with better data.'
  },
  {
    icon: CalendarDays,
    title: 'For events',
    text: 'NiyogGen supports career sessions, bootcamps, hiring weeks, mentor circles, and industry connect programs.'
  }
];

export const dashboardMetrics = [
  { icon: BarChart3, label: 'Active candidates', value: '12,480', change: '+18%' },
  { icon: BadgeCheck, label: 'Verified profiles', value: '8,920', change: '+24%' },
  { icon: CalendarDays, label: 'Events planned', value: '64', change: '+11%' },
  { icon: BriefcaseBusiness, label: 'Hiring funnels', value: '128', change: '+31%' }
];

export const aboutValues = [
  { icon: Compass, title: 'Clarity', text: 'We make career journeys less confusing through guided pathways and transparent processes.' },
  { icon: Sparkles, title: 'Opportunity', text: 'We help talent become visible to the right people at the right time.' },
  { icon: CheckCircle2, title: 'Readiness', text: 'We focus on practical preparation that improves real hiring outcomes.' },
  { icon: Rocket, title: 'Momentum', text: 'We connect campuses, candidates, and companies into one growth engine.' }
];

export const contactOptions = [
  { icon: Mail, title: 'Email us', text: brand.email },
  { icon: MapPinned, title: 'Location', text: brand.location },
  { icon: ArrowRight, title: 'Partnerships', text: 'Campus, employer, mentor, and event collaborations are welcome.' }
];

export const ecosystemHighlights = [
  { icon: Network, title: 'Connected ecosystem', text: 'Candidates, campuses, mentors, events, and employers work through one common journey.' },
  { icon: LineChart, title: 'Progress visibility', text: 'Dashboards show readiness, participation, hiring funnel status, and outcome movement.' },
  { icon: Handshake, title: 'Trusted collaboration', text: 'Every stakeholder gets clearer communication, better planning, and more confident decisions.' },
  { icon: ShieldCheck, title: 'Structured process', text: 'Transparent steps reduce confusion and create a better experience for candidates and hiring teams.' },
  { icon: UsersRound, title: 'Community support', text: 'Mentors, alumni, trainers, and industry experts can guide talent through practical programs.' },
  { icon: Megaphone, title: 'Opportunity updates', text: 'Students and professionals stay informed about hiring programs, workshops, and career events.' }
];
