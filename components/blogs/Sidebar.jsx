import { blogThumbnails } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div id="inner-sidebar" className="inner-content-wrap">
        <div className="widget widget_search">
          <form
            action="#"
            method="get"
            role="search"
            className="search-form style-1"
          >
            <input
              type="search"
              className="search-field"
              placeholder="Search here"
              defaultValue=""
              name="s"
              title="Search for"
            />
            <button className="search-submit" type="submit" title="Search">
              Search
            </button>
          </form>
        </div>
        {/* /.widget_search */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={10}
          data-mobile={0}
          data-smobile={0}
        />
        <div className="widget widget_popular wow fadeInUp">
          <div className="bd-top" />
          <h4 className="text-color-title-sidebar light-height-57">
            Popular Service
          </h4>
          <ul className="category-wrap">
            <li>
              <div className="block-inside border-corner hv-background-before">
                <Link href={`/blog-standard`}>Tempor lorem interdum</Link>
              </div>
            </li>
            <li>
              <div className="block-inside border-corner hv-background-before">
                <Link href={`/blog-standard`}>Auctor mattis lacus</Link>
              </div>
            </li>
            <li>
              <div className="block-inside border-corner hv-background-before">
                <Link href={`/blog-standard`}>Dolor proin</Link>
              </div>
            </li>
            <li>
              <div className="block-inside border-corner hv-background-before">
                <Link href={`/blog-standard`}>Pharetra amet</Link>
              </div>
            </li>
            <li>
              <div className="block-inside border-corner hv-background-before">
                <Link href={`/blog-standard`}>Nullam dolor gravida</Link>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={30}
          data-smobile={30}
        />
        <div className="widget widget_lastest wow fadeInUp">
          <div className="bd-top" />
          <h4 className="text-color-title-sidebar">Recent News</h4>
          <ul className="lastest-posts data-effect clearfix">
            {blogThumbnails.map((thumbnail) => (
              <li key={thumbnail.id} className="clearfix">
                <div className="thumb data-effect-item has-effect-icon">
                  <Image
                    alt="Image"
                    src={thumbnail.imageSrc}
                    width={75}
                    height={70}
                  />
                </div>
                <div className="text">
                  <h5>
                    {/* Hardcoded link */}
                    <Link href="/blog-details">{thumbnail.title}</Link>
                  </h5>
                  <span className="post-date">
                    <span>
                      <i className="fa fa-calendar-check-o" />
                    </span>
                    <span className="entry-date">{thumbnail.date}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* /.widget_lastest */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={30}
          data-smobile={30}
        />
        <div className="widget widget_tags wow fadeInUp">
          <div className="bd-top" />
          <h4 className="text-color-title-sidebar">Populer Tags</h4>
          <div className="tags-list">
            <a href="#">web design</a>
            <a href="#">ui/ux design</a>
            <a href="#">graphics</a>
            <a href="#">design</a>
            <a href="#">icon</a>
            <a href="#">graphics design</a>
            <a href="#">branding</a>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={200}
          data-smobile={120}
        />
      </div>
    </div>
  );
}
