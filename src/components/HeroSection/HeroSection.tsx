import {
  HeroSectionStyled,
  MiddleWrapper,
  RightTextWrapper,
  LeftWrapper,
  SpanStyled,
  Signature,
  H2Styled,
  SpanStyled2,
} from './HeroSection.styles';
import ImgBoxComponent from './ImgBoxComponent/ImgBoxComponent';
import SocialBoxComponent from './SocialBoxComponent/SocialBoxComponent';
import TextBoxComponent from './TextBoxComponent/TextBoxComponent';
import { labels } from '../../shared/constants/labels';

export const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <LeftWrapper>
        <TextBoxComponent />
        <SocialBoxComponent />
      </LeftWrapper>
      <MiddleWrapper>
        <ImgBoxComponent />
      </MiddleWrapper>
      <RightTextWrapper>
        <H2Styled>
          {labels.heroSection.quote.talkIs.toUpperCase()}{' '}
          {labels.heroSection.quote.openingBracket.toUpperCase()}
          <SpanStyled>
            {labels.heroSection.quote.cheap.toUpperCase()}
          </SpanStyled>
          {labels.heroSection.quote.closingBracket.toUpperCase()}
          <br />
          {labels.heroSection.quote.showMeThe.toUpperCase()}{' '}
          {labels.heroSection.quote.openingTag.toUpperCase()}
          <SpanStyled2>
            {labels.heroSection.quote.code.toUpperCase()}
          </SpanStyled2>
          {labels.heroSection.quote.closingTag.toUpperCase()}
        </H2Styled>
        <Signature>- Linus Torvalds</Signature>
      </RightTextWrapper>
    </HeroSectionStyled>
  );
};
