/* eslint-disable prettier/prettier */
"use client";
import { LINK_WHATSAPP } from "@/configs/constants";
import { useAppContext } from "@/context";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../(components)/button";

export function StartArea() {
  const t = useTranslations("Index");
  const { openMenu } = useAppContext();
  const [blur, setBlur] = useState("");

  useEffect(() => {
    if (openMenu) {
      document.body.style.cssText = "overflow: hidden";
      setBlur("blur-sm");
    } else {
      document.body.style.cssText = "overflow: auto";
      setBlur("");
    }
  }, [openMenu]);

  return (
    <div
      className={`flex items-center text-center flex-col mt-72 max-790:mt-36 max-570:mt-20 ${blur} duration-150`}
    >
      <div className="z-10 text-clamp-title-text leading-snug max-790:font-bold">
        {t("start-area.text-1")}
      </div>
      <div className="z-10 text-clamp-title-text leading-snug max-790:font-bold">
        {t("start-area.text-2")}
      </div>
      <div className="z-10">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor:
              '<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">|</span>',
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">${t("start-area.typing-text.text-1")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">${t("start-area.typing-text.text-2")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">${t("start-area.typing-text.text-3")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">${t("start-area.typing-text.text-4")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .typeString(
                `<span style="font-weight: 900; color: #4E319E; font-size: clamp(1rem, 7vw, 3.5rem); z-index: 10">${t("start-area.typing-text.text-5")}</span>`
              )
              .pauseFor(200)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div className="z-10 text-clamp-text-body leading-snug max-w-3xl text-center my-16 max-580:my-10">
        {t("start-area.text-3")}
      </div>
      <Button
        name={t("start-area.text-button-position")}
        link={LINK_WHATSAPP}
      />
    </div>
  );
}
