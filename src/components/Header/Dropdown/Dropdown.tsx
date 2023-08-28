import { sections } from '../../../shared/labels';
import { LiStyled } from '../Header.styles';
import { Wrapper } from './Dropdown.styles';

export interface IDropdown {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: IDropdown) => {
  return (
    <Wrapper isOpen={isOpen}>
      {sections.map((section) => {
        return <LiStyled key={section}>{section}</LiStyled>;
      })}
    </Wrapper>
  );
};

export default Dropdown;