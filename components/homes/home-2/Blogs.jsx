"use client";
import { blogPosts } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="fl-articles">
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
            <div className="box-wrap-articles wow fadeInUp">
              <h3 className="heading font-raguler">LATEST NEWS</h3>
              <div className="title-heading wow fadeInUp pdt-10">
                Our Insights &amp; Articles
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={25}
            data-mobile={25}
            data-smobile={25}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="carousel-articles wow fadeInUp">
              <div className="owl-carousel owl-theme art d-block">
                <Swiper
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
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".snbp3",
                    nextEl: ".snbn3",
                  }}
                >
                  {blogPosts.map((post, index) => (
                    <SwiperSlide className="item item-post" key={index}>
                      <div className="feature-post">
                        <Image
                          alt="image"
                          src={post.imgSrc}
                          width={370}
                          height={250}
                        />
                        <div className="overlay-post" />
                        <ul className="day-post fl-st-2 text-center">
                          <li>
                            <Link
                              href={`/blog-details`}
                              className="font-medium text-color-white"
                            >
                              {post.date}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="content-post fl-st-2 pdl-33">
                        <ul className="meta">
                          <li>
                            <Link href={`/blog-details`} className="name-user">
                              <i className="far fa-user" />
                              <span>{post.author}</span>
                            </Link>
                          </li>
                          <li>
                            <Link href={`/blog-details`} className="folder">
                              <i className="far fa-folder-open" />
                              <span>{post.category}</span>
                            </Link>
                          </li>
                        </ul>
                        <div className="title pdt-10">
                          <Link href={`/blog-details`} className="font-medium">
                            {post.title}
                          </Link>
                        </div>
                        <div className="flat-read-more fl-st-2 pdt-15">
                          <Link
                            href={`/blog-details`}
                            className="themesflat-button font-default2 ft"
                          >
                            <span>
                              Read More
                              <i className="fa fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev snbp3"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next snbn3"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
              </div>
              {/*/carousel*/}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={50}
            data-smobile={40}
          />
        </div>
      </div>
    </section>
  );
}
