import Blogs from "@/components/blogs/Blogs";
import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import React from "react";
export const metadata = {
  title: "Blogs || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function page() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName="Blog Standard" />
        <main id="main">
          <div id="main-content" className="main-content">
            <Blogs />
          </div>
        </main>

        <Footer1 />
      </div>
    </>
  );
}
