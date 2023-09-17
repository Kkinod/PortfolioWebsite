import { sections } from '../../../shared/constants/labels';
import { LiStyled } from '../Header.styles';
import { Wrapper } from './Dropdown.styles';

export interface IDropdown {
  isOpen: boolean;
}

export const Dropdown = ({ isOpen }: IDropdown) => {
  return (
    <Wrapper $isOpen={isOpen}>
      {sections.map((section) => {
        return <LiStyled key={section}>{section}</LiStyled>;
      })}
    </Wrapper>
  );
};
