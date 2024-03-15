/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/images/logo.png";
import { ContactButton } from "./contact-button";
import { SelectLanguage } from "./select-language";

export function Header() {
  const t = useTranslations("Index");
  const [showChangeLanguage, setShowChangeLanguage] = useState("hidden");

  return (
    <div className="flex flex-row justify-around items-center">
      <div className="relative">
        <ContactButton setShowChangeLanguage={setShowChangeLanguage} />
        <SelectLanguage showChangeLanguage={showChangeLanguage} />
      </div>

      <Image src={logo} alt="logo" height={28} className="z-10" />
      <div className="text-xl z-10">{t("header.start")}</div>
      <div className="text-xl z-10">{t("header.services")}</div>
      <div className="text-xl z-10">{t("header.about")}</div>
      <button
        type="button"
        className="text-button-text-color text-xl bg-button-color px-4 py-1 rounded hover:bg-button-color-hover z-10"
      >
        {t("header.contact")}
      </button>
    </div>
  );
}
