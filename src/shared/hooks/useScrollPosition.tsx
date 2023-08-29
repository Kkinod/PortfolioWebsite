import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [styleChange, setStyleChange] = useState(false);

  useEffect(() => {
    const changeNavbarStyles = () => {
      setStyleChange(window.scrollY >= 60);
    };

    window.addEventListener('scroll', changeNavbarStyles);

    return () => {
      window.removeEventListener('scroll', changeNavbarStyles);
    };
  }, []);

  return styleChange;
};

export default useScrollPosition;
