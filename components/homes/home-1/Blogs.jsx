"use client";
import { articles } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <section className="fl-row articles">
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
            <div className="box-wrap-article">
              <h3 className="heading text-center">LATEST NEWS</h3>
              <div className="title-heading text-color-title-sideba text-center">
                Our Insights &amp; Articles
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper
            className="owl-carousel owl-theme none latest-box cursor-resize"
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
            {articles.map((article) => (
              <SwiperSlide key={article.id} className="box-article">
                <div
                  className="item wow fadeInUp"
                  data-wow-duration={
                    article.duration ? article.duration : undefined
                  }
                  data-wow-delay={article.delay ? article.delay : undefined}
                >
                  <div className="feature-post">
                    <Image
                      alt="image"
                      src={article.imgSrc}
                      width={370}
                      height={300}
                      className="w-100"
                    />
                    <div className="overlay-post" />
                  </div>
                  <div className="content-post art">
                    <ul className="meta">
                      <li className="author">
                        <Link href={`/blog-details`}>{article.category}</Link>
                      </li>
                      <li className="day-post">
                        <Link href={`/blog-details`}>{article.date}</Link>
                      </li>
                    </ul>
                    <h2 className="title text-color-title-sidebar">
                      <Link href={`/blog-details`}>{article.title}</Link>
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={232}
            data-mobile={150}
            data-smobile={70}
          />
        </div>
      </div>
    </section>
  );
}
