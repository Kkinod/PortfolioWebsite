import hero from '../../assets/img/pexels-removebg-BIG.png';
import {
  Container,
  H1Styled,
  HeroSectionStyled,
  ImgBox,
  ImgHero,
  // ImgSplash,
  Circle,
  ImgWrapper,
  ParagraphStyled,
  RightTextWrapper,
  SpanMultiText,
  SpanTopLine,
  LeftWrapper,
  SocialBox,
  SocialLinksBox,
  LinkStyled,
  SocialIcon,
  SocialIconName,
  IconStyled,
} from './HeroSection.styles';
import { socialData } from '../../shared/constants/labels';

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <Container>
        <LeftWrapper>
          <div>
            <SpanTopLine>Hello</SpanTopLine>
            <H1Styled>
              I&apos;m <SpanMultiText>Front-End Developer</SpanMultiText>
              {/* I&apos;m <SpanMultiText>Coder</SpanMultiText> */}
            </H1Styled>
            <ParagraphStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </ParagraphStyled>
          </div>
          <SocialBox>
            <SocialLinksBox>
              {socialData.map((item) => (
                <LinkStyled
                  $bgColor={item.backgroundColor}
                  to={item.link}
                  key={item.title}
                >
                  <SocialIcon>
                    <IconStyled icon={`fa6-brands:${item.icon}`} />
                  </SocialIcon>
                  <SocialIconName>{item.title}</SocialIconName>
                </LinkStyled>
              ))}
            </SocialLinksBox>
          </SocialBox>
        </LeftWrapper>
        <ImgWrapper>
          <ImgBox>
            {/* <ImgSplash src={splash} alt="splash" /> */}
            <Circle />
            <ImgHero src={hero} alt="hero img" />
          </ImgBox>
        </ImgWrapper>
        <RightTextWrapper />
      </Container>
    </HeroSectionStyled>
  );
};

export default HeroSection;
