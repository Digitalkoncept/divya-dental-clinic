"use client";
import Image from "next/image";
import { faqData } from "@/data/faqs";

export default function Faq() {
  const handleFaqOpen = (activeFaq) => {
    const faqElements = document.querySelectorAll(".box-faq.faq-2 .item-faq");

    if (faqElements) {
      faqElements.forEach((elm) => {
        elm.querySelector(".content-item-faq").style.height = "0px";
      });
      const currentFaq = faqElements[activeFaq];
      const faqContent = currentFaq.querySelector(".content-item-faq");
      const computedStyle = window.getComputedStyle(faqContent);

      if (currentFaq && computedStyle.height === "0px") {
        faqContent.style.height = faqContent.scrollHeight + "px";
      } else if (currentFaq && !computedStyle.height === "0px") {
        faqContent.style.height = 0 + "px";
      }
    }
  };

  return (
    <section className="services-faq">
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={130}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-services-faq wow fadeInUp">
              <div className="box-wrap-services-faq">
                <div className="feature-box-services-fqa">
                  <Image
                    alt="image"
                    src="/assets/image/thumbnails/Group962.webp"
                    width={83}
                    height={84}
                  />
                </div>
                <div className="content-services-faq">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={10}
                    data-mobile={10}
                    data-smobile={10}
                  />
                  <div className="title-heading">FAQ</div>
                  <p>Lorem Ipsum is simply dummy text of available in market</p>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={50}
                    data-mobile={50}
                    data-smobile={50}
                  />
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={63}
                data-mobile={50}
                data-smobile={50}
              />
              <div className="box-faq faq-2">
                {faqData.slice(0, 3).map((elm, i) => (
                  <div key={i} className="item-faq">
                    <div
                      className="title-heading-faq"
                      onClick={() => handleFaqOpen(i)}
                    >
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={28}
                        data-mobile={28}
                        data-smobile={28}
                      />
                      <h4>
                        <span>0{i + 1}.</span>
                        <span className="pdl-12">{elm.question}</span>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={17}
                        data-mobile={17}
                        data-smobile={17}
                      />
                    </div>
                    <div className="content-item-faq">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={24}
                        data-mobile={24}
                        data-smobile={24}
                      />
                      <p>{elm.answer}</p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={25}
                        data-mobile={25}
                        data-smobile={25}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*/box-services-faq*/}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box-services-faq wow fadeInUp">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={30}
                data-mobile={30}
                data-smobile={30}
              />
              <div className="box-faq faq-2">
                {faqData.map((elm, i) => (
                  <div key={i} className="item-faq">
                    <div
                      className="title-heading-faq"
                      onClick={() => handleFaqOpen(i + 3)}
                    >
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={28}
                        data-mobile={28}
                        data-smobile={28}
                      />
                      <h4>
                        <span>0{i + 1}.</span>
                        <span className="pdl-12">{elm.question}</span>
                      </h4>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={17}
                        data-mobile={17}
                        data-smobile={17}
                      />
                    </div>
                    <div className="content-item-faq">
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={24}
                        data-mobile={24}
                        data-smobile={24}
                      />
                      <p>{elm.answer}</p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={25}
                        data-mobile={25}
                        data-smobile={25}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*/box-services-faq*/}
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={233}
            data-mobile={170}
            data-smobile={80}
          />
        </div>
      </div>
    </section>
  );
}
