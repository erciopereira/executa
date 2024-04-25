/* eslint-disable prettier/prettier */
import {
  LINK_INSTAGRAM,
  LINK_LINKEDIN,
  LINK_WHATSAPP,
} from "@/configs/constants";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { TextSlider } from "../(components)/text-slider";
export default function LinkBio() {
  const marqueeText = [
    {
      text: "DESENHAMOS ESTRATÉGIAS. EXECUTAMOS COM MAESTRIA.",
    },
    {
      text: "DESENHAMOS ESTRATÉGIAS. EXECUTAMOS COM MAESTRIA.",
    },
    {
      text: "DESENHAMOS ESTRATÉGIAS. EXECUTAMOS COM MAESTRIA.",
    },
    {
      text: "DESENHAMOS ESTRATÉGIAS. EXECUTAMOS COM MAESTRIA.",
    },
    {
      text: "DESENHAMOS ESTRATÉGIAS. EXECUTAMOS COM MAESTRIA.",
    },
  ];

  const propsButtons = [
    {
      key: 0,
      title: "Nosso site",
      link: "https://executa.co",
    },
    {
      key: 1,
      title: "Atendimento",
      link: LINK_WHATSAPP,
    },
    {
      key: 2,
      title: "Orçamento",
      link: LINK_WHATSAPP,
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen items-center">
      <div>
        <TextSlider marqueeText={marqueeText} noStyle />
      </div>
      <div className="text-4xl w-[500px] text-center font-bold mt-20 max-540:w-full max-540:px-5">
        VAMOS TIRAR O SEU PLANEJAMENTO DO PAPEL?
      </div>
      <div className="flex flex-col gap-8 w-[500px] max-540:w-full max-540:px-5">
        {propsButtons.map((item) => (
          <button
            type="button"
            key={item.key}
            className="border-2 border-current text-3xl p-2 rounded leading-normal bg-gray-back hover:bg-button-link-hover"
          >
            <a href={item.link} target="_blank">
              {item.title}
            </a>
          </button>
        ))}
      </div>
      <div className="flex gap-6 mb-20">
        <a href={LINK_INSTAGRAM} target="_blank">
          <CiInstagram size={48} className="stroke-0" />
        </a>
        <a href={LINK_LINKEDIN} target="_blank">
          <CiLinkedin size={48} className="stroke-0" />
        </a>
      </div>
      <div className="relative w-full bottom-[32px]">
        <TextSlider marqueeText={marqueeText} noStyle />
      </div>
    </div>
  );
}
