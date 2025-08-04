import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
    <section className="our-services">
      <div className="container-fluid">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={177}
            data-mobile={70}
            data-smobile={150}
          />
        </div>
        <div className="row">
          <div className="box-os wow fadeInUp">
            <div className="box-os-feature">
              <Image
                alt="image"
                src="/assets/image/common/our-services01.webp"
                width={480}
                height={510}
              />
            </div>
            <div className="box-wrap-os">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={20}
                data-smobile={20}
              />
              <div className="row-os">
                <div className="box-icon-os">
                  <div className="box-icon sd">
                    <i className="icon-Path-18144 font-size-big" />
                  </div>
                </div>
                <div className="box-wrap">
                  <Link className="fl-title-st" href={`/service-details`}>
                    Cosmetic Dentistry
                  </Link>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at est id leo luctus
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link href={`/service-details`} className="fl-rm">
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row-os">
                <div className="box-icon-os">
                  <div className="box-icon sd">
                    <i className="icon-Path-18154 font-size-big" />
                  </div>
                </div>
                <div className="box-wrap">
                  <Link className="fl-title-st" href={`/service-details`}>
                    Pediatric Dentistry
                  </Link>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at est id leo luctus
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link href={`/service-details`} className="fl-rm">
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*/box-wrap-os*/}
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={30}
            data-smobile={30}
          />
          <div className="box-os wow fadeInUp">
            <div className="box-os-feature">
              <Image
                alt="image"
                src="/assets/image/common/our-services02.webp"
                width={480}
                height={510}
              />
            </div>
            <div className="box-wrap-os os-r">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={20}
                data-smobile={20}
              />
              <div className="row-os">
                <div className="box-icon-os">
                  <div className="box-icon sd">
                    <i className="icon-Path-18158 font-size-big" />
                  </div>
                </div>
                <div className="box-wrap">
                  <Link className="fl-title-st" href={`/service-details`}>
                    Teeth Whitening
                  </Link>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at est id leo luctus
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link href={`/service-details`} className="fl-rm">
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row-os">
                <div className="box-icon-os">
                  <div className="box-icon sd">
                    <i className="icon-Path-18174 font-size-big" />
                  </div>
                </div>
                <div className="box-wrap">
                  <Link className="fl-title-st" href={`/service-details`}>
                    Dental Implants
                  </Link>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at est id leo luctus
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link href={`/service-details`} className="fl-rm">
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*/box-wrap-os*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={140}
            data-mobile={40}
            data-smobile={40}
          />
        </div>
      </div>
    </section>
  );
}
