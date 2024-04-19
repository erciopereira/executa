/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Element } from "react-scroll";
import foto1 from "../../../../../public/images/foto_1.png";
import foto2 from "../../../../../public/images/foto_2.png";
import foto3 from "../../../../../public/images/foto_3.png";
import { TextSlider } from "../text-slider";

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
      <div className="mt-top-25">
        <TextSlider marqueeText={marqueeText} />
        <div className="grid grid-rows-1 grid-cols-2 pt-72 gap-10">
          <div className="grid grid-rows-8 grid-flow-col gap-2 z-10 justify-center">
            <Image src={foto1} alt="" className="row-start-1 row-span-6" />
            <Image src={foto2} alt="" className="row-start-2 row-span-6" />
            <Image src={foto3} alt="" className="row-start-3 row-span-6" />
          </div>
          <div className="gap-16 flex flex-col z-10">
            <div className="text-base leading-tight font-semibold">
              {t("about-area.text-1")}
            </div>
            <div className="text-3xl">{t("about-area.text-2")}</div>
            <div className="text-3xl">{t("about-area.text-3")}</div>
            <div className="text-3xl">{t("about-area.text-4")}</div>
          </div>
        </div>
      </div>
    </Element>
  );
}
