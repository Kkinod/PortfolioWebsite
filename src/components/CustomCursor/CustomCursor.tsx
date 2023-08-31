import { useEffect, useRef } from 'react';
import { CustomCursorStyled } from './CustomCursor.styles';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    const mouseX = (event: { clientX: number }) => event.clientX;

    const mouseY = (event: { clientY: number }) => event.clientY;

    const positionElement = (event: MouseEvent) => {
      const mouse = {
        x: mouseX(event),
        y: mouseY(event),
      };

      if (cursorRef.current) {
        cursorRef.current.style.top = `${mouse.y}px`;
        cursorRef.current.style.left = `${mouse.x}px`;
      }
    };
    const onMove = (event: MouseEvent) => {
      timer = setTimeout(() => {
        positionElement(event);
      }, 100);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CustomCursorStyled className="cs_cursor_sm" ref={cursorRef} />;
};

export default CustomCursor;
