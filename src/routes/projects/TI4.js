import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';
import ScrollTop from '../../components/ScrollTop';
import ImageCard from '../../components/ImageCard';
import { transforms } from '../../utils/helpers';
import ImageGrid from '../../components/ImageGrid';
import MaterialIcon from '../../components/MaterialIcon';
import ChipScroll from '../../components/ChipScroll';

const GRID_IMGS = [
  {
    src: `https://ik.imagekit.io/ti4score/objective_view.png?updatedAt=1725559798874${transforms.wide_lg}`,
    alt: 'Webpage showing 5 stage 1 objectives, 5 stage 2 objecctives, and all of the current factions playing',
    description:
      'The objective view, allowing users to easily select and read objectives.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/score-chart-all-factions.png?updatedAt=1678040047786${transforms.wide_lg}`,
    alt: 'A score chart, showing the score of each faction from round to round, up to a max of 10 points over 5 rounds',
    description:
      'The score chart view, showing scores of each player from round to round.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/agenda_view.png?updatedAt=1725559798664${transforms.wide_lg}`,
    alt: 'Each faction displayed at the top with their number of available votes, with options for selecting current Agendas and placing votes',
    description:
      'The Agenda View, allowing players to easily track their votes for Directives and Laws.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/agenda-modal.png?updatedAt=1678040046025${transforms.wide_lg}`,
    alt: 'Modal displaying all factions and asking which faction had its classified document leak',
    description: 'Modals exist for all score-affecting scenarios.',
  },
];

const TI4 = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/projects" label="Projects" />
          <h1>TI4: Score Tracker</h1>
          <p>
            <a
              href="https://www.fantasyflightgames.com/en/products/twilight-imperium-fourth-edition/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong>Twilight Imperium</strong>
              <MaterialIcon icon={'open_in_new'} size="18px" />
            </a>
            , from Fantasy Flights Games, is an epic, space-based board game
            focusing on combat, strategy, politics, and negotiation. It plays
            3-8 people, and games can last upwards of 12 or more hours. This
            game is monumentally epic, and I love it dearly. I try to play as
            often as I can.
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
          <ChipScroll>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Usage" to="#usage" hash />
            <Chip label="Status" to="#status" hash />
            <Chip label="The Future" to="#future" hash />
          </ChipScroll>
          <h2 id="problem">Problem Statement</h2>
          <p>
            There are a lot of components to keep track of in this game, all
            while trying to out-strategize your opponents. And every round a new
            objective becomes available for each player to attempt to score.
            Thus, keeping track of who has already scored any given objective
            (including yourself) is vitally important. Unfortunately, this is
            difficult to do with the materials provided by the game itself.
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
          <h2 id="scope">Project Scope</h2>
          <p>
            The goal was simple: create a tool that could easily track the
            current game objectives, along with which players had scored them.
          </p>
          <p>
            Besides objectives, players also needed a way of tracking all other
            methods of gaining points.
          </p>
          <p>
            It was created as a simple React project with no server—all
            information is stored via Local Storage in the browser. A benefit to
            using Local Storage is that users can save their games and load them
            up later.
          </p>
          <h3>Accessibility</h3>
          <p>
            Even though this was a personal project of mine, accessibility was
            vitally important from the start. The website holds a perfect 100
            score from Lighthouse, and each element meets or exceeds WCAG
            standards.
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
            important that all of the features be intuitive and easy-to-use on
            any device.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/starting_a_new_game.png?updatedAt=1725559397467&tr:w-900`,
              alt: 'Grid of 6 images to choose from, each featuring official game art',
              description:
                'The "New Game" screen, which allows users to select the number of players, their factions/color, and more.',
            }}
            mb="2rem"
          />
          <ImageGrid images={GRID_IMGS} columns={2} gap="2rem" />
          <Hr />
          <h2 id="usage">Usage and Philosophy</h2>
          <p>
            The main usage scenario is to have the tool displayed on a TV or
            large screen in whichever room the game is being played in.
            Therefore, size and legibility were primary considerations. I wanted
            the tool to show the information that was important, and then get
            out of the way and let people play.
          </p>
          <p>
            The score tracker focuses exclusively on the scoring aspects of the
            game, ignoring all other concepts. This helps to keep the complexity
            of the tool at manageable levels while allowing for maximum utility.
          </p>
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            The tracker is currently live and can be visited by going to{' '}
            <a
              href="https://ti4score.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              ti4score.com
              <MaterialIcon icon={'open_in_new'} size="18px" />
            </a>
            . It has well over 5000 unique visits and continues to be the go-to
            choice for players of Twilight Imperium looking to track their
            score.
          </p>
          <Hr />
          <h2 id="future">The Future</h2>
          <p>
            I continue to add new features and refine my designs. Recently,
            offline mode was added in via PWA (Progress Web App) installation.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default TI4;
