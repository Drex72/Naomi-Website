import { useTypeAnimation } from "../utils/typingAnimation";

export const CharacterTwo = () => {
  const { currentText: heading } = useTypeAnimation({
    text: "You're Stubborn",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    text: `"Don't do this, that's what she knows she wants to do..It's cute sometimes watching you wanting to have your way and i like and adore it 😂😂. Well, i'm not surprised, babes with big forehead, na their biggest trait be that 😂😂"`,
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
          <source
            src="https://firebasestorage.googleapis.com/v0/b/anu-is-savage.appspot.com/o/Valerie%2FStubborn_Video.MP4?alt=media&token=9fbdd97b-3d92-467e-a681-ab693ec51265"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
