import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { blogPosts2 } from "@/data/blogs";
export default function Blogs() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={70}
          data-smobile={70}
        />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          {blogPosts2.map((post, i) => (
            <React.Fragment key={post.id}>
              <article className="post clearfix post-standar fl-sd wow fadeInUp">
                <div className="featured-post">
                  <Image
                    alt="image"
                    src={post.imageSrc}
                    width={770}
                    height={450}
                  />
                </div>
                {/* /.feature-post */}
                <div className="content-post">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={31}
                    data-mobile={10}
                    data-smobile={10}
                  />
                  <ul className="meta">
                    <li className="author">
                      {/* Hardcoded link */}
                      <Link href="/blog-details">{post.author}</Link>
                    </li>
                    <li className="day-post">
                      {/* Hardcoded link */}
                      <Link href="/blog-details">{post.date}</Link>
                    </li>
                  </ul>
                  <h1 className="title-post">
                    {/* Hardcoded link */}
                    <Link href="/blog-details">{post.title}</Link>
                  </h1>
                  <p>{post.description}</p>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={23}
                    data-mobile={10}
                    data-smobile={10}
                  />
                  <div className="flat-read-more">
                    {/* Hardcoded link */}
                    <Link
                      href="/blog-details"
                      className="themesflat-button bg-accent btn-read-more"
                    >
                      <span>Read More</span>
                    </Link>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={33}
                    data-mobile={30}
                    data-smobile={30}
                  />
                </div>
                {/* /.content-post */}
              </article>
              {i + 1 !== blogPosts2.length && (
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={40}
                  data-mobile={30}
                  data-smobile={30}
                />
              )}
            </React.Fragment>
          ))}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={103}
            data-mobile={70}
            data-smobile={70}
          />
          <div className="themesflat-pagination clearfix wow fadeInUp">
            <ul>
              <li>
                <a href="#" className="page-numbers prev">
                  <span className="fa fa-angle-left" />
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers current">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers">...</a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  10
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers next">
                  <span className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={244}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
        {/* /.post-wrap */}
        <div className="col-lg-4 col-md-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
