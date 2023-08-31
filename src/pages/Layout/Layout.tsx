import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import CustomCursor from '../../components/CustomCursor/CustomCursor';
// import { LayoutContainer } from './Layout.styles';

import './Layout.scss';

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
        <div className="layout">
          <Header />
          <CustomCursor />
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
