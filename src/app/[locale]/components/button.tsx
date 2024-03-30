/* eslint-disable prettier/prettier */
export interface ButtonProps {
  name: string;
}

export function Button({ name }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-button-text-color text-xl bg-button-color px-4 py-1 rounded hover:bg-button-color-hover z-10"
    >
      {name}
    </button>
  );
}
