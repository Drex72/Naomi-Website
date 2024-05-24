import Image from "next/image";
import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterOne = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Annoying",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"Ahhhhh....I've seen shege in your hand😑😑😑😑😑😑...from your disturbances to your dragging me too beat n feet and to thinking that you're strong...if i deck you once, you go enter ground 😂😂😗😗..I no know where you dey get that kind pride and confidence from ...omooo, The deliverance you need ehn.... Make i no talk"`,
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
          src={"/Annoying_photo.JPG"}
          alt="annoying_photo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
