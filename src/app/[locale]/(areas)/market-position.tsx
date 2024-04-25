/* eslint-disable prettier/prettier */
import { LINK_WHATSAPP } from "@/configs/constants";
import { useTranslations } from "next-intl";
import { Button } from "../../(components)/button";

export function MarketPosition() {
  const t = useTranslations("Index");

  const prosMarketPosition = [
    {
      key: "0",
      text1: t("market-position.market.text-1"),
      text2: t("market-position.market.text-2"),
      divider: (
        <div className="h-[1px] mt-4 bg-black w-10/12 hidden max-1090:block"></div>
      ),
    },
    {
      key: "1",
      text1: t("market-position.clients.text-1"),
      text2: t("market-position.clients.text-2"),
      divider: (
        <div className="h-[1px] mt-4 bg-black w-10/12 hidden max-1090:block"></div>
      ),
    },
    {
      key: "2",
      text1: t("market-position.team.text-1"),
      text2: t("market-position.team.text-2"),
      divider: <div></div>,
    },
  ];

  return (
    <div>
      <div className="flex justify-around mt-56 border-y border-black py-24 max-1090:flex-col max-1090:gap-10 max-1090:border-0 max-1090:mt-24 max-1090:py-10 max-570:gap-5">
        {prosMarketPosition.map((item) => (
          <div key={item.key} className="flex flex-col items-center">
            <div className="text-clamp-text-slider font-bold whitespace-nowrap">
              {item.text1}
            </div>
            <div className="text-clamp-text-position leading-normal whitespace-nowrap">
              {item.text2}
            </div>
            {item.divider}
          </div>
        ))}
      </div>
      <div className="mt-24 flex justify-center w-full max-1090:mt-2">
        <Button
          name={t("start-area.text-button-position")}
          link={LINK_WHATSAPP}
        />
      </div>
    </div>
  );
}
