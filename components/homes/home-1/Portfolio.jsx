import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems2 } from "@/data/portfolio";
export default function Portfolio() {
  return (
    <section className="fl-row portfolio">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={60}
            data-smobile={50}
          />
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="wrap-portfolio wow fadeInDown">
              <h3 className="heading">PORTFOLIO</h3>
              <div className="title-heading text-color-title-sidebar">
                Case Study
              </div>
              <p className="text-color-title-sidebar">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi.
                Aliquam maximus maximu
              </p>
            </div>
          </div>
          {portfolioItems2.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="box-portfolio wow fadeInUp pdbt-30"
                data-wow-delay={item.animationDelay}
              >
                <Image
                  alt="image"
                  src={item.imageSrc}
                  width={370}
                  height={360}
                />
                <div className={`overlay ${item.active ? "active" : ""}`}>
                  <h4 className="text-color-title-sidebar">
                    {/* Hardcoded link */}
                    <Link href="/services">{item.title}</Link>
                  </h4>
                  <p className="text-color-title-sidebar">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={90}
            data-mobile={40}
            data-smobile={20}
          />
        </div>
      </div>
    </section>
  );
}
