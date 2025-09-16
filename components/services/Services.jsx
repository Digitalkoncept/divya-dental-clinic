import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";

export default function Services() {
  return (
    <section className="fl-row intro-middle">
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
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={service.slug}>
              <div
                className="box-item wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="img">
                  {/* Use first image if available, else placeholder */}
                  <Image
                    alt={service.title}
                    src={service.images?.[0] || "/assets/image/common/placeholder.webp"}
                    width={370}
                    height={240}
                  />
                </div>
                <div className="box-wrap">
                  <div className="title">
                    <Link href={`/${service.slug}`}>{service.title}</Link>
                  </div>
                  <p className="pdt-10 text-color-title-sidebar">
                    {service.description}
                  </p>
                  <div className="flat-read-more">
                    <Link
                      href={`/${service.slug}`}
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
              {(index + 1) % 3 === 0 && (
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />
              )}
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={30}
            data-smobile={30}
          />
        </div>
      </div>
    </section>
  );
}
