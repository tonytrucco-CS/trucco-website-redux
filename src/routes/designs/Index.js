import styled from "styled-components";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import LinkCard from "../../components/LinkCard";
import Limiter from "../../containers/Limiter";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 1rem;
`;

const Index = () => {
  return (
    <Container>
      <Hero title="Designs" limited />
      <Card hero>
        <Limiter>
          <h2>More than just websites</h2>
          <p>
            During my education I received training in a number of skills that I 
            maintain to this day. I have always enjoyed the process of creation, 
            whether that's through a website, illustration, 3D model, or video. 
            I have chosen some of my favorite creations to feature here on my site.
          </p>
          <p>
            I hope you enjoy them as much as I do.
          </p>
        </Limiter>
      </Card>
      <Card hero>
        <Limiter>
          <h2>Featured Designs</h2>
          <Grid>
            <LinkCard
              to="camp-trucco"
              linkText="Camp Trucco T-Shirts"
              src="http://placekitten.com/400/300"
              alt="kitten"
              tags={["Illustrator"]}
            />
            <LinkCard
              to="presidents"
              linkText="President Series"
              src="http://placekitten.com/400/300"
              alt="pres"
              tags={["Illustrator", "Screen Printing"]}
            />
            <LinkCard
              to="miniatures"
              linkText="Painted Minis"
              src="http://placekitten.com/400/300"
              alt="minis"
              tags={["Acrylic"]}
            />
            <LinkCard
              to="bee-hex"
              linkText="3D-printed Pin Holder"
              src="http://placekitten.com/400/300"
              alt="pin"
              tags={["Cinema 4D", "Acrylic"]}
            />
            <LinkCard
              to="posters"
              linkText="Posters"
              src="http://placekitten.com/400/300"
              alt="poster"
              tags={["Illustrator"]}
            />
            <LinkCard
              to="video"
              linkText="Video Placeholder"
              src="http://placekitten.com/400/300"
              alt="video"
              tags={["After Effects"]}
            />
          </Grid>
        </Limiter>
      </Card>
    </Container>
  )
}

export default Index;