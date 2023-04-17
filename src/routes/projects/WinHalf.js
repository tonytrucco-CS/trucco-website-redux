import styled from 'styled-components';
import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const WIN = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/WinHalf/mobile.png?updatedAt=1678462019917${transforms.tall}`,
    alt: 'WinHalf website, presented for mobile devices',
    description: 'Website design on mobile',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/WinHalf/desktop.png?updatedAt=1678462019962${transforms.tall}`,
    alt: 'WinHalf website, presented for desktop devices',
    description: 'Website design on desktop',
  },
];

const WinHalf = () => {
  return (
    <Container>
      <Hero title="WinHalf" limited />
      <Card hero>
        <Limiter>
          <Back to="/projects" label="← Projects" />
          <h2>About the Client</h2>
          <p>
            WinHalf is a company that's working to disrupt the raffle ticket
            space by pushing every aspect into the digital realm. Traditionally,
            customers would buy tickets with cash and receive physical
            tickets—which in turn requires them to keep the ticket until the
            raffle is drawn. WinHalf allows charities to easily accept credit
            card payments and for customers to always have their "ticket" on
            them; their phone.
          </p>
          <p>
            Do you own a 501c or know anyone that runs raffles currently? You
            should tell them about{' '}
            <a
              href="https://www.winhalf.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WinHalf
            </a>
            .
          </p>
          <Hr />
          <Nav>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Status" to="#status" hash />
          </Nav>
          <h2 id="problem">Problem Statement</h2>
          <p>
            Despite the high-quality service that WinHalf offered its customers,
            the initial website and mobile service fell short in terms of visual
            appeal and user experience. The design, created by a developer with
            limited design skills, did not effectively communicate the premium
            experience that WinHalf provided. As a result, the company was
            unable to effectively market its services and reach its full
            potential.
          </p>
          <Hr />
          <h2 id="scope">Scope</h2>
          <p>
            The design language for the website would be completely redone,
            utilizing reuseable components to ensure a quick and cohesive
            experience. The administrative backend would also receive an update
            so that clients could more easily manage their raffles.
          </p>
          <Hr />
          <h2 id="role">My Role</h2>
          <p>
            As the sole designer on the project, I undertook the task of
            creating a new design language that would seamlessly integrate with
            the existing brand aesthetics. In addition, I developed detailed
            wireframes to demonstrate the updated user flow, and utilized my
            frontend development skills to build a modern, refreshed website
            using React.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <h3>Updated Design Language</h3>
          <p>
            I worked with the client to create a new design language that would
            blend with their existing brand. Their main colors were red and
            blue, which looked very unique when blended together. Because
            charities can cover nearly every demographic, the design was given a
            classic feel so that it could have wide appeal.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/WinHalf/visual_sheet.png?updatedAt=1678462019882${transforms.four3_lg}`,
              alt: 'Design sheet for WinHalf, featuring various headings, font selections, color choices, and multiple button designs',
              description: 'The initial design sheet I provided to WinHalf',
            }}
          />
          <h3>Website Redesign</h3>
          <p>
            Because WinHalf wanted customers to use their phones for signing up
            for raffles, it had to be dead simple to enter the raffle code they
            would receive. Therefore, the WinHalf website features a raffle code
            input before the fold for virtually every mobile device.
          </p>
          <ImageGrid columns={2} images={WIN} />
          <h3>Backend Flow</h3>
          <p>
            The backend user experience was reworked so that clients could
            easily manage multiple raffles at one time and see at a glance how
            each was performing.
          </p>
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            WinHalf is continuing to successfully penetrate the raffle space,
            all while using the same designs and experience I created for them
            years ago.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default WinHalf;
