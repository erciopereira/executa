/* eslint-disable prettier/prettier */
import { useTranslations } from "next-intl";
import { Button } from "../button";
import { Select } from "../select";

export function ContactArea() {
  const t = useTranslations("Index");

  return (
    <div className="mt-52 flex flex-col items-center">
      <div className="text-5xl font-bold leading-normal">
        {t("contact-area.title")}
      </div>
      <div className="text-4xl italic">{t("contact-area.subtitle")}</div>
      <form className="mt-10 w-full flex flex-col items-center gap-10">
        <input
          type="text"
          placeholder={t("contact-area.form.name")}
          className="w-9/12 block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
        />
        <input
          type="text"
          placeholder={t("contact-area.form.whatsapp")}
          className="w-9/12 block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
        />
        <input
          type="text"
          placeholder={t("contact-area.form.email")}
          className="w-9/12 block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
        />
        <input
          type="text"
          placeholder={t("contact-area.form.company")}
          className="w-9/12 block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
        />
        <div className="w-9/12 font-bold text-3xl flex flex-col gap-5">
          <label>{t("contact-area.form.servise")}</label>
          <Select />
        </div>
        <Button
          name={t("contact-area.form.send")}
          type="submit"
          width="w-9/12"
        />
      </form>
    </div>
  );
}
