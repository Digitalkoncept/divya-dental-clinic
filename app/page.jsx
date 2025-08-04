import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Contact from "@/components/homes/home-1/Contact";
import Doctors from "@/components/homes/home-1/Doctors";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/homes/home-1/Services";
import Services2 from "@/components/homes/home-1/Services2";
export const metadata = {
  title: "Home || Divya Dental Clinic",
  description: "Divya Dental Clinic",
};
export default function Home() {
  return (
    <>
      <div className="color-1">
        <Header1 />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <Hero />
                  <About />
                  <Services />
                  <Services2 />
                  <Doctors />
                  <Portfolio />
                  <Facts />
                  <Process />
                  <Contact />
                  <Blogs />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />{" "}
      </div>
    </>
  );
}
