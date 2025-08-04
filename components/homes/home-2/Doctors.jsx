import React from "react";
import Image from "next/image";
import Link from "next/link";
import { doctors2 } from "@/data/doctors";
export default function Doctors() {
  return (
    <section className="our-team">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={353}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="box-wrap-our-t text-center wow fadeInUp">
              <h3 className="heading">MEET OUR TEAM</h3>
              <div className="title-heading pdt-10">Meet Our Doctors</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={37}
            data-smobile={30}
          />
        </div>
        <div className="row">
          {doctors2.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
            >
              <div className="cl-our-t">
                <div className="box-img-our-t">
                  <Image
                    alt="image"
                    src={member.imageSrc}
                    width={320}
                    height={320}
                  />
                </div>
                <div
                  className={`box-info drop-sd ${
                    member.active ? "active" : ""
                  }`}
                >
                  <div className="bd-top" />
                  <h2 className="name text-color-title-sidebar pdt-36">
                    {/* Hardcoded link */}
                    <Link href="/doctor-details">{member.name}</Link>
                  </h2>
                  <p className="">{member.role}</p>
                  <div className="fl-contact-docter">
                    <ul>
                      {member.socialLinks.map((social, index) => (
                        <li key={index} className={social.className || ""}>
                          <a href={social.url}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={261}
                data-mobile={200}
                data-smobile={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
