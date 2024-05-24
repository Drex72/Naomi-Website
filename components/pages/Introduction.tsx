import React, { useState } from "react";
import { useTypeAnimation } from "../utils/typingAnimation";

export const Introduction = () => {
  const [isFirstParagraphComplete, setFirstParagraphComplete] = useState(false);

  const { currentText: heading } = useTypeAnimation({
    text: "Introduction",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    onComplete: () => setFirstParagraphComplete(true),

    text: `Ermmm....... so I'm not the best with words and in a way, i'd rather
    communicate this way. So This was something that was meant to be sent to
    you on your birthday or something but i mean.....Sending it now, it
    doesnt make any much of a difference does it.`,
  });

  const { currentText: paragraph_two } = useTypeAnimation({
    trigger: { state: isFirstParagraphComplete, type: "manual" },
    text: `So why did i go through all this trouble and do this....I honestly have
    no idea..But i guess i wanted to just do it 😂😂, so just take it like
    that and no ask me any questions😑😑😑😑😑. To dey answer questions don
    dey cost abeg🥱🥱🥱🥱.`,
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
