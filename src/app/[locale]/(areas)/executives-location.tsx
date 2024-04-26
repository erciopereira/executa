/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import alinfo from "@/assets/images/alinfo.png";
import aquila from "@/assets/images/aquila.png";
import bat from "@/assets/images/bat.png";
import carrefour from "@/assets/images/carrefour.png";
import comgas from "@/assets/images/comgas.png";
import dell from "@/assets/images/dell.png";
import filhos from "@/assets/images/filhos_no_cv.png";
import gri from "@/assets/images/griclub.png";
import ibgc from "@/assets/images/ibcg.png";
import iisp from "@/assets/images/iisp.png";
import ingredion from "@/assets/images/ingredion.png";
import mondelez from "@/assets/images/mondelez.png";
import nutrien from "@/assets/images/nutrien.png";
import renner from "@/assets/images/renner.png";
import vrs from "@/assets/images/vrs.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ExecutivesLocation() {
  const t = useTranslations("Index");

  const arrayImages = [
    {
      img: dell,
      alt: "dell",
    },
    {
      img: ingredion,
      alt: "ingredion",
    },
    {
      img: bat,
      alt: "bat",
    },
    {
      img: mondelez,
      alt: "mondelez",
    },
    {
      img: aquila,
      alt: "aquila",
    },
    {
      img: ibgc,
      alt: "ibgc",
    },
    {
      img: filhos,
      alt: "filhos",
    },
    {
      img: iisp,
      alt: "iisp",
    },
    {
      img: vrs,
      alt: "vrs",
    },
    {
      img: renner,
      alt: "renner",
    },
    {
      img: carrefour,
      alt: "carrefour",
    },
    {
      img: comgas,
      alt: "comgas",
    },
    {
      img: nutrien,
      alt: "nutrien",
    },
    {
      img: gri,
      alt: "gri",
    },
    {
      img: alinfo,
      alt: "alinfo",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center mt-top-20 gap-y-28 max-1090:gap-y-8 max-570:mt-36">
        <div className="text-clamp-title-text font-semibold">
          {t("executives-location.title")}
        </div>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-8 p-20 max-900:gap-x-14 max-900:gap-y-7 max-900:p-2 max-700:gap-x-7">
          {arrayImages.map((item): any => (
            <div
              key={item.alt}
              className="flex justify-center w-40 max-616:w-32 max-520:w-24 max-424:w-20 max-374:w-16"
            >
              <Image src={item.img} alt={item.alt} className="self-center" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
