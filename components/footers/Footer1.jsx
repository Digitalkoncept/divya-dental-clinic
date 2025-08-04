"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BacktoTop from "../common/BacktoTop";
import axios from "axios";
import {
  contactDetails,
  recentPosts,
  services,
  usefulLinks,
} from "@/data/footerLinks";
export default function Footer1() {
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
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-sr">
                <div className="text-subscribe">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={60}
                    data-mobile={60}
                    data-smobile={20}
                  />
                  <h1 className="text-color-white">
                    Enter Your Mail For subscribe
                  </h1>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={58}
                    data-mobile={58}
                    data-smobile={0}
                  />
                </div>
                <div className="form-contact">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={74}
                    data-mobile={74}
                    data-smobile={0}
                  />
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
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
                    className="form-submit contact-form wpcf7-form"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        defaultValue=""
                        className="email"
                        placeholder="Email Address"
                        required=""
                      />
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        className="themesflat-button bg-color-2"
                        role="button"
                      >
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={40}
                    data-mobile={40}
                    data-smobile={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={95}
              data-mobile={95}
              data-smobile={25}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box-list-footer">
                {/* Contact Us Section */}
                <div className="box-list box-contact">
                  <div className="title-footer text-color-white">
                    Contact Us
                  </div>
                  <ul className="one-half first">
                    {contactDetails.map((contact) => (
                      <li key={contact.id}>
                        <span>
                          <i className={contact.icon} />
                        </span>
                        <span>{contact.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Useful Links Section */}
                <div className="box-list box-useful">
                  <div className="title-footer text-color-white">
                    <a>Useful Link</a>
                  </div>
                  <ul className="one-half first">
                    {usefulLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link} title="">
                          <span>
                            <i className={link.icon} />
                          </span>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Section */}
                <div className="box-list box-recent">
                  <div className="title-footer text-color-white">
                    <a>Recent Post</a>
                  </div>
                  <ul className="one-half first">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <ul>
                          <li className="in">
                            <Link href={post.link}>
                              <i className={post.icon} />
                              {post.title}
                            </Link>
                          </li>
                          <li className="day">
                            <Link href={post.link} className="rubik-12-300">
                              <span>
                                <i className="far fa-calendar-alt" />
                              </span>
                              {post.date}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Section */}
                <div className="box-list box-services">
                  <div className="title-footer text-color-white">
                    <a>Services</a>
                  </div>
                  <ul className="one-half first">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link href={service.link} title="">
                          <span>
                            <i className={service.icon} />
                          </span>
                          {service.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /.widget-services */}
              </div>
              {/* /widget-box */}
            </div>
          </div>
          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={95}
              data-mobile={50}
              data-smobile={40}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="logo-bottom">
                <a href="">
                  <Image
                    alt="image"
                    src="/logo-dark.png"
                    width={198}
                    height={54}
                  />
                </a>
              </div>
              <h3 className="copyright">
                © DigitalKoncept {new Date().getFullYear()} | all rights reserved
              </h3>
              <ul className="list-icon-bottom">
                <li className="bottom-icon-active">
                  <a href="#" title="">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="bottom-icon-style">
                  <a href="#" title="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*/.footer-bottom*/}
      </footer>{" "}
      <BacktoTop />{" "}
    </>
  );
}
