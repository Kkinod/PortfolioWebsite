import { useState } from 'react';
import {
  StyledMotionH2,
  StyledMotionParagraph,
  StyledQuoteSectionContainer,
} from './QuoteSection.styles';
import { labels } from '../../../../shared/constants/labels';
import { ScrambleText } from '../../../../components/ScrambleText/ScrambleText';

export const QuoteSection = () => {
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);

  return (
    <StyledQuoteSectionContainer>
      <StyledMotionH2
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.25, delay: 0.25 }}
      >
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
      </StyledMotionH2>
      <StyledMotionParagraph
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        {labels.heroSection.quote.author}
      </StyledMotionParagraph>
    </StyledQuoteSectionContainer>
  );
};
