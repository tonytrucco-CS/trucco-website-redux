import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';

const Minis = () => {
  return (
    <Container>
      <Hero title="Painted Miniatures" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>Why paint miniatures?</h2>
          <p>
            Growing up, my older brother had board games like HeroQuest and
            Battle Masters. These are fantasy games where monsters and magic are
            common and the game pieces are detailed wonderfully as plastic
            models. He painted them all and I fell in love with the concept.
          </p>
          <Hr />
          <h2>My Minis</h2>
          <p>
            Despite growing up around the hobby, I didn't pick it up myself
            until I was in my 30s. I dove in headfirst, however, and now I have
            almost 400 miniatures in various states of completion. I even have a
            spreadsheet tracking my progress.
          </p>
          <h3>HeroQuest</h3>
          <p>
            When Hasbro rereleased the game a few years ago I got inspired. I
            opted to download STLs of the original figures and print them myself
            so that I could paint them all in my own design. It took many
            months, but the finished product was worth the wait. I dare say I
            may have even done better than my brother before me.
          </p>
          <h3>Tabletop RPGs</h3>
          <p>
            The bulk of my miniatures are for use in tabletop games like
            Pathfinder and Dungeons & Dragons. I've tried to collect a broad
            swath of options so that I have a miniature for almost every
            situation that arises.
          </p>
          <p>
            My favorite piece is my Beholder. I spent countless hours working to
            paint the details and make it look as menacing as possible.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Minis;
