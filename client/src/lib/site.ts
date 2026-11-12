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

/**
 * Zoho CRM Web-to-Lead form "Website - Punch List Intake v2" (id 7196148000004038001, ConsultTech prod).
 * These tokens are public by design: Zoho puts them in every embed code. Regenerate them here if the webform is recreated.
 */
export const ZOHO_WEBFORM = {
  action: "https://crm.zoho.com/crm/WebToLeadForm",
  hidden: {
    xnQsjsdp: "65c6dfdbeeb87c5afe28dae84fb7a49f69d5d8a3809c038d9e711d362e85489e",
    xmIwtLD: "3d31be895d556acad3334e95fc23a7a3df41e844e1dfe750b8a2dd384c9c10250574adace64252b3ae9e6ecf680ea1e0",
    actionType: "TGVhZHM=",
    returnURL: "https://consulttechcrm.com/contact?submitted=1",
    zc_gad: "",
  },
  /** Zoho's honeypot field; bots fill it, people never see it. */
  honeypot: "aG9uZXlwb3Q",
  options: {
    companySize: ["1-10", "11-25", "26-50", "51-100", "More than 100"],
    industry: ["Construction", "Manufacturing", "Automotive Aftermarket", "Other"],
    currentTools: ["Spreadsheets / paper", "Zoho", "Salesforce", "Another CRM", "Mix of disconnected tools"],
  },
} as const;
