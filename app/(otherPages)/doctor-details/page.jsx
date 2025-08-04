import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import DoctorDetails from "@/components/otherPages/DoctorDetails";

import React from "react";
export const metadata = {
  title: "Doctor Details || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function page() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName="Doctor Details" />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <DoctorDetails />
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
