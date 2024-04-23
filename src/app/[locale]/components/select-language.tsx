/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useRouter } from "next/navigation";
import { CircleFlag } from "react-circle-flags";

export interface SelectLanguageProps {
  showChangeLanguage: string;
}

export function SelectLanguage({ showChangeLanguage }: SelectLanguageProps) {
  const router = useRouter();

  const changeLanguage = (value: string) => {
    router.replace(`/${value}`);
  };

  const languageProps = [
    {
      acronym: "pt",
      flag: "br",
      text: "PT",
    },
    {
      acronym: "en",
      flag: "us",
      text: "EN",
    },
    {
      acronym: "es",
      flag: "es",
      text: "ES",
    },
  ];

  return (
    <div
      className={`${showChangeLanguage} absolute left-1 top-10 -bottom-16 max-790:relative max-790:top-2`}
    >
      {languageProps.map((item) => (
        <button
          type="button"
          className="flex items-center gap-2 mb-2"
          onClick={() => changeLanguage(item.acronym)}
          key={item.acronym}
        >
          <div className="h-6 w-6">
            <CircleFlag countryCode={item.flag} />
          </div>
          <div>{item.text}</div>
        </button>
      ))}
    </div>
  );
}
