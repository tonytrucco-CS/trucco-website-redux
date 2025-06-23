import styled from 'styled-components';
import Card from '../../components/Card';
import Container from '../../components/Container';
import LinkCard from '../../components/LinkCard';
import Limiter from '../../containers/Limiter';
import { breakpoints } from '../../constants/variables';
import Hr from '../../components/Hr';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 3rem;

  @media only screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const Index = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <h1>Case Studies</h1>
          <p>
            Throughout my career, I've worked on projects both large and small.
            Some are still in use, while others were never publicly released,
            and a few have faded into obscurity. The following case studies
            showcase my skills and interests.
          </p>
          <Hr />
          <h2>Featured case studies</h2>
          <Grid>
            <LinkCard
              to="apollo"
              title="Apollo Music Player"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/Portfolio/Apollo/apollo_home-view.png?updatedAt=1746716314886&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="High-fidelity view of home screen, featuring a greeting to the user and recent albums"
              tags={['Figma', 'React', 'Material UI', 'TypeScript', 'Electron']}
            />
            <LinkCard
              to="ebth"
              title="Everything But The House"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/item_details.jpg?updatedAt=1679429057523&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="Details screen for a pair of 19th century vases"
              tags={['Balsamiq', 'Sketch', 'UserTesting', 'React']}
            />
            <LinkCard
              to="twilight-imperium-score-tracker"
              title="Twilight Imperium score tracker"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/objective_view.png?updatedAt=1725559798874&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="Two public objectives available in a six player game of Twilight Imperium"
              tags={['Balsamiq', 'React']}
            />
            <LinkCard
              to="pathfinder-initiative-tracker"
              title="Pathfinder initiative tracker"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/p2etracker_tablet.jpg?updatedAt=1725564926698&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="List of combat participants, listed in initiative order, for Pathfinder 2nd Edition"
              tags={['Material UI', 'React']}
            />
            <LinkCard
              to="winhalf"
              title="WinHalf"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/Portfolio/WinHalf/desktop.png?updatedAt=1678462019962&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="Home page for WinHalf, providing users the ability to enter a raffle code and details on why they should use WinHalf"
              tags={['Balsamiq', 'Sketch', 'React']}
            />
            <LinkCard
              to="mindfully-website"
              title="Mindfully website redesign"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/Portfolio/Mindfully/After/Care.png?updatedAt=1678462213668&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="Find a care provider, listing care providers in alphabetical order and showing a series of filter options to refine the results"
              tags={['Balsamiq', 'Figma', 'React']}
            />
            <LinkCard
              to="mindfully-app"
              title="Mindfully app redesign"
              linkText="View This Case Study"
              src="https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Goals-side-by-side.jpg?updatedAt=1679495560574&tr=fo-top_left,c-maintain_ratio,w-800,ar-16-9"
              alt="Side-by-side view of redesigned Mindfully app, showing the goals screen as a sketch and a high fidelity mockup"
              tags={['Balsamiq', 'Figma']}
            />
          </Grid>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
