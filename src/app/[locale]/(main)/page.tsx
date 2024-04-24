/* eslint-disable prettier/prettier */
import { Header } from "@/app/[locale]/(areas)/header";
import vetorLogo from "@/assets/images/vetor_logo_topo.png";
import Image from "next/image";
import { AboutArea } from "../(areas)/about-area";
import { ContactArea } from "../(areas)/contact-area";
import { ExecutivesLocation } from "../(areas)/executives-location";
import { Footer } from "../(areas)/footer";
import { IdealService } from "../(areas)/ideal-service";
import { ImportantThingsArea } from "../(areas)/important-things-area";
import { MarketPosition } from "../(areas)/market-position";
import { StartArea } from "../(areas)/start-area";

/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <>
      <div className="h-full w-full absolute bg-gradient-to-b from-gray-top" />
      <Image
        src={vetorLogo}
        alt=""
        height={2061.04}
        width={2433.97}
        className="absolute right-0 top-20"
      />
      <div className="mx-auto min-h-screen w-full max-w-[1600px] gap-5 p-8">
        <Header />
        <StartArea />
        <ImportantThingsArea />
        <AboutArea />
        <MarketPosition />
        <ExecutivesLocation />
        <IdealService />
        <ContactArea />
        <Footer />
      </div>
    </>
  );
}
