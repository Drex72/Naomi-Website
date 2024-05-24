import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterThree = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Caring",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"I remember the time at access where you went to speak to that man that was down and the time at new hall where you gave a little kid coconut chips. You care not just about yourself but the people around you, friends or strangers and it's one of the best qualities about you." 
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
          <source src="/Caring_Video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
