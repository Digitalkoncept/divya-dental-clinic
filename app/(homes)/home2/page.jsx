import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Doctors from "@/components/homes/home-2/Doctors";
import Facts from "@/components/homes/home-2/Facts";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";
import Portfolio from "@/components/homes/home-2/Portfolio";
import Process from "@/components/homes/home-2/Process";
import Services from "@/components/homes/home-2/Services";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
export const metadata = {
  title: "Home 2 || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function page() {
  return (
    <>
      <div className="color-2">
        <Header2 />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <Hero />
                  <Features />
                  <About />
                  <Services />
                  <Facts />
                  <Testimonials />
                  <Portfolio />
                  <Doctors />
                  <Process />
                  <Blogs />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />{" "}
      </div>
    </>
  );
}
