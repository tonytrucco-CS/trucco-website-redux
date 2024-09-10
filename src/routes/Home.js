import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Hr from '../components/Hr';
import ImageGrid from '../components/ImageGrid';
import Limiter from '../containers/Limiter';
import { transforms } from '../utils/helpers';

const PROJECTS = [
  {
    src: `https://ik.imagekit.io/ti4score/objective_view.png?updatedAt=1725559798874${transforms.wide_lg}`,
    alt: 'Background selection screen for a Twilight Imperium score tracker',
    href: '/projects/twilight-imperium-score-tracker',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/browse.jpg?updatedAt=1679422453023${transforms.wide_lg}`,
    alt: 'A browse page, showing a list of product results and product filters',
    href: '/projects/ebth',
  },
];

const DESIGNS = [
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Posters/snowpals.jpg?updatedAt=1678473898835&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'Ice-themed poster for a ficticious hockey team called The Snowpals, which features a snowman',
    href: '/designs/snowpals',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/2022_gen.jpg?updatedAt=1682000424381&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'Man wearing a purple t-shirt with a moon-themed design that says Camp Trucco',
    href: '/designs/camp-trucco',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Painting/beholder.jpg?updatedAt=1679507938326&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'A 28mm miniature of a Beholder from Dungeons and Dragons, painted orange',
    href: '/designs/miniatures',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Illustration/roosevelt.png?updatedAt=1678474012219&tr=w-400,h-400,c-maintain_ratio,fo-top_left,f-jpg,bg-FFFFFF',
    alt: 'Graphic illustration of Teddy Roosevelt wearing a bear-themed hoodie',
    href: '/designs/presidents',
  },
];

const Home = () => {
  return (
    <>
      <Container>
        <Card hero>
          <Limiter>
            <h1>Tony Trucco</h1>
            <p>
              Hi there, I'm Tony Trucco. I am a designer/developer who
              specializes in User Interface and User Experience design (UI/UX).
              Look around and let me know what you think. I'd love to hear from
              you.
            </p>
            <Button to="about">Learn More About Me</Button>
            <Hr />
            <h2>Projects</h2>
            <p>
              This work showcases a few of my professional and side projects,
              highlighting my skills and experience.
            </p>
            <ImageGrid images={PROJECTS} columns={2} mb={'2em'} />
            <Button to="projects">View More Projects</Button>
            <Hr />
            <h2>Designs</h2>
            <p>
              A bit more of a personal touch, creative work I'm interested in
              that goes beyond web design.
            </p>
            <ImageGrid images={DESIGNS} columns={4} mb={'2em'} />
            <Button to="designs">See More Designs</Button>
            <Hr />
            <h2>Process</h2>
            <p>
              Every designer has a process, and they can't wait to tell you
              about it. I'm no different.
            </p>
            <Button to="process">Dive Deep into Process</Button>
          </Limiter>
        </Card>
      </Container>
    </>
  );
};

export default Home;
