import { labels } from '../../../shared/constants/labels';
import {
  H1Styled,
  ParagraphStyled,
  SpanMultiText,
  SpanTopLine,
} from './TextBoxComponent.styles';

const TextBoxComponent = () => {
  return (
    <div>
      <SpanTopLine>{labels.heroSection.greeting}</SpanTopLine>
      <H1Styled>
        {labels.heroSection.im}{' '}
        <SpanMultiText>{labels.heroSection.nameSurname}</SpanMultiText>
      </H1Styled>
      <ParagraphStyled>{labels.heroSection.occupation}</ParagraphStyled>
    </div>
  );
};

export default TextBoxComponent;
