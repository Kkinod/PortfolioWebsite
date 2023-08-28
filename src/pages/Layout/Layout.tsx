import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
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
        <div>
          <div className="cursor" />
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
