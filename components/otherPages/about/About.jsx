import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={168}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="feature-medal wow fadeInUp">
              <Image
                alt="image"
                src="/assets/image/common/about-us.webp"
                width={497}
                height={550}
              />
              <div className="medal">
                <div className="box-icon">
                  <i className="icon-medal" />
                </div>
                <div className="content-medal">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={35}
                    data-mobile={35}
                    data-smobile={35}
                  />
                  <h2 className="title-ab text-color-title-sidebar">
                    Best Awarded Hospital
                  </h2>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={10}
                    data-mobile={10}
                    data-smobile={10}
                  />
                  <p>
                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                    durch Sylt
                  </p>
                </div>
              </div>
              <div className="feature-medal-inner">
                <Image
                  alt="image"
                  src="/assets/image/pattern/Group7027.webp"
                  width={277}
                  height={241}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-wrap-ab wow fadeInUp">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={20}
                data-mobile={50}
                data-smobile={50}
              />
              <h3 className="heading">WHAT WE DO</h3>
              <div className="title-heading pdbt-30">
                True Healthcare For
                <br /> Your Family
              </div>
              <p>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
                fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs
                vex bold Jim. Quick
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={20}
                data-mobile={20}
                data-smobile={20}
              />
              <ul className="pdt-15">
                <li>
                  <Link href={`/services`}>
                    <i className="check-icon" /> Malesuada dictum neque
                  </Link>
                </li>
                <li className="mgr-none">
                  <Link href={`/services`}>
                    {" "}
                    <i className="check-icon" />
                    Tempor commodo
                  </Link>
                </li>
                <li>
                  <Link href={`/services`}>
                    <i className="check-icon" />
                    Malesuada dictum neque
                  </Link>
                </li>
                <li className="mgr-none">
                  <Link href={`/services`}>
                    {" "}
                    <i className="check-icon" /> Tempor commodo{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
