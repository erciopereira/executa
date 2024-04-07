/* eslint-disable prettier/prettier */
import Marquee from "react-fast-marquee";

import styles from "./styles.module.css";

export interface propsMarque {
  marqueeText: {
    text: string;
  }[];
}

export function TextSlider({ marqueeText }: propsMarque) {
  return (
    <Marquee className={styles.marquee}>
      {marqueeText.map((item) => (
        <div key={item.text} className="text-6xl mr-24">
          {item.text}
        </div>
      ))}
    </Marquee>
  );
}
