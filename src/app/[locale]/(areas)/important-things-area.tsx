/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import { useAppContext } from "@/context";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Collapsed } from "../../(components)/collapsed";

export function ImportantThingsArea() {
  const t = useTranslations("Index");
  const { openMenu } = useAppContext();
  const [blur, setBlur] = useState("");

  useEffect(() => {
    if (openMenu) {
      setBlur("blur-sm");
    } else {
      setBlur("");
    }
  }, [openMenu]);

  return (
    <>
      <div
        className={`grid grid-rows-1 grid-cols-2 mt-80 gap-24 max-xl:flex max-xl:flex-col max-790:mt-64 max-790:gap-12 max-570:mt-32 ${blur}`}
      >
        <div className="z-10 text-clamp-title-large leading-tight max-xl:text-center">
          {t("important-things-area.left-text")}
        </div>
        <div className="z-10 text-base max-570:text-responsive ">
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
    </>
  );
}
