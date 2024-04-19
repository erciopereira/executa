/* eslint-disable prettier/prettier */
"use client";
import { LINK_WHATSAPP } from "@/configs/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../../../../public/images/logo.png";
import { Button } from "../button";
import { LanguageButton } from "../language-button";
import { SelectLanguage } from "../select-language";

export function Header() {
  const t = useTranslations("Index");
  const [showChangeLanguage, setShowChangeLanguage] = useState("hidden");

  return (
    <div className="flex flex-row justify-around items-center mt-5">
      <div className="z-10 relative">
        <LanguageButton setShowChangeLanguage={setShowChangeLanguage} />
        <SelectLanguage showChangeLanguage={showChangeLanguage} />
      </div>

      <Image src={logo} alt="logo" height={32} className="z-10 mt-2" />
      <Link
        to="services"
        activeClass="active"
        spy
        smooth
        duration={700}
        offset={-60}
        className="z-10 cursor-pointer"
      >
        <div className="text-3xl z-10">{t("header.services")}</div>
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy
        smooth
        duration={700}
        offset={220}
        className="z-10 cursor-pointer"
      >
        <div className="text-3xl z-10">{t("header.about")}</div>
      </Link>
      <Button name={t("header.contact")} link={LINK_WHATSAPP} />
    </div>
  );
}
