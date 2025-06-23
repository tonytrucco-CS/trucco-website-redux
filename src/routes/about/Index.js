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
  src: 'https://ik.imagekit.io/ti4score/felix-40_05.png?updatedAt=1750709224098&tr=w-600,h-600,c-maintain_ratio,fo-top_left',
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
            <a
              href="./Trucco%20Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              View or download my resumé
              <MaterialIcon icon={'open_in_new'} size="1.125rem" />
            </a>
          </p>
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
          <h3>Philosophy and accessibility</h3>
          <p>
            I believe the internet is for everyone. That means websites{' '}
            <strong>need</strong> to be accessible, intuitive, and easy-to-use.
            I strive to meet or exceed WCAG guidelines on every project I work
            on, including personal projects. Beyond traditional accessibility
            requirements, however, being married to someone with ADD has taught
            me that the best websites are the ones that get to the point and
            make their content obvious. No scroll-jacking, no distracting
            animations in the background, no hidden/changing navigation.
          </p>
          <p>
            I believe in collaboration. Designers rarely have the best ideas,
            myself included. I want to ask questions, understand the problem,
            and then collaborate with stakeholders and developers to come up
            with the best solution within the constraints of the business.
          </p>
          <p>
            <a
              href="https://tron.fandom.com/wiki/Tron"
              target="_blank"
              rel="noreferrer noopener"
            >
              I fight for the user
              <MaterialIcon icon={'open_in_new'} size="1.125rem" />
            </a>
            . There is no such thing as a dumb user. If someone can't figure out
            how to use a site, that's because the interface is poorly optimized
            or built unintuitively.
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
            miniatures, which I use in <em>Pathfinder</em> games as a player and
            GM (Game Master). While <em>Pathfinder</em> is my favorite, I enjoy
            almost any board game (except Monopoly). Check out my{' '}
            <em>Twilight Imperium</em>{' '}
            <a
              href="https://ti4score.com"
              target="_blank"
              rel="noreferrer noopener"
              style={{ whiteSpace: 'nowrap' }}
            >
              score tracker
              <MaterialIcon icon="open_in_new" size={'1.125rem'} />
            </a>{' '}
            and <em>Pathfinder 2e</em>{' '}
            <a
              href="https://p2etracker.com"
              target="_blank"
              rel="noreferrer noopener"
              style={{ whiteSpace: 'nowrap' }}
            >
              initiative tracker
              <MaterialIcon icon="open_in_new" size={'1.125rem'} />
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
