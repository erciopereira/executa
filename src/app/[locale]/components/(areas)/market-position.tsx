/* eslint-disable prettier/prettier */
import { LINK_WHATSAPP } from "@/configs/constants";
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
      <div className="flex justify-around mt-56 border-y border-black py-24 max-1090:flex-col max-1090:gap-10">
        {prosMarketPosition.map((item) => (
          <div key={item.key} className="flex flex-col items-center">
            <div className="text-6xl font-bold whitespace-nowrap max-424:text-[14vw]">
              {item.text1}
            </div>
            <div className="text-4xl leading-normal whitespace-nowrap max-424:text-responsive">
              {item.text2}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 flex justify-center w-full">
        <Button
          name={t("start-area.text-button-position")}
          link={LINK_WHATSAPP}
        />
      </div>
    </div>
  );
}
