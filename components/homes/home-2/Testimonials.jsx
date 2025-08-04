"use client";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={79}
            data-mobile={40}
            data-smobile={40}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="box-testimonial">
              <div className="box-img-tt">
                <Image
                  alt="image"
                  src="/assets/image/patternphoto/World-Map-Free-PNG-Image.webp"
                  width={947}
                  height={608}
                />
              </div>
              <div className="box-wrap-tt text-center pdt-39 wow fadeInUp">
                <h3 className="heading">CLIENT TESTIMONIALS</h3>
                <div className="title-heading wow fadeInUp pdt-8">
                  What our clients say
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={22}
                  data-mobile={0}
                  data-smobile={0}
                />
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs.
                </p>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={40}
                data-smobile={40}
              />
              <Swiper
                className="owl-carousel owl-theme none cursor-resize wow fadeInUp"
                spaceBetween={30}
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
              >
                {testimonials.map((testimonial, i) => (
                  <SwiperSlide key={i} className="item item-tt drop-sd">
                    <div className="row-item-tt">
                      <div className="img-item">
                        <Image
                          alt="image"
                          src={testimonial.imageSrc}
                          width={98}
                          height={98}
                        />
                      </div>
                      <div className="item-name">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.role}</p>
                      </div>
                      <div className="box-icon font-size-quote pdt-63">
                        <i className="icon-quotes-24" />
                      </div>
                    </div>
                    <p className={`box-post ${testimonial.pdlClass}`}>
                      {testimonial.quote}
                    </p>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={10}
                      data-mobile={10}
                      data-smobile={10}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={89}
            data-mobile={25}
            data-smobile={30}
          />
        </div>
      </div>
    </section>
  );
}
