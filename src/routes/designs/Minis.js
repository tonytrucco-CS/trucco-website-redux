import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const MINIS = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/chandry_1.jpeg?updatedAt=1681847871813${transforms.square_lg}`,
    alt: '',
    description: 'An elven hero, originally painted Sep of 2019.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/chandry_2.jpeg?updatedAt=1681847871785${transforms.square_lg}`,
    alt: '',
    description: 'Same hero, updated and improved in Jul of 2022',
  },
];

const Minis = () => {
  return (
    <Container>
      <Hero title="Painted Miniatures" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>Why paint miniatures?</h2>
          <p>
            Growing up, my older brother had board games like <em>HeroQuest</em>{' '}
            and <em>Battle Masters</em>. These are fantasy games where monsters
            and magic are common and the game pieces are wonderfully detailed
            plastic models. He painted them all and I fell in love with the
            concept and the genre.
          </p>
          <Hr />
          <h2>My Minis</h2>
          <p>
            Despite growing up around the hobby, I didn't pick it up myself
            until I was in my 30s. I dove in headfirst, however, and now I have
            almost 400 miniatures in various states of completion. I even have a
            spreadsheet tracking my progress.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/miniature_inventory.png?updatedAt=1681840783159${transforms.wide_lg}`,
              alt: 'Spreadsheet listing various miniatures in alphabetical order, showing how many and whether they are painted or not.',
              description:
                'Currently, over 60% of my collection is painted completely and only 16% is totally unpainted.',
            }}
          />
          <h3>HeroQuest</h3>
          <p>
            When Hasbro re-released the game a few years ago I got inspired. I
            opted to download STLs of the original figures and print them myself
            so that I could paint them all in my own design and relive some
            nostalgia. It took many months, but the finished product was worth
            the wait. I dare say I may have even done better than my brother
            before me.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/all_heroquest.jpeg?updatedAt=1681848026817${transforms.noheight_lg}`,
              alt: 'HeroQuest miniatures show in multiple rows, each painted in fine detail.',
              description:
                'This took forever. The prints started pure black. The four heroes stand proud, ready to battle Zargon and his minions.',
            }}
          />
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/chaos.jpg?updatedAt=1678473565468${transforms.wide_lg}`,
              alt: 'Undead 28mm miniatures in a glass case, painted in beautiful detail.',
              description:
                'Featuring the Chaos Warlock, with the Chaos Warriors behind him. On the side is the hard-hitting Gargoyle.',
            }}
          />
          <h3>Tabletop RPGs</h3>
          <p>
            The bulk of my miniatures are for use in tabletop games like{' '}
            <em>Pathfinder</em> and <em>Dungeons & Dragons</em>. I've tried to
            collect a broad swath of options so that I have a miniature for
            almost every situation that arises.
          </p>
          <ImageGrid columns={2} images={MINIS} />
          <p>
            My favorite piece is my Beholder. I spent countless hours working to
            paint the details and make it look as menacing as possible.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Painting/beholder.jpg?updatedAt=1679507938326${transforms.noheight_lg}`,
              alt: '28mm miniature of a Beholder, painted in orange and featuring 10 eye stalks and one massive eye on its body.',
              description: "That's badass.",
            }}
          />
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Minis;
