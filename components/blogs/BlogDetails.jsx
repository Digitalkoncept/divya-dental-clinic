import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommentBox from "./CommentBox";
import Sidebar from "./Sidebar";

export default function BlogDetails() {
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
        <div className="col-lg-8 col-md-12 col-sm-12">
          <article className="post clearfix wow fadeInUp">
            <div className="featured-post">
              <Image
                alt="image"
                width={770}
                height={450}
                src="/assets/image/common/blog-01.webp"
              />
            </div>
            {/* /.feature-post */}
            <div className="content-post">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={20}
                data-mobile={10}
                data-smobile={10}
              />
              <ul className="meta">
                <li className="author">DENTAL</li>
                <li className="day-post">APR 21, 2020</li>
              </ul>
              <h1 className="title-post">
                Empowering Peopleto Improve Their Lives. Acadia Hospital.
              </h1>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={0}
              />
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={30}
                data-mobile={20}
                data-smobile={20}
              />
              <p>
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={40}
                data-smobile={40}
              />
              <div className="fl-post">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={18}
                  data-mobile={10}
                  data-smobile={10}
                />
                <p className="text-color-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={8}
                  data-smobile={8}
                />
                <p className="font-bold text-color-white">Marilyn Gilbert</p>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={18}
                  data-mobile={10}
                  data-smobile={10}
                />
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={28}
                data-mobile={20}
                data-smobile={20}
              />
              <p>
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={35}
                data-mobile={30}
                data-smobile={30}
              />
              <Image
                alt="image"
                width={770}
                height={450}
                src="/assets/image/common/blog-02.webp"
              />
              <div
                className="themesflat-spacer clearfix"
                data-desktop={40}
                data-mobile={30}
                data-smobile={30}
              />
              <h4 className="text-color-title-sidebar">
                AMC Entertainment sparks calls for scrutiny
              </h4>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={17}
                data-mobile={10}
                data-smobile={10}
              />
              <p>
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </p>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={28}
                data-mobile={20}
                data-smobile={20}
              />
              <ul className="list-post">
                <li>
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Metus interdum metus
                  </Link>
                </li>
                <li className="pdl-40">
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Nec dapibus sit
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Ligula curabitur maecenas
                  </Link>
                </li>
                <li className="pdl-40">
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Vivamus quisque gravida
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Fringilla nulla
                  </Link>
                </li>
                <li className="pdl-40">
                  <Link
                    href={`/service-details`}
                    className="check-icon check-post"
                  >
                    Pellentesque sodales rhoncus
                  </Link>
                </li>
              </ul>
              <div className="direction">
                <ul className="button-direction fl-left">
                  <li>Black</li>
                  <li>Aid</li>
                  <li>Green</li>
                </ul>
                <ul className="share-direction fl-right">
                  <li>
                    <p className="text-color-title-sidebarr">Share :</p>
                  </li>
                  <li>
                    <ul className="icon-direction">
                      <li className="style-icon-facebook">
                        <a href="#" className="text-color-white">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="style-icon-twitter">
                        <a href="#" className="text-color-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="style-icon-pinterest">
                        <a href="#" className="text-color-white">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={25}
                data-mobile={60}
                data-smobile={60}
              />
              <div id="comments" className="comments-area wow fadeInUp">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={40}
                  data-mobile={40}
                  data-smobile={30}
                />
                <h2 className="comments-title">Comments</h2>
                <ol className="comment-list">
                  <li className="comment">
                    <article className="comment-wrap clearfix">
                      <div className="gravatar">
                        <Image
                          alt="image"
                          width={100}
                          height={100}
                          src="/assets/image/thumbnails/comment-01.webp"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="comment-meta">
                          <h6 className="comment-author">Aaron Holmes</h6>
                          <span className="comment-time">May 18</span>
                        </div>
                        <div className="comment-text">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam, vitae sodales diam ipsum vitae
                            purus. Fusce tristique erat nulla, vel viverra mi
                            auctor non. Integer ante lorem, dictum at felis at,
                            bibendum egestas augue. Aenean vestibulum lacus
                            dolor, id tincidunt arcu pellentesque ut. Mauris sed
                            venenatis diam, quis aliquam odio. Mauris lobortis
                            augue placerat elit ultrices, non laoreet nunc
                            semper. Phasellus dolor sapien, molestie at ante id,
                            porta interdum nisl. Duis sit amet ante feugiat enim
                            viverra sagittis. Sed vitae pulvinar augue. Donec
                            sit amet dolor non velit tincidunt commodo.
                          </p>
                        </div>
                        <div>
                          <h6 className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </h6>
                        </div>
                      </div>
                    </article>
                    <ul className="children">
                      <li className="comment">
                        <article className="comment-wrap clearfix">
                          <div className="gravatar">
                            <Image
                              alt="image"
                              width={100}
                              height={100}
                              src="/assets/image/thumbnails/comment-02.webp"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="comment-meta">
                              <h6 className="comment-author">Carol Sullivan</h6>
                              <span className="comment-time">December 22</span>
                            </div>
                            <div className="comment-text">
                              <p>
                                Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas.
                                Ut arcu libero, pulvinar non massa sed, accumsan
                                scelerisque dui. Morbi purus mauris, vulputate
                                quis felis nec, fermentum aliquam orci. Quisque
                                ornare iaculis placerat. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. In commodo sem arcu, sed
                                fermentum tortor consequat vel. Phasellus
                                lacinia quam quis leo tincidunt vehicula.
                              </p>
                            </div>
                            <div>
                              <h6 className="comment-reply">
                                <a className="comment-reply-link" href="#">
                                  Reply
                                </a>
                              </h6>
                            </div>
                          </div>
                        </article>
                      </li>
                      {/* #comment-## */}
                    </ul>
                    {/* .children */}
                  </li>
                  {/* #comment-## */}
                </ol>
                {/* /.comment-list */}
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={10}
                data-mobile={10}
                data-smobile={10}
              />
              <CommentBox />
              {/* #respond */}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={254}
                data-mobile={70}
                data-smobile={70}
              />
            </div>
            {/* /.content-post */}
          </article>
        </div>
        <div className="col-lg-4 col-md-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
