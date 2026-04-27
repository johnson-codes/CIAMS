export type NavChild = { label: string; href: string; muted?: boolean };

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      href: string;
      children: NavChild[];
    };

export const siteName = "Canada International Arts & Music Society";

/** Header mark — swap for `/logo.png` after adding a file under `public/`. */
export const logoUrl =
  "https://ciams.ca/wp-content/uploads/2018/03/cropped-ciams-logo22.png";

/** Same hosted button as ciams.ca PayPal donate flow. */
export const paypalDonateUrl =
  "https://www.paypal.com/donate/?hosted_button_id=7VHJQQWNBCEUG";

export const navItems: NavItem[] = [
  { label: "HOME", href: "#" },
  {
    label: "EVENTS",
    href: "#",
    children: [
      {
        label:
          "2025 Rising Star Concerto Extravaganza (application closed, the selected performers will be notified by Mar.21, 2025)",
        href: "#",
        muted: true,
      },
      {
        label:
          "Vancouver International Music Festival 2024: A Celebration of Global Musical Talent and Cultural Diversity",
        href: "#",
      },
      {
        label: "CIAMS Launches 2024 Vancouver International Music Festival in August",
        href: "#",
      },
      {
        label: "🏆 Winners of the 2023 Vancouver International Music Competition! 🎶",
        href: "#",
      },
      {
        label: "The 2023 Vancouver International Music Competition was a great success!",
        href: "#",
      },
      {
        label: "VIMC Final Round: October 7-8, 2023 & Gala Concert: October 9, 2023",
        href: "#",
      },
      {
        label: "VIMC Gala Concert & Awards Ceremony for 2021 Winners on Oct.7th, 2022",
        href: "#",
      },
    ],
  },
  {
    label: "GET INVOLVED",
    href: "#",
    children: [
      { label: "Volunteer", href: "#" },
      { label: "Sponsor", href: "#" },
    ],
  },
  { label: "SUPPORT", href: paypalDonateUrl },
];

/** Former header “About” dropdown — shown only in the footer. */
export const footerAboutLinks: { label: string; href: string }[] = [
  { label: "Our mission", href: "#" },
  { label: "Board & team", href: "#" },
  { label: "Patronage", href: "#" },
];

/** Former header “Contact” — shown only in the footer. */
export const footerContactLink = { label: "Contact", href: "#" } as const;

function isHomeLink(label: string) {
  return label.trim().toUpperCase() === "HOME";
}

/** Flat list for footer “Explore” links (top-level + nested). HOME is header-only. */
export function flattenFooterLinks(): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const item of navItems) {
    if ("children" in item) {
      if (!isHomeLink(item.label)) {
        out.push({ label: item.label, href: item.href });
      }
      for (const child of item.children) {
        if (!isHomeLink(child.label)) {
          out.push({ label: child.label, href: child.href });
        }
      }
    } else {
      if (!isHomeLink(item.label)) {
        out.push({ label: item.label, href: item.href });
      }
    }
  }
  return out;
}

export const hero = {
  titleLines: [
    "VANCOUVER INTERNATIONAL",
    "MUSIC FESTIVAL",
    "COMPETITION",
  ] as const,
  subtitle: "Where Young Artists Shine on the World Stage",
  ctaLabel: "REGISTER",
  /** Production points to competition site; prototype uses placeholder */
  ctaHref: "https://example.com/register",
};

export const promoTiles = [
  {
    id: "1",
    text: "2026 VANCOUVER INTERNATIONAL MUSIC FESTIVAL–COMPETITION",
  },
  {
    id: "2",
    text: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY RECEIVES HONORARY PATRONAGE FROM THE LIEUTENANT GOVERNOR OF BRITISH COLUMBIA",
  },
  {
    id: "3",
    text: "2025 VANCOUVER INTERNATIONAL MUSIC FESTIVAL GALA CONCERT: AN AFTERNOON OF MUSIC, CULTURE, AND COMMUNITY",
  },
] as const;

export type Post = {
  id: string;
  date: string;
  author: string;
  category: string;
  title: string;
};

export const posts: Post[] = [
  {
    id: "p1",
    date: "MARCH 5, 2026",
    author: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY",
    category: "UNCATEGORIZED",
    title: "2026 Vancouver International Music Festival–Competition",
  },
  {
    id: "p2",
    date: "OCTOBER 8, 2025",
    author: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY",
    category: "UNCATEGORIZED",
    title:
      "Canada International Arts & Music Society receives honorary patronage from the Lieutenant Governor of British Columbia",
  },
  {
    id: "p3",
    date: "AUGUST 24, 2025",
    author: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY",
    category: "UNCATEGORIZED",
    title:
      "2025 Vancouver International Music Festival Gala Concert: an afternoon of music, culture, and community",
  },
  {
    id: "p4",
    date: "JULY 29, 2025",
    author: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY",
    category: "UNCATEGORIZED",
    title:
      "2025 Vancouver International Music Festival — free admission for gala concert at Vancouver Playhouse",
  },
  {
    id: "p5",
    date: "JULY 2, 2025",
    author: "CANADA INTERNATIONAL ARTS & MUSIC SOCIETY",
    category: "UNCATEGORIZED",
    title: "2025 Vancouver International Music Festival — festival passes now available",
  },
];

export const sidebar = {
  donateImageAlt: "Donate with PayPal",
  socialHeading: "Follow Us On Social Media",
  socialLinks: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/ciamsociety/" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ciamsociety/" },
    { id: "x", label: "X", href: "https://twitter.com/CIAMSociety" },
  ] as const,
  newsletterHeading: "Follow CIAMS News",
  newsletterBlurb:
    "Enter your email address to follow this blog and receive notifications of new posts by email.",
};
