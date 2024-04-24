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
    dell,
    ingredion,
    bat,
    mondelez,
    aquila,
    ibgc,
    filhos,
    iisp,
    vrs,
    renner,
    carrefour,
    comgas,
    nutrien,
    gri,
    alinfo,
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center mt-top-20 gap-y-28">
        <div className="text-5xl font-semibold">
          {t("executives-location.title")}
        </div>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-8 p-20 max-790:p-5">
          {arrayImages.map((item): any => (
            <Image src={item} alt="logos" className="self-center w-40" />
          ))}
        </div>
      </div>
    </>
  );
}
