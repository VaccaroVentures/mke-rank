/**
 * NAP + local entity — keep in lockstep with your Google Business Profile.
 *
 * Set PUBLIC_NAP_PHONE, PUBLIC_NAP_STREET, PUBLIC_NAP_POSTAL in `.env` for production.
 * If street is empty, we publish city/region only (common for service-area businesses).
 */
const env = import.meta.env;

export const nap = {
  /** E.164 recommended, e.g. +14145551234 */
  telephone: (env.PUBLIC_NAP_PHONE as string | undefined)?.trim() || '',
  streetAddress: (env.PUBLIC_NAP_STREET as string | undefined)?.trim() || '',
  addressLocality: 'Milwaukee',
  addressRegion: 'WI',
  postalCode: (env.PUBLIC_NAP_POSTAL as string | undefined)?.trim() || '',
  addressCountry: 'US',
  /** Center of Milwaukee — used for geo meta only; update if your GBP pin differs */
  geo: {
    latitude: 43.0389,
    longitude: -87.9065,
  },
  /** IANA time zone for opening hours */
  timeZone: 'America/Chicago',
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  ],
  /** Optional: full URL to your public Google Maps / GBP place link */
  googleMapsUrl: (env.PUBLIC_NAP_MAPS_URL as string | undefined)?.trim() || '',
  /** Optional: embed src from Google Maps → Share → Embed */
  googleMapsEmbedUrl: (env.PUBLIC_NAP_MAP_EMBED_URL as string | undefined)?.trim() || '',
  sameAs: [
    (env.PUBLIC_SOCIAL_LINKEDIN as string | undefined)?.trim(),
    (env.PUBLIC_SOCIAL_FACEBOOK as string | undefined)?.trim(),
    (env.PUBLIC_SOCIAL_X as string | undefined)?.trim(),
  ].filter(Boolean) as string[],
} as const;

export function formatNapAddressLines(): string[] {
  const lines: string[] = [];
  if (nap.streetAddress) lines.push(nap.streetAddress);
  if (nap.postalCode) {
    lines.push(`${nap.addressLocality}, ${nap.addressRegion} ${nap.postalCode}`);
  } else {
    lines.push(`${nap.addressLocality}, ${nap.addressRegion}`);
  }
  if (!nap.streetAddress) {
    lines.push('In-person meetings by appointment');
  }
  return lines;
}

export function telHref(): string | null {
  if (!nap.telephone) return null;
  const digits = nap.telephone.replace(/[^\d+]/g, '');
  return digits.startsWith('+') ? `tel:${digits}` : `tel:${digits}`;
}
