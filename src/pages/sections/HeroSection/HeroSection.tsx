import { StyledHeroSection } from './HeroSection.styles';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { MainPortrait } from './MainPortrait/MainPortrait';
import { QuoteSection } from './QuoteSection/QuoteSection';

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <PersonalInfo />
      <MainPortrait />
      <QuoteSection />
    </StyledHeroSection>
  );
};
