import styled from 'styled-components';
import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';
import Chip from '../../components/Chip';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import { transforms } from '../../utils/helpers';
import ScrollTop from '../../components/ScrollTop';
import MaterialIcon from '../../components/MaterialIcon';
import ChipScroll from '../../components/ChipScroll';
import Next from '../../components/Next';

const Box = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
`;

const GRID_IMGS = [
  {
    src: `https://ik.imagekit.io/ti4score/tracker_add_participant.png?updatedAt=1725560951844${transforms.wide_lg}`,
    alt: 'Zoomed in view showing the different types of participants that can be added to combat: hazard, npc, monster, and player',
    description: 'The different types of participants that can be added.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/tracker_conditions.png?updatedAt=1725560951772${transforms.wide_lg}`,
    alt: 'Zoomed in view showing some of the conditions that can be applied to each participant, including dazzled, deafened, etc.',
    description:
      'Some of the various conditions that can easily be applied to participants.',
  },
];

const Pathfinder = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/projects" label="Projects" />
          <h1>Pathfinder Initiative Tracker</h1>
          <ChipScroll>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Usage" to="#usage" hash />
            <Chip label="Status" to="#status" hash />
          </ChipScroll>
          <p>
            <strong>Pathfinder</strong>, created by{' '}
            <a
              href="https://paizo.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Paizo
              <MaterialIcon icon={'open_in_new'} size="1.125rem" />
            </a>
            , is a tabletop roleplaying game similar to{' '}
            <em>Dungeons & Dragons</em>. Players create their
            characters—choosing from various ancestries, backgrounds, and
            classes—and then immerse themselves in a roleplaying environment
            controlled by the Game Master.
          </p>
          <Hr />
          <h2 id="problem">Problem statement</h2>
          <p>
            A frequent element of tabletop roleplaying games is combat. Players
            are often pitted against various monsters and enemies, which they
            must overcome.
          </p>
          <p>
            Keeping track of whose turn it currently is—along with any status
            effects or conditions—is vitally important. Groups will often use
            whiteboards or purchase physical pads specifically designed for
            combat tracking. Over time, with enough use, these systems get dirty
            and pieces are lost. This is exactly what happened to my group, so I
            decided to create a digital version.
          </p>
          <Hr />
          <h2 id="scope">Project scope</h2>
          <p>
            I wanted to keep the project rather simple, so it's a basic React
            implementation that utilizes a mixture of Material UI and custom
            components. There is no backend system, and graphics are minimal to
            keep focus on managing turn order during combat.
          </p>
          <p>
            Note taking is a frequent occurrence in combat, so a side panel for
            that task is available, and users can optionally tag participants
            with various ailments and conditions that have an effect on combat.
          </p>
          <Hr />
          <h2 id="role">My role</h2>
          <p>
            I designed, built, and tested every aspect of the initiative
            tracker. Because <em>Pathfinder</em> is a game system I actively
            participate in, I was able to test and debug the application during
            actual sessions of play.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <Box>
            <ImageCard
              image={{
                src: `https://ik.imagekit.io/ti4score/tracker_combat_tablet.png?updatedAt=1725560951573&tr:w-900`,
                alt: 'Combat initiative tracker, currently in Round 2 with Vin as the active participant.',
                description: 'The initiative tracker during an active combat',
              }}
            />
            <ImageGrid images={GRID_IMGS} columns={2} gap="2rem" />
            <ImageCard
              image={{
                src: `https://ik.imagekit.io/ti4score/tracker_notes.png?updatedAt=1725560951761${transforms.wide_lg}`,
                alt: 'A digital drawer overlaying the combat list, showing information that has been manually typed in',
                description:
                  'The notes drawer, expanded and showing custom notes that have been added to the combat.',
              }}
            />
          </Box>
          <p>
            Colors were kept simple, with stark differences between each type of
            participant for easy recognition. Fonts are large, and every icon
            has a tooltip, enhancing usability and readability.
          </p>
          <h3>Accessibility</h3>
          <p>
            Like all of my projects, accessibility is a vitally important
            feature. All elements of the site meet or exceed WCAG standards.
          </p>
          <Hr />
          <h2 id="usage">Usage</h2>
          <p>There are two usage scenarios for the initiative tracker:</p>
          <ol>
            <li>
              Casting the tracker to a large monitor or TV in view of all
              participants
            </li>
            <li>Managing the tracker on a laptop or tablet</li>
          </ol>
          <p>
            In both scenarios, the tracker is viewed in a browser window. It was
            built to be completely touch friendly, meaning it's easy to manage
            combat from a smaller, separate device. This keeps the
            implementation in-line with physical tracker pads.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/p2etracker_tablet.jpg?updatedAt=1725564926698${transforms.wide_lg}`,
              alt: 'An iPad on a wooden coffee table with the initiative tracker website displaying on the screen',
              description: 'Setting up a new combat on an iPad.',
            }}
          />
          <h2 id="status">Status</h2>
          <p>
            The tracker is currently live and available to view and use by going
            to{' '}
            <a
              href="https://p2etracker.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              p2etracker.com
              <MaterialIcon icon={'open_in_new'} size="1.125rem" />
            </a>
            .
          </p>
          <ScrollTop />
          <Hr />
          <Next type={'projects'} id={3} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Pathfinder;
