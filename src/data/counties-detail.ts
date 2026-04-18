import { counties } from './site';

export type CountyDetail = {
  slug: string;
  title: string;
  summary: string;
  marketNotes: string[];
  opportunities: string[];
  cities: string[];
};

export const countyDetails: Record<string, CountyDetail> = {
  'milwaukee-county': {
    slug: 'milwaukee-county',
    title: 'Milwaukee County',
    summary:
      'Dense search demand, strong map-pack competition, and neighborhood-level nuance from the North Shore to South Side. Winning here means tight service-area modeling, fast review velocity, and hyper-relevant GBP posts.',
    marketNotes: [
      'High “near me” volume across diverse neighborhoods—intent varies block by block.',
      'Commercial + residential mix depending on corridor—segment messaging when you serve both.',
      'Transit and lakefront pockets with different housing stock and price sensitivity.',
    ],
    opportunities: [
      'Neighborhood content clusters tied to historic homes, condos, and new infill.',
      'Localized offers that respect city vs. suburb expectations on pricing and speed.',
      'Photo-rich GBP tied to recognizable landmarks—without spammy keyword stuffing.',
    ],
    cities: counties.find((c) => c.slug === 'milwaukee-county')!.cities,
  },
  'waukesha-county': {
    slug: 'waukesha-county',
    title: 'Waukesha County',
    summary:
      'Suburban growth, strong household incomes, and route-friendly density. SEO wins come from aligning service areas with drive-time reality and showcasing projects that match local architecture.',
    marketNotes: [
      'Lake country vs. I-94 corridor differences in buyer behavior.',
      'New construction pockets with warranty and builder relationship angles.',
      'Older suburbs with mature trees, basements, and seasonal maintenance needs.',
    ],
    opportunities: [
      'Route-based landing pages for recurring lawn, pest, and cleaning programs.',
      'EV, generator, and panel upgrade education for larger single-family homes.',
      'Storm-driven roofing and exterior content timed to Wisconsin weather.',
    ],
    cities: counties.find((c) => c.slug === 'waukesha-county')!.cities,
  },
  'racine-kenosha': {
    slug: 'racine-kenosha',
    title: 'Racine & Kenosha Counties',
    summary:
      'Southeastern edge of the MSA with unique local identity. Buyers respond to community-rooted proof—local sponsorships, recognizable neighborhoods, and honest service-area boundaries near the IL line.',
    marketNotes: [
      'Cross-border competition for certain services—clear geography in GBP matters.',
      'Industrial and lakefront housing mixes—segment messaging for ICPs.',
      'Seasonal tourism and lake-adjacent properties for select trades.',
    ],
    opportunities: [
      'City + township pages that reflect how people actually describe where they live.',
      'Localized Q&A for codes, weather risks, and neighborhood-specific FAQs.',
      'Review campaigns emphasizing timeliness and communication—key trust levers.',
    ],
    cities: counties.find((c) => c.slug === 'racine-kenosha')!.cities,
  },
  'ozaukee-washington-walworth': {
    slug: 'ozaukee-washington-walworth',
    title: 'Ozaukee, Washington & Walworth Counties',
    summary:
      'North Shore lake communities, growing Washington County suburbs, and Walworth vacation properties. A blend of high-expectation residential service and seasonal demand spikes—perfect for disciplined local SEO and automation.',
    marketNotes: [
      'Lake Geneva and surrounding vacation homes—timing and responsiveness sell premium work.',
      'Ozaukee communities with strong school districts and referral-heavy buying.',
      'Washington County growth corridors with new construction and infill remodels.',
    ],
    opportunities: [
      'Premium positioning with proof: certifications, timelines, and white-glove comms.',
      'Seasonal playbooks for lake homes, docks, yards, and exterior maintenance.',
      'Strategic partnerships content (builders, designers) where you have real relationships.',
    ],
    cities: counties.find((c) => c.slug === 'ozaukee-washington-walworth')!.cities,
  },
};

export function getCountyDetail(slug: string): CountyDetail | undefined {
  return countyDetails[slug];
}
