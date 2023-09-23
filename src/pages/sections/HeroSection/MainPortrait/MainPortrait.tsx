import hero from '../../../../assets/img/pexels-removebg-BIG.png';
import {
  Circle,
  ImgBox,
  ImgHero,
  StyledContainer,
} from './MainPortrait.styles';

export const MainPortrait = () => {
  return (
    <StyledContainer>
      <ImgBox>
        <Circle />
        <ImgHero src={hero} alt="hero img" />
      </ImgBox>
    </StyledContainer>
  );
};
