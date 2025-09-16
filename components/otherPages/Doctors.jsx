import React from "react";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";
export default function DoctorsPage() {
  return (
    <section className="team-doctor">
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
          {doctors.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12"
            >
              <div className="cl-our-t wow fadeInDown">
                <div className="box-img-our-t">
                  <Image
                    alt="image"
                    src={member.imgSrc}
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
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={10}
                    data-mobile={10}
                    data-smobile={10}
                  />
                  {/* <p className="">{member.role}</p> */}
                
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={200}
                data-mobile={200}
                data-smobile={200}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={200}
            data-mobile={130}
            data-smobile={50}
          />
        </div>
      </div>
    </section>
  );
}
