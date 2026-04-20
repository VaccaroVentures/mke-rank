import { nap } from './nap';
import { site, counties } from './site';

const businessId = `${site.url}#local-business`;
const logoUrl = `${site.url}${site.logo}`;

function postalAddress(): Record<string, unknown> {
  const a: Record<string, unknown> = {
    '@type': 'PostalAddress',
    addressLocality: nap.addressLocality,
    addressRegion: nap.addressRegion,
    addressCountry: nap.addressCountry,
  };
  if (nap.streetAddress) a.streetAddress = nap.streetAddress;
  if (nap.postalCode) a.postalCode = nap.postalCode;
  return a;
}

function openingHoursSpecification() {
  return nap.openingHours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  }));
}

/** Rich LocalBusiness / ProfessionalService — match GBP exactly when you set NAP in `.env`. */
export function localBusinessSchema(): Record<string, unknown> {
  const entity: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: site.name,
    description: site.longDescription,
    url: site.url,
    email: site.email,
    image: logoUrl,
    priceRange: '$$',
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: nap.geo.latitude,
      longitude: nap.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    parentOrganization: {
      '@type': 'Organization',
      name: site.parentCompany,
    },
    areaServed: counties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: `${c.title}, Wisconsin`,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        areaServed: 'US',
        availableLanguage: ['English'],
        ...(nap.telephone ? { telephone: nap.telephone } : {}),
      },
    ],
  };

  if (nap.telephone) entity.telephone = nap.telephone;
  if (nap.googleMapsUrl) entity.hasMap = nap.googleMapsUrl;
  if (nap.sameAs.length) entity.sameAs = nap.sameAs;

  return entity;
}

/** @deprecated Use localBusinessSchema — kept for imports */
export const organizationSchema = localBusinessSchema;

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}#website`,
    name: site.name,
    url: site.url,
    description: site.longDescription,
    inLanguage: 'en-US',
    publisher: { '@id': businessId },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${site.url}/contact/`,
      name: 'Contact',
    },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    url: args.url,
    provider: { '@id': businessId },
    areaServed: site.region,
    ...(args.keywords?.length ? { keywords: args.keywords.join(', ') } : {}),
  };
}

export function webPageSchema(args: {
  name: string;
  description: string;
  url: string;
  cityState: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${args.url}#webpage`,
    name: args.name,
    description: args.description,
    url: args.url,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${site.url}#website` },
    about: { '@type': 'City', name: args.cityState, containedInPlace: { '@type': 'State', name: 'Wisconsin' } },
  };
}

export function itemListSchema(args: { name: string; description: string; urls: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: args.name,
    description: args.description,
    numberOfItems: args.urls.length,
    itemListElement: args.urls.map((url, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: url,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}
