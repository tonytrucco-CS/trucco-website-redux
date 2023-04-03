import { transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, defaults } from '../constants/variables';
import Button from './Button';
import CardImg from './CardImg';

const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.125rem;
  padding: 1rem;
  background-color: ${transparentize(0.97, colors.black)};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Span = styled.span`
  margin: 0;
  color: ${colors.midGray};
  font-size: 1rem;
  &:not(:last-of-type) {
    border-right: solid 1px ${defaults.border};
    padding-right: 0.5rem;
  }
`;

const H3 = styled.h3`
  margin: 0;
`;

const LinkCard = ({ to, linkText, tags = [], src, alt, title }) => {
  return (
    <Card>
      {title && <H3>{title}</H3>}
      <Link to={to}>
        <CardImg src={src} alt={alt} />
      </Link>
      <Button to={to} block>
        {linkText}
      </Button>
      <Flex>
        {tags.map((tag, index) => {
          return <Span key={index}>{tag}</Span>;
        })}
      </Flex>
    </Card>
  );
};

export default LinkCard;
