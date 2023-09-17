import { useState } from 'react';
import {
  HeroSectionStyled,
  MiddleWrapper,
  RightTextWrapper,
  LeftWrapper,
  Signature,
  H2Styled,
  // SpanStyled2,
} from './HeroSection.styles';
import ImgBoxComponent from './ImgBoxComponent/ImgBoxComponent';
import SocialBoxComponent from './SocialBoxComponent/SocialBoxComponent';
import TextBoxComponent from './TextBoxComponent/TextBoxComponent';
import { labels } from '../../shared/constants/labels';
import { ScrambleText } from './ScrambleText/ScrambleText';

export const HeroSection = () => {
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);

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
          <ScrambleText
            initialText={labels.heroSection.quote.cheap.toUpperCase()}
            initialDelay={startSecondAnimation ? 99999999 : 1000}
            onAnimationEnd={() => setStartSecondAnimation(true)}
          />
          {labels.heroSection.quote.closingBracket.toUpperCase()}
          <br />
          {labels.heroSection.quote.showMeThe.toUpperCase()}{' '}
          {labels.heroSection.quote.openingTag.toUpperCase()}
          <ScrambleText
            initialDelay={startSecondAnimation ? 10 : 99999999}
            initialText={labels.heroSection.quote.code.toUpperCase()}
            onAnimationEnd={() => setStartSecondAnimation(false)}
          />
          {labels.heroSection.quote.closingTag.toUpperCase()}
        </H2Styled>
        <Signature>{labels.heroSection.quote.author}</Signature>
      </RightTextWrapper>
    </HeroSectionStyled>
  );
};
