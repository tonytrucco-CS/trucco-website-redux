import styled from 'styled-components';
import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

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

          <Hr />
          <h2 id="scope">Scope</h2>
          <p></p>
          <Hr />
          <h2 id="role">My Role</h2>
          <Hr />
          <h2 id="designs">Designs</h2>
          <Hr />
          <h2 id="testing">Testing</h2>
          <Hr />
          <h2 id="status">Status</h2>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default MindfullyApp;
