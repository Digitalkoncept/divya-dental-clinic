"use client";
import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <section className="fl-row contact-us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="fl-box-contact">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107128.50620412633!2d73.79407294238727!3d32.95719168921971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1624430719262!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="form-contact-us fl-st-title">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={113}
                  data-mobile={70}
                  data-smobile={70}
                />
                <h3 className="heading theme-color">CONTACT US</h3>
                <div className="title-heading text-color-white">
                  Have Questions?
                  <br />
                  Get in Touch!
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={18}
                  data-mobile={18}
                  data-smobile={18}
                />
                <form
                  className="content-form wow fadeInUp"
                  id="contactform"
                  onSubmit={(e) => e.preventDefault()}
                  acceptCharset="utf-8"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        tabIndex={1}
                        id="name"
                        name="name"
                        defaultValue=""
                        className="input-contact"
                        type="text"
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                    <div className="col">
                      <input
                        tabIndex={2}
                        id="phone"
                        name="phone"
                        defaultValue=""
                        className="input-contact"
                        type="text"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="email"
                        tabIndex={3}
                        id="email"
                        name="email"
                        defaultValue=""
                        className="input-contact"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        tabIndex={4}
                        id="subject"
                        name="subject"
                        defaultValue=""
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      tabIndex={5}
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      placeholder="Your Message"
                      maxLength={1000}
                      defaultValue={""}
                    />
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-check">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="font-raguler font-rubik pdl-45">
                          Also subscribe us
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="box-submit">
                        <button
                          name="submit"
                          id="submit"
                          type="submit"
                          className="themesflat-button bg-accent btn-submit"
                          role="button"
                        >
                          <span>Send</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <Image
                  alt="image"
                  className="img-box-1"
                  src="/assets/image/pattern/Ellipse924.webp"
                  width={211}
                  height={211}
                />
                <Image
                  alt="image"
                  className="img-box-2"
                  src="/assets/image/thumbnails/logocontact.webp"
                  width={142}
                  height={100}
                />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={106}
                  data-mobile={40}
                  data-smobile={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
