import { labels } from '../../shared/labels';
import {
  LoadingPageContainer,
  NickName,
  StyledLogoSvg,
} from './SplashScreen.styles';

const SplashScreen = () => {
  return (
    <LoadingPageContainer>
      <StyledLogoSvg />
      <div>
        <NickName>{labels.preloader.nickName}</NickName>
      </div>
    </LoadingPageContainer>
  );
};

export default SplashScreen;
