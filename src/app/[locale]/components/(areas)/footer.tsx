/* eslint-disable prettier/prettier */
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import styles from "../styles.module.css";
import { TextSlider } from "../text-slider";

export function Footer() {
  const t = useTranslations("Index");

  const marqueeText = [
    {
      text: t("footer.text-slider"),
    },
  ];

  return (
    <div
      className={`${styles.footerTransition} absolute w-screen left-0 max-w-full mt-32 py-24`}
    >
      <TextSlider marqueeText={marqueeText} />
      <div className="text-3xl">
        <div className="flex justify-between px-32 mt-56">
          <div className="flex flex-col gap-8">
            <div className="flex gap-2 items-center">
              <Mail size={48} strokeWidth={1} />
              <span>{t("footer.email")}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={48} strokeWidth={1} />
              <span>{t("footer.phone")}</span>
            </div>
            <div className="flex font-bold">
              <span>{t("footer.newsletter")}</span>
            </div>
          </div>
          <div className="flex gap-6">
            <CiInstagram size={48} className="stroke-0" />
            <CiLinkedin size={48} className="stroke-0" />
          </div>
        </div>
        <div className="flex justify-center text-[18.75rem] leading-tight">
          {t("footer.executa")}
        </div>
      </div>
    </div>
  );
}
