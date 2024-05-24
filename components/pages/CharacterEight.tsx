import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterEight = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Fun",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"You really are fun, i see some stuffs online and i'm like, i can see vee in this person😂😂, because of the energy and the vibe.I remember beat n feet that i was doing stronghead not to come but came eventually, it was really fun because you were there"
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

        <video width="200" height="200" autoPlay muted loop>
          <source src="/fun.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
