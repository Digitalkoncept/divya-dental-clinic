import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function DoctorDetails() {
  return (
    <section className="doctor-details">
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
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="box-doctor">
              <div className="featured-doctor wow fadeInDown">
                <Image
                  alt="image"
                  src="/assets/image/common/doctor-details.webp"
                  width={370}
                  height={370}
                />
                <div className="social-doctor">
                  <span className="grid-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </span>
                  <span className="grid-item">
                    <a href="#">
                      <i className="fab fa-twitter" />
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
              </div>
              <div className="box-content-doctor wow fadeInDown">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={80}
                  data-smobile={35}
                />
                <ul className="box-contact-doctor">
                  <li className="phone-doctor">
                    <i className="fas fa-phone-alt" />
                    <p className="text-color-title-sidebar">012 345 678 9101</p>
                  </li>
                  <li className="email-doctor">
                    <i className="fas fa-envelope" />
                    <p className="text-color-title-sidebar">
                      yourmail.@gmail.com
                    </p>
                  </li>
                </ul>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={25}
                  data-smobile={0}
                />
                <div className="btn-doctor">
                  <Link
                    href={`/book-appointment`}
                    className="themesflat-button bg-accent btn-booking-doctor"
                  >
                    <span>Book Appointment</span>
                  </Link>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={25}
                  data-mobile={25}
                  data-smobile={25}
                />
              </div>
            </div>
            {/*/box-doctor*/}
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="box-wrap-details">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={10}
                data-mobile={60}
                data-smobile={60}
              />
              <div className="title-heading wow fadeInDown">Sara Jackson</div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={4}
                data-mobile={4}
                data-smobile={4}
              />
              <div className="sub-details font-medium wow fadeInDown">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={11}
                data-mobile={11}
                data-smobile={11}
              />
              <p className="wow fadeInDown">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={17}
                data-mobile={17}
                data-smobile={17}
              />
              <p className="wow fadeInDown">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={39}
                data-mobile={39}
                data-smobile={39}
              />
              <ul className="curriculum-vitae wow fadeInDown">
                <li>
                  <span className="sub-details font-medium">Speciality :</span>
                  <p>Fonsetetur sadipscing elitr</p>
                </li>
                <li>
                  <span className="sub-details font-medium">Degrees :</span>
                  <p>
                    Fed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                  </p>
                </li>
                <li>
                  <span className="sub-details font-medium">Training :</span>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </li>
              </ul>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={36}
                data-mobile={36}
                data-smobile={16}
              />
              <div className="doctor-services">
                <div className="title-heading title-details">
                  Doctor’s Services
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={7}
                  data-mobile={7}
                  data-smobile={7}
                />
                <div className="row-doctor-services">
                  <div className="box-doctor-services wow fadeInDown">
                    <div className="box-icon">
                      <i className="icon-Path-18144 font-size-big" />
                    </div>
                    <div className="content-box">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={33}
                        data-mobile={33}
                        data-smobile={33}
                      />
                      <h4>
                        <Link href={`/service-details`}>
                          Cosmetic Dentistry
                        </Link>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={9}
                        data-mobile={9}
                        data-smobile={9}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at est id leo luctus
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={26}
                        data-mobile={26}
                        data-smobile={26}
                      />
                    </div>
                  </div>
                  <div className="box-doctor-services mgr-none wow fadeInDown">
                    <div className="box-icon">
                      <i className="icon-Path-18154 font-size-big" />
                    </div>
                    <div className="content-box">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={33}
                        data-mobile={33}
                        data-smobile={33}
                      />
                      <h4>
                        <Link href={`/service-details`}>
                          Pediatric Dentistry
                        </Link>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={9}
                        data-mobile={9}
                        data-smobile={9}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at est id leo luctus
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={26}
                        data-mobile={26}
                        data-smobile={26}
                      />
                    </div>
                  </div>
                  <div className="box-doctor-services wow fadeInDown">
                    <div className="box-icon">
                      <i className="icon-Path-18158 font-size-big" />
                    </div>
                    <div className="content-box">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={33}
                        data-mobile={33}
                        data-smobile={33}
                      />
                      <h4>
                        <Link href={`/service-details`}>Teeth Whitening</Link>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={9}
                        data-mobile={9}
                        data-smobile={9}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at est id leo luctus
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={26}
                        data-mobile={26}
                        data-smobile={26}
                      />
                    </div>
                  </div>
                  <div className="box-doctor-services mgr-none wow fadeInDown">
                    <div className="box-icon">
                      <i className="icon-Path-18188 font-size-big" />
                    </div>
                    <div className="content-box">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={33}
                        data-mobile={33}
                        data-smobile={33}
                      />
                      <h4>
                        <Link href={`/service-details`}>Dental Services</Link>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={9}
                        data-mobile={9}
                        data-smobile={9}
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at est id leo luctus
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={26}
                        data-mobile={26}
                        data-smobile={26}
                      />
                    </div>
                  </div>
                </div>
                {/*/row-doctor-services*/}
              </div>
              {/*/doctor-services*/}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={487}
                data-mobile={430}
                data-smobile={880}
              />
              <div className="awards-honours">
                <div className="title-heading title-details wow fadeInDown">
                  Awards And Honours
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={4}
                  data-mobile={4}
                  data-smobile={0}
                />
                <div className="row-awards-honours">
                  <div className="box-awards-honours wow fadeInDown">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={40}
                      data-mobile={40}
                      data-smobile={40}
                    />
                    <div className="box-icon">
                      <i className="icon-medal" />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={27}
                      data-mobile={27}
                      data-smobile={27}
                    />
                    <h4 className="text-color-title-sidebar">
                      Awarded Hospital
                    </h4>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={4}
                      data-mobile={4}
                      data-smobile={4}
                    />
                    <p>
                      Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                      durch Sylt
                    </p>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={30}
                      data-mobile={30}
                      data-smobile={30}
                    />
                  </div>
                  <div className="box-awards-honours wow fadeInDown">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={40}
                      data-mobile={40}
                      data-smobile={40}
                    />
                    <div className="box-icon">
                      <i className="icon-medal" />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={27}
                      data-mobile={27}
                      data-smobile={27}
                    />
                    <h4 className="text-color-title-sidebar">Odio dapibus</h4>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={4}
                      data-mobile={4}
                      data-smobile={4}
                    />
                    <p>
                      Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                      durch Sylt
                    </p>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={30}
                      data-mobile={30}
                      data-smobile={30}
                    />
                  </div>
                  <div className="box-awards-honours mgr-none wow fadeInDown">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={40}
                      data-mobile={40}
                      data-smobile={40}
                    />
                    <div className="box-icon">
                      <i className="icon-medal" />
                    </div>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={27}
                      data-mobile={27}
                      data-smobile={27}
                    />
                    <h4 className="text-color-title-sidebar">
                      Consectetur integer
                    </h4>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={4}
                      data-mobile={4}
                      data-smobile={4}
                    />
                    <p>
                      Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                      durch Sylt
                    </p>
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={30}
                      data-mobile={30}
                      data-smobile={30}
                    />
                  </div>
                </div>
                {/*/row-awards-honours*/}
              </div>
              {/*/awards-honours*/}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={254}
            data-mobile={200}
            data-smobile={70}
          />
        </div>
      </div>
    </section>
  );
}
