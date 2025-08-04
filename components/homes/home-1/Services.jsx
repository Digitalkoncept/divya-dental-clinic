import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceItems } from "@/data/services";
export default function Services() {
  return (
    <section className="fl-row intro-middle">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={150}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="box-heading-intro">
              <h3 className="heading wow fadeInDown">WHAT WE DO</h3>
              <div className="title-heading wow fadeInDown">
                Providing Medical Care For The <br />
                Sickest In Our Community.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <div
                className="box-item wow fadeInUp"
                data-wow-delay={item.animationDelay}
              >
                <div className="img">
                  <Image
                    alt="image"
                    src={item.imageSrc}
                    width={370}
                    height={240}
                  />
                </div>
                <div className="box-wrap">
                  <div className="title">
                    {/* Hardcoded link */}
                    <Link href="/service-details">{item.title}</Link>
                  </div>
                  <p className="pdt-10 text-color-title-sidebar">
                    {item.description}
                  </p>
                  <div className="flat-read-more">
                    {/* Hardcoded link */}
                    <Link
                      href="/service-details"
                      className="themesflat-button font-default small"
                    >
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={50}
            data-smobile={30}
          />
        </div>
      </div>
    </section>
  );
}
