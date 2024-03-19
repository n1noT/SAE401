import { cva } from "class-variance-authority";

// Base definition
const base = "flex gap-2 font-button font-bold italic rounded text-button-text text-center justify-center items-center uppercase";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button-bg",
        "hover:bg-button-hover",
      ],
      secondary: [
        "bg-button-secondary-bg",
        "hover:bg-button-secondary-hover",
      ],
       
      infos: [
        "bg-button-secondary-bg",
        "hover:bg-button-info-hover",
        "hover:opacity-70",
        "font-button-secondary",
        "normal-case",
        "not-italic",
        "lg:w-fit",
        "text-sm",

      ],
    },
    size: {
      small: ["text-xs", "p-2", "w-fit"],
      medium: ["text-base", "py-2", "px-4"],

    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}


