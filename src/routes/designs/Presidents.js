import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import MaterialIcon from '../../components/MaterialIcon';
import Next from '../../components/Next';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const PRES = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/hoodie.jpg?updatedAt=1681999858612${transforms.noheight_lg}`,
    alt: 'Hoodie Roosevelt graphic worn by a white male on a red t-shirt.',
    description: '',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/truman.jpg?updatedAt=1681999858726${transforms.noheight_lg}`,
    alt: 'Truman is (not) the Man graphic worn by a white male on a gray t-shirt.',
    description: '',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/cyked.jpg?updatedAt=1681999856769${transforms.noheight_lg}`,
    alt: 'Cyked to be President graphic worn by a white male on a black t-shirt.',
    description: '',
  },
];

const Presidents = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/designs" label="Designs" />
          <h1>Graphics and Tees</h1>
          <p>
            I have an interest in many of the Presidents from American history.
            I also enjoy a good mash-up and creating unexpected designs. The
            natural cross section of those interests is a series of designs and
            t-shirts that feature Presidents <em>and</em> mash-ups.
          </p>
          <Hr />
          <h2>My Designs</h2>
          <h3>Teddy Roosevelt</h3>
          <p>
            Teddy had major flaws, but one thing he got right was his desire to
            protect the beautiful landscape of America. He has been linked to
            bears for an incredibly long time, and the teddy bear gets its name
            from him, creating an interesting opportunity for a design.
          </p>
          <p>
            The graphic started as a screen print design for a class, but I
            loved the pattern so much I turned it into a t-shirt as well. I call
            it <em>Hoodie Roosevelt</em>.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Illustration/roosevelt.png?updatedAt=1678474012219${transforms.noheight_lg},f-jpg,bg-FFFFFF`,
              alt: 'Headshot of Teddy Roosevelt smiling and wearing a hoodie with bear ears.',
              description:
                'Because this started as a screen printing project, I limited my palette to 3 colors plus white.',
            }}
            mb={'2em'}
          />
          <h3>Harry Truman</h3>
          <p>
            Truman was President when he made the decision to use nuclear
            weapons on Japan during World War II.
          </p>
          <p>
            I wanted to create a design that would parody and critique this
            fateful decision in a subtle manner. I settled on a cartoonish
            design emulating the famous pose of{' '}
            <a
              href="https://fallout.fandom.com/wiki/Vault_Boy"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vault Boy
              <MaterialIcon icon={'open_in_new'} size={'1.125rem'} />
            </a>{' '}
            from the Fallout game series. This pose is derived from the supposed{' '}
            <a
              href="https://vocal.media/futurism/facts-about-nuclear-fallout"
              target="_blank"
              rel="noreferrer noopener"
            >
              concept
              <MaterialIcon icon={'open_in_new'} size={'1.125rem'} />
            </a>{' '}
            that if you could cover the mushroom cloud of a nuclear blast with
            your thumb at arm's length, then you were safe from the radiation.
          </p>
          <p>
            This design is called <em>Truman is (not) the Man</em>.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Illustration/truman.png?updatedAt=1681847087307${transforms.noheight_lg},f-jpg,bg-FFFFFF`,
              alt: 'Cartoon picture of Harry Truman, posed with one eye shut and one arm extended with a thumb in the air.',
              description:
                'I purposefully used Vault Boy colors to enhance the connection to Fallout.',
            }}
            mb={'2em'}
          />
          <h3>George Washington</h3>
          <p>
            The first President of America. Washington is generally
            well-regarded as a leader and wartime commander. My combination for
            him revolved around incorporating elements from another
            well-established leader, Cyclops from the X-Men. This design doesn't
            go super deep, I just liked the idea of merging these two together.
          </p>
          <p>
            This one is called <em>Cyked to be President</em>.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Illustration/washington_bw.png?updatedAt=1681912285871${transforms.square_lg}`,
              alt: "Stylized portrait of George Washington's face in black and white with Cyclop's visor from X-Men over his eyes.",
              description: 'This is how we won the Revolutionary War.',
            }}
            mb={'2em'}
          />
          <Hr />
          <h2>T-Shirts</h2>
          <p>
            Each design was translated onto t-shirts, which I wear with great
            frequency.
          </p>
          <ImageGrid columns={3} images={PRES} mb={'1em'} />
          <h3>Available for Purchase</h3>
          <p>
            Each of my designs are available for purchase from{' '}
            <a
              href="https://www.etsy.com/shop/PardontheApparel"
              target="_blank"
              rel="noreferrer noopener"
            >
              my Etsy store
              <MaterialIcon icon={'open_in_new'} size={'1.125rem'} />
            </a>
            .
          </p>
          <ScrollTop />
          <Hr />
          <Next type={'designs'} id={2} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Presidents;
