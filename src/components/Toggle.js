import { transparentize } from 'polished';
import { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/ModeContext';

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  line-height: 1;
`;

const Well = styled.div`
  width: 3rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.border};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 4px;
  position: relative;
  transition: box-shadow 0.3s, background-color 0.3s;
`;

const Cog = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding: 4px;
  background-color: ${({ theme }) => transparentize(0.25, theme.link)};
  border-radius: 50%;
  position: absolute;
  left: ${(props) => (props.$isDarkMode ? '1.25rem' : '0.25rem')};
  transition: left 0.3s, background-color 0.3s;
`;

const Input = styled.input`
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;

  &:focus-visible {
    + div {
      box-shadow: 0 0 0 3px
        ${({ theme }) => transparentize(0.75, theme.buttonBackground)};
    }
  }
`;

const Toggle = ({ handleToggle }) => {
  const { modeValues, setModeValues } = useContext(ModeContext);
  const darkMode = modeValues.darkMode;

  const handleClick = () => {
    handleToggle();
    setModeValues({
      darkMode: !darkMode,
    });
  };

  return (
    <Label htmlFor="toggle" aria-label="Set website color mode">
      <Span>Light</Span>
      <Input
        id="toggle"
        aria-label="Set website color mode"
        type="checkbox"
        checked={darkMode}
        onChange={handleClick}
      />
      <Well $isdarkMode={darkMode}>
        <Cog $isDarkMode={darkMode} />
      </Well>
      <Span>Dark</Span>
    </Label>
  );
};

export default Toggle;
