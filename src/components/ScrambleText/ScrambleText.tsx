import { useCallback, useEffect, useState } from 'react';
import { SpanStyled } from './ScrambleText.styles';

interface IScrambleText {
  initialText: string;
  initialDelay: number;
  onAnimationEnd: () => void;
}

export const ScrambleText = ({
  initialText,
  initialDelay,
  onAnimationEnd,
}: IScrambleText) => {
  const letterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [text, setText] = useState(initialText);

  const animateText = useCallback(() => {
    let iteration = -1 / 3;
    const duration = 100;

    const interval = setInterval(() => {
      iteration += 1 / 3;

      setText((prevText) => {
        return prevText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return initialText[index];
            }
            return letterPool[Math.floor(Math.random() * 26)];
          })
          .join('');
      });

      if (iteration >= initialText.length) {
        clearInterval(interval);
        onAnimationEnd();
      }
    }, duration);

    return () => clearInterval(interval);
  }, [initialText, onAnimationEnd]);

  useEffect(() => {
    if (!initialText) return;

    const timeout = setTimeout(() => {
      animateText();
    }, initialDelay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [initialText, initialDelay, animateText]);

  return <SpanStyled>{text}</SpanStyled>;
};
