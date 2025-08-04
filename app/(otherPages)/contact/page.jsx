import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/otherPages/Contact";
import ContactForm from "@/components/otherPages/ContactForm";

import React from "react";
export const metadata = {
  title: "Contact || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function page() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName="Contact" />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <Contact />
                  <ContactForm />
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
