/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";

import Typewriter from "typewriter-effect";
import { Button } from "../button";

export function StartArea() {
  const t = useTranslations("Index");

  return (
    <div className="flex items-center flex-col mt-28">
      <div className="z-10 text-6xl leading-snug">{t("start-area.text-1")}</div>
      <div className="z-10 text-6xl leading-snug">{t("start-area.text-2")}</div>
      <div className="z-10">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor:
              '<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">|</span>',
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">${t("start-area.typing-text.text-1")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">${t("start-area.typing-text.text-2")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">${t("start-area.typing-text.text-3")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">${t("start-area.typing-text.text-4")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: 3.75rem; z-index: 10">${t("start-area.typing-text.text-5")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div className="z-10 text-2xl leading-snug max-w-2xl text-center mb-7">
        {t("start-area.text-3")}
      </div>
      <Button name={t("start-area.text-button-position")} />
    </div>
  );
}
