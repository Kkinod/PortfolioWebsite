import { labels, socialData } from '../../../../shared/constants/labels';
import {
  LinkStyled,
  SocialBox,
  SocialIcon,
  SocialIconName,
  SpanMultiText,
  SpanTopLine,
  StyledContainer,
  StyledH1,
  StyledIcon,
  StyledParagraph,
  StyledWrapper,
} from './PersonalInfo.styles';
import { RevealAnimation } from '../../../../components/utils/RevealAnimation/RevealAnimation';

export const PersonalInfo = () => {
  return (
    <StyledContainer>
      <RevealAnimation axis="x">
        <StyledWrapper>
          <SpanTopLine>{labels.heroSection.greeting}</SpanTopLine>
          <StyledH1>
            {labels.heroSection.im}{' '}
            <SpanMultiText>{labels.heroSection.nameSurname}</SpanMultiText>
          </StyledH1>
          <StyledParagraph>{labels.heroSection.occupation}</StyledParagraph>
        </StyledWrapper>
      </RevealAnimation>
      <RevealAnimation axis="x">
        <SocialBox>
          {socialData.map((item) => (
            <LinkStyled
              $bgColor={item.backgroundColor}
              to={item.link}
              key={item.title}
            >
              <SocialIcon>
                <StyledIcon icon={`fa6-brands:${item.icon}`} />
              </SocialIcon>
              <SocialIconName>{item.title}</SocialIconName>
            </LinkStyled>
          ))}
        </SocialBox>
      </RevealAnimation>
    </StyledContainer>
  );
};
