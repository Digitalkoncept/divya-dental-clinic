"use client";
import { portfolioItems } from "@/data/portfolio";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper/modules";
export default function Portfolio() {
  return (
    <section className="fl-portfolio">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={135}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="box-wrap-ptf fl-st-title wow fadeInUp">
              <h3 className="heading text-color-white font-raguler">
                PORTFOLIO
              </h3>
              <div className="title-heading text-color-white pdt-10">
                Case Study
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={45}
            data-mobile={45}
            data-smobile={30}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="carousel-ptf wow fadeInUp">
              <div className="owl-carousel owl-theme ptf d-block">
                <Swiper
                  spaceBetween={25}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".snbp2",
                    nextEl: ".snbn2",
                  }}
                >
                  {portfolioItems.map((item, index) => (
                    <SwiperSlide className="item box-ptf" key={index}>
                      <Image
                        alt="image"
                        src={item.imgSrc}
                        width={570}
                        height={418}
                      />
                      <div className="overlay">
                        <h4 className="text-color-title-sidebar">
                          <Link href={`/service-details`}>{item.title}</Link>
                        </h4>
                        <p className="text-color-title-sidebar">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev snbp2"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next snbn2"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
              </div>
            </div>
            {/*/carousel-ptf*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={0}
            data-smobile={50}
          />
        </div>
      </div>
    </section>
  );
}
