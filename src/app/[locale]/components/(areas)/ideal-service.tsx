/* eslint-disable prettier/prettier */
"use client";
import { LINK_WHATSAPP } from "@/configs/constants";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Element } from "react-scroll";
import exclusive from "../../../../../public/images/exclusive.png";
import executive from "../../../../../public/images/executive.png";
import executiveco from "../../../../../public/images/executive_co.png";
import expert from "../../../../../public/images/expert.png";
import expertise from "../../../../../public/images/expertise.png";
import extreme from "../../../../../public/images/extreme.png";
import { Button } from "../button";

export function IdealService() {
  const t = useTranslations("Index");
  const [teste, setTeste] = useState(0);
  const [count, setCount] = useState(0);
  const propsCarousel = [
    {
      image: <Image src={exclusive} alt="" />,
      title: "Exclusive",
      content: t("ideal-servise.slide.content.exclusive"),
    },
    {
      image: <Image src={expertise} alt="" />,
      title: "Expertise",
      content: t("ideal-servise.slide.content.expertise"),
    },
    {
      image: <Image src={executive} alt="" />,
      title: "Executive",
      content: t("ideal-servise.slide.content.executive"),
    },
    {
      image: <Image src={executiveco} alt="" />,
      title: "Executive&co",
      content: t("ideal-servise.slide.content.executiveco"),
    },
    {
      image: <Image src={extreme} alt="" />,
      title: "Extreme",
      content: t("ideal-servise.slide.content.extreme"),
    },
    {
      image: <Image src={expert} alt="" />,
      title: "Expert",
      content: t("ideal-servise.slide.content.expert"),
    },
  ];

  const handleSliderRight = () => {
    setCount((prev) => prev + 1);
    setTeste((prev) => {
      if (prev === -2160) return -2432;
      return prev - (500 + 40);
    });
  };

  const handleSliderLeft = () => {
    setCount((prev) => prev - 1);
    setTeste((prev) => {
      if (prev === -2432) return -2160;
      return prev + (500 + 40);
    });
  };

  return (
    <Element name="services">
      <div className="grid grid-rows-1 grid-cols-2 mt-top-25 overflow-hidden max-xl:flex max-xl:flex-col">
        <div className="flex flex-col z-10 bg-gray-back">
          <div className="z-10 text-8xl leading-tight">
            {t("ideal-servise.left-area.text")}
          </div>
          <div className="mt-10">
            <Button
              name={t("start-area.text-button-position")}
              link={LINK_WHATSAPP}
            />
          </div>
          <div className="mt-10 flex gap-4 mb-10">
            <button
              type="button"
              disabled={count === 0}
              onClick={() => handleSliderLeft()}
            >
              <CircleArrowLeft strokeWidth="1" size={48} />
            </button>
            <button
              type="button"
              disabled={count === 5}
              onClick={() => handleSliderRight()}
            >
              <CircleArrowRight strokeWidth="1" size={48} />
            </button>
          </div>
        </div>
        <div
          className="flex gap-10 relative duration-500"
          style={{ left: `${teste}px` }}
        >
          {propsCarousel.map((item) => (
            <div key={item.title} className="bg-black rounded-3xl">
              {item.image}
              <div className="text-3xl text-green-light mx-10 py-5 border-b-2 border-gray-400">
                {item.title}
              </div>
              <div className="text-3xl text-button-text-color font-light w-[500px] p-10">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
