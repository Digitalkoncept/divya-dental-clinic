"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rev_slider_wrapper fullwidthbanner-container">
      <div id="rev-slider2" className="rev_slider fullwidthabanner">
        <div className="swiper-container">
          <Swiper style={{ height: "calc(100vh - 223px" }}>
            {/* Slide 1 */}
            <SwiperSlide className="swiper-slide">
              <img
                src="/assets/image/slides/slider2.webp"
                alt="image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  position: "absolute",

                  top: 0,
                  left: 0,
                  height: "100%",
                  zIndex: -1,
                }}
              />
              <div className="container h-100">
                <div className="slide-content">
                  <div className="slide-layer slide-font-1">
                    WE USE LATEST MEDICAL TECHNOLOGY
                  </div>
                  <div className="title">
                    <div className="slide-layer slide-font-2">
                      Let Us Brighten
                    </div>
                    <div className="slide-layer slide-font-2">Your Smile</div>{" "}
                  </div>
                  <div className="slide-layer">
                    <Link
                      href={`/about-us`}
                      className="themesflat-button bg-accent big2"
                    >
                      <span>Who We Are</span>
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
            {/* End Slide 1 */}
            {/* Slide 2 */}
            <SwiperSlide className="swiper-slide">
              <img
                src="/assets/image/slides/slider2.webp"
                alt="image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  position: "absolute",

                  top: 0,
                  left: 0,
                  height: "100%",
                  zIndex: -1,
                }}
              />
              <div className="container h-100">
                <div className="slide-content">
                  <div className="slide-layer slide-font-1">
                    WE USE LATEST MEDICAL TECHNOLOGY
                  </div>
                  <div className="title">
                    <div className="slide-layer slide-font-2">
                      Let Us Brighten
                    </div>
                    <div className="slide-layer slide-font-2">Your Smile</div>{" "}
                  </div>
                  <div className="slide-layer">
                    <Link
                      href={`/about-us`}
                      className="themesflat-button bg-accent big2"
                    >
                      <span>Who We Are</span>
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Add Pagination if needed */}
          <div className="swiper-pagination" />
          {/* Add Navigation if needed */}
          <div
            className="tp-leftarrow tparrows custom  noSwipe"
            style={{
              top: "50%",
              transform: "matrix(1, 0, 0, 1, 120, -30)",
              left: 0,

              opacity: 1,
            }}
          />
          <div
            className="tp-rightarrow tparrows custom  noSwipe"
            style={{
              top: "50%",
              transform: "matrix(1, 0, 0, 1, -180, -30)",
              left: "100%",

              opacity: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
