import React from "react";
import Image from "next/image";
import { counterData } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="fl-row counter">
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
          {counterData.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="col-counter fl-h1">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="box">
                  <div className="box-icon active">
                    <i className={`${item.icon} font-size-big`} />
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={15}
                    data-mobile={15}
                    data-smobile={15}
                  />
                  <div className="title-heading text-color-white">
                    <span className="number">
                      <Counter max={item.value} />
                    </span>
                    <span>{item.suffix}</span>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={5}
                    data-mobile={5}
                    data-smobile={5}
                  />
                  <h4 className="text-color-white font-raguler">
                    {item.title}
                  </h4>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={35}
                  data-smobile={35}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={91}
            data-mobile={50}
            data-smobile={50}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row-counter">
              <div className="box-counter-img">
                <Image
                  alt="image"
                  src="/assets/image/common/couter01.webp"
                  width={570}
                  height={304}
                />
              </div>
              <div className="box-counter-wrap">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={30}
                />
            <div className="wrap-counter fl-st-title">
  <div className="title-heading">
    Comprehensive Dental Care
    <br />
    For You and Your Family
  </div>
  <p className="text-color-white">
    Providing safe, effective, and personalized dental treatments to help you maintain a healthy smile and overall oral wellness.
  </p>
</div>

                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
