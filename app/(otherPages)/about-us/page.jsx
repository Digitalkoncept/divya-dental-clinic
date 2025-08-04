import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import About from "@/components/otherPages/about/About";
import Process from "@/components/otherPages/about/Process";
import Services from "@/components/otherPages/about/Services";
import Testimonials from "@/components/otherPages/about/Testimonials";

import React from "react";
export const metadata = {
  title: "About Us || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function page() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName="About Us" />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <About />
                  <Process />
                  <Services />
                  <Testimonials />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
