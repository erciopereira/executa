/* eslint-disable prettier/prettier */
import Marquee from "react-fast-marquee";

import styles from "./styles.module.css";

export interface propsMarque {
  marqueeText: {
    text: string;
  }[];
  noStyle?: boolean;
}

export function TextSlider({ marqueeText, noStyle }: propsMarque) {
  // const setStyle = noStyle ? "" : styles.marquee;
  return (
    <Marquee className={`${styles.marquee} ${noStyle ? "h-20" : ""} w-screen`}>
      {marqueeText.map((item) => (
        <div
          key={item.text}
          className={`${noStyle ? "text-white" : ""} text-6xl mr-24`}
        >
          {item.text}
        </div>
      ))}
    </Marquee>
  );
}
