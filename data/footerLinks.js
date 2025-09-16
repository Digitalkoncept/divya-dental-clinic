// Array of contact details
import { servicesData } from "./servicesData";
export const contactDetails = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt flat-icon-footer",
    text: "DIVYA DENTAL CLINIC: Shop No: FF-32, First Floor, Shipra Riviera Tower, Shipra Riviera, Gyan Khand III, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
  },
  {
    id: 2,
    icon: "fa fa-phone-alt flat-icon-footer",
    text: <a href="tel:08448521382">08448521382</a>,
  },
  {
    id: 3,
    icon: "fas fa-envelope flat-icon-footer",
    text: <a href="mailto:yourmail.@gmail.com">yourmail.@gmail.com</a>,
  },
];

// Array of useful links
export const usefulLinks = [
  {
    id: 1,
    icon: "fa fa-square",
    text: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    icon: "fa fa-square",
    text: "Team",
    link: "/doctor",
  },
  {
    id: 3,
    icon: "fa fa-square",
    text: "Testomonial",
    link: "/about-us",
  },
  {
    id: 4,
    icon: "fa fa-square",
    text: "Services",
    link: "/services",
  },
];

// Array of recent posts
export const recentPosts = [
  {
    id: 1,
    icon: "fa fa-square",
    title: "Bigg Ideas Business branding Info.",
    date: "December 7, 2021",
    link: "/blog-details",
  },
  {
    id: 2,
    icon: "fa fa-square",
    title: "Bigg Ideas Business branding Info.",
    date: "December 7, 2021",
    link: "/blog-details",
  },
];

// Array of services
export const services = servicesData.slice(0,3).map((service) => ({
  id: service.id,
  icon: service.icon || "fa fa-square", // Agar icon defined nahi hai
  text: service.title,                  // Service ka title
  link: `/${service.slug}`, // Dynamic link
  slug: service.slug,                   // Slug for dynamic route
}));


export const services2 = [
  {
    id: 1,
    text: "Conditions",
    link: "/service-details",
  },
  {
    id: 2,
    text: "Terms of Use",
    link: "/service-details",
  },
  {
    id: 3,
    text: "Our Services",
    link: "/service-details",
  },
  {
    id: 4,
    text: "New Guests List",
    link: "/service-details",
  },
  {
    id: 5,
    text: "The Team List",
    link: "/service-details",
  },
];

// Array of useful links
export const usefulLinks2 = [
  {
    id: 1,
    text: "Conditions",
    link: "/service-details",
  },
  {
    id: 2,
    text: "Terms of Use",
    link: "/services",
  },
  {
    id: 3,
    text: "Our Services",
    link: "/services",
  },
  {
    id: 4,
    text: "New Guests List",
    link: "/services",
  },
  {
    id: 5,
    text: "The Team List",
    link: "/doctor",
  },
];
