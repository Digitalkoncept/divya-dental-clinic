export const menuItems = [
  {
    title: "Home",
    href: "/",
    className: "menu-item-has-children",
    subMenu: [],
  },
  {
    title: "About Us",
    href: "/about-us",
    className: "menu-item-has-children",
    subMenu: [
      { title: "About", href: "/about-us" },
      { title: "Doctor", href: "/doctor" },
      { title: "Doctor Details", href: "/doctor-details" },
      { title: "Our Pricing", href: "/pricing-table" },
      { title: "Gallery", href: "/gallery" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    className: "menu-item-has-children",
    subMenu: [
      { title: "Services", href: "/services" },
      { title: "Services Details", href: "/service-details" },
    ],
  },
  {
    title: "Blog",
    href: "/blog-standard",
    className: "menu-item-has-children",
    subMenu: [
      { title: "Blog Standard", href: "/blog-standard" },
      { title: "Blog Details", href: "/blog-details" },
    ],
  },

  {
    title: "Contact",
    href: "/contact",
    className: "",
    subMenu: [],
  },
];
