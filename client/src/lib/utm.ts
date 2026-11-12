/*
  UTM tracking: captures utm_* tags from the URL a visitor lands on, keeps them in sessionStorage
  for the visit (so they survive navigating to /contact), and maps them to the Zoho Web-to-Lead
  field names (Lead fields UTM_Source..UTM_Content). The static /punch-list page writes the same
  storage key with an inline script, so keep STORAGE_KEY in sync with client/public/punch-list/index.html.
*/

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmValues = Record<UtmKey, string>;

/** Zoho Web-to-Lead input names for webform 7196148000004038001. */
export const UTM_FIELDS: Record<UtmKey, string> = {
  utm_source: "LEADCF11",
  utm_medium: "LEADCF12",
  utm_campaign: "LEADCF13",
  utm_content: "LEADCF14",
};

export const STORAGE_KEY = "ct_utm";

const empty = (): UtmValues => ({ utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "" });

/** Store the URL's utm_* tags for this visit. A URL with no tags leaves earlier tags in place. */
export function captureUtm(search: string = window.location.search): void {
  const params = new URLSearchParams(search);
  if (!UTM_KEYS.some((k) => params.get(k))) return;
  const values = empty();
  for (const k of UTM_KEYS) values[k] = (params.get(k) ?? "").slice(0, 255);
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {
    // Storage blocked (private mode etc.): tracking is best-effort, the form still works.
  }
}

/** The tags captured earlier this visit, or empty strings. */
export function readUtm(): UtmValues {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<UtmValues>;
    const values = empty();
    for (const k of UTM_KEYS) values[k] = typeof parsed[k] === "string" ? parsed[k]! : "";
    return values;
  } catch {
    return empty();
  }
}
