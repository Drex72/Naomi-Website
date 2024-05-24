import React, { useState } from "react";
import { useTypeAnimation } from "../utils/typingAnimation";

export const Greetings = () => {
  const [isFirstParagraphComplete, setFirstParagraphComplete] = useState(false);

  const { currentText: heading } = useTypeAnimation({
    text: "Greetings",
  });

  const { currentText: paragraph_one } = useTypeAnimation({
    onComplete: () => setFirstParagraphComplete(true),

    text: `So I'd first start off with MERRY CHRISTMAS....I guess. It's the day the Love of My Life was born even though i don vex him multiple times, I'm pretty sure he still loves me. FINALLY, you've reached the end of 2023....almost.😂😂 But 2023 was a lot. You got to have good times and bad times`,
  });

  const { currentText: paragraph_two } = useTypeAnimation({
    trigger: { state: isFirstParagraphComplete, type: "manual" },
    text: `It wasn't the smoothest Journey, you fell sick, you recovered, you found passion, you learnt skills, you fell in love, you fell out of love, you fell in love again.,,,omoo, your love life dey confuse me 😂😂😂😂. But you grew overall as a person and i'm happy that i'm able to be part of that growth. But you still get stronghead  SO....`,
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
