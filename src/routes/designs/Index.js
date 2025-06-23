import styled from 'styled-components';
import Card from '../../components/Card';
import Container from '../../components/Container';
import LinkCard from '../../components/LinkCard';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';
import { breakpoints } from '../../constants/variables';
import Hr from '../../components/Hr';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 32px;

  @media only screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }

  @media only screen and (max-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const Index = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <h1>Other Projects</h1>
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
          <Hr />
          <h2>Featured projects</h2>
          <Grid>
            <LinkCard
              to="camp-trucco"
              title="Camp Trucco t-shirts"
              linkText="View These Designs"
              src={`https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/camp2022.png?updatedAt=1681928563520${transforms.square}`}
              alt="kitten"
              tags={['Illustrator']}
            />
            <LinkCard
              to="presidents"
              title="Graphics and tees"
              linkText="Explore This Series"
              src={`https://ik.imagekit.io/ti4score/Portfolio/Illustration/roosevelt.png?updatedAt=1678474012219${transforms.square},f-jpg,bg-FFFFFF`}
              alt="pres"
              tags={['Illustrator', 'Screen Printing']}
            />
            <LinkCard
              to="miniatures"
              title="Painted miniatures"
              linkText="Dive Into Nerdom"
              src={`https://ik.imagekit.io/ti4score/Portfolio/Painting/beholder.jpg?updatedAt=1679507938326${transforms.square}`}
              alt="minis"
              tags={['Acrylic']}
            />
            <LinkCard
              to="snowpals"
              title="Snowpals poster"
              linkText="View This Poster"
              src={`https://ik.imagekit.io/ti4score/Portfolio/Posters/snowpals.jpg?updatedAt=1678473898835${transforms.square}`}
              alt="poster"
              tags={['Illustrator']}
            />
            <LinkCard
              to="homespace"
              title="Home Space"
              linkText="Learn About This Project"
              src={`https://ik.imagekit.io/ti4score/Portfolio/mitchell-temp.png?updatedAt=1681838392343${transforms.square}`}
              alt="video"
              tags={['Cinema 4D', 'After Effects']}
            />
          </Grid>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
