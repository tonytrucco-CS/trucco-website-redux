import styled from 'styled-components';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';
import { Link } from 'react-router-dom';
import ScrollTop from '../../components/ScrollTop';
import MaterialIcon from '../../components/MaterialIcon';
import { breakpoints } from '../../constants/variables';
import ChipScroll from '../../components/ChipScroll';

const Img = styled.img`
  float: right;
  height: 15em;
  border-radius: 0.25rem;
  margin: 0 0 1em 1em;

  @media only screen and (max-width: ${breakpoints.sm}) {
    height: 10em;
  }

  @media only screen and (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

const ME = {
  src: 'https://ik.imagekit.io/ti4score/tony_dink.jpg?updatedAt=1679506626403&tr=w-600,h-600,c-maintain_ratio,fo-top_left',
  alt: "Me again, holding one of my cats. We're looking at the camera with a brick background",
};

const Index = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const careerLength = currentYear - 2008;
  return (
    <Container>
      <Card hero flex>
        <Limiter>
          <h1>About Me</h1>
          <ChipScroll>
            <Chip label="Work Experience" to="#work" hash />
            <Chip label="Education" to="#education" hash />
            <Chip label="Personal Life" to="#personal" hash />
          </ChipScroll>
          <Img src={ME.src} alt={ME.alt} />
          <p>
            I'm Tony Trucco, a designer/developer specializing in frontend
            implementations and user experience design. I focus on creating
            intuitive, user-friendly experiences for web and mobile. With{' '}
            {careerLength} years of experience, I've been crafting meaningful
            designs since 2008.
          </p>
          <p>
            In addition to design, I'm a skilled frontend developer. This dual
            expertise gives me control over the execution of my designs,
            ensuring they are both visually compelling and functionally sound.
            My coding skills also allow me to bridge the gap between design and
            engineering teams, improving collaboration and implementation.
          </p>
          <p>Would you like to know more?</p>
          <Hr />
          <h2 id="work">Work experience</h2>
          <p>
            Here's the{' '}
            <a
              href="/Trucco Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              PDF version
            </a>{' '}
            of my resume.
          </p>
          <h3>Places I've been</h3>
          <p>
            I have experience with almost every type of company; from startups
            of fewer than 10 people to multinational corporations with thousands
            of employees across the globe.
          </p>
          <p>Additionally, I have worked in the following sectors:</p>
          <ul>
            <li>Education</li>
            <li>Finance</li>
            <li>Government</li>
            <li>Healthcare</li>
            <li>Sales</li>
            <li>Second-hand marketplaces</li>
            <li>Talent Acquisition</li>
          </ul>
          <h3>Things I've done</h3>
          <p>
            I began my career with basic HTML and CSS, which led me into
            frontend design and development. Along the way, I learned JavaScript
            and deepened my understanding of user-centered design principles.
            Today, I maintain my frontend skills while advocating for
            well-crafted design processes.
          </p>
          <p>
            I've worked on both short-term projects and large-scale frontend
            redesigns, leading user interviews and surveys for internal and
            external clients. I've also built and improved internal tools,
            optimizing them for efficiency.
          </p>
          <p>
            Throughout my career, I've presented and discussed design solutions
            with C-level executives and stakeholders, balancing design needs
            with business goals.
          </p>

          <Hr />

          <h2 id="education">Education</h2>
          <p>
            Bachelor's of Science Degree in <em>Digital Design</em> from the
            DAAP program at the University of Cincinnati.
          </p>

          <Hr />

          <h2 id="personal">Personal life</h2>
          <p>
            In 2022, I married Nikki, the love of my life and an amazing
            designer. Together, we live in Covington, KY, with our three cats
            and have created a variety of unique designs and artwork.
          </p>
          <p>
            I'm a passionate runner, completing at least one half-marathon each
            year. There's something peaceful about covering so many miles,
            letting my mind wander along the way.
          </p>
          <p>
            As a <Link to="/designs/miniatures">hobby</Link>, I paint 28mm
            miniatures, which I use in <em>Pathfinder</em> games where I play
            and GM. While <em>Pathfinder</em> is my favorite, I enjoy almost any
            board game (except Monopoly). Check out my{' '}
            <em>Twilight Imperium</em>{' '}
            <a
              href="https://ti4score.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              score tracker
              <MaterialIcon icon="open_in_new" size={'18px'} />
            </a>{' '}
            and <em>Pathfinder 2e</em>{' '}
            <a
              href="https://p2etracker.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              initiative tracker
              <MaterialIcon icon="open_in_new" size={'18px'} />
            </a>{' '}
            websites.
          </p>
          <p>
            I'm also a big fan of Renaissance Festivals, where I love dressing
            up and immersing myself in the lively atmosphere. Skol!
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
