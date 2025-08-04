"use client";
import React from "react";

export default function ContactForm() {
  return (
    <section className="contact-bot">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={296}
            data-mobile={220}
            data-smobile={815}
          />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-map-contact wow fadeInDown">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-form-contact wow fadeInDown">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={50}
                data-smobile={50}
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
                    placeholder="Your Message"
                    maxLength={1000}
                    defaultValue={""}
                  />
                </div>
                <div className="row">
                  <div className="col">
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
            </div>
            {/*/box-form-contact*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={235}
            data-mobile={200}
            data-smobile={100}
          />
        </div>
      </div>
    </section>
  );
}
