/* eslint-disable prettier/prettier */
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../../public/images/logo.png";
import { Button } from "../button";
import { LanguageButton } from "../language-button";
import { SelectLanguage } from "../select-language";

export function Header() {
  const t = useTranslations("Index");
  const [showChangeLanguage, setShowChangeLanguage] = useState("hidden");

  return (
    <div className="flex flex-row justify-around items-center">
      <div className="z-10 relative">
        <LanguageButton setShowChangeLanguage={setShowChangeLanguage} />
        <SelectLanguage showChangeLanguage={showChangeLanguage} />
      </div>

      <Image src={logo} alt="logo" height={28} className="z-10" />
      <div className="text-xl z-10">{t("header.start")}</div>
      <div className="text-xl z-10">{t("header.services")}</div>
      <div className="text-xl z-10">{t("header.about")}</div>
      <Button name={t("header.contact")} />
    </div>
  );
}
