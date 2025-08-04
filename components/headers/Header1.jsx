import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

import MobileMenuToggle from "./MobileMenuToggle";
export default function Header1() {
  return (
    <header className="header clearfix">
      <div id="header">
        <div id="site-header">
          <div className="logo">
            <Link href={`/`}>
              <Image
                alt="image"
                src="/logo-2.png"
                width={197}
                height={54}
              />
            </Link>
          </div>
          {/* //mobile menu button */}
          <div className="nav-wrap">
            <nav id="mainnav" className="mainnav">
              <ul className="menu">
                <Nav />
              </ul>
              {/* /.menu */}
            </nav>
          </div>
          {/* /#mainnav */}
          <div className="contact">
            <div className="top-bar-right">
              <div className="call-us">
                <div className="icon-call-us" />
                <div className="content-call-us">
                  <p>Call Us</p>
                  <a
                    href="tel:360-779-2228"
                    className="font-bold text-color-title-sidebar"
                  >
                    360-779-2228
                  </a>
                </div>
              </div>
              <div className="button-header">
                <Link
                  href={`/book-appointment`}
                  className="themesflat-button bg-accent btn-header"
                >
                  <span>Get Appointment</span>
                </Link>
              </div>
            </div>
          </div>
          <MobileMenuToggle />
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
