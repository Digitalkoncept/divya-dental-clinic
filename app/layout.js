"use client";
import { useEffect } from "react";
import "../public/assets/css/main.css";
import "swiper/css";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    const updateSpacerHeights = () => {
      let mode = "desktop";
      if (window.matchMedia("(max-width: 991px)").matches) mode = "mobile";
      if (window.matchMedia("(max-width: 767px)").matches) mode = "smobile";

      document.querySelectorAll(".themesflat-spacer").forEach((el) => {
        const height =
          mode === "desktop"
            ? el.dataset.desktop
            : mode === "mobile"
            ? el.dataset.mobile
            : el.dataset.smobile;

        el.style.height = `${height}px`;
      });
    };

    window.addEventListener("load", updateSpacerHeights);
    window.addEventListener("resize", updateSpacerHeights);
    updateSpacerHeights();

    return () => {
      window.removeEventListener("load", updateSpacerHeights);
      window.removeEventListener("resize", updateSpacerHeights);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 100) {
        header.classList.add("downscrolled");
      } else {
        header.classList.remove("downscrolled");
      }
      if (window.scrollY >= 200) {
        header.classList.add("header-small");
        header.classList.add("upscrolled");
      } else {
        header.classList.remove("header-small");
        header.classList.remove("upscrolled");
      }
    });
  }, []);
  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: false,
    });
    wow.init();
  }, [pathname]);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Hind:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="counter-scroll header_sticky">
        <div className="wrapper">
          <div id="page">{children}</div>
        </div>
      </body>
    </html>
  );
}
