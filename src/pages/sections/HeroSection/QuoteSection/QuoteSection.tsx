import { useState } from 'react';
import {
  StyledH2,
  StyledParagraph,
  StyledQuoteSectionContainer,
} from './QuoteSection.styles';
import { labels } from '../../../../shared/constants/labels';
import { ScrambleText } from '../../../../components/utils/ScrambleText/ScrambleText';
import { RevealAnimation } from '../../../../components/utils/RevealAnimation/RevealAnimation';

export const QuoteSection = () => {
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);

  return (
    <StyledQuoteSectionContainer>
      <StyledH2>
        <RevealAnimation axis="x" hiddenY={75}>
          {labels.heroSection.quote.talkIs.toUpperCase()}{' '}
          {labels.heroSection.quote.openingBracket.toUpperCase()}
          <ScrambleText
            initialText={labels.heroSection.quote.cheap.toUpperCase()}
            initialDelay={startSecondAnimation ? 99999999 : 1000}
            onAnimationEnd={() => setStartSecondAnimation(true)}
            color="orangered"
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
        </RevealAnimation>
      </StyledH2>
      <RevealAnimation axis="x" hiddenY={75}>
        <StyledParagraph>{labels.heroSection.quote.author}</StyledParagraph>
      </RevealAnimation>
    </StyledQuoteSectionContainer>
  );
};
