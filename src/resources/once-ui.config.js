// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// Import and set font for each variant
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

const heading = localFont({
  src: "../fonts/BagnardSans.otf",
  variable: "--font-heading",
  display: "swap",
  weight: "400",
  style: "normal"
});

const body = Outfit({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Outfit({
  weight: "400",
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // Force dark theme to match the background
  neutral: "slate", // Keep slate as it works well with the dark theme
  brand: "violet", // Keep violet to match the purple tones in the image
  accent: "indigo", // Change to indigo for a deeper blue accent
  solid: "contrast", // Keep contrast for better readability
  solidStyle: "flat", // Keep flat style for a modern look
  border: "conservative", // Change to conservative for a more refined look
  surface: "translucent", // Use translucent for a modern, glass-like effect
  transition: "all", // Keep all transitions smooth
  scaling: "100", // Keep default scaling
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "AURA",
    description:
      "AURA - A revolutionary platform for digital art and creative expression.",
    image: "/images/og/aura.jpg",
    canonical: "https://aura.com",
    robots: "index,follow",
    alternates: [{ href: "https://aura.com", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "AURA",
  description: meta.home.description,
  email: "info@aura.com",
};

// social links
const social = {
  twitter: "https://twitter.com/aura",
  linkedin: "https://linkedin.com/company/aura",
  discord: "https://discord.com/invite/aura",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
