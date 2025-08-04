"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
export default function Gallery() {
  // Tab data
  const tabs = [
    { id: 1, title: "ALL CATEGORIES", filter: "*" },
    { id: 2, title: "MEDICAL", filter: ".gl-medical" },
    { id: 3, title: "DOCTOR", filter: ".gl-doctor" },
    { id: 4, title: "BIOGRAPHY", filter: ".gl-biography" },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].filter);
  const isotopRef = useRef(null);
  // Handle tab click

  // Handle filter item click
  const updateCategory = (val) => {
    isotopRef.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  const handleTabClick = (filter) => {
    setActiveTab(filter);
    updateCategory(filter);
  };

  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotopRef.current = new Isotope(isotopContainer.current, {
      itemSelector: ".tf-gl",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotopRef.current.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <section className="gallery">
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
          <div className="col-12">
            <div className="box-list-gallery wow fadeInUp">
              <ul className="flat-filter-isotope">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={activeTab === tab.filter ? "active" : ""}
                    onClick={() => handleTabClick(tab.filter)}
                  >
                    <Link href={`/gallery`} data-filter={tab.filter}>
                      {tab.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={50}
            data-smobile={50}
          />
        </div>
        <div className="row">
          <div className="fl-gallery isotope-gl" ref={isotopContainer}>
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`tf-gl ${item.categories.join(" ")}`}
              >
                <div className="box-portfolio box-gallery wow fadeInUp">
                  <Image
                    alt="image"
                    src={item.src}
                    width={item.width}
                    height={item.height}
                  />
                  <div className="overlay">
                    <h4 className="text-color-title-sidebar">
                      <Link href={`/services`}>{item.title}</Link>
                    </h4>
                    <p className="text-color-title-sidebar">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*/fl-gallery */}
        </div>
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={224}
            data-mobile={200}
            data-smobile={90}
          />
        </div>
      </div>
    </section>
  );
}
