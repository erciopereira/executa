/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useTranslations } from "next-intl";

export function ExecutivesLocation() {
  const t = useTranslations("Index");

  const arrayEmpty = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <>
      <div className="flex flex-col items-center mt-24 gap-y-28 p-20 bg-gray-dark absolute w-screen left-0 max-w-full">
        <div className="text-5xl text-green-light">
          {t("executives-location.title")}
        </div>
        <div className="grid grid-cols-4 gap-x-24 gap-y-8">
          {arrayEmpty.map((): any => (
            <div className="bg-gray-medium h-20 w-52 rounded-lg"></div>
          ))}
        </div>
      </div>
    </>
  );
}
