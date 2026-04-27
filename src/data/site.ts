export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      href: string;
      children: { label: string; href: string }[];
    };

export const siteName = "Canada International Arts & Music Society";

export const navItems: NavItem[] = [
  { label: "HOME", href: "#" },
  {
    label: "ABOUT",
    href: "#",
    children: [
      { label: "Our mission", href: "#" },
      { label: "Board & team", href: "#" },
      { label: "Patronage", href: "#" },
    ],
  },
  {
    label: "EVENTS",
    href: "#",
    children: [
      { label: "Festival & competition", href: "#" },
      { label: "Gala concert", href: "#" },
      { label: "Past seasons", href: "#" },
    ],
  },
  {
    label: "GET INVOLVED",
    href: "#",
    children: [
      { label: "Volunteer", href: "#" },
      { label: "Sponsor", href: "#" },
      { label: "Donate", href: "#" },
    ],
  },
  { label: "STORE", href: "#" },
  { label: "CONTACT", href: "#" },
];

export const hero = {
  year: "2026",
  titleLines: [
    "VANCOUVER INTERNATIONAL",
    "MUSIC FESTIVAL",
    "COMPETITION",
  ] as const,
  subtitle: "Where Young Artists Shine on the World Stage",
  ctaLabel: "REGISTER",
  /** Production points to competition site; prototype uses placeholder */
  ctaHref: "https://example.com/register",
  /** Same asset as live site hero for visual parity */
  backgroundImageUrl:
    "https://ciams.ca/wp-content/uploads/2026/03/cropped-2026-vimfc-eng.jpg",
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
