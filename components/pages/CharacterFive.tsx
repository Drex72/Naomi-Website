import Image from "next/image";
import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterFive = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Confident",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"Sometimes, i wonder where you get the confidence to say the nonsense that comes off the top of your head.Majority of the time , i'm like this🤦🏾🤦🏾. But it'd good in the sense when you want something, you go for it without being shy and not so many people are able to pull that off."`,
  });

  return (
    <div className="animate__animated animate__fadeIn  flex flex-col ">
      <h2 className="text-primary font-semibold md:font-extrabold text-2xl md:text-4xl uppercase !leading-[4rem]">
        {heading}
      </h2>

      <br />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <p className="paragraph_text italic lg:w-[60%]">{paragraph_one}</p>

        <Image src={"/Fun.JPG"} alt="fun_photo" width={200} height={200} />
      </div>
    </div>
  );
};
