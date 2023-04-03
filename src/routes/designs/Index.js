import styled from 'styled-components';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import LinkCard from '../../components/LinkCard';
import Limiter from '../../containers/Limiter';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 3rem;
`;

const Index = () => {
  return (
    <Container>
      <Hero title="Designs" limited />
      <Card hero>
        <Limiter>
          <h2>More than just websites</h2>
          <p>
            I've always been enamored with the creative process, whether it's
            building a website, drawing an illustration, creating a 3D model, or
            producing a video. In this section, I've gathered some of my
            favorite creations from over the years to share with you.
          </p>
          <p>
            I hope you enjoy seeing what I've been up to, and I'm always happy
            to chat more about my work or potential projects.
          </p>
        </Limiter>
      </Card>
      <Card hero>
        <h2>Featured Designs</h2>
        <Grid>
          <LinkCard
            to="camp-trucco"
            title="Camp Trucco T-Shirts"
            linkText="View These Designs"
            src="http://placekitten.com/400/300"
            alt="kitten"
            tags={['Illustrator']}
          />
          <LinkCard
            to="presidents"
            title="Presidential Graphics and Tees"
            linkText="Explore This Series"
            src="http://placekitten.com/400/300"
            alt="pres"
            tags={['Illustrator', 'Screen Printing']}
          />
          <LinkCard
            to="miniatures"
            title="Painted Miniatures"
            linkText="Dive Into Nerdom"
            src="http://placekitten.com/400/300"
            alt="minis"
            tags={['Acrylic']}
          />
          <LinkCard
            to="posters"
            title="Snowpals Poster"
            linkText="View This Poster"
            src="http://placekitten.com/400/300"
            alt="poster"
            tags={['Illustrator']}
          />
          <LinkCard
            to="video"
            title="Home Space"
            linkText="Learn About This Project"
            src="http://placekitten.com/400/300"
            alt="video"
            tags={['After Effects']}
          />
        </Grid>
      </Card>
    </Container>
  );
};

export default Index;
