export const site = {
  name: 'Badger Automation Group',
  /** Stacked header lockup (equals full brand) */
  nameLine1: 'Badger',
  nameLine2: 'Automation Group',
  /** Parent entity / legal umbrella */
  parentCompany: 'Vaccaro Ventures LLC',
  /** Full lockup: icon + "BADGER AUTOMATION GROUP" wordmark (1024x558). */
  logo: '/brand/badger-automation-group-logo.png',
  /** Icon-only mark: shield/badger/gear, roughly square (302x285). */
  logoMark: '/brand/badger-automation-group-mark.png',
  tagline:
    'AI automation & local SEO for businesses in Milwaukee and seven southeastern Wisconsin counties',
  longDescription:
    'Badger Automation Group — a Vaccaro Ventures LLC company — helps small businesses across Milwaukee, Waukesha, Racine, Kenosha, Ozaukee, Washington, and Walworth Counties adopt practical AI: human-in-the-loop workflows, customer-facing AI, and local SEO that saves time and wins nearby customers.',
  url: 'https://badgerautomationgroup.com',
  email: 'thomas@vaccaromarketing.digital',
  region: 'Southeastern Wisconsin',
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Areas', href: '/areas/' },
  { label: 'Industries', href: '/home-services/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Insights', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const aiServices: { slug: string; title: string; short: string; category: string }[] = [
  {
    slug: 'ai-automation-consulting',
    title: 'AI Automation Consulting',
    short: 'Roadmaps, governance, and pragmatic AI adoption—built for owners without an IT department.',
    category: 'consulting',
  },
  {
    slug: 'workflow-business-automation',
    title: 'Workflow & Business Automation',
    short: 'Connect CRM, inbox, calendar, and ops tools so data moves without copy-paste.',
    category: 'consulting',
  },
  {
    slug: 'local-seo-services',
    title: 'Local SEO Services',
    short: 'Map-pack strategy, on-site local signals, citations, and measurement for nearby demand.',
    category: 'local',
  },
  {
    slug: 'google-business-profile-ai',
    title: 'Google Business Profile (AI)',
    short: 'Listing optimization plus AI-assisted posts, Q&A, and photo workflows.',
    category: 'local',
  },
  {
    slug: 'ai-review-management',
    title: 'AI Review Management',
    short: 'Ethical review requests, AI-drafted replies, and reputation workflows that scale.',
    category: 'local',
  },
  {
    slug: 'ai-local-content',
    title: 'AI Local Content',
    short: 'Service-area pages, FAQs, and campaigns drafted fast—edited by people who know your trade.',
    category: 'content',
  },
  {
    slug: 'ai-lead-capture-chatbot',
    title: 'AI Lead Capture & Chatbot',
    short: 'Site chat that qualifies leads, captures details, and hands off cleanly to your team.',
    category: 'customer-ai',
  },
  {
    slug: 'ai-call-handling',
    title: 'AI Call Handling / Voice Agent',
    short: 'After-hours and overflow voice flows with honest ETAs and structured handoff.',
    category: 'customer-ai',
  },
];

export const serviceCategoryLabels: Record<string, string> = {
  consulting: 'Consulting & operations',
  local: 'Local SEO & reputation',
  content: 'Content systems',
  'customer-ai': 'Customer-facing AI',
};

export const homeVerticals: {
  slug: string;
  title: string;
  blurb: string;
}[] = [
  {
    slug: 'hvac',
    title: 'HVAC',
    blurb: 'Seasonal demand, emergency calls, and multi-location service areas.',
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    blurb: 'High-intent “near me” searches and urgent repair keywords.',
  },
  {
    slug: 'electrical',
    title: 'Electrical',
    blurb: 'Safety-led messaging, panel upgrades, and EV charger demand.',
  },
  {
    slug: 'roofing',
    title: 'Roofing',
    blurb: 'Storm seasons, insurance adjuster workflows, and photo-rich GBP.',
  },
  {
    slug: 'landscaping-lawn-care',
    title: 'Landscaping & Lawn Care',
    blurb: 'Route density, seasonal offers, and recurring route optimization.',
  },
  {
    slug: 'cleaning-restoration',
    title: 'Cleaning & Restoration',
    blurb: 'Trust signals, before/after content, and emergency water/fire terms.',
  },
  {
    slug: 'pest-control',
    title: 'Pest Control',
    blurb: 'Seasonal pests, bundled plans, and neighborhood-level targeting.',
  },
  {
    slug: 'remodeling-handyman',
    title: 'Remodeling & Handyman',
    blurb: 'Project galleries, estimate funnels, and long-cycle nurture.',
  },
];

export const counties: {
  slug: string;
  title: string;
  cities: string[];
}[] = [
  {
    slug: 'milwaukee-county',
    title: 'Milwaukee County',
    cities: [
      'Milwaukee',
      'West Allis',
      'Wauwatosa',
      'Greenfield',
      'Franklin',
      'Oak Creek',
      'South Milwaukee',
      'Glendale',
      'Shorewood',
      'Whitefish Bay',
    ],
  },
  {
    slug: 'waukesha-county',
    title: 'Waukesha County',
    cities: [
      'Waukesha',
      'Brookfield',
      'New Berlin',
      'Menomonee Falls',
      'Pewaukee',
      'Oconomowoc',
      'Delafield',
      'Muskego',
    ],
  },
  {
    slug: 'racine-kenosha',
    title: 'Racine & Kenosha Counties',
    cities: [
      'Racine',
      'Kenosha',
      'Mount Pleasant',
      'Pleasant Prairie',
      'Burlington',
      'Union Grove',
      'Somers',
    ],
  },
  {
    slug: 'ozaukee-washington-walworth',
    title: 'Ozaukee, Washington & Walworth Counties',
    cities: [
      'Mequon',
      'Grafton',
      'Cedarburg',
      'Port Washington',
      'West Bend',
      'Hartford',
      'Jackson',
      'Lake Geneva',
      'Elkhorn',
      'Delavan',
    ],
  },
];
