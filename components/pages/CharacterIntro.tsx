import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterIntro = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "HERE ARE TOP 10 THINGS ABOUT YOU THAT I GOT TO KNOW AND LOVE",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `And incase you're thinking, No, i didnt get this content from Chatgpt😑😑😑😑😑😑.......😗😗😗😗`,
  });

  return (
    <div className="animate__animated animate__fadeIn  ">
      <h2 className="text-primary font-semibold md:font-extrabold text-2xl md:text-4xl uppercase !leading-[4rem]">
        {heading}
      </h2>

      <br />

      <br />

      <br />

      <p className="text-gray-text font-light italic leading-8 md:w-[40%] text-sm text-start">
        {paragraph_one}
      </p>
    </div>
  );
};
