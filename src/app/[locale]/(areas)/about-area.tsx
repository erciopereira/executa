/* eslint-disable prettier/prettier */
"use client";
import foto1 from "@/assets/images/foto_1.png";
import foto2 from "@/assets/images/foto_2.png";
import foto3 from "@/assets/images/foto_3.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Element } from "react-scroll";
import { TextSlider } from "../../(components)/text-slider";

export function AboutArea() {
  const t = useTranslations("Index");

  const marqueeText = [
    {
      text: t("important-things-area.marquee-text.text-1"),
    },
    {
      text: t("important-things-area.marquee-text.text-2"),
    },
    {
      text: t("important-things-area.marquee-text.text-3"),
    },
    {
      text: t("important-things-area.marquee-text.text-4"),
    },
  ];

  return (
    <Element name="about">
      <div className="mt-top-25 max-1090:mt-56 max-570:mt-32">
        <TextSlider marqueeText={marqueeText} />
        <div className="grid grid-rows-1 grid-cols-2 pt-72 gap-10 max-1090:flex max-1090:flex-col max-1090:text-center max-1090:pt-48 max-570:pt-24">
          <div className="grid grid-rows-1 grid-cols-3 gap-2 z-10 justify-center mr-[4.5rem] max-1090:flex max-1090:mr-0">
            <Image
              src={foto1}
              quality={100}
              alt=""
              className="justify-self-center max-1090:max-w-52"
              layout="responsive"
            />
            <Image
              src={foto2}
              quality={100}
              alt=""
              className="mt-40 justify-self-center max-1090:mt-auto max-1090:max-w-52"
              layout="responsive"
            />
            <Image
              src={foto3}
              quality={100}
              alt=""
              className="mt-80 justify-self-center max-1090:mt-auto max-1090:max-w-52"
              layout="responsive"
            />
          </div>
          <div className="gap-16 flex flex-col z-10 max-570:gap-8">
            <div className="text-base leading-tight font-semibold">
              {t("about-area.text-1")}
            </div>
            <div className="text-clamp-text-button leading-tight">
              {t("about-area.text-2")}
            </div>
            <div className="text-clamp-text-button leading-tight">
              {t("about-area.text-3")}
            </div>
            <div className="text-clamp-text-button leading-tight">
              {t("about-area.text-4")}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
