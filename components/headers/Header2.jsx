"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

import MobileMenuToggle from "./MobileMenuToggle";
export default function Header2() {
  return (
    <header className="header clearfix">
      <div id="header" className="container-fluid header">
        <div id="site-header" className="row">
          <div className="logo-h2">
            <Link href={`/home2`}>
              <Image
                alt="image"
                src="/assets/image/LogoDark@2x.webp"
                width={197}
                height={54}
              />
            </Link>
          </div>
          <div className="top-header">
            <div className="top-bar">
              <div className="top-infor">
                <ul>
                  <li className="top-location">
                    <i className="icon-maket-light" />
                    <span className="address">
                      2072 Pinnickinick Street, WA 98370
                    </span>
                  </li>
                  <li className="top-mail pdl-25">
                    <i className="icon-mail-light" />
                    <a href="mailto:info@website.com">info@website.com </a>
                  </li>
                </ul>
              </div>
              <div className="top-social">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={5}
                />
                <ul className="widgets-nav-social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-content">
              <div className="nav-wrap fl-st-2">
                <nav id="mainnav" className="mainnav fl-st-2">
                  <ul className="menu">
                    <Nav />
                  </ul>
                  {/* /.menu */}
                </nav>
                {/* /#mainnav */}
              </div>
              <div className="contact-header">
                <div id="header-search">
                  <a href="" className="search-box header-search-icon">
                    <i className="icon-scerchDark" />
                  </a>
                  <form
                    role="search"
                    onSubmit={(e) => e.preventDefault()}
                    className="header-search-form"
                  >
                    <input
                      type="text"
                      defaultValue=""
                      name="s"
                      className="header-search-field"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="header-search-submit"
                      title="Search"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* /#header-search */}
                <div className="megamenu">
                  <a href="" className="megamenu-box">
                    <i className="icon-Megamenu" />
                  </a>
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
              <MobileMenuToggle />
            </div>
            {/*header-content*/}
          </div>
          {/* /top-header */}
        </div>
        {/*/site-header*/}
      </div>
      <MobileNav />
    </header>
  );
}
