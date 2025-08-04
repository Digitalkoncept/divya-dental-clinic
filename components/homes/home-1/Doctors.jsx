"use client";
import { doctors } from "@/data/doctors";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
export default function Doctors() {
  return (
    <section className="fl-row our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="box-heading-ot wow fadeInDown">
              <h3 className="heading text-color-title-sidebar">
                MEET OUR TEAM
              </h3>
              <div className="title-heading text-color-title-sidebar">
                Meet Our Doctors
              </div>
            </div>
          </div>
        </div>

        <div className="owl-carousel owl-theme overflow-visible d-block">
          <Swiper
            slidesPerView={3}
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
              prevEl: ".snbp1",
              nextEl: ".snbn1",
            }}
            loop
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide
                key={index}
                className="item box-item-carousel wow fadeInUp"
                data-wow-delay={doctor.delay}
              >
                <Image
                  alt="image"
                  className="w-100"
                  src={doctor.imgSrc}
                  width={370}
                  height={320}
                />
                <div className="info">
                  <h2 className="name text-color-title-sidebar">
                    <Link href={`/doctor-details`}>{doctor.name}</Link>
                  </h2>
                  <p className="pdt-8">Design Expert</p>
                </div>
                <div className="social-doctor">
                  <span className="grid-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </span>
                  <span className="grid-item">
                    <a href="#">
                      {" "}
                      <i className="fab fa-twitter" />{" "}
                    </a>
                  </span>
                  <span className="grid-item">
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </span>
                  <span className="grid-item">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={30}
                  data-mobile={20}
                  data-smobile={10}
                />
              </SwiperSlide>
            ))}
          </Swiper>{" "}
          <div className="owl-nav disabled">
            <button
              type="button"
              role="presentation"
              className="owl-prev snbp1"
            >
              <span aria-label="Previous"></span>
            </button>
            <button
              type="button"
              role="presentation"
              className="owl-next snbn1"
            >
              <span aria-label="Next">›</span>
            </button>
          </div>
        </div>
        {/*/owl-carousel*/}

        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={60}
            data-smobile={20}
          />
        </div>
      </div>
    </section>
  );
}
