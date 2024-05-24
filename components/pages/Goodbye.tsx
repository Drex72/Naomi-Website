import { useTypeAnimation } from "../utils/typingAnimation";

export const GoodBye = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "Anyway, Sayonara (Goodbye in Japanese)....Sleep dey catch me",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `I wan sleep well so i go dey recharged to thief christmas chicken from pot.......😗😗😗😗`,
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
