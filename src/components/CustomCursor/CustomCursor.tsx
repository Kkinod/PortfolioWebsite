import { useEffect, useRef } from 'react';
import { CustomCursorStyled } from './CustomCursor.styles';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    const positionElement = (x: number, y: number) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${y}px`;
        cursorRef.current.style.left = `${x}px`;
      }
    };
    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      timer = setTimeout(() => {
        positionElement(clientX, clientY);
      }, 100);
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, []);

  return <CustomCursorStyled ref={cursorRef} />;
};
