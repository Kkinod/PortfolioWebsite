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
  StyledMotionWrapper,
} from './PersonalInfo.styles';

export const PersonalInfo = () => {
  return (
    <StyledContainer>
      <StyledMotionWrapper
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <SpanTopLine>{labels.heroSection.greeting}</SpanTopLine>
        <StyledH1>
          {labels.heroSection.im}{' '}
          <SpanMultiText>{labels.heroSection.nameSurname}</SpanMultiText>
        </StyledH1>
        <StyledParagraph>{labels.heroSection.occupation}</StyledParagraph>
      </StyledMotionWrapper>
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
    </StyledContainer>
  );
};
