/* eslint-disable prettier/prettier */
import { Header } from "@/app/[locale]/components/header";
import { StartArea } from "../components/area-start";

/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      <StartArea />
    </div>
  );
}
