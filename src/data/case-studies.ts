/**
 * Client case studies.
 *
 * Every number here must come from a source we can point to (Netlify Forms export,
 * Google Business Profile, GA4, Search Console). Record the source and the as-of date.
 * Leave `traffic` / `search` undefined until the data is pulled; those blocks only
 * render when filled.
 */

export type Metric = { value: string; label: string; note?: string };
export type Review = { quote: string; name: string; context?: string };
export type MonthCount = { month: string; count: number; partial?: boolean };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  url: string;
  googleMapsUrl?: string;
  summary: string;
  headline: string;
  asOf: string;
  heroMetrics: Metric[];
  challenge: string[];
  built: { title: string; detail: string }[];
  leadsByMonth: MonthCount[];
  leadMix: { label: string; count: number }[];
  leadNote: string;
  reputation: { rating: string; count: number; note: string };
  reviews: Review[];
  traffic?: Metric[];
  search?: Metric[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'e-and-r-heating-and-cooling',
    client: 'E & R Heating and Cooling',
    industry: 'HVAC',
    location: 'West Allis, WI · Milwaukee County',
    url: 'https://eandrheatingandcooling.com',
    googleMapsUrl: 'https://www.google.com/maps/place/E+%26+R+Heating+and+Cooling/@43.0111289,-88.012094,17z',
    summary:
      'A family-owned West Allis HVAC company with a 5-star reputation and a website that now turns local searches into quote requests.',
    headline: '17 qualified service requests in 12 weeks from a new HVAC website',
    asOf: 'October 27, 2026',
    heroMetrics: [
      { value: '17', label: 'Qualified service requests', note: 'Website form, Aug 2 – Oct 27, 2026' },
      { value: '5', label: 'Install or replacement requests', note: 'Boilers, furnace + AC, mini-split, AC install' },
      { value: '5.0★', label: 'Google rating', note: '239 reviews, up from 226 in late August' },
      { value: '24', label: 'Service and city pages', note: '8 service pages + 16 city pages' },
    ],
    challenge: [
      'E & R has served Milwaukee County since 2003 and earned a 5.0 Google rating the hard way: same-day service, honest diagnoses, and fair pricing.',
      'The goal was a website that matches that reputation: a clear page for every service a homeowner might search for, coverage for the suburbs E & R actually works in, and an easy way to request a quote at any hour.',
    ],
    built: [
      {
        title: 'A site built around how homeowners search',
        detail:
          'Dedicated pages for furnaces, residential AC, commercial HVAC, boilers, water heaters, thermostats, humidifiers, and ductwork, each with its own call to action.',
      },
      {
        title: '16 city service-area pages',
        detail:
          'Unique pages for Milwaukee, West Allis, Wauwatosa, Brookfield, Greenfield, Oak Creek, Franklin, New Berlin, and eight more communities E & R actually serves.',
      },
      {
        title: 'A free-quote form that works 24/7',
        detail:
          'A short free-estimate form on the homepage that homeowners can use any time, with honeypot spam filtering so real requests are not buried.',
      },
      {
        title: 'Reviews front and center',
        detail:
          'The Google reputation E & R already earned is shown on the homepage, alongside BBB accreditation, licensing, and 24/7 emergency service.',
      },
      {
        title: 'Google Business Profile management',
        detail:
          'We manage the listing that drives most local HVAC calls: services, hours, photos, and the details Google uses to rank E & R in the map pack.',
      },
      {
        title: 'Review requests and owner replies',
        detail:
          'We run review management for E & R, including timely, personal replies to new reviews. The profile grew from 226 to 239 reviews at a perfect 5.0 since late August.',
      },
      {
        title: 'Seasonal HVAC content',
        detail:
          'A tips blog covering furnace problems, AC maintenance, and replacement guides for Milwaukee homeowners.',
      },
    ],
    leadsByMonth: [
      { month: 'Aug', count: 2 },
      { month: 'Sep', count: 9 },
      { month: 'Oct', count: 6, partial: true },
    ],
    leadMix: [
      { label: 'Repairs and diagnostics', count: 7 },
      { label: 'Maintenance and tune-ups', count: 3 },
      { label: 'Installs and replacements', count: 5 },
      { label: 'Ductwork and airflow', count: 2 },
    ],
    leadNote:
      'Counts are verified website form submissions from real homeowners and property owners. Sales pitches, spam, and blank submissions (11 of 28 total) are excluded. Phone calls are not included.',
    reputation: {
      rating: '5.0',
      count: 239,
      note: 'Up from 226 in late August · Google, as of October 27, 2026',
    },
    reviews: [
      {
        quote: 'Our AC was fixed and blowing cold air like it was new.',
        name: 'Bart G.',
        context: 'After two other companies said the unit needed replacing',
      },
      { quote: 'Amazing speed and service from this local small business!', name: 'Josh C.', context: 'AC repair on a peak summer day' },
      { quote: 'They responded the same day with an in-home estimate.', name: 'Rebekah P.', context: 'Water heater replacement' },
      { quote: 'Very fast and reliable service! Ryan was awesome.', name: 'Nancy B.' },
      { quote: 'Helpful with questions I had and a fair price for the work done.', name: 'Kevin B.' },
      { quote: 'The best company by far.', name: 'Jim V.' },
    ],
    // traffic: [ { value: '', label: 'Organic sessions', note: 'GA4, ...' } ],
    // search: [ { value: '', label: 'Google search impressions', note: 'Search Console, ...' } ],
    services: ['Website design and build', 'Google Business Profile', 'Review management', 'Local SEO', 'Service-area pages', 'Lead capture'],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
