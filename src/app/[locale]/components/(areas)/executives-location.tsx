/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import alinfo from "../../../../../public/images/alinfo.png";
import aquila from "../../../../../public/images/aquila.png";
import bat from "../../../../../public/images/bat.png";
import carrefour from "../../../../../public/images/carrefour.png";
import comgas from "../../../../../public/images/comgas.png";
import dell from "../../../../../public/images/dell.png";
import filhos from "../../../../../public/images/filhos_no_cv.png";
import gri from "../../../../../public/images/griclub.png";
import ibgc from "../../../../../public/images/ibcg.png";
import iisp from "../../../../../public/images/iisp.png";
import ingredion from "../../../../../public/images/ingredion.png";
import mondelez from "../../../../../public/images/mondelez.png";
import nutrien from "../../../../../public/images/nutrien.png";
import renner from "../../../../../public/images/renner.png";
import vrs from "../../../../../public/images/vrs.png";

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
