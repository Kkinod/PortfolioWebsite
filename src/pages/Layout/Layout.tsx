import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <div className="cursor" />
          <div className="header" />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Layout;
