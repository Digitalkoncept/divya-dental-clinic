import React from "react";
import Link from "next/link";
import Accordion from "../common/Accordion";
import { faqItems } from "@/data/faqs";
export default function Faq() {
  return (
    <section className="fl-faq">
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
            <div className="category-faq wow fadeInDown">
              <ul className="category-wrap">
                <li>
                  <div className="block-inside border-corner active hv-background-before">
                    <Link href={`/about-us`}>Payments</Link>
                  </div>
                </li>
                <li>
                  <div className="block-inside border-corner hv-background-before">
                    <Link href={`/about-us`}>Booking</Link>
                  </div>
                </li>
                <li>
                  <div className="block-inside border-corner hv-background-before">
                    <Link href={`/about-us`}>Mattis urna sit</Link>
                  </div>
                </li>
                <li>
                  <div className="block-inside border-corner hv-background-before">
                    <Link href={`/about-us`}>Molestie vel augue</Link>
                  </div>
                </li>
                <li>
                  <div className="block-inside border-corner hv-background-before">
                    <Link href={`/about-us`}>Eros odio</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={70}
              data-smobile={40}
            />
            <div className="box-faq faq-1 wow fadeInDown">
              <Accordion faqData={faqItems} />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={254}
            data-mobile={200}
            data-smobile={100}
          />
        </div>
      </div>
    </section>
  );
}
