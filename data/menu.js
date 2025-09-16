export const menuItems = [
  {
    title: "Home",
    href: "/",
    subMenu: [],
  },
  {
    title: "About Us",
    href: "/about-us",
    className: "menu-item-has-children",
    subMenu: [
      { title: "About", href: "/about-us" },
      { title: "Doctor", href: "/doctor" },
      // { title: "Doctor Details", href: "/doctor-details" },
      // { title: "Our Pricing", href: "/pricing-table" },
      { title: "Gallery", href: "/gallery" },
      // { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subMenu: [],
  },
  {
    title: "Blog",
    href: "/blog-standard",
    subMenu: [],
  },

  {
    title: "Contact",
    href: "/contact",
    className: "",
    subMenu: [],
  },
];
