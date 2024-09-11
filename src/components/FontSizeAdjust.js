import styled from 'styled-components';
import MaterialIcon from './MaterialIcon';
import { lighten, transparentize } from 'polished';
import { colors } from '../constants/variables';
import Button from './Button';
import { useContext, useState } from 'react';
import FontSizeContext from '../context/FontSizeContext';
import { useOutsideClick } from '../utils/helpers';

const Container = styled.aside`
  position: absolute;
  top: -32px;
  left: calc(50% - 32px);
  z-index: 100;
  background-color: ${({ theme }) => theme.contentBG};
  padding: 8px;
  border-radius: 50%;
`;

const Options = styled.div`
  box-shadow: 0 0 1rem ${transparentize(0.9, colors.gray900)};
  position: absolute;
  max-width: 6rem;
  min-width: max-content;
  bottom: 72px;
  left: calc(50% - 56px);
  background-color: ${({ theme }) => theme.contentBG};
  border-radius: 4px;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  border: solid 1px ${({ theme }) => theme.border};
`;

const Menu = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 24px;
`;

const AccessButton = styled.button`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.1, theme.buttonBackground)};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) => transparentize(0.75, theme.buttonBackground)};
  }
`;

const TextButton = styled.button`
  color: ${({ theme }) => theme.link};
  padding: 0.25em 0;
  margin: 0;
  border: none;
  background-color: transparent;
  text-align: left;
  width: fit-content;
  font-size: 0.85rem;

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    text-decoration: underline;
    outline: none;
  }
`;

const FontSizeAdjust = () => {
  const [show, setShow] = useState(false);
  const { increaseFontSize, decreaseFontSize, resetFontSize } =
    useContext(FontSizeContext);

  // when clicking outside area, close menu
  const handleClickOutside = () => {
    setShow(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  // display the menu
  const handleClick = () => {
    setShow(!show);
  };

  // increase font size
  const handleIncrease = () => {
    increaseFontSize();
  };

  // decrease font size
  const handleDecrease = () => {
    decreaseFontSize();
  };

  const handleReset = () => {
    resetFontSize();
  };
  return (
    <Container aria-label="Accessibility controls" ref={ref}>
      <AccessButton onClick={handleClick}>
        <MaterialIcon icon={'settings_accessibility'} size={'32px'} />
      </AccessButton>
      <Options show={show}>
        <span style={{ display: 'block', textAlign: 'center' }}>Font Size</span>
        <Menu>
          <Button
            size={'xs'}
            square
            aria-label="Decrease font size"
            onClick={handleDecrease}
          >
            <MaterialIcon icon={'remove'} />
          </Button>
          <Button
            size={'xs'}
            square
            aria-label="Increase font size"
            onClick={handleIncrease}
          >
            <MaterialIcon icon={'add'} />
          </Button>
        </Menu>
        <TextButton onClick={handleReset}>Reset</TextButton>
      </Options>
    </Container>
  );
};

export default FontSizeAdjust;
