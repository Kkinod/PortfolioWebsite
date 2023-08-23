import { labels } from '../../../shared/labels';
import {
  LoadingPageContainer,
  NickName,
  StyledLogoSvg,
} from './Preloader.styles';

const Preloader = () => {
  return (
    <LoadingPageContainer>
      <StyledLogoSvg />
      <div>
        <NickName>{labels.Preloader.nickName}</NickName>
      </div>
    </LoadingPageContainer>
  );
};

export default Preloader;
