import { useEffect, useState } from 'react';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <section id="main">
          <div />
        </section>
      )}
    </div>
  );
};

export default Layout;
