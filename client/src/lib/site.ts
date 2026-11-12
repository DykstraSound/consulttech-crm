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
 * Zoho CRM Web-to-Lead form "Website - Punch List Intake" (id 7196148000004033001, ConsultTech prod).
 * These tokens are public by design: Zoho puts them in every embed code. Regenerate them here if the webform is recreated.
 */
export const ZOHO_WEBFORM = {
  action: "https://crm.zoho.com/crm/WebToLeadForm",
  hidden: {
    xnQsjsdp: "dc95b143bf71af2bbc8406601db9f472f7bea2b0ce78ee8569efdbef1325af56",
    xmIwtLD: "ebdf4c2beb0dab649d27fbaef260f6725952e731b7ae9cb36ff7883692e76d709cdc2ecea420ebaba18a3afa1643437b",
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
