import hero from '../../assets/img/pexels-removebg-BIG.png';
import {
  Container,
  H1Styled,
  HeroSectionStyled,
  ImgBox,
  ImgWrapper,
  ParagraphStyled,
  SpanMultiText,
  SpanTopLine,
  TextWrapper,
} from './HeroSection.styles';

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <Container>
        <TextWrapper>
          <SpanTopLine>Hello</SpanTopLine>
          <H1Styled>
            {/* I&apos;m <SpanMultiText>Front-End Developer</SpanMultiText> */}
            I&apos;m <SpanMultiText>Coder</SpanMultiText>
          </H1Styled>
          <ParagraphStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </ParagraphStyled>
        </TextWrapper>
        <ImgWrapper>
          <ImgBox>
            <img src="" alt="" />
            <img src={hero} alt="hero img" />
          </ImgBox>
        </ImgWrapper>
      </Container>
    </HeroSectionStyled>
  );
};

export default HeroSection;
