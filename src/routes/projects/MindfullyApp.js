import styled from 'styled-components';
import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import ImageGrid from '../../components/ImageGrid';
import { transforms } from '../../utils/helpers';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const GARDEN = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Garden.png?updatedAt=1678975150205${transforms.tall}`,
    alt: "View of the 'My Garden' page, featuring stats about the garden and FAQS. Presented in mobile format.",
    description:
      'Balsamiq design concept, showing the initial sketch for a garden view.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/My_Garden.png?updatedAt=1681755149516${transforms.tall}`,
    alt: "'My Garden' design in Figma, showing high fidelity sections for garden statistics and buttons at the bottom for customizing the garden or visiting it.",
    description:
      'Forgive the simple plant graphics. Those are merely placeholders.',
  },
];

const HOME = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Home.png?updatedAt=1678975150424${transforms.tall}`,
    alt: 'View of the home page, with a top section for seeing how you are feeling, then Events, Goals, and Care Providers.',
    description:
      'Balsamiq design concept, showing the home view with cards for each section of the app.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Home.jpg?updatedAt=1678462081102${transforms.tall}`,
    alt: 'Home page design in Figma, showing a check-in section at the top, Sessions for the day, and Goals at the bottom.',
    description:
      'The high fidelity Figma sketch of the home view. The graphic behind the top block is placeholder, meant to eventually feature an animated outdoor graphic.',
  },
];

const MindfullyApp = () => {
  return (
    <Container>
      <Hero title="Mindfully App Redesign" limited />
      <Card hero>
        <Limiter>
          <Back to="/projects" label="← Projects" />
          <h2>About the Client</h2>
          <p>
            Mindfully is a company working to provide online mental healthcare
            for teens and adults. They have a robust roster of professionals
            available for a wide variety of services. Clients are able to chat,
            have online video calls, and receive many different services and
            assessments through Mindfully's online offering.
          </p>
          <p>
            Mindfully provides care in a number of different states, and makes
            use of a few different platforms, including their website, which you
            can visit to{' '}
            <a
              href="https://mindfully.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              learn more
            </a>
            .
          </p>
          <Hr />
          <Nav>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Testing" to="#testing" hash />
            <Chip label="Status" to="#status" hash />
          </Nav>
          <h2 id="problem">Problem Statement</h2>
          <p>
            Although Mindfully currently has an app available in the App Store
            and the Google Play Store, its functionality and utility is limited.
            It is also out of date with Mindfully branding and inconsistent in
            how content is shown.
          </p>
          <Hr />
          <h2 id="scope">Scope</h2>
          <p>
            The goal for an updated app was to make it intuitive, beautiful, and
            helpful to anyone seeking mental healthcare assistance with
            Mindfully. I sought to reimagine the entire paradigm of the app,
            starting with the concept of caring for a garden.
          </p>
          <p>
            It has long been established that the outdoors are extremely
            beneficial for our mental health. I wanted to bring this aspect into
            the app redesign, so I conceived the idea of providing everyone with
            a digital garden that they could grow and care for as part of their
            journey. This garden would encourage users to "water" it and care
            for it by performing tasks meant to enhance their mental well-being.
          </p>
          <p>
            Beyond the entirely new garden concept, however, the app rework also
            included a new navigational structure meant to be more open-ended,
            and a visual overhaul to bring it inline with current branding
            standards.
          </p>
          <Hr />
          <h2 id="role">My Role</h2>
          <p>
            I took on the pivotal role of envisioning what an entirely new app
            could look like, incorporating the garden concept into every aspect
            of the design. I used Balsamiq and Figma to prove out the experience
            and to provide the developers with a framework for what they were
            building toward.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <h3>Figma Prototype</h3>
          <p>
            If you want to skip right to it, you can view the Figma prototype
            concept featuring the garden by clicking the link below.
          </p>
          <p>
            <a
              href="https://www.figma.com/proto/cyQIGuq56sYZhoQsObFe8Q/App-2.0?page-id=72%3A1530&node-id=297-3461&viewport=1991%2C606%2C0.13&scaling=scale-down&starting-point-node-id=297%3A3654&show-proto-sidebar=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              View the Figma Prototype
            </a>
          </p>
          <h3>The Garden</h3>
          <p>
            Providing a digital garden to clients gives them something to care
            for and helps gamify the experience within the app. A big hurdle for
            affecting change in one's life is lack of consistency. The garden
            design encourages and rewards constant interaction, which in turn
            creates the habit of clients caring for their mental health.
          </p>
          <ImageGrid columns={2} images={GARDEN} />
          <h3>Navigational Structure</h3>
          <p>
            The initial app featured a bottom bar for navigation to the various
            sections of the app. Although this seems like a reasonable approach
            for navigation, I found it did not account for the nebulous needs of
            clients who find themselves interacting with many different parts of
            the app at once. Therefore, I designed a card view for the app,
            where each section would be presented on the main screen. Not only
            did this change allow for important details from each section to be
            displayed in one view, it eliminated the limited space that bottom
            navigation provides.
          </p>
          <ImageGrid columns={2} images={HOME} />
          <h3>Branding and Aesthetics</h3>
          <p>
            Similar to the issues facing the Mindfully website, the initial app
            design did not strongly reflect the current branding guidelines.
            Making the designs consistent and accurate was a major goal for this
            project.
          </p>
          <Hr />
          <h2 id="testing">Testing</h2>
          <p>
            The garden concept is massive in scope. Therefore, to more quickly
            work towards getting something in the hands of clients, we decided
            to first launch the overall visual and navigational changes. Once
            those are in place, the garden concept can begin development. The
            idea has been presented to stakeholders, staff, and external
            resources and has received widespread acclaim.
          </p>
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            The app is still actively being developed and reworked into the
            vision presented in my designs. Some of those changes are already
            live and available to view in the app.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default MindfullyApp;
