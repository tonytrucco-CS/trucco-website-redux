import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MaterialIcon from './MaterialIcon';
import { transparentize } from 'polished';
import { fonts } from '../constants/variables';

const Div = styled.div`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    display: flex;
    font-family: ${fonts.button};
    width: fit-content;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0;
    border-radius: 1rem;
    transition: background-color 0.3s, box-shadow 0.3s, padding 0.3s;

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.9, theme.buttonBackground)};
      padding-left: 0.5rem;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => transparentize(0.75, theme.link)};
      padding-left: 0.5rem;
    }
  }
`;

const Back = ({ to, label }) => {
  return (
    <Div>
      <Link to={to}>
        <MaterialIcon icon="arrow_back" />
        {label}
      </Link>
    </Div>
  );
};

export default Back;
