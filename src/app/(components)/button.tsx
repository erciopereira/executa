/* eslint-disable prettier/prettier */
import { LoaderCircle } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | undefined;
  showLoader?: boolean;
  link?: string;
}

export function Button({
  name,
  type,
  width,
  showLoader,
  link,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type || "button"}
      className={`${width || ""} text-button-text-color font-light text-clamp-text-body bg-button-color px-4 py-2 rounded hover:bg-button-color-hover z-10 flex justify-center items-center`}
    >
      {link ? (
        <a href={link} target="_blank">
          {name}
        </a>
      ) : showLoader ? (
        <LoaderCircle size={32} className="animate-spin" />
      ) : (
        name
      )}
    </button>
  );
}
