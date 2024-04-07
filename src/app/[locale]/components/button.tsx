/* eslint-disable prettier/prettier */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | undefined;
}

export function Button({ name, type, width, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type || "button"}
      className={`${width || ""} text-button-text-color font-light text-3xl bg-button-color px-4 py-2 rounded hover:bg-button-color-hover z-10`}
    >
      {name}
    </button>
  );
}
