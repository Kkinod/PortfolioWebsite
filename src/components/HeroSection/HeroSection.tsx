import {
  Container,
  HeroSectionStyled,
  MiddleWrapper,
  RightTextWrapper,
  LeftWrapper,
} from './HeroSection.styles';
import ImgBoxComponent from './ImgBoxComponent/ImgBoxComponent';
import SocialBoxComponent from './SocialBoxComponent/SocialBoxComponent';
import TextBoxComponent from './TextBoxComponent/TextBoxComponent';

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <Container>
        <LeftWrapper>
          <TextBoxComponent />
          <SocialBoxComponent />
        </LeftWrapper>
        <MiddleWrapper>
          <ImgBoxComponent />
        </MiddleWrapper>
        <RightTextWrapper />
      </Container>
    </HeroSectionStyled>
  );
};

export default HeroSection;
