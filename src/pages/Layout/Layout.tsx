import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import CustomCursor from '../../components/CustomCursor/CustomCursor';
import { LayoutContainer } from './Layout.styles';

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
        <LayoutContainer>
          <Header />
          <CustomCursor />
          <div>
            <Outlet />
          </div>
        </LayoutContainer>
      )}
    </div>
  );
};

export default Layout;
