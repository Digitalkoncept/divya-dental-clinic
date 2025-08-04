"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BacktoTop from "../common/BacktoTop";
import axios from "axios";
import { services2, usefulLinks2 } from "@/data/footerLinks";
export default function Footer2() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  return (
    <>
      <footer id="footer" className="fl-st-2">
        <div className="container">
          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={96}
              data-mobile={50}
              data-smobile={70}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box-list-footer-2">
                <div className="widget-footer widget-list-social">
                  <div className="logo-footer">
                    <Image
                      alt="image"
                      src="/assets/image/Logolight@2x.webp"
                      width={198}
                      height={54}
                    />
                  </div>
                  <p className="pdt-25">
                    Lorem ipsum dolor sit amet, consect etuer adipiscing elit,
                    sed diam nonu mmy nibh euis
                  </p>
                  <ul className="list-social pdt-10">
                    <li className="active">
                      <a href="">
                        <i className="icon-social-fb" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-social--tw" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-social-g" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-social-in" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-social-p" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget-footer widget-list-services">
                  <h4 className="title-list-footer">Services</h4>
                  <ul className="list-footer list-services pdt-10">
                    {services2.map((service) => (
                      <li key={service.id}>
                        <Link href={service.link}>{service.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Useful Links Section */}
                <div className="widget-footer widget-list-useful">
                  <h4 className="title-list-footer">Useful Links</h4>
                  <ul className="list-footer list-useful pdt-10">
                    {usefulLinks2.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget-footer widget-form-sub">
                  <h4 className="title-list-footer">Subscribe</h4>
                  <div className="email-form">
                    <div className="Email">
                      <div
                        className={`tfSubscribeMsg  footer-sub-element ${
                          showMessage ? "active" : ""
                        }`}
                      >
                        {success ? (
                          <p style={{ color: "#fff" }}>
                            You have successfully subscribed.
                          </p>
                        ) : (
                          <p style={{ color: "red" }}>Something went wrong</p>
                        )}
                      </div>
                      <form
                        onSubmit={sendEmail}
                        id="subscribe-form"
                        acceptCharset="utf-8"
                      >
                        <input
                          type="email"
                          name="email"
                          id="email"
                          defaultValue=""
                          placeholder="Email"
                          required=""
                        />
                        <button name="submit" id="submit" type="submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={15}
                      data-mobile={15}
                      data-smobile={15}
                    />
                    <p>
                      Get the latest updates via email. Any time you may
                      unsubscribe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={35}
              data-mobile={30}
              data-smobile={0}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box-social-footer">
                <div className="cl-social cl-address">
                  <div className="box-icon">
                    <i className="icon-icon11" />
                  </div>
                  <ul>
                    <li>
                      <h5>2416 Mapleview Drive Tampa, FL 33634</h5>
                    </li>
                  </ul>
                </div>
                <div className="cl-social cl-email">
                  <div className="box-icon">
                    <i className="icon-icon12 font-size-small" />
                  </div>
                  <ul>
                    <li>
                      <a href="mailto:contact@website.com">
                        Main Email : contact@website.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Info@mail.com">
                        Inquiries : Info@mail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cl-social cl-phone">
                  <div className="box-icon">
                    <i className="icon-icon13" />
                  </div>
                  <ul>
                    <li>
                      <a href="tel:0029129102320">
                        Office Telephone : 0029129102320
                      </a>
                    </li>
                    <li>
                      <a href="tel:0123456789">Mobile : 000 2324 39493</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={10}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={58}
              data-mobile={30}
              data-smobile={50}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bottom">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={40}
                />
                <div className="coppy fl-left">
                  <p>
                    © Yoursitename {new Date().getFullYear()} | All Rights
                    Reserved
                  </p>
                </div>
                <ul className="fl-right">
                  <li>
                    <Link href={`/FAQ`}>Privacy</Link>
                  </li>
                  <li>
                    <Link href={`/FAQ`}>Terms</Link>
                  </li>
                  <li>
                    <Link href={`/contact`}>Sitemap</Link>
                  </li>
                  <li>
                    <Link href={`/FAQ`}>Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BacktoTop />
    </>
  );
}
