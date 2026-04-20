export type HomeVerticalDetail = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  painPoints: string[];
  localPlaybook: { title: string; body: string }[];
  aiAngle: string[];
  keywords: string[];
};

export const homeVerticalDetails: Record<string, HomeVerticalDetail> = {
  hvac: {
    slug: 'hvac',
    title: 'HVAC',
    headline: 'Local SEO & AI systems built for heating & cooling demand swings',
    intro:
      'HVAC is urgency-driven and seasonal. Badger Automation Group pairs Google Business Profile optimization with AI workflows for reviews, seasonal offers, and service-area pages—so you show up when homeowners search “AC repair near me” or “furnace tune-up” across SE Wisconsin.',
    painPoints: [
      'Thin or duplicate city pages that do not match how people actually search in Milwaukee suburbs.',
      'Missed after-hours leads when dispatch is busy—GBP and chat need to work together.',
      'Storm or heat-wave spikes that overwhelm manual posting and review responses.',
    ],
    localPlaybook: [
      {
        title: 'Service-area & neighborhood intent',
        body: 'We map your trucks to zip clusters and neighborhood names buyers use—not just “Milwaukee HVAC.”',
      },
      {
        title: 'Seasonal GBP posts & offers',
        body: 'AI-assisted post calendars for tune-ups, filter reminders, and rebate windows—timed to Wisconsin weather.',
      },
      {
        title: 'Proof that converts',
        body: 'Review velocity tied to job types (install vs. repair) and photo workflows from the field.',
      },
    ],
    aiAngle: [
      'AI drafts for Q&A and FAQs tuned to your brands and warranties—human-approved before publish.',
      'Voice agent scripts aligned with dispatch FAQs so after-hours calls still book.',
      'Content clusters for heat pumps, IAQ, and duct cleaning that read local, not generic.',
    ],
    keywords: [
      'AC repair Milwaukee',
      'furnace replacement Waukesha',
      'heat pump installer Racine County',
      'HVAC maintenance Kenosha',
    ],
  },
  plumbing: {
    slug: 'plumbing',
    title: 'Plumbing',
    headline: 'Capture high-intent “near me” plumbing searches before the competition does',
    intro:
      'Emergency leaks and drain calls convert fast—but only if your GBP, site, and chat experience match the moment. We align categories, services, and landing pages with how homeowners describe problems in SE WI.',
    painPoints: [
      'Broad “plumber near me” traffic with weak job-type segmentation (drain vs. water heater).',
      'Inconsistent NAP and service lists across directories during hiring or acquisitions.',
      'Slow review responses on urgent jobs—hurting trust on the listing itself.',
    ],
    localPlaybook: [
      {
        title: 'Job-type landing pages',
        body: 'Water heaters, sewer line, sump pumps—each with localized proof and internal links.',
      },
      {
        title: 'Emergency CTA clarity',
        body: 'GBP buttons, hours, and messaging that reflect true dispatch coverage.',
      },
      {
        title: 'Neighborhood modifiers',
        body: 'Support for Shorewood vs. Franklin vs. Muskego search behavior without keyword stuffing.',
      },
    ],
    aiAngle: [
      'AI review replies with safety-first tone—approved by you, sent in minutes.',
      'Chat prompts that qualify emergency vs. schedule and route to the right inbox.',
      'Localized blog and FAQ generation for code-adjacent topics homeowners actually ask.',
    ],
    keywords: [
      'emergency plumber Milwaukee',
      'drain cleaning Waukesha',
      'water heater replacement Kenosha',
      'sewer repair Racine County',
    ],
  },
  electrical: {
    slug: 'electrical',
    title: 'Electrical',
    headline: 'Trust-first local visibility for electricians and low-voltage specialists',
    intro:
      'Electrical work demands credibility. We emphasize licensing, insurance, and project photos in your GBP and site—while targeting panel upgrades, EV chargers, and whole-home rewires across the counties you actually serve.',
    painPoints: [
      'Competing against aggregators and national brands in “electrician near me.”',
      'Underused project photos and labels in GBP—missing high-converting proof.',
      'Complex services (EV, generators) needing education, not just a phone number.',
    ],
    localPlaybook: [
      {
        title: 'Service clarity',
        body: 'Explicit lists for EV charger install, panel upgrades, lighting, and smart home work.',
      },
      {
        title: 'Safety-led messaging',
        body: 'Copy and Q&A that reduce risk anxiety and pre-qualify the right jobs.',
      },
      {
        title: 'Commercial + residential split',
        body: 'Where relevant, separate funnels so local intent matches your crew mix.',
      },
    ],
    aiAngle: [
      'Structured Q&A from real customer questions—expanded responsibly with licensed pros in the loop.',
      'AI-assisted estimate-request flows on site and chat with logical next steps.',
      'Neighborhood content for new construction pockets and remodel corridors in SE WI.',
    ],
    keywords: [
      'electrician Milwaukee',
      'EV charger install Waukesha',
      'panel upgrade Kenosha',
      'generator installation Racine County',
    ],
  },
  roofing: {
    slug: 'roofing',
    title: 'Roofing',
    headline: 'Storm-season visibility with photo-rich local proof',
    intro:
      'Roofing is visual and seasonal. We help you win the map pack with strong imagery, review recency, and clearly defined service areas—plus AI-assisted follow-up so storm influx does not tank response times.',
    painPoints: [
      'Photo gaps in GBP compared to what homeowners expect after hail or wind events.',
      'Fragmented tracking between canvassing, inbound calls, and online leads.',
      'Neighborhoods with different housing stock needing tailored messaging.',
    ],
    localPlaybook: [
      {
        title: 'Project documentation',
        body: 'Simple field-to-GBP photo workflows and before/after cadence that feels authentic.',
      },
      {
        title: 'Insurance-adjacent clarity',
        body: 'Compliant language around inspections and documentation—no false promises.',
      },
      {
        title: 'Submarket pages',
        body: 'Target older suburbs vs. new developments with the right examples and offers.',
      },
    ],
    aiAngle: [
      'AI summaries for long-tail roof types and materials with your brand voice.',
      'Automated review requests segmented by job size and neighborhood.',
      'Voice and chat scripts for first-touch storm inquiries—fast without sounding robotic.',
    ],
    keywords: [
      'roof replacement Milwaukee',
      'storm damage roof Waukesha',
      'roofing contractor Racine',
      'metal roof installer Kenosha County',
    ],
  },
  'landscaping-lawn-care': {
    slug: 'landscaping-lawn-care',
    title: 'Landscaping & Lawn Care',
    headline: 'Route-smart local marketing for crews that live on the calendar',
    intro:
      'Recurring routes and seasonal spikes reward tight geography. We align your GBP service areas with real drive times, then layer AI content for seasonal programs—aeration, mulch, snow, holiday lighting—so you own the micro-seasons in SE Wisconsin.',
    painPoints: [
      'Overbroad “Milwaukee landscaping” targeting that wastes ad and SEO effort.',
      'Under-leveraged recurring program messaging vs. one-off installs.',
      'Photo variety issues—spring vs. fall vs. snow portfolios not reflected online.',
    ],
    localPlaybook: [
      {
        title: 'Density over radius',
        body: 'Neighborhood-first pages and posts that match how routes actually run.',
      },
      {
        title: 'Seasonal calendar',
        body: 'Planned GBP posts and offers aligned to Wisconsin freeze/thaw and growing seasons.',
      },
      {
        title: 'Upsell paths',
        body: 'Clear bridges from mowing to landscape design or irrigation where you want growth.',
      },
    ],
    aiAngle: [
      'AI-assisted program descriptions for bundles and maintenance plans.',
      'Chat flows that capture lot size, gate access, and service frequency.',
      'Localized FAQs for ordinances and common HOA questions—reviewed by your team.',
    ],
    keywords: [
      'lawn care Milwaukee',
      'landscape design Waukesha',
      'snow removal Racine County',
      'mulch installation Kenosha',
    ],
  },
  'cleaning-restoration': {
    slug: 'cleaning-restoration',
    title: 'Cleaning & Restoration',
    headline: 'Empathy-forward local SEO for trusted indoor work',
    intro:
      'Mold, water, fire, and deep cleaning searches are emotional. We combine compassionate messaging with fast response UX—GBP messaging, chat, and voice—so your firm looks capable and calm at the worst moment.',
    painPoints: [
      'Sensitive jobs requiring careful wording—avoiding fear-mongering while staying clear.',
      'Need for 24/7 perception even when human dispatch rotates.',
      'Proof requirements—certifications, insurance, and process transparency.',
    ],
    localPlaybook: [
      {
        title: 'Credential visibility',
        body: 'Structured presentation of certifications and scopes in GBP and landing pages.',
      },
      {
        title: 'Emergency vs. scheduled',
        body: 'Separate paths for disaster response vs. recurring cleaning or commercial contracts.',
      },
      {
        title: 'Photo policy',
        body: 'Guidelines for respectful before/after content that still converts.',
      },
    ],
    aiAngle: [
      'AI drafting for educational content with compliance review on health claims.',
      'Rapid review response templates tuned for stressful jobs.',
      'Voice agent intake that collects loss type and property access without friction.',
    ],
    keywords: [
      'water damage restoration Milwaukee',
      'mold remediation Waukesha',
      'carpet cleaning Racine',
      'fire damage repair Kenosha County',
    ],
  },
  'pest-control': {
    slug: 'pest-control',
    title: 'Pest Control',
    headline: 'Seasonal pest intent mapped to Wisconsin’s real calendar',
    intro:
      'Ants, rodents, ticks, and winter invaders spike on different clocks. We align GBP services, posts, and pages to the pests homeowners actually mention in each county—plus bundling and plan messaging for recurring revenue.',
    painPoints: [
      'Generic pest pages that do not reflect lake-country vs. urban infestations.',
      'Competing against national chains with aggressive map presence.',
      'Need for plan upsells without sounding pushy in reviews and Q&A.',
    ],
    localPlaybook: [
      {
        title: 'Pest-specific landing pages',
        body: 'Targeted pages with localized proof—not one catch-all “pests” page.',
      },
      {
        title: 'Plan positioning',
        body: 'Clear comparison of one-time vs. protection plans with transparent boundaries.',
      },
      {
        title: 'Safety & pet messaging',
        body: 'FAQs that reduce household anxiety—especially for families with kids and pets.',
      },
    ],
    aiAngle: [
      'AI-assisted seasonal post packs for spring emergence and fall rodent pressure.',
      'Chat qualification by pest type and property details.',
      'Review requests segmented by service type to diversify social proof.',
    ],
    keywords: [
      'pest control Milwaukee',
      'rodent control Waukesha',
      'ant exterminator Racine',
      'tick yard treatment Kenosha County',
    ],
  },
  'remodeling-handyman': {
    slug: 'remodeling-handyman',
    title: 'Remodeling & Handyman',
    headline: 'Long-cycle local funnels that showcase real projects',
    intro:
      'Kitchens, baths, and whole-home updates need galleries, process clarity, and nurture. We connect GBP to project pages, structured FAQs, and AI-assisted follow-up so fewer estimates ghost—and more reviews capture the transformation.',
    painPoints: [
      'Long sales cycles with fragmented follow-up after onsite estimates.',
      'Portfolio scattered across camera rolls instead of searchable, labeled proof.',
      'Mixed handyman vs. remodel positioning confusing Google and customers alike.',
    ],
    localPlaybook: [
      {
        title: 'Project-type silos',
        body: 'Kitchen, bath, basement, exterior—each with localized examples and timelines.',
      },
      {
        title: 'Estimate experience',
        body: 'Clear expectations on site for timelines, permits, and communication cadence.',
      },
      {
        title: 'Review timing',
        body: 'Requests timed to punch-list completion—not just day-one signatures.',
      },
    ],
    aiAngle: [
      'AI nurture emails/SMS sequences for post-estimate follow-through—on-brand, human-edited.',
      'Blog and FAQ content for permits, ROI, and seasonal remodeling trends in SE WI.',
      'Chat that collects scope, budget band, and photos to speed triage.',
    ],
    keywords: [
      'kitchen remodel Milwaukee',
      'bathroom remodel Waukesha',
      'basement finishing Racine County',
      'handyman services Kenosha',
    ],
  },
};

export function getHomeVertical(slug: string): HomeVerticalDetail | undefined {
  return homeVerticalDetails[slug];
}
