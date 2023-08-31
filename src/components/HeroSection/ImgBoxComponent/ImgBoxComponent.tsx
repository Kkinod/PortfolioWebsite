import hero from '../../../assets/img/pexels-removebg-BIG.png';
import { Circle, ImgBox, ImgHero } from './ImgBoxComponent.styles';

const ImgBoxComponent = () => {
  return (
    <ImgBox>
      <Circle />
      <ImgHero src={hero} alt="hero img" />
    </ImgBox>
  );
};

export default ImgBoxComponent;
