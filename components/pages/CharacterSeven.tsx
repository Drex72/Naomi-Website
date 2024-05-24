import Image from "next/image";
import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterSeven = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You no get yansh",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"Ahhhhhhh, the love of my life, baddie Valerie 😭😭😭😭, where did she go, i miss her😭😭...This girl, all the oats you dey chop, where e dey go 😭😭😭😭"
    `,
  });

  return (
    <div className="animate__animated animate__fadeIn  flex flex-col ">
      <h2 className="text-primary font-semibold md:font-extrabold text-2xl md:text-4xl uppercase !leading-[4rem]">
        {heading}
      </h2>

      <br />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <p className="paragraph_text italic lg:w-[60%]">{paragraph_one}</p>

        <Image
          src={"/No_Yansh.JPG"}
          alt="annoying_photo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
