import React from "react";
import Link from "next/link";
export default function PageTitle({ pageName = "About Us" }) {
  return (
    <div id="header-baner">
      <div className="container">
        <div className="text-banner wow fadeInDown">
          {/* <div className="baner-tittle">{pageName}</div> */}
          <div className="baner-content">
            {/* <Link href={`/index`} className="font-raguler">
              Home{" "}
            </Link> */}
            {/* <span> | {pageName}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
