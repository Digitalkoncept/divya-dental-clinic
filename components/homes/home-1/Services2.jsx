import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceItems2 } from "@/data/services";
export default function Services2() {
  return (
    <>
      <section className="fl-row intro-bot">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="box-wrap-title fl-st-title wow fadeInDown">
                <h3 className="heading text-color-white">WHAT WE DO</h3>
                <div className="title-heading text-color-white">
                  What You Can Do
                  <br />
                  with carenow
                </div>
                <p className="text-color-white">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="box-features-bot">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={40}
                  data-mobile={40}
                  data-smobile={40}
                />
                <Image
                  className="flat-img-intro"
                  alt="image"
                  src="/assets/image/common/MaskGroup10.webp"
                  width={399}
                  height={544}
                />
                <div className="features-bot-inner">
                  <Image
                    alt="image"
                    src="/assets/image/pattern/Ellipse989.webp"
                    width={547}
                    height={547}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fl-row features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box-features wow fadeInUp">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={40}
                />
                {serviceItems2.map((item) => (
                  <div
                    key={item.id}
                    className={`col-box ${item.borderNone ? "bd-none" : ""}`}
                  >
                    <div
                      className={`box-icon ${item.active ? "active" : ""} ${
                        item.customClass || ""
                      }`}
                    >
                      <i className={item.iconClass} />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={38}
                      data-mobile={38}
                      data-smobile={38}
                    />
                    <div className="box-wrap">
                      <h2 className="box-change font-rubik">
                        {/* Hardcoded link */}
                        <Link href="/service-details">{item.title}</Link>
                      </h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={30}
                />
              </div>
              {/*/box-featues*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
