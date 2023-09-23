import { labels, socialData } from '../../../../shared/constants/labels';
import {
  H1Styled,
  IconStyled,
  LinkStyled,
  ParagraphStyled,
  SocialBox,
  SocialIcon,
  SocialIconName,
  SpanMultiText,
  SpanTopLine,
  StyledContainer,
} from './PersonalInfo.styles';

export const PersonalInfo = () => {
  return (
    <StyledContainer>
      <div>
        <SpanTopLine>{labels.heroSection.greeting}</SpanTopLine>
        <H1Styled>
          {labels.heroSection.im}{' '}
          <SpanMultiText>{labels.heroSection.nameSurname}</SpanMultiText>
        </H1Styled>
        <ParagraphStyled>{labels.heroSection.occupation}</ParagraphStyled>
      </div>
      <SocialBox>
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
      </SocialBox>
    </StyledContainer>
  );
};
