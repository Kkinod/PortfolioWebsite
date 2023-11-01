import hero from '../../../../assets/img/jpeg-optimizer_pexels-removebg-BIG.png';
import {
  Circle,
  ImgBox,
  ImgHero,
  StyledContainer,
} from './MainPortrait.styles';

export const MainPortrait = () => {
  return (
    <StyledContainer
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.9, delay: 0.25 }}
    >
      <ImgBox>
        <Circle />
        <ImgHero src={hero} alt="hero img" />
      </ImgBox>
    </StyledContainer>
  );
};
