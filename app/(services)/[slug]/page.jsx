"use client";

import { useParams, notFound } from "next/navigation";
import PageTitle from "@/components/common/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";



export default function ServicePage() {
  const { slug } = useParams();

  // Find the service from servicesData
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound(); // Redirect to 404 if slug not found
  }

  return (
    <>
      <div className="color-1">
        <Header1 />
        <PageTitle pageName={service.title} />
        <div id="main-content" className="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" className="site-content clearfix">
              <div id="inner-content" className="inner-content-wrap">
                <div className="page-content">
                  <section className="box-service-details">
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
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <article className="post clearfix wow fadeInUp">
                            <div className="featured-post">
                              {service.images?.[0] ? (
                                <Image
                                  alt={service.title}
                                  src={service.images[0]}
                                  className="img-fluid"
                                  width={770}
                                  height={500}
                                />
                              ) : (
                                <Image
                                  alt={service.title}
                                  src="/assets/image/common/placeholder.webp"
                                  className="img-fluid"
                                  width={770}
                                  height={500}
                                />
                              )}
                            </div>
                            <div className="content-post">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={29}
                                data-mobile={30}
                                data-smobile={30}
                              />
                              <div className="title-heading title-post-heading">
                                {service.title}
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={20}
                                data-mobile={20}
                                data-smobile={20}
                              />

                              {/* Render sections dynamically */}
                              {service.sections.map((section, idx) => (
                                <div key={idx} className="mb-6">
                                  {section.heading && (
                                    <h3 className="text-color-title-sidebar font-bold mb-2">
                                      {section.heading}
                                    </h3>
                                  )}
                                  {section.text && <p>{section.text}</p>}
                                  {section.content && <p>{section.content}</p>}
                                  {section.list && (
                                    <ul className="list-check-sd mt-2">
                                      {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                      ))}
                                    </ul>
                                  )}
                                  {section.table && (
                                    <table className="table-auto border border-gray-200 mt-4 w-full">
                                      <thead>
                                        <tr>
                                          {section.table.headers.map((h, i) => (
                                            <th
                                              key={i}
                                              className="border px-2 py-1 text-left"
                                            >
                                              {h}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {section.table.rows.map((row, i) => (
                                          <tr key={i}>
                                            {row.map((cell, j) => (
                                              <td
                                                key={j}
                                                className="border px-2 py-1"
                                              >
                                                {cell}
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  )}
                                </div>
                              ))}
                               {service.images?.length > 1 && (
                        <div className="row mt-6 gap-4">
                          {service.images.slice(1).map((img, i) => (
                            <div key={i} className="col-md-4 col-sm-6">
                              <Image
                                alt={`${service.title} image ${i + 2}`}
                                src={img}
                                width={370}
                                height={270}
                                className="img-fluid rounded"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={220}
                          data-mobile={79}
                          data-smobile={70}
                        />
                      </div>
                    </div>
                  </section>
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
