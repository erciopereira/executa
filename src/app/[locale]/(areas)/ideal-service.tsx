/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
"use client";
import exclusive from "@/assets/images/exclusive.png";
import executive from "@/assets/images/executive.png";
import executiveco from "@/assets/images/executive_co.png";
import expert from "@/assets/images/expert.png";
import expertise from "@/assets/images/expertise.png";
import extreme from "@/assets/images/extreme.png";
import { LINK_WHATSAPP } from "@/configs/constants";
import { useAppContext } from "@/context";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Button } from "../../(components)/button";

export function IdealService() {
  const t = useTranslations("Index");
  const { setMobileMode } = useAppContext();

  const [sliderLeft, setSliderLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [calcSlider, setCalcSlider] = useState(1620);

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
    setSliderLeft((prev) => {
      if (count === 4 && windowWidth > 580) {
        if (windowWidth < 1600) {
          return windowWidth - (4052 - calcSlider);
        }
        return -2432;
      }
      return prev - (calcScreenSmall() + 40);
    });
  };

  const handleSliderLeft = () => {
    setCount((prev) => prev - 1);
    setSliderLeft((prev) => {
      if (count === 5 && windowWidth > 580) return -2160;
      return prev + (calcScreenSmall() + 40);
    });
  };

  const calcScreenSmall = () => {
    let valueWidth = 500;
    if (windowWidth < 580) {
      const calcPercentage = windowWidth * 0.15;
      valueWidth = windowWidth - calcPercentage;
    }
    if (windowWidth <= 420) {
      const calcPercentage = windowWidth * 0.164;
      valueWidth = windowWidth - calcPercentage;
    }
    return valueWidth;
  };

  const calcResponsive = () => {
    let value = 2210;
    if (window.innerWidth < 1600 && window.innerWidth >= 1500) {
      value = 1800;
      setCalcSlider((value - window.innerWidth) / 4);
    }
    if (window.innerWidth > 1400 && window.innerWidth < 1500) {
      value = 1700;
      setCalcSlider((value - window.innerWidth) / 4);
    }
    if (windowWidth < 1280 && windowWidth > 1120) {
      value = 1620;
      setCalcSlider((value - window.innerWidth) / 2);
    }
    if (windowWidth < 1120) {
      setCalcSlider((value - window.innerWidth) / 2);
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      calcResponsive();
      if (window.innerWidth < 790) setMobileMode(true);
      else setMobileMode(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    if (window.innerWidth < 790) setMobileMode(true);
    calcResponsive();
  }, []);

  const areaButtons = () => (
    <div className="flex flex-col max-1390:items-center">
      <div className="mr-10 mt-10 flex gap-4 max-570:mx-6">
        <button
          type="button"
          disabled={count === 0}
          onClick={() => handleSliderLeft()}
        >
          <CircleArrowLeft strokeWidth="1" size={48} />
        </button>
        <button
          type="button"
          disabled={
            count === (windowWidth < 1390 && windowWidth > 1120 ? 4 : 5)
          }
          onClick={() => handleSliderRight()}
        >
          <CircleArrowRight strokeWidth="1" size={48} />
        </button>
      </div>
      <div className="mt-10">
        <Button
          name={t("start-area.text-button-position")}
          link={LINK_WHATSAPP}
        />
      </div>
    </div>
  );

  return (
    <Element name="services">
      <div className="grid grid-rows-1 grid-cols-2 mt-top-25 overflow-hidden max-1390:flex max-1390:flex-col max-1090:mt-32">
        <div className="flex flex-col z-10 bg-gray-back">
          <div className="z-10 text-clamp-title-large leading-tight max-1390:text-center max-1390:mb-20">
            {t("ideal-servise.left-area.text")}
          </div>
          {windowWidth >= 1390 && areaButtons()}
        </div>
        <div
          className="flex gap-10 relative duration-500"
          style={{ left: `${sliderLeft}px` }}
        >
          {propsCarousel.map((item) => (
            <div key={item.title} className="bg-black rounded-3xl">
              {item.image}
              <div className="text-clamp-text-body text-green-light mx-10 py-5 border-b-2 border-gray-400">
                {item.title}
              </div>
              <div className="text-clamp-text-body text-button-text-color font-light w-[500px] p-10 max-424:w-[83.6vw] max-580:w-[85vw]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        {windowWidth < 1390 && areaButtons()}
      </div>
    </Element>
  );
}
