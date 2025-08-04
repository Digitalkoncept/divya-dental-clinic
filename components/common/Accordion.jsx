"use client";

import { faqItems } from "@/data/faqs";
import { useEffect, useRef, useState } from "react";

export default function Accordion({
  faqData = faqItems,
  parentClass = "item-faq wow fadeInDown",
}) {
  const parentRefs = useRef([]);
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    parentRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      parentRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + 22 + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
    }
  }, [currentIndex]);

  return (
    <>
      {faqData.map((item, index) => (
        <div
          ref={(el) => (parentRefs.current[index] = el)}
          className={`${currentIndex == index ? "active" : ""} ${parentClass} `}
          onClick={() => {
            setCurrentIndex((pre) => (pre == index ? -1 : index));
          }}
          key={index}
        >
          <div
            className="title-heading-faq"
            ref={(el) => (questionRefs.current[index] = el)}
          >
            <p className="font-medium">{item.question}</p>
          </div>
          <div
            className="content-item-faq"
            ref={(el) => (answerRefs.current[index] = el)}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
}
