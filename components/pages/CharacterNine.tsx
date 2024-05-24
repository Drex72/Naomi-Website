import Image from "next/image";
import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterNine = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You be Temptress",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑😑...Not to say much regarding this point, But it's hard to find a babe who looks homeless 99.9% of the time but can look like a goddess the remaining 1%"`,
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
          src={"/Temptress.JPG"}
          alt="temptress"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
