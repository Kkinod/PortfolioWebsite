import { socialData } from '../../../shared/constants/labels';
import {
  IconStyled,
  LinkStyled,
  SocialBox,
  SocialIcon,
  SocialIconName,
} from './SocialBoxComponent.styles';

const SocialBoxComponent = () => {
  return (
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
  );
};

export default SocialBoxComponent;
