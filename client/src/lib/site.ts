/* Site-wide constants: canonical URL, booking link, Punch List path and the main navigation. */
export const SITE_URL = "https://consulttechcrm.com";

/** Zoho Calendar slot-booking page for the 30-minute call. */
export const BOOKING_URL =
  "https://calendar.zoho.com/zc/view/slot-booking/0801123cf325bd78898d727509d147be00006304d56a29f78bbc45d47c480c77e394a6fe4fbe7cde830be8344a186eb1d14f3d291605fb31274568260b09ce62";

/** Static landing page (client/public/punch-list). Permanent URL, linked from LinkedIn Featured. */
export const PUNCH_LIST_PATH = "/punch-list/";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/punch-list/punch-list-card.png`;

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Who I Help", path: "/who-i-help" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;
