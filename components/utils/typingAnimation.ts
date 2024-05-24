import { useEffect, useState } from "react";

type IAnimationTrigger =
  | { type: "automatic" }
  | { type: "manual"; state: boolean };

interface ITypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  trigger?: IAnimationTrigger;
}

export const useTypeAnimation = ({
  text,
  speed = 10,
  onComplete,
  trigger = { type: "automatic" },
}: ITypingAnimationProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const startAnimation = () => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  };

  useEffect(() => {
    if (trigger.type === "automatic") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        if (onComplete) {
          onComplete();
        }
      }
    } else {
      if (trigger.state) {
        startAnimation();
      }
    }
  }, [currentIndex, speed, text, trigger]);

  return { currentText };
};
