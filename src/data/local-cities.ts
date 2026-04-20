/** City-level landing pages for greater Milwaukee / SE Wisconsin local SEO — unique copy per market. */

export type LocalCity = {
  slug: string;
  name: string;
  countySlug: string;
  countyName: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  /** Unique body sections for LLMs + search */
  sections: { heading: string; body: string }[];
};

export const localCities: LocalCity[] = [
  {
    slug: 'milwaukee',
    name: 'Milwaukee',
    countySlug: 'milwaukee-county',
    countyName: 'Milwaukee County',
    seoTitle: 'AI Automation & Local SEO Consultant in Milwaukee, WI | Badger Automation Group',
    seoDescription:
      'Badger Automation Group helps Milwaukee small businesses with AI automation consulting, workflow integrations, chat/voice AI, and local SEO for the map pack and organic search.',
    keywords: [
      'Milwaukee AI consultant',
      'business automation Milwaukee',
      'local SEO Milwaukee',
      'Milwaukee small business AI',
    ],
    sections: [
      {
        heading: 'Why Milwaukee operators need systems, not more tools',
        body: 'Milwaukee’s market is competitive across trades, professional services, and light manufacturing. The winners are not the ones with the most software—they are the ones where leads, follow-ups, and dispatch handoffs happen automatically with clear accountability.',
      },
      {
        heading: 'Local SEO that respects neighborhood intent',
        body: 'Search behavior differs between the East Side, Bay View, and the suburbs. We align service-area pages, Google Business Profile categories, and proof (reviews, photos, Q&A) with how people actually search for help in Milwaukee—not generic “near me” fluff.',
      },
      {
        heading: 'AI automation with guardrails',
        body: 'We pilot narrow workflows first: CRM hygiene, after-hours chat, review responses, or dispatch summaries—always with human approval paths so your brand stays credible.',
      },
    ],
  },
  {
    slug: 'waukesha',
    name: 'Waukesha',
    countySlug: 'waukesha-county',
    countyName: 'Waukesha County',
    seoTitle: 'AI Automation Consulting in Waukesha, WI | Badger Automation Group',
    seoDescription:
      'AI automation and local SEO for Waukesha businesses: CRM and workflow integrations, customer-facing AI, and map-pack strategy for Waukesha County.',
    keywords: ['Waukesha AI consultant', 'business automation Waukesha', 'local SEO Waukesha County'],
    sections: [
      {
        heading: 'Suburban density rewards tight routing',
        body: 'Waukesha County businesses often win on drive-time reality and repeat service. We connect scheduling, reminders, and review requests so routes and reputations compound instead of resetting every season.',
      },
      {
        heading: 'Local search for high-trust services',
        body: 'Homeowners and property managers compare fast. We tighten your Google presence and on-site signals so your best jobs show up in the moments that matter.',
      },
      {
        heading: 'Automation without an IT department',
        body: 'If your office manager is the integration team, documentation matters. We build automations you can see, test, and recover when something changes.',
      },
    ],
  },
  {
    slug: 'brookfield',
    name: 'Brookfield',
    countySlug: 'waukesha-county',
    countyName: 'Waukesha County',
    seoTitle: 'Small Business AI Automation in Brookfield, WI | Badger Automation Group',
    seoDescription:
      'Brookfield-area AI automation consulting and local SEO for growing small businesses—workflows, CRM, chat/voice AI, and Google Business Profile optimization.',
    keywords: ['Brookfield WI automation', 'Brookfield local SEO', 'AI consultant Brookfield'],
    sections: [
      {
        heading: 'A market that expects polish',
        body: 'Brookfield customers notice details: response speed, professional follow-up, and consistent branding. Your website and automations should feel as intentional as your in-person service.',
      },
      {
        heading: 'Integrations that match how you sell',
        body: 'We map the real journey from first call to invoice, then automate the boring steps—without breaking the personal touch that closes deals in Waukesha County.',
      },
      {
        heading: 'Local visibility alongside regional competition',
        body: 'You are not only competing with neighbors—you are competing with brands that buy attention. We focus on durable assets: listings, reviews, structured content, and conversion paths.',
      },
    ],
  },
  {
    slug: 'racine',
    name: 'Racine',
    countySlug: 'racine-kenosha',
    countyName: 'Racine County',
    seoTitle: 'AI & Local SEO Services in Racine, WI | Badger Automation Group',
    seoDescription:
      'Racine small businesses: AI automation consulting, workflow automation, and local SEO—including Google Business Profile, reviews, and localized content.',
    keywords: ['Racine WI AI consultant', 'local SEO Racine', 'business automation Racine'],
    sections: [
      {
        heading: 'Local identity matters',
        body: 'Racine-area customers respond to community-rooted proof. We help you show real jobs, real neighborhoods, and honest service boundaries—especially when competition spans county lines.',
      },
      {
        heading: 'Operational AI for real-world variability',
        body: 'Seasonality, weather, and staffing swings hit operators hard. Automations should flex with reality: escalation paths, clear ETAs, and messaging that does not overpromise.',
      },
      {
        heading: 'SEO that connects map pack and website',
        body: 'When your GBP and site disagree, trust erodes. We align categories, services, landing pages, and internal links so search engines and humans get one coherent story.',
      },
    ],
  },
  {
    slug: 'kenosha',
    name: 'Kenosha',
    countySlug: 'racine-kenosha',
    countyName: 'Kenosha County',
    seoTitle: 'Kenosha WI AI Automation & Local SEO | Badger Automation Group',
    seoDescription:
      'Kenosha-area consulting for AI automation, customer-facing AI, and local SEO—built for small businesses competing near the IL border and across Kenosha County.',
    keywords: ['Kenosha AI automation', 'local SEO Kenosha', 'Kenosha small business consultant'],
    sections: [
      {
        heading: 'Cross-border competition requires clarity',
        body: 'Buyers compare options on both sides of the state line. Clear geography, hours, and service definitions protect trust and reduce wasted calls.',
      },
      {
        heading: 'Automation for speed without chaos',
        body: 'After-hours inquiries spike in trades and urgent services. We implement chat and voice flows that qualify and capture details—then hand off cleanly to your team.',
      },
      {
        heading: 'Local content that reflects how people describe home',
        body: 'Neighborhood names and township context matter. We build pages and FAQs grounded in how Kenosha customers actually search—not generic templates.',
      },
    ],
  },
  {
    slug: 'wauwatosa',
    name: 'Wauwatosa',
    countySlug: 'milwaukee-county',
    countyName: 'Milwaukee County',
    seoTitle: 'Wauwatosa Business Automation & Local SEO | Badger Automation Group',
    seoDescription:
      'Wauwatosa small businesses: AI workflow automation, integrations, and local SEO services aligned to Milwaukee County search behavior.',
    keywords: ['Wauwatosa automation consultant', 'local SEO Wauwatosa', 'AI small business Wauwatosa'],
    sections: [
      {
        heading: 'Neighborhood-level intent',
        body: 'Wauwatosa searches often carry neighborhood modifiers and high expectations for professionalism. We align GBP and on-site content with that intent.',
      },
      {
        heading: 'Systems for busy owners',
        body: 'If you are still copying data between tools, you are losing margin. We prioritize automations that reclaim admin hours every week.',
      },
      {
        heading: 'Customer AI that feels human',
        body: 'We script chat and voice to match your tone and policies—especially for scheduling, FAQs, and emergency triage.',
      },
    ],
  },
  {
    slug: 'oak-creek',
    name: 'Oak Creek',
    countySlug: 'milwaukee-county',
    countyName: 'Milwaukee County',
    seoTitle: 'Oak Creek WI AI Consulting & Local SEO | Badger Automation Group',
    seoDescription:
      'Oak Creek-area AI automation consulting for small businesses: workflows, CRM connections, customer AI, and local SEO for Milwaukee County.',
    keywords: ['Oak Creek business automation', 'local SEO Oak Creek', 'AI consultant Oak Creek WI'],
    sections: [
      {
        heading: 'Industrial and residential demand side-by-side',
        body: 'Oak Creek’s mix means your messaging and service lists must be precise—especially on Google Business Profile and landing pages.',
      },
      {
        heading: 'Lead capture that respects urgency',
        body: 'When customers need help fast, friction kills conversion. We streamline forms, chat, and call flows while capturing the details your team needs.',
      },
      {
        heading: 'Reporting you can act on',
        body: 'We tie activity to outcomes: calls, forms, and booked work—so you are not optimizing blind.',
      },
    ],
  },
  {
    slug: 'west-allis',
    name: 'West Allis',
    countySlug: 'milwaukee-county',
    countyName: 'Milwaukee County',
    seoTitle: 'West Allis Small Business AI & SEO | Badger Automation Group',
    seoDescription:
      'West Allis businesses: practical AI automation, integrations, and local SEO to compete in Milwaukee County without enterprise overhead.',
    keywords: ['West Allis automation', 'local SEO West Allis', 'Milwaukee metro AI consultant'],
    sections: [
      {
        heading: 'Competitive metro corridor',
        body: 'West Allis sits in a high-intent corridor. Winning often comes down to listing strength, review recency, and clear offers—supported by fast operational follow-up.',
      },
      {
        heading: 'Automation for the office manager stack',
        body: 'We focus on reliability: fewer broken Zaps, better error alerts, and documentation your team can trust.',
      },
      {
        heading: 'Ethical review growth',
        body: 'Reviews influence clicks and conversions. We implement request timing and AI-assisted replies that stay authentic and policy-safe.',
      },
    ],
  },
  {
    slug: 'menomonee-falls',
    name: 'Menomonee Falls',
    countySlug: 'waukesha-county',
    countyName: 'Waukesha County',
    seoTitle: 'Menomonee Falls AI Automation Consultant | Badger Automation Group',
    seoDescription:
      'Menomonee Falls and Waukesha County: AI automation consulting, workflow design, customer-facing AI, and local SEO for small businesses.',
    keywords: ['Menomonee Falls automation', 'local SEO Menomonee Falls', 'Waukesha County AI consultant'],
    sections: [
      {
        heading: 'Growth without operational debt',
        body: 'As volume increases, manual handoffs break first. We automate the repeatable parts so quality stays consistent.',
      },
      {
        heading: 'Local proof that converts',
        body: 'Photos, reviews, and Q&A should reflect the jobs you want more of—not generic marketing filler.',
      },
      {
        heading: 'Integrated marketing + ops',
        body: 'When SEO generates demand but ops cannot respond, you leak revenue. We connect the funnel to real workflows.',
      },
    ],
  },
  {
    slug: 'new-berlin',
    name: 'New Berlin',
    countySlug: 'waukesha-county',
    countyName: 'Waukesha County',
    seoTitle: 'New Berlin WI Business Automation & SEO | Badger Automation Group',
    seoDescription:
      'New Berlin small businesses: AI automation consulting, CRM and workflow integrations, chat/voice AI, and local SEO for Waukesha County.',
    keywords: ['New Berlin automation', 'local SEO New Berlin WI', 'AI consultant New Berlin'],
    sections: [
      {
        heading: 'Suburban homeowners search with specificity',
        body: 'Pages and posts should answer real questions: service types, timing, services areas, and proof—especially for home services and local professionals.',
      },
      {
        heading: 'Customer-facing AI done responsibly',
        body: 'We implement chat and voice with transparent handoffs and careful language around pricing, timing, and safety.',
      },
      {
        heading: 'Technical SEO foundations',
        body: 'Speed, structure, and internal linking still matter. We prioritize fixes that affect local relevance and conversions.',
      },
    ],
  },
  {
    slug: 'mequon',
    name: 'Mequon',
    countySlug: 'ozaukee-washington-walworth',
    countyName: 'Ozaukee County',
    seoTitle: 'Mequon AI Consulting & Local SEO | Badger Automation Group',
    seoDescription:
      'Mequon and Ozaukee-area businesses: premium-appropriate AI automation, workflows, and local SEO strategy for competitive suburban markets.',
    keywords: ['Mequon business automation', 'local SEO Mequon', 'Ozaukee County AI consultant'],
    sections: [
      {
        heading: 'Expectations match premium markets',
        body: 'Response quality, creative clarity, and operational discipline show up in reviews and referrals. Your digital systems should match that standard.',
      },
      {
        heading: 'Local SEO with tasteful specificity',
        body: 'We avoid spammy city swaps. Content is structured around real service patterns, neighborhoods, and proof.',
      },
      {
        heading: 'Automation for lean teams',
        body: 'High-performing small teams need leverage. We build systems that reduce coordination overhead and prevent dropped leads.',
      },
    ],
  },
  {
    slug: 'lake-geneva',
    name: 'Lake Geneva',
    countySlug: 'ozaukee-washington-walworth',
    countyName: 'Walworth County',
    seoTitle: 'Lake Geneva Area AI Automation & Local SEO | Badger Automation Group',
    seoDescription:
      'Lake Geneva and Walworth County businesses: seasonal demand, AI automation, customer-facing AI, and local SEO tuned to tourism and year-round residents.',
    keywords: ['Lake Geneva business automation', 'local SEO Lake Geneva', 'Walworth County AI consultant'],
    sections: [
      {
        heading: 'Seasonality requires calendar-aware systems',
        body: 'Peaks and slow periods demand different messaging and staffing. Automations should adapt—especially for reminders, follow-ups, and offers.',
      },
      {
        heading: 'Local proof for trust-heavy purchases',
        body: 'Visitors and residents both search online first. Strong GBP hygiene and website clarity reduce friction before the phone rings.',
      },
      {
        heading: 'Voice and chat for after-hours',
        body: 'Missed calls are expensive in destination markets. We implement intake flows that protect margins without overpromising.',
      },
    ],
  },
];

export function getLocalCity(slug: string): LocalCity | undefined {
  return localCities.find((c) => c.slug === slug);
}
