import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';

const Snowpals = () => {
  return (
    <Container>
      <Hero title="Snowpals Poster" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>Who or what is a Snowpal?</h2>
          <p>
            If you're old enough, you may recall a game on the PS2 called{' '}
            <em>NHL Hitz</em>. This game would allow you to create your own
            custom team, complete with logo and nicknames for each of the
            players. My younger brother established a team consisting of animals
            and weirdos for him and his friends, calling it Snowpals.
          </p>
          <Hr />
          <h2>My Poster</h2>
          <p>
            As a gift one year I decided to give my brother a poster, and the
            best thing I could think to design was something for the Snowpals.
            Believe it or not, there are no ready-made vector graphics for
            hockey players with bull heads, so I had to create all of the
            graphics from scratch.
          </p>
          <p>
            Despite moving houses and adding numerous children to his clan, my
            brother keeps the poster as a constant piece of house art, much to
            my delight.
          </p>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Snowpals;
