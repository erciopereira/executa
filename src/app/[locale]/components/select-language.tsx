/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { BR, ES, US } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export interface SelectLanguageProps {
  showChangeLanguage: string;
}

export function SelectLanguage({ showChangeLanguage }: SelectLanguageProps) {
  const t = useTranslations("Index");
  const router = useRouter();

  const changeLanguage = (value: string) => {
    router.replace(`/${value}`);
  };

  return (
    <div className={`${showChangeLanguage} absolute left-0 top-8 -bottom-16`}>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => changeLanguage("pt")}
        value="pt"
      >
        <BR height={20} />
        <div>{t("header.languages.portuguese")}</div>
      </button>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => changeLanguage("en")}
      >
        <US height={20} />
        <div>{t("header.languages.english")}</div>
      </button>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => changeLanguage("es")}
      >
        <ES height={20} />
        <div>{t("header.languages.spanish")}</div>
      </button>
    </div>
  );
}
