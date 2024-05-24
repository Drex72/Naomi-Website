import React, { useState } from "react";
import { useTypeAnimation } from "../utils/typingAnimation";

export const ChapterOutro = () => {
  const [isFirstParagraphComplete, setFirstParagraphComplete] = useState(false);

  const { currentText: heading } = useTypeAnimation({
    text: "Outro...I wan go Sleep",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    onComplete: () => setFirstParagraphComplete(true),

    text: `I might never be there always to be with you whenever something is wrong or you're down about something...(na every 2 hours you dey always feel down😑😑)..But i sent you this so that you never doubt yourself and know the kind of person you are. Once you're done reading, the site would be taken down. So this is basically a one time view website 😂😂😂😂.`,
  });

  const { currentText: paragraph_two } = useTypeAnimation({
    trigger: { state: isFirstParagraphComplete, type: "manual" },
    text: `I know i've been acting weird, and distant, and i feel like you know the reason too. If i saw you before i left home, it would probably result in me getting attached so i just had do what was best for both of us 🤪🤪.`,
  });

  return (
    <div className="animate__animated animate__fadeIn  ">
      <h2 className="text-primary font-semibold md:font-extrabold text-2xl md:text-4xl uppercase">
        {heading}
      </h2>

      <br />

      <p className="paragraph_text">{paragraph_one}</p>

      <br />

      {isFirstParagraphComplete && (
        <p className="paragraph_text">{paragraph_two}</p>
      )}
    </div>
  );
};
