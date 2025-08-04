"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const checkActiveLink = (item) => {
    let isactive = false;
    if (item.subMenu?.length) {
      if (
        item.subMenu.some(
          (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        )
      ) {
        isactive = true;
      }
    } else {
      if (item.href.split("/")[1] == pathname.split("/")[1]) {
        isactive = true;
      }
    }
    return isactive;
  };
  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${item.className} ${
            checkActiveLink(item) ? "active" : ""
          }`}
        >
          {item.subMenu.length ? (
            <a onClick={() => handleFaqOpen(index)}>{item.title}</a>
          ) : (
            <Link href={item.href} title="">
              {item.title}
            </Link>
          )}
          {item.subMenu.length > 0 && (
            <>
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={checkActiveLink(subItem) ? "active" : ""}
                  >
                    <Link href={subItem.href} title="">
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </>
  );
}
