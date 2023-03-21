import styled from 'styled-components';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Index = () => {
  return (
    <Container>
      <Hero title="About Me" limited />
      <Card hero flex>
        <Limiter>
          <h2>Elevator Pitch</h2>
          <p>
            My name is Tony Trucco, and I am a Director of UI/UX. That means I
            create and advocate for friendly, intuitive, easy-to-use experiences
            for the web and mobile. I got my start back in 2008, which means
            I've been creating meaningful experiences for over 14 years.
          </p>
          <p>
            In addition to my design skills, I also have a strong foundation in
            coding. This allows me to have a greater level of control over the
            implementation of my designs, ensuring they are visually compelling
            and functionally sound. My coding skills allow me to easily
            communicate with developers and bridge the gap that traditionally
            exists between design and engineering teams.
          </p>
          <p>Want more detail? Keep reading.</p>
          <Nav>
            <Chip label="Work Experience" to="#work" hash />
            <Chip label="Education" to="#education" hash />
            <Chip label="Personal Life" to="#personal" hash />
          </Nav>
        </Limiter>
      </Card>
      <Card hero flex>
        <Limiter>
          <h2 id="work">Work Experience</h2>
          <p>A more formal resume can be found here.</p>
          <h3>Places I've been</h3>
          <p>
            I have worked for almost every type of company there is; from a
            startup of fewer than 10 people to multi-national corporations with
            thousands of employees across the globe. I have worked for
            businesses in the following sectors:
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
            I started my career creating basic HMTL and CSS solutions, but that
            slowly evolved into more of a traditional frontend role. I learned
            Javascript and educated myself on user-centered design. Today I
            maintain all of my frontend skills while also being an advocate and
            leader for a well-crafted design process.
          </p>
          <p>
            I have worked on short-term, simple projects as well as complex
            redesigns of entire frontend systems. I have led user interviews and
            conducted surveys for internal and external customers. I have
            built—and even rebuilt—internal tools to improve processes, making
            them better/faster/cheaper.
          </p>
          <p>
            Lastly, I have engaged with many C-levels to both propose and
            discuss design solutions. I know how to have a meaningful
            conversation that will balance design needs with business needs.
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
            I am also an avid runner and enjoy running in at least one
            half-marathon each year. There is something very peaceful and
            centering about running so many miles and just letting the mind
            wander.
          </p>
          <p>
            If you look at my Instagram—to which I post rarely—you will notice
            that I paint 28mm miniatures as a hobby. I use these minis in the
            games of Pathfinder that I participate in as both a player and Game
            Master. Although Pathfinder is the most common game I play, I am a
            fan of just about every board game (except Monopoly).
          </p>
          <p>
            This is starting to feel like a dating profile, but I am also deeply
            invested in Renaissance Festivals. I like to dress up in all kinds
            of outfits and absorb the experience of everyone around me doing the
            same. Skol!
          </p>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
