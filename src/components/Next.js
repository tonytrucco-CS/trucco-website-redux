import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { designs, projects } from '../constants/posts';
import { Link } from 'react-router-dom';
import { breakpoints } from '../constants/variables';
import MaterialIcon from './MaterialIcon';
import { lighten } from 'polished';

const Section = styled.section`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const Flex = styled.nav`
  display: flex;
  gap: 2em;

  @media only screen and (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: 1em;
  }
`;

const Post = styled.div`
  padding: 1em;
  border-radius: 0.25em;
  background-color: ${({ theme }) => theme.cardBG};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => lighten(0.05, theme.cardBG)};
  }
`;

const StyledLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  font-size: 1rem;
`;

const Next = ({ id, type }) => {
  const [posts, setPosts] = useState(projects);
  const label =
    type === 'projects' ? 'More Projects to View' : 'More Designs to View';

  const usablePosts = posts.filter((post) => post.id !== id);

  // get two random posts
  const getTwoPosts = () => {
    const first = Math.floor(Math.random() * usablePosts.length);
    let second = Math.floor(Math.random() * usablePosts.length);

    while (second === first) {
      second = Math.floor(Math.random() * usablePosts.length);
    }

    return [first, second];
  };

  // change up the posts list depending on the type
  useEffect(() => {
    if (type === 'projects') {
      setPosts(projects);
    } else {
      setPosts(designs);
    }
  }, [type]);

  const [post1, post2] = getTwoPosts();
  return (
    <Section aria-labelledby="label">
      <h2 id="label">{label}</h2>
      <Flex>
        <StyledLink to={usablePosts[post1].to}>
          <Post>
            {usablePosts[post1].title}
            <MaterialIcon icon={'arrow_forward'} />
          </Post>
        </StyledLink>
        <StyledLink to={usablePosts[post2].to}>
          <Post>
            {usablePosts[post2].title}
            <MaterialIcon icon={'arrow_forward'} />
          </Post>
        </StyledLink>
      </Flex>
    </Section>
  );
};

export default Next;
