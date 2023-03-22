import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Gradient from '../components/Gradient';
import Hero from '../components/Hero';
import Hr from '../components/Hr';
import ImageGrid from '../components/ImageGrid';
import Limiter from '../containers/Limiter';

const ME = [
  {
    src: 'https://ik.imagekit.io/ti4score/tony_ren.jpg?updatedAt=1679506626644&tr=w-300,h-300,c-maintain_ratio,fo-top_left,e-grayscale',
    alt: "It's me! I am dressed as a viking, holding a drinking horn at a Renaissance festival",
  },
  {
    src: 'https://ik.imagekit.io/ti4score/tony_dink.jpg?updatedAt=1679506626403&tr=w-300,h-300,c-maintain_ratio,fo-top_left',
    alt: "Me again, holding one of my cats. We're looking at the camera with a brick background",
  },
  {
    src: 'https://ik.imagekit.io/ti4score/tony_cute.jpeg?updatedAt=1679506626411&tr=w-300,h-300,c-maintain_ratio,fo-top_left',
    alt: 'My hand is resting on my chin as I look to the left with a grin on my face',
  },
];

const PROJECTS = [
  {
    src: 'https://ik.imagekit.io/ti4score/background-selection.png?updatedAt=1678040214361&tr=w-600,h-300,c-maintain_ratio,fo-top_left',
    alt: 'Background selection screen for a Twilight Imperium score tracker',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/browse.jpg?updatedAt=1679422453023&tr=w-600,h-300,c-maintain_ratio,fo-top_left',
    alt: 'A browse page, showing a list of product results and product filters',
  },
];

const DESIGNS = [
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Posters/snowpals.jpg?updatedAt=1678473898835&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'Ice-themed poster for a ficticious hockey team called The Snowpals, which features a snowman',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/camptrucco2022.png?updatedAt=1679507761022&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'Man wearing a purple t-shirt with a moon-themed design that says Camp Trucco',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Painting/beholder.jpg?updatedAt=1679507938326&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'A 28mm miniature of a Beholder from Dungeons and Dragons, painted orange',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/Illustration/roosevelt.png?updatedAt=1678474012219&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
    alt: 'Graphic illustration of Teddy Roosevelt wearing a bear-themed hoodie',
  },
];

const Home = () => {
  return (
    <>
      <Gradient />
      <Container>
        <Hero title="tonytrucco.com" limited />
        <Card hero>
          <Limiter>
            <h2>Welcome!</h2>
            <ImageGrid images={ME} rounded gap="4rem" />
            <p>
              Hi there, I'm Tony Trucco. I am a designer who specializes in User
              Interface and User Experience design (UI/UX). Look around and let
              me know what you think. I'd love to hear from you.
            </p>
            <Button to="about">Learn More About Me</Button>
            <Hr />
            <h2>Stuff I've worked on</h2>
            <ImageGrid images={PROJECTS} columns={2} />
            <p>
              This is work showcasing a few of my professional projects over the
              years, highlighting my skills and years of experience.
            </p>
            <Button to="projects">View My Work</Button>
            <Hr />
            <h2>More than just websites</h2>
            <ImageGrid images={DESIGNS} columns={4} />
            <p>
              A bit more of a personal touch. These are things I'm interested in
              that go beyond web design.
            </p>
            <Button to="designs">See My Stuff</Button>
            <Hr />
            <h2>How I work</h2>
            <p>
              Every designer has a process, and they can't wait to tell you
              about it. I am no different.
            </p>
            <Button to="process">Dive Deep into Process</Button>
          </Limiter>
        </Card>
      </Container>
    </>
  );
};

export default Home;
