import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterSix = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "Your head dey twitch at times",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"As per i no wan chop decking on christmas day..I no go talk much"`,
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
          <source src="/Twitch_Video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
