
// ------------------------------------------------------------------------
// Central place for site copy & st  you need to do to update text across
// the whole site -- components just map over these arrays.
// ------------------------------------------------------------------------

import {
  GraduationCap,
  Home,
  BrainCircuit,
  Laptop,
  Smartphone,
  Globe,
  Cloud,
  ShieldCheck,
  Glasses,
  MessagesSquare,
  Lightbulb,
  ShieldHalf,
  Users,
  TrendingUp,
  HeartPulse,
  Sprout,
  Building2,
  Landmark,
  Camera,
  Bus,
  Banknote,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#services" },
  { label: "Why PearlVector", href: "#why-us" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Industries", href: "#industries" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

// The four "trust pill" badges shown under the hero.
export const TRUST_POINTS = [
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: ShieldHalf, label: "Reliable & Secure" },
  { icon: Users, label: "Client Focused" },
  { icon: TrendingUp, label: "Impact Driven" },
];

// "What We Do" -- the ten service lines from the PearlVector brand poster.
export const SERVICES = [
  {
    icon: GraduationCap,
    title: "Education Tech",
    description:
      "School management systems, learning management platforms, and examination & attendance solutions.",
  },
  {
    icon: Home,
    title: "Property Tech",
    description:
      "Hostel management, smart rentals, and property analytics for landlords and estate managers.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI chatbots, computer vision, predictive analytics, and business intelligence tools.",
  },
  {
    icon: Laptop,
    title: "Business Software",
    description:
      "ERP systems, HR platforms, inventory management, accounting, and custom business applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Android & iOS apps for healthcare, agriculture, education, transport, tourism, and more.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive websites, e-commerce platforms, booking systems, and government portals.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud migration, hosting, API development, and scalable database solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security audits, penetration testing, and user awareness training for organizations of any size.",
  },
  {
    icon: Glasses,
    title: "Virtual Reality",
    description:
      "Immersive VR experiences for training, education, simulation, tourism, and real estate.",
  },
  {
    icon: MessagesSquare,
    title: "Digital Consulting",
    description:
      "Helping organizations digitize processes, modernize workflows, and achieve operational excellence.",
  },
];

// "Why Choose PearlVector" checklist.
export const WHY_US = [
  "Deep understanding of Africa's challenges and opportunities",
  "Cutting-edge technologies and best practices",
  "Scalable, secure and cost-effective solutions",
  "Passionate team committed to your success",
];

// Industries served -- icon + label, mirrors the poster's industry strip.
export const INDUSTRIES = [
  { icon: GraduationCap, label: "Education", description: "School management, e-learning and exam systems." },
  { icon: HeartPulse, label: "Healthcare", description: "Patient records, telemedicine and health-data platforms." },
  { icon: Sprout, label: "Agriculture", description: "Farm management, market access and crop analytics tools." },
  { icon: Building2, label: "Real Estate", description: "Property listings, rentals and smart building management." },
  { icon: Landmark, label: "Government", description: "Digital public services and e-governance portals." },
  { icon: Camera, label: "Tourism", description: "Booking platforms and immersive destination experiences." },
  { icon: Bus, label: "Transport", description: "Fleet tracking, route planning and logistics systems." },
  { icon: Banknote, label: "Finance", description: "Payments, lending and financial management platforms." },
];

// Founding / core team. Update names, roles, or add a `photo` key (an
// imported image) once real headshots are available.
export const TEAM = [
  {
    name: "Aryatuha Kenneth",
    role: "Co-Founder & CEO",
    title: "Full-Stack Developer | AI & Machine Learning Practitioner",
  },
  {
    name: "Openy Martin",
    role: "Co-Founder",
    title: "Cybersecurity & Network Administrator",
  },
  {
    name: "Kulabako Arnold Odongo",
    role: "Co-Founder",
    title: "Systems Administrator",
  },
  {
    name: "Nanshemeza Rabecca",
    role: "Co-Founder",
    title: "Full-Stack Developer",
  },
  {
    name: "Ayen Geoffrey Alexander",
    role: "Co-Founder",
    title: "Backend Developer | Cybersecurity & Data Protection Specialist",
  },
];

// Vision: newly proposed -- describes the long-term future PearlVector
// is working toward.
export const VISION =
  "A digitally empowered Africa where every business, institution and community from a rural school to a national ministry  runs on secure, intelligent, homegrown technology.";

// Mission: revised from the original poster copy. The original read:
// "To design, develop and deploy scalable digital technologies that
// improve lives, empower businesses and accelerate sustainable
// development across Africa."
// The version below keeps that intent but names HOW PearlVector does it
// (its actual service lines) and WHO it serves, making the statement more
// concrete and distinct from a generic tech-company mission.
export const MISSION =
  "We design, build and support secure, scalable digital solutions spanning AI, software, mobile apps, cloud and cybersecurity that solve real African problems and give businesses, institutions and communities the confidence to grow.";

export const CONTACT = {
  phone: "+256 749 537 430",
  email: "info@pearlvector.com",
  website: "www.pearlvector.com",
  location: "Kabale, Uganda",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
