import { cva } from "class-variance-authority";

// Base definition
const base = "";

const card = cva(base, {
  variants: {
    intent: {
      primary: [
        "",

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
      small: ["relative"],
      big: ["relative"],

    },
  },
  compoundVariants: [{ intent: "primary" }],
  defaultVariants: {
    intent: "primary",

  },
});

export default function Card({ title, bgImage, channelImage, size }) {
  return <>
    
      <div className="w-full">
            <div className={card({ size})}>
              <div className="bg-top bg-no-repeat bg-cover rounded-sm block z-10 ">
                <picture >
                  <source srcSet={bgImage} className=" w-full bg-top bg-no-repeat bg-cover rounded-sm z-10" />
                  <img src={bgImage} alt={title} className=" w-full bg-top bg-no-repeat bg-cover rounded-sm z-10"/>
                </picture>
              </div>
              <div className="absolute top-0 left-0 h-full rounded-sm z-30">
                <img src={channelImage} alt={title} className="absolute bottom-0 left-[0.1875rem] w-[3rem] h-[2.25rem] max-w-[3rem] z-30" />
              </div>
            </div>
      </div>
  


  </>;
}


