"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { counterData } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Services() {
  // Tab data
  const tabs = [
    { id: 1, icon: "icon-Path-18144", title: "Profit Planning" },
    { id: 2, icon: "icon-Path-18154", title: "Pediatric Dentistry" },
    { id: 3, icon: "icon-Path-18158", title: "Teeth Whitening" },
    {
      id: 4,
      icon: "icon-Path-18188",
      title: "Dental Services",
      filter: ".tab-content",
    },
    {
      id: 5,
      icon: "icon-Path-18174",
      title: "Dental Implants",
      filter: ".tab-content",
    },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="our-professional">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="box-wrap-op text-center">
              <h3 className="heading  wow fadeInUp">WHAT WE DO</h3>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={10}
                data-mobile={10}
                data-smobile={10}
              />
              <div className="title-heading text-color-title-sidebar wow fadeInUp">
                True Healthcare For
                <br /> Your Family
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={30}
            data-mobile={15}
            data-smobile={15}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-nav">
              <ul className="list-tab-link wow fadeInUp">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`tab-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    data-filter={tab.filter || ""}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div className="tab-icon">
                      <i className={`${tab.icon} font-size-big`} />
                    </div>
                    <h4 className="tab-title">{tab.title}</h4>
                  </li>
                ))}
              </ul>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={65}
                data-mobile={30}
                data-smobile={30}
              />

              <div className="tab-content wow fadeInUp">
                {activeTab == 1 && (
                  <div className="tab-inner fadeInTab">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />

                    <div className="row-tab-content">
                      <div className="cl-tab-left">
                        <div className="title-heading text-color-title-sidebar">
                          Our Professional &amp; Adict Doctors.
                        </div>
                        <p>
                          The quick, brown fox jumps over a lazy dog. DJs flock
                          by when MTV ax quiz prog MTV quiz graced
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={30}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Nullam est</p>
                            <p>87%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-1 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Mattis dictum nunc</p>
                            <p>80%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-2 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Malesuada dictum neque</p>
                            <p>86%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-3 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={26}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="button-header">
                          <Link
                            href={`/contact`}
                            className="themesflat-button bg-accent btn-header"
                          >
                            <span>Get Appointment</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={0}
                          data-mobile={40}
                          data-smobile={40}
                        />
                      </div>
                      <div className="cl-tab-right">
                        <Image
                          alt="image"
                          src="/assets/image/common/about-us-02.webp"
                          width={467}
                          height={505}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab == 2 && (
                  <div className="tab-inner fadeInTab">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />

                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />
                    <div className="row-tab-content">
                      <div className="cl-tab-left">
                        <div className="title-heading text-color-title-sidebar">
                          Our Professional &amp; Adict Doctors.
                        </div>
                        <p>
                          The quick, brown fox jumps over a lazy dog. DJs flock
                          by when MTV ax quiz prog MTV quiz graced
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={30}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Nullam est</p>
                            <p>87%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-1 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Mattis dictum nunc</p>
                            <p>80%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-2 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Malesuada dictum neque</p>
                            <p>86%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-3 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={26}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="button-header">
                          <Link
                            href={`/contact`}
                            className="themesflat-button bg-accent btn-header"
                          >
                            <span>Get Appointment</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={0}
                          data-mobile={40}
                          data-smobile={40}
                        />
                      </div>
                      <div className="cl-tab-right">
                        <Image
                          alt="image"
                          src="/assets/image/common/about-us-02.webp"
                          width={467}
                          height={505}
                        />
                      </div>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={75}
                      data-mobile={50}
                      data-smobile={50}
                    />
                  </div>
                )}
                {activeTab == 3 && (
                  <div className="tab-inner fadeInTab">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />

                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />
                    <div className="row-tab-content">
                      <div className="cl-tab-left">
                        <div className="title-heading text-color-title-sidebar">
                          Our Professional &amp; Adict Doctors.
                        </div>
                        <p>
                          The quick, brown fox jumps over a lazy dog. DJs flock
                          by when MTV ax quiz prog MTV quiz graced
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={30}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Nullam est</p>
                            <p>87%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-1 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Mattis dictum nunc</p>
                            <p>80%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-2 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Malesuada dictum neque</p>
                            <p>86%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-3 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={26}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="button-header">
                          <Link
                            href={`/contact`}
                            className="themesflat-button bg-accent btn-header"
                          >
                            <span>Get Appointment</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={0}
                          data-mobile={40}
                          data-smobile={40}
                        />
                      </div>
                      <div className="cl-tab-right">
                        <Image
                          alt="image"
                          src="/assets/image/common/about-us-02.webp"
                          width={467}
                          height={505}
                        />
                      </div>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={75}
                      data-mobile={50}
                      data-smobile={50}
                    />
                  </div>
                )}
                {activeTab == 4 && (
                  <div className="tab-inner fadeInTab">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />

                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />
                    <div className="row-tab-content">
                      <div className="cl-tab-left">
                        <div className="title-heading text-color-title-sidebar">
                          Our Professional &amp; Adict Doctors.
                        </div>
                        <p>
                          The quick, brown fox jumps over a lazy dog. DJs flock
                          by when MTV ax quiz prog MTV quiz graced
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={30}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Nullam est</p>
                            <p>87%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-1 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Mattis dictum nunc</p>
                            <p>80%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-2 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Malesuada dictum neque</p>
                            <p>86%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-3 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={26}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="button-header">
                          <Link
                            href={`/contact`}
                            className="themesflat-button bg-accent btn-header"
                          >
                            <span>Get Appointment</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={0}
                          data-mobile={40}
                          data-smobile={40}
                        />
                      </div>
                      <div className="cl-tab-right">
                        <Image
                          alt="image"
                          src="/assets/image/common/about-us-02.webp"
                          width={467}
                          height={505}
                        />
                      </div>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={75}
                      data-mobile={50}
                      data-smobile={50}
                    />
                  </div>
                )}
                {activeTab == 5 && (
                  <div className="tab-inner fadeInTab">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />

                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={76}
                      data-mobile={50}
                      data-smobile={50}
                    />
                    <div className="row-tab-content">
                      <div className="cl-tab-left">
                        <div className="title-heading text-color-title-sidebar">
                          Our Professional &amp; Adict Doctors.
                        </div>
                        <p>
                          The quick, brown fox jumps over a lazy dog. DJs flock
                          by when MTV ax quiz prog MTV quiz graced
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={30}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Nullam est</p>
                            <p>87%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-1 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Mattis dictum nunc</p>
                            <p>80%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-2 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-box">
                          <div className="progress-label">
                            <p>Malesuada dictum neque</p>
                            <p>86%</p>
                          </div>
                          <div className="progress skill-progress margin-bottom-15">
                            <div
                              className="progress-bar progress-bar-3 progress-animated"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={26}
                          data-mobile={15}
                          data-smobile={15}
                        />
                        <div className="button-header">
                          <Link
                            href={`/contact`}
                            className="themesflat-button bg-accent btn-header"
                          >
                            <span>Get Appointment</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={0}
                          data-mobile={40}
                          data-smobile={40}
                        />
                      </div>
                      <div className="cl-tab-right">
                        <Image
                          alt="image"
                          src="/assets/image/common/about-us-02.webp"
                          width={467}
                          height={505}
                        />
                      </div>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={75}
                      data-mobile={50}
                      data-smobile={50}
                    />
                  </div>
                )}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={75}
                  data-mobile={50}
                  data-smobile={50}
                />
              </div>
              {/*/tab-content*/}
            </div>
            {/*/tab-nav*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={0}
            data-smobile={0}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row-list-ct fl-couter ct-120 wow fadeInUp">
              {counterData.map((counter, i) => (
                <div key={i} className={`col-counter cl-ct${i + 1}`}>
                  <div className="box">
                    <div className="box-icon pdt-10">
                      <i className={`${counter.icon} font-size-big`} />
                    </div>
                    <div className="title-heading ">
                      <span className="number text-color-white">
                        <Counter max={counter.value} />
                      </span>
                      <span className="text-color-white">{counter.suffix}</span>
                      <h4 className="text-color-white font-raguler pdt-5">
                        {counter.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
