/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";

import Typewriter from "typewriter-effect";

export function StartArea() {
  const t = useTranslations("Index");

  return (
    <div className="relative flex items-center flex-col top-20">
      <div className="z-10 text-6xl leading-snug">{t("start-area.text-1")}</div>
      <div className="z-10 text-6xl leading-snug">{t("start-area.text-2")}</div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          cursor:
            '<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">|</span>',
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">${t("start-area.typing-text.text-1")}</span>`
            )
            .pauseFor(200)
            .deleteAll()
            .typeString(
              `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">${t("start-area.typing-text.text-2")}</span>`
            )
            .pauseFor(200)
            .deleteAll()
            .typeString(
              `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">${t("start-area.typing-text.text-3")}</span>`
            )
            .pauseFor(200)
            .deleteAll()
            .typeString(
              `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">${t("start-area.typing-text.text-4")}</span>`
            )
            .pauseFor(200)
            .deleteAll()
            .typeString(
              `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem">${t("start-area.typing-text.text-5")}</span>`
            )
            .pauseFor(200)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
}
