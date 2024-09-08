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
          <Img src={ME.src} alt={ME.alt} />
          <p>
            My name is Tony Trucco, and I am a designer/developer specializing
            in frontend implementations and user experience design. That means I
            create and advocate for friendly, intuitive, easy-to-use experiences
            for web and mobile. I started my career in 2008, so I've been
            creating meaningful experiences for {careerLength} years.
          </p>
          <p>
            In addition to my design skills, I am also a very talented frontend
            developer. Working in both disciplines allows me to have a greater
            level of control over the implementation of my designs, ensuring
            they are visually compelling and functionally sound. My coding
            skills help me to easily communicate with developers and bridge the
            gap that traditionally exists between design and engineering teams.
          </p>
          <p>Would you like to know more?</p>
          <Hr />
          <ChipScroll>
            <Chip label="Work Experience" to="#work" hash />
            <Chip label="Education" to="#education" hash />
            <Chip label="Personal Life" to="#personal" hash />
          </ChipScroll>
          <h2 id="work">Work Experience</h2>
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
            I have experience with almost every type of company there is; from
            startups of fewer than 10 people to multi-national corporations with
            thousands of employees across the globe. Additionally, I have worked
            in the following sectors:
          </p>
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
            I started my career creating basic HMTL and CSS solutions, which
            naturally led me towards frontend design and development. I learned
            Javascript and furthered my education in user-centered design
            principles. Today, I maintain all of my frontend skills while also
            being an advocate and leader for a well-crafted design process.
          </p>
          <p>
            I have worked on short-term projects as well as complex redesigns of
            entire frontend systems. I have led user interviews and conducted
            surveys for internal and external customers. I have built—and even
            rebuilt—internal tools to improve processes, making them
            better/faster/cheaper.
          </p>
          <p>
            During my career I have had many opportunities to both present and
            discuss design solutions with C-level executives and stakeholders. I
            know how to have a meaningful conversation that will balance design
            needs with business goals.
          </p>

          <Hr />

          <h2 id="education">Education</h2>
          <p>
            Bachelor's Degree in Digital Design from the DAAP program at the
            University of Cincinnati.
          </p>

          <Hr />

          <h2 id="personal">Personal Life</h2>
          <p>
            In 2022 I married the love of my life, Nikki. She is an astounding
            designer in her own right, and sexy as hell. Together we have
            created an amazing array of designs and art. We live in Covington,
            KY, with an assortment of cats and cat accessories.
          </p>
          <p>
            I am an avid runner and enjoy running in at least one half-marathon
            each year. There is something very peaceful and centering about
            running so many miles and just letting the mind wander.
          </p>
          <p>
            If you look at my{' '}
            <a
              href="https://www.instagram.com/orion_in_winter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <MaterialIcon icon="open_in_new" size={'18px'} />
            </a>
            —to which I post rarely—you will notice that I paint 28mm miniatures
            as a <Link to="/designs/miniatures">hobby</Link>. I use these minis
            in the games of Pathfinder that I participate in as both a player
            and Game Master. Although Pathfinder is the most common game I play,
            I am a fan of just about every board game (except Monopoly).
          </p>
          <p>
            Check out my Twilight Imperium{' '}
            <a
              href="https://ti4score.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              score tracker
              <MaterialIcon icon="open_in_new" size={'18px'} />
            </a>{' '}
            or my Pathfinder 2e{' '}
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
            Lastly, I am very into Renaissance Festivals. I like to dress up in
            all kinds of outfits and absorb the experience of everyone around me
            doing the same. Skol!
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
