import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import ChipScroll from '../../components/ChipScroll';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import MaterialIcon from '../../components/MaterialIcon';
import Next from '../../components/Next';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const FIGMA = [
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Apollo/apollo_album-view.png?updatedAt=1746716314738',
    alt: 'Single album view, showing album title, release date information, artist tags, and each track',
    description: 'Figma view of an individual album.',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Apollo/apollo_components.png?updatedAt=1746716314602',
    alt: 'Figma components, broken into sections for Navigation, Buttons, and Inputs',
    description: 'Sample of the Figma components.',
  },
];

const Apollo = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/projects" label="Case Studies" />
          <h1>Apollo Music Player</h1>
          <ChipScroll>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Status" to="#status" hash />
          </ChipScroll>
          <p>
            The <strong>Apollo Music Player</strong> is a work-in-progress
            passion project of mine. It is meant to be a stand-alone music
            player that runs on your local machine and allows you to access your
            personal library of music.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Apollo/apollo_home-view.png?updatedAt=1746716314886${transforms.four3_lg}`,
              alt: 'Home view, with a user greeting, recently added albums displayed in a grid, and sections for favorites and personal mixes',
              description: 'Figma mockup of the home view.',
            }}
          />
          <Hr />
          <h2 id="problem">Problem statement</h2>
          <p>
            Most modern music apps focus on streaming content. In many cases,
            this is a great feature and lets users explore music they would
            never discover otherwise. But too often albums and tracks get
            removed, bloat gets added, and the user experience is a slog at
            best. Enter Apollo.
          </p>
          <p>
            Users who want to listen to their own library of music have very few
            viable options: Plexamp (bad UI), Winamp (clunky), iTunes (bloated),
            or—god forbid—giving Spotify access to your library. Apollo is the
            middle path; an app that's beautiful without being bloated, with
            clever features and navigation that are intuitive rather than
            confusing.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Apollo/spotify_mess.png?updatedAt=1746720737794`,
              alt: "Spotify's messy UI. I don't even know where to start",
              description: 'Spotify. What even is this mess?',
            }}
          />
          <Hr />
          <h2 id="scope">Project scope</h2>
          <p>
            Apollo is being built as a stand-alone app that will be deployed via
            Electron. It is developed in React with TypeScript. Users will be
            able to edit artists, albums, and track details if the metadata is
            inaccurate; this means a local server will be operating behind the
            scenes to manage those changes.
          </p>
          <p>
            The music player will also use the MusicBrainz API to access
            relevant details via the internet so users don't have to go digging
            around for album art and the like (unless they want to).
          </p>
          <h3>Tags</h3>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Apollo/apollo_tags.png?updatedAt=1746719623438`,
              alt: 'Two sets of tags, with the first showing artists on an album, and the second set listing genres for the album',
              description: 'Tags for contributing artists and genres.',
            }}
          />
          <p style={{ marginTop: '1rem' }}>
            The most important feature in the app will be the system of tags.
            Individual bands can be tagged with each current member and former
            members, allowing for users to quickly and easily see other albums
            those same artists have contributed to.
          </p>
          <p>
            Albums will get tagged with genre information. Many bands experience
            a bit of genre-drift as they progress through their careers, so to
            me it makes the most sense to tag albums with this information,
            rather than the artist themselves.
          </p>
          <p>
            Tracks will be tagged with moods and feelings. For example, marking
            an energetic metal anthem with tags like <code>upbeat</code>,{' '}
            <code>badass</code>, and <code>fast</code>.
          </p>
          <Hr />
          <h2 id="role">My role</h2>
          <p>
            I am the guiding force behind this project. I am the sole designer,
            creating all of the mockups and generating the clickable prototypes.
            I am also the frontend designer for the project, creating all of the
            views and components in the repository.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <p>
            The underlying structure for the components in this project is
            Material UI. These components are highly accessible and extremely
            flexible, making them a perfect fit for a project like this. As
            usual, however, they have been highly customized to match an
            aesthetic that's more appropriate for a music player and to match my
            own tastes.
          </p>
          <ImageGrid images={FIGMA} columns={1} gap="3rem" />
          <p style={{ marginTop: '1rem' }}>
            Although I often like to design as I build in React, I created a
            Figma library of the components used in this project to help give
            myself and my backend developer a better sense of the flow for each
            feature being designed. Here is a link to one of the{' '}
            <a
              href="https://www.figma.com/proto/iYUSiy0RUOAf40DoyvPoRV/Apollo?page-id=1%3A2&node-id=125-3259&node-type=canvas&viewport=2166%2C615%2C0.5&t=izLJxUxeFrczYZz0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=125%3A3259"
              target="_blank"
              rel="noreferrer noopener"
            >
              clickable Figma prototypes
              <MaterialIcon icon={'open_in_new'} size="1.125rem" />
            </a>
            .
          </p>
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            The project is ongoing. Currently, users running the backend server
            and frontend interface can add folders that contain their music
            files and play individual tracks. Way more work awaits before it'll
            finally be ready for public consumption.
          </p>
          <ScrollTop />
          <Hr />
          <Next type={'projects'} id={1} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Apollo;
