import { labels, socialData } from '../../../../shared/constants/labels';
import {
  IconStyled,
  LinkStyled,
  SocialBox,
  SocialIcon,
  SocialIconName,
  SpanMultiText,
  SpanTopLine,
  StyledContainer,
  StyledH1,
  StyledParagraph,
  StyledWrapper,
} from './PersonalInfo.styles';

export const PersonalInfo = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SpanTopLine>{labels.heroSection.greeting}</SpanTopLine>
        <StyledH1>
          {labels.heroSection.im}{' '}
          <SpanMultiText>{labels.heroSection.nameSurname}</SpanMultiText>
        </StyledH1>
        <StyledParagraph>{labels.heroSection.occupation}</StyledParagraph>
      </StyledWrapper>
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
