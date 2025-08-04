import React from "react";
import Link from "next/link";
import { process2 } from "@/data/process";
export default function Process() {
  return (
    <section className="work-process">
      <div className="container-fluid">
        <div className="box-wpr">
          <div className="container">
            <div className="row">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={106}
                data-mobile={70}
                data-smobile={70}
              />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="box-wp">
                  <div className="box-wrap-wp fl-st-title text-center wow fadeInUp">
                    <h3 className="heading text-color-white font-raguler">
                      WORK PROCESS
                    </h3>
                    <div className="title-heading wow fadeInUp pdt-12 text-color-white">
                      We Complete Every
                      <br />
                      Step Carefully
                    </div>
                  </div>
                </div>
                {/*/box-wp*/}
              </div>
            </div>
            <div className="row">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={87}
                data-mobile={70}
                data-smobile={30}
              />
            </div>
            <div className="row">
              <div className="col-12">
                <div className="box-content-wp">
                  {process2.map((service) => (
                    <div
                      key={service.id}
                      className={`cl-content-wp ${service.customClass || ""}`}
                    >
                      <div className="number-wp">
                        <h1 className="text-color-body font-bold">
                          {service.number}
                        </h1>
                      </div>
                      <div className={`box-wrap ${service.marginClass || ""}`}>
                        {/* Hardcoded link */}
                        <Link
                          href="/service-details"
                          className="fl-title-st font-jost"
                        >
                          {service.title}
                        </Link>
                        <p className="text-color-white">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/*/box-content-wp*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
