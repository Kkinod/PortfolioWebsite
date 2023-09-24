import { useState } from 'react';
import {
  StyledH2,
  StyledParagraph,
  StyledQuoteSectionContainer,
} from './QuoteSection.styles';
import { labels } from '../../../../shared/constants/labels';
import { ScrambleText } from '../../../../components/ScrambleText/ScrambleText';

export const QuoteSection = () => {
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);

  return (
    <StyledQuoteSectionContainer>
      <StyledH2>
        {labels.heroSection.quote.talkIs.toUpperCase()}{' '}
        {labels.heroSection.quote.openingBracket.toUpperCase()}
        <ScrambleText
          initialText={labels.heroSection.quote.cheap.toUpperCase()}
          initialDelay={startSecondAnimation ? 99999999 : 500}
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
      </StyledH2>
      <StyledParagraph>{labels.heroSection.quote.author}</StyledParagraph>
    </StyledQuoteSectionContainer>
  );
};
