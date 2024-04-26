/* eslint-disable prettier/prettier */
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./styles.module.css";

export interface collapsedProps {
  props: {
    title: string;
    description: string;
  };
}

export function Collapsed({ props }: collapsedProps) {
  const [showContent, setShowContent] = useState<string>("");
  const [rotateArrow, setRotateArrow] = useState<string>("");

  const toogleDescription = () => {
    setShowContent((prev) => {
      if (prev === styles.contentShow) return "";
      return styles.contentShow;
    });
    setRotateArrow((prev) => {
      if (prev === styles.rotate) return "";
      return styles.rotate;
    });
  };

  return (
    <>
      <button
        type="button"
        className="w-full flex items-center justify-between"
        onClick={() => toogleDescription()}
      >
        <div>{props.title}</div>
        <div className={`${styles.normal} ${rotateArrow}`}>
          <ChevronDown strokeWidth="3" />
        </div>
      </button>
      <div
        className={`${styles.content} ${showContent} text-clamp-text-body mt-4`}
      >
        {props.description}
      </div>
      <div className="border-b-2 mt-8 mb-8 max-570:mt-4 max-570:mb-4" />
    </>
  );
}
