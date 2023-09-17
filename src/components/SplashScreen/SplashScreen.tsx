import { labels } from '../../shared/constants/labels';
import {
  LoadingPageContainer,
  NickName,
  StyledLogoSvg,
} from './SplashScreen.styles';

export const SplashScreen = () => {
  return (
    <LoadingPageContainer>
      <StyledLogoSvg />
      <div>
        <NickName>{labels.preloader.nickName}</NickName>
      </div>
    </LoadingPageContainer>
  );
};
