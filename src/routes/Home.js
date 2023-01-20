import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";
import Gradient from "../components/Gradient";
import Hero from "../components/Hero";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Home = () => {
  return (
    <>
      <Gradient />
      <Container>
        <Hero title="tonytrucco.com" />
        <Card hero>
          <Grid>
            <Card to='projects' linkText="View Projects">
              test
            </Card>
            <Card>
              another
            </Card>
            <Card>
              third
            </Card>
          </Grid>
        </Card>
      </Container>
    </>
  )
}

export default Home;