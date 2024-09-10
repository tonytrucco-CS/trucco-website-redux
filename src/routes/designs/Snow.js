import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import Next from '../../components/Next';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const Snowpals = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/designs" label="Designs" />
          <h1>Snowpals Poster</h1>
          <p>
            If you're old enough, you might remember a PS2 game called{' '}
            <em>NHL Hitz</em>. It let you create custom teams, complete with
            logos and player nicknames. My younger brother made a team of
            animals and odd characters for him and his friends, naming it
            "Snowpals".
          </p>
          <Hr />
          <h2>My Poster</h2>
          <p>
            One year, I decided to give my brother a poster as a gift and chose
            to design something for his "Snowpals" team. Since there were no
            premade vector graphics for hockey players with bull heads and such,
            I had to create all the graphics from scratch.
          </p>
          <p>
            Despite moving houses and adding numerous children to his clan, my
            brother keeps the poster as a constant piece of house art, much to
            my delight.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Posters/snowpals.jpg?updatedAt=1678473898835${transforms.noheight_lg}`,
              alt: 'Hockey-themed poster for a team called Snowpals, with seven players in silhouette against an icy backdrop.',
              description:
                "My brother's character was Rhode Island Red, which is why he's heavily featured.",
            }}
            mb={'2em'}
          />
          <ScrollTop />
          <Hr />
          <Next type={'designs'} id={4} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Snowpals;
