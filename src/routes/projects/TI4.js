import styled from 'styled-components';
import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';
import ScrollTop from '../../components/ScrollTop';
import ImageCard from '../../components/ImageCard';
import { transforms } from '../../utils/helpers';
import ImageGrid from '../../components/ImageGrid';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const GRID_IMGS = [
  {
    src: `https://ik.imagekit.io/ti4score/new-game-started.png?updatedAt=1678040360012${transforms.wide}`,
    alt: 'Webpage showing 5 stage 1 objectives, 5 stage 2 objecctives, and all of the current factions playing',
    description:
      'The objective view, allowing users to easily select and read objectives.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/score-chart-all-factions.png?updatedAt=1678040047786${transforms.wide}`,
    alt: 'A score chart, showing the score of each faction from round to round, up to a max of 10 points over 5 rounds',
    description:
      'The score chart view, showing scores of each player from round to round.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/faction-list-one-expanded.png?updatedAt=1678040046132${transforms.wide}`,
    alt: 'Boxes for each faction, showing available scoring opportunities along with their current score',
    description: 'Close up of the score boxes for each faction.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/agenda-modal.png?updatedAt=1678040046025${transforms.wide}`,
    alt: 'Modal displaying all factions and asking which faction had its classified document leak',
    description: 'Modals exist for all score-affecting scenarios.',
  },
];

const TI4 = () => {
  return (
    <Container>
      <Hero title="TI4: Score Tracker" limited />
      <Card hero>
        <Limiter>
          <Back to="/projects" label="← Projects" />
          <h2>About the Game</h2>
          <p>
            Twilight Imperium, from Fantasy Flights Games, is an epic,
            space-based board game focusing on combat, strategy, politics, and
            negotiation. It plays 3-8 people, and games can last upwards of 12
            or more hours. This game is monumentally epic, and I love it dearly.
            I try to play as often as I can.
          </p>
          <p>
            The game is currently in its 4th Edition, with one expansion and 3
            codices released.
          </p>
          <ImageCard
            image={{
              src: 'https://images-cdn.fantasyflightgames.com/filer_public/92/0c/920cb76b-7030-4b9b-ac5f-4b759b9226b0/ti07_sliders_desktop.jpg',
              alt: 'A fancy humanoid lion wrapped in red cloth near a human in future military gear with a large rifle',
              description: 'Cover art for Twilight Imperium, 4th Edition',
            }}
          />
          <Hr />
          <Nav>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Status" to="#status" hash />
            <Chip label="The Future" to="#future" hash />
          </Nav>
          <h2 id="problem">Problem Statement</h2>
          <p>
            There are a lot of components to keep track of in this game, all
            while trying to out-strategize your opponents. And every round a new
            objective becomes available for each player to attempt to score.
            Thus, keeping track of who has already scored what (including
            yourself) is vitally important. Unfortunately, this is difficult to
            do with the materials provided by the game itself.
          </p>
          <ImageCard
            image={{
              src: 'https://preview.redd.it/yn71plfsxwi31.jpg?width=1024&auto=webp&v=enabled&s=db729227627733dade6abfcc18b9cfce21fad5f8',
              alt: 'A large table with all of the game components for Twilight Imperium laid out on it.',
              description:
                'Lots and lots of components. Image credit: u/Albinobird on Reddit',
            }}
          />
          <Hr />
          <h2 id="scope">Scope</h2>
          <p>
            The goal was simple: create a tool that can easily track what the
            current objectives are, along with which players have scored them.
          </p>
          <p>
            Besides objectives, players also need a way of tracking all other
            methods of gaining points.
          </p>
          <p>
            It was created as a simple React project with no server—all
            information is stored via Local Storage in the browser.
          </p>
          <Hr />
          <h2 id="role">My Role</h2>
          <p>
            Initially, I handled the entire scope of the project. This included
            sketches, design aesthetics, UI/UX, and all of the frontend and
            backend coding. Eventually, I convinced a friend of mine to take
            over backend/state management tasks so I could focus solely on
            frontend.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <p>
            I opted to be thematic with the designs, choosing an aesthetic that
            lended itself to the space opera nature of the game. It was also
            important that all of the features be intuitive and easy to use on
            any device.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/background-selection.png?updatedAt=1678040214361&tr:w-900`,
              alt: 'Grid of 6 images to choose from, each featuring official game art',
              description:
                'The very first screen users see, allowing them to choose a custom background for their game.',
            }}
          />
          <p>
            The main scenario I envisioned was having the tool displayed on a TV
            or large screen in whichever room the game was being played.
            Therefore, size and legibility were the other primary
            considerations. I wanted the tool to show the information that was
            important, and then get out of the way and let people play.
          </p>
          <ImageGrid images={GRID_IMGS} columns={2} />
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            The tool is currently live and can be visited by going to{' '}
            <a
              href="https://ti4score.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              ti4score.com
            </a>
            . As of this website being published, the app already has over 1000
            unique visits.
          </p>
          <p>
            If you search Google for a Twilight Imperium score tracker, this
            tool is the #1 result (assuming you don't count the Reddit result).
          </p>
          <Hr />
          <h2 id="future">The Future</h2>
          <p>
            I am currently working on version 2 of the stat tracking tool,
            collaborating once again with my developer friend Jacob Millner.
            This iteration will feature server connectivity, meaning multiple
            users will be able to sign into the same game and track their stats
            individually. Plus many more enhanced features that will make
            version 1 look like it's from the Stone Age.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default TI4;
