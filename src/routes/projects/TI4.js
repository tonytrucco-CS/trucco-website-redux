import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';

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
          <Hr />
          <h2 id="problem">The Problem</h2>
          <p>
            There are a lot of components to keep track of in this game, all
            while trying to out-strategize your opponents. And each round, a new
            objective becomes available for each player to attempt to score.
            Thus, keeping track of who has already scored what (including
            yourself) is vitally important. Unfortunately, this is difficult to
            do with the materials provided by the game itself.
          </p>
          <Hr />
          <h2 id="scope">Scope</h2>
          <p></p>
          <Hr />
          <h2 id="role">My Role</h2>
          <p></p>
          <Hr />
          <h2 id="designs">Designs</h2>
        </Limiter>
      </Card>
    </Container>
  );
};

export default TI4;
