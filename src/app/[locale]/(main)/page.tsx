/* eslint-disable prettier/prettier */
import { Header } from "@/app/[locale]/components/(areas)/header";
import { AboutArea } from "../components/(areas)/about-area";
import { ContactArea } from "../components/(areas)/contact-area";
import { ExecutivesLocation } from "../components/(areas)/executives-location";
import { IdealService } from "../components/(areas)/ideal-service";
import { ImportantThingsArea } from "../components/(areas)/important-things-area";
import { MarketPosition } from "../components/(areas)/market-position";
import { StartArea } from "../components/(areas)/start-area";

/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      <StartArea />
      <ImportantThingsArea />
      <AboutArea />
      <MarketPosition />
      <ExecutivesLocation />
      <IdealService />
      <ContactArea />
    </div>
  );
}
