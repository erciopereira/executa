/* eslint-disable prettier/prettier */
"use client";
import { Globe } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export interface ContactButtonProps {
  setShowChangeLanguage: Dispatch<SetStateAction<string>>;
}

export function ContactButton({ setShowChangeLanguage }: ContactButtonProps) {
  function openChangeLanguage() {
    setShowChangeLanguage((prev: string) => {
      if (prev === "hidden") return "inline";
      return "hidden";
    });
  }
  return (
    <button type="button" onClick={openChangeLanguage}>
      <Globe strokeWidth="1" className="cursor-pointer" />
    </button>
  );
}
