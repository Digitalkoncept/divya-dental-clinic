import React from "react";
import Link from "next/link";
export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-ft">
              <div className="col-ft wow fadeInUp">
                <div className="bd-top" />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={53}
                  data-mobile={53}
                  data-smobile={53}
                />
                <div className="box-icon">
                  <i className="icon-Path-18145 font-size-big" />
                </div>
                <div className="box-wrap">
                  <div className="title">
                    <Link href={`/service-details`}>Cosmetic Dentistry</Link>
                  </div>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    Duis at est id leo luctus gravida a in ipsum.
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link
                      href={`/service-details`}
                      className="themesflat-button font-default2 ft"
                    >
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={28}
                  data-mobile={28}
                  data-smobile={28}
                />
              </div>
              <div className="col-ft wow fadeInUp">
                <div className="bd-top" />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={53}
                  data-mobile={53}
                  data-smobile={53}
                />
                <div className="box-icon">
                  <i className="icon-Path-18152 font-size-big" />
                </div>
                <div className="box-wrap">
                  <div className="title">
                    <Link href={`/service-details`}>Pediatric Dentistry</Link>
                  </div>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    Duis at est id leo luctus gravida a in ipsum.
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link
                      href={`/service-details`}
                      className="themesflat-button font-default2 ft"
                    >
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={28}
                  data-mobile={28}
                  data-smobile={28}
                />
              </div>
              <div className="col-ft mgr-none wow fadeInUp">
                <div className="bd-top" />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={53}
                  data-mobile={53}
                  data-smobile={53}
                />
                <div className="box-icon">
                  <i className="icon-Path-18178 font-size-big" />
                </div>
                <div className="box-wrap">
                  <div className="title">
                    <Link href={`/service-details`}>Dental Implants</Link>
                  </div>
                  <p className="text-color-title-sidebar">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    Duis at est id leo luctus gravida a in ipsum.
                  </p>
                  <div className="flat-read-more fl-st-2">
                    <Link
                      href={`/service-details`}
                      className="themesflat-button font-default2 ft"
                    >
                      <span>
                        Read More
                        <i className="fa fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={28}
                  data-mobile={28}
                  data-smobile={28}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
