/* eslint-disable prettier/prettier */
import { useTranslations } from "next-intl";
import { Button } from "../button";

export function MarketPosition() {
  const t = useTranslations("Index");

  const prosMarketPosition = [
    {
      key: "1",
      text1: t("market-position.market.text-1"),
      text2: t("market-position.market.text-2"),
    },
    {
      key: "1",
      text1: t("market-position.clients.text-1"),
      text2: t("market-position.clients.text-2"),
    },
    {
      key: "1",
      text1: t("market-position.team.text-1"),
      text2: t("market-position.team.text-2"),
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-3 mt-56 border-y-2 border-gray-400 p-24">
        {prosMarketPosition.map((item) => (
          <div key={item.key} className="flex flex-col items-center">
            <div className="text-6xl font-bold">{item.text1}</div>
            <div className="text-4xl leading-normal">{item.text2}</div>
          </div>
        ))}
      </div>
      <div className="mt-24 flex justify-center w-full">
        <Button name={t("start-area.text-button-position")} />
      </div>
    </div>
  );
}
