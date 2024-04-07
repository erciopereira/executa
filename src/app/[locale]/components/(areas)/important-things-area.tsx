/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";
import { Collapsed } from "../collapsed";
import { TextSlider } from "../text-slider";

export function ImportantThingsArea() {
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
    <>
      <div className="grid grid-rows-1 grid-cols-2 mt-64 gap-24">
        <div className="z-10 text-8xl leading-tight">
          {t("important-things-area.left-text")}
        </div>
        <div className="z-10 text-7xl">
          <Collapsed
            key="1"
            props={{
              title: t("important-things-area.right-text.text-1"),
              description: t(
                "important-things-area.right-text.description-text-1"
              ),
            }}
          />
          <Collapsed
            key="2"
            props={{
              title: t("important-things-area.right-text.text-2"),
              description: t(
                "important-things-area.right-text.description-text-2"
              ),
            }}
          />
          <Collapsed
            key="3"
            props={{
              title: t("important-things-area.right-text.text-3"),
              description: t(
                "important-things-area.right-text.description-text-3"
              ),
            }}
          />
          <Collapsed
            key="4"
            props={{
              title: t("important-things-area.right-text.text-4"),
              description: t(
                "important-things-area.right-text.description-text-4"
              ),
            }}
          />
        </div>
      </div>
      <TextSlider marqueeText={marqueeText} />
    </>
  );
}
