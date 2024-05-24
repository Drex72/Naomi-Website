import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterFour = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Smart",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"Make your head no swell, so i'll not talk much on this😑😑. You know how to multi task, you know how to run you career, relationship, school and other things , trust me, that's no easy feat."

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
          <source src="/smart.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
