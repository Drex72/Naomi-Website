import Image from "next/image";
import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterTen = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're HardWorking",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"You're too hardworking and it's taking a serious toll on you. You do toast, creative arts, animation, house girl, fr, you have my utmost respect...😂😂. Omoo, others dey but i no get strength, i wan go sleep so i'd end here"`,
  });

  return (
    <div className="animate__animated animate__fadeIn  flex flex-col ">
      <h2 className="text-primary italic font-semibold md:font-extrabold text-2xl md:text-4xl uppercase !leading-[4rem]">
        {heading}
      </h2>

      <br />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <p className="paragraph_text lg:w-[60%]">{paragraph_one}</p>

        <Image
          src={"/HardWorking.PNG"}
          alt="hard_working"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
