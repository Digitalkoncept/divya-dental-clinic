import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pricingItems } from "@/data/pricing";
export default function Pricing() {
  return (
    <section className="pricing-table">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={123}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="box-pricing-plans">
              {pricingItems.map((item) => (
                <React.Fragment key={item.id}>
                  <div
                    className={`box-pricing wow fadeInDown ${
                      item.active ? "active" : ""
                    }`}
                  >
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={item.spacerTop}
                      data-mobile={item.spacerTop}
                      data-smobile={item.spacerTop}
                    />
                    <Image
                      alt="image"
                      src={item.imageSrc}
                      width={396}
                      height={753}
                    />
                    <div className="box-icon box-icon-pricing">
                      <i className={item.iconClass} />
                    </div>
                    <div className="title-heading">{item.price}</div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={9}
                      data-mobile={9}
                      data-smobile={9}
                    />
                    <div className="sub-title">{item.title}</div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={66}
                      data-mobile={66}
                      data-smobile={66}
                    />
                    <ul className="list-pricing">
                      {item.features.map((feature, index) => (
                        <li key={index}>
                          <p
                            className={
                              feature.included ? "check-mark" : "x-mark"
                            }
                          >
                            {feature.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={56}
                      data-mobile={56}
                      data-smobile={56}
                    />
                    <div className="button-get-started">
                      {/* Hardcoded link */}
                      <Link
                        href="/book-appointment"
                        className="themesflat-button bg-accent btn-get-started"
                      >
                        GET STARTED
                      </Link>
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={item.spacerBottom}
                      data-mobile={item.spacerBottom}
                      data-smobile={item.spacerBottom}
                    />
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={0}
                    data-mobile={20}
                    data-smobile={20}
                  />
                </React.Fragment>
              ))}
            </div>
            {/*/box-pricing-plans*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={254}
            data-mobile={180}
            data-smobile={100}
          />
        </div>
      </div>
    </section>
  );
}
