import React from "react";
import Link from "next/link";
import Image from "next/image";
import { counterData } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="fl-counter">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={170}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="row-ct wow fadeInUp">
            <div className="box-img-ct">
              <Image
                alt="image"
                src="/assets/image/common/couter02.webp"
                width={570}
                height={545}
              />
            </div>
            <div className="box-content-ct fl-right">
              <h3 className="heading">WHAT WE DO</h3>
              <div className="title-heading wow fadeInUp">
                True Healthcare For Your Family
              </div>
              <div className="wrapper-counter wow fadeInUp">
                <div className="box-wrap-ct fl-left">
                  <div className="box-icon ct">
                    <i className="icon-Path-18154 font-size-big" />
                  </div>
                  <Link href={`/service-details`} className="text-color-white">
                    Quality Control System
                  </Link>
                  <p className="tex-color-ct pdt-10">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy
                  </p>
                </div>
                <div className="box-wrap-ct fl-left mgl-2">
                  <div className="box-icon ct">
                    <i className="icon-Path-18158 font-size-big" />
                  </div>
                  <Link href={`/service-details`} className="text-color-white">
                    Highly Professional Staff
                  </Link>
                  <p className="tex-color-ct pdt-10">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={131}
            data-mobile={30}
            data-smobile={30}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row-list-ct fl-couter wow fadeInUp">
              {counterData.map((elm, i) => (
                <div key={i} className="col-counter cl-ct1">
                  <div className="box">
                    <div className="box-icon pdt-10">
                      <i className={`${elm.icon} font-size-big`} />
                    </div>
                    <div className="title-heading">
                      <span className="number">
                        <Counter max={elm.value} />
                      </span>
                      <span>{elm.suffix}</span>
                      <h4 className="text-color-white font-raguler pdt-5">
                        {elm.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
