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
`;

const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const H3 = styled.h3`
  margin-top: 0;
  font-size: 1rem;
  &:not(:last-of-type) {
    border-right: solid 1px ${defaults.border};
    padding-right: 0.5rem;
  }
`;

const LinkCard = ({ to, linkText, tags = [], src, alt }) => {
  return (
    <Card>
      <Link to={to}>
        <CardImg src={src} alt={alt} />
      </Link>
      <Flex>
        {tags.map((tag, index) => {
          return <H3 key={index}>{tag}</H3>;
        })}
      </Flex>
      <Button to={to} block>
        {linkText}
      </Button>
    </Card>
  );
};

export default LinkCard;
