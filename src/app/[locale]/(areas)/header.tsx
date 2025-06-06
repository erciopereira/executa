/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
"use client";
import logo from "@/assets/images/logo.png";
import { LINK_WHATSAPP } from "@/configs/constants";
import { useAppContext } from "@/context";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Button } from "../../(components)/button";
import { LanguageButton } from "../../(components)/language-button";
import { SelectLanguage } from "../../(components)/select-language";

export function Header() {
  const { openMenu, setOpenMenu, mobileMode } = useAppContext();
  const t = useTranslations("Index");
  const [showChangeLanguage, setShowChangeLanguage] = useState("hidden");
  const [showMenu, setShowMenu] = useState("hidden");

  const itemsMenu = () => (
    <>
      <div className="z-10 relative">
        <LanguageButton setShowChangeLanguage={setShowChangeLanguage} />
        <SelectLanguage showChangeLanguage={showChangeLanguage} />
      </div>
      <Image
        src={logo}
        alt="logo"
        height={32}
        className="z-10 mt-2"
        quality={100}
        layout={mobileMode ? "responsive" : undefined}
      />
      <Link
        to="services"
        activeClass="active"
        spy
        smooth
        duration={700}
        offset={-60}
        className="z-10 cursor-pointer"
        onClick={() => changeMenu()}
      >
        <div className="text-clamp-text-body z-10">{t("header.services")}</div>
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy
        smooth
        duration={700}
        offset={220}
        className="z-10 cursor-pointer"
        onClick={() => changeMenu()}
      >
        <div className="text-clamp-text-body z-10">{t("header.about")}</div>
      </Link>
      <Button name={t("header.contact")} link={LINK_WHATSAPP} />
    </>
  );

  const changeMenu = () => {
    setOpenMenu(!openMenu);
    setShowMenu((prev: string) => {
      if (prev === "hidden") return "flex";
      return "hidden";
    });
  };

  useEffect(() => {
    if (!openMenu) setShowMenu("hidden");
    if (!mobileMode) {
      setShowMenu("hidden");
      setOpenMenu(false);
    }
  }, [openMenu, mobileMode]);

  return (
    <>
      <div className="hidden max-790:block z-10">
        <button type="button" onClick={() => changeMenu()}>
          <Menu
            // size={48}
            strokeWidth={1}
            className="min-w-12 relative cursor-pointer h-clamp-icon-menu w-clamp-icon-menu min-w-4"
          />
        </button>

        <div
          className={`${showMenu} absolute gap-5 flex-col z-20 bg-gray-menu p-5 rounded shadow-lg`}
        >
          {itemsMenu()}
        </div>
      </div>
      <div className="flex flex-row justify-around items-center mt-5 max-790:hidden">
        {itemsMenu()}
      </div>
    </>
  );
}
