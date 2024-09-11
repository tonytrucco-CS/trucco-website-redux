import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import Button from './Button';
import CardImg from './CardImg';
import { transparentize } from 'polished';
import { colors } from '../constants/variables';

const Card = styled.div`
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 16px 32px ${transparentize(0.95, colors.gray900)};
  background-color: ${({ theme }) => transparentize(0.25, theme.cardBG)};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: background-color 0.3s, border 0.3s;
`;

const Flex = styled.div`
  display: flex;
  gap: 8px;
`;

const Span = styled.span`
  margin: 0;
  color: ${({ theme }) => transparentize(0.33, theme.text)};
  font-size: 1rem;
  &:not(:last-of-type) {
    border-right: solid 1px ${({ theme }) => transparentize(0.75, theme.text)};
    padding-right: 8px;
  }
`;

const H3 = styled.h3`
  margin: 0;
`;

const LinkCard = ({ to, linkText, tags = [], src, alt, title }) => {
  const theme = useTheme();

  return (
    <Card theme={theme}>
      {title && <H3>{title}</H3>}
      <Link to={to} tabIndex="-1">
        <CardImg src={src} alt={alt} />
      </Link>
      <Button to={to} block>
        {linkText}
      </Button>
      <Flex>
        {tags.map((tag, index) => {
          return (
            <Span key={index} theme={theme}>
              {tag}
            </Span>
          );
        })}
      </Flex>
    </Card>
  );
};

export default LinkCard;
