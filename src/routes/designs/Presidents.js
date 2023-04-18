import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';

const Presidents = () => {
  return (
    <Container>
      <Hero title="Presidential Graphics and Tees" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>What is this series?</h2>
          <p>
            I have a love and fascination for many of the presidents in American
            history. I also enjoy a good mash-up and creating unexpected
            designs. The natural cross section of those interests is a series of
            designs and t-shirts that feature presidents <em>and</em> mash-ups.
          </p>
          <p>
            I think the interest started many years ago when my mother gifted me
            a t-shirt featuring Abraham Lincoln with Wolverine claws. It's such
            a goofy and unexpected combination, and it's tickled my brain for
            ideas ever since.
          </p>
          <Hr />
          <h2>My Designs</h2>
          <h3>Teddy Roosevelt</h3>
          <p>
            Teddy had some major flaws, including a strange sense of machismo,
            but one thing he got right was his desire to protect the beautiful
            landscape of America. He has been linked to bears for an incredibly
            long time, and the teddy bear gets its name from him; this was a
            natural opportunity for an interesting design.
          </p>
          <p>
            The graphic started as a screen print design for a class, but I
            loved the pattern so much I turned it into a t-shirt as well. I call
            it <em>Hoodie Roosevelt</em>, and I love the idea of someone as
            "manly" as Teddy wearing a goofy hoodie with cute ears.
          </p>
          <h3>Harry Truman</h3>
          <p>
            Truman was not a good person. Whereas FDR had serious reservations
            about using nuclear weapons, Truman was less restrained and is the
            president that actually authorized their use against Japan.
          </p>
          <p>
            I wanted to create a design that would parody and critique this
            fateful decision in a subtle manner. I settled on creating a
            cartoonish design emulating the famous pose of Vault Boy from the
            Fallout game series. This pose is derived from the supposed concept
            that if you could cover the mushroom cloud of a nuclear blast with
            your thumb at arm's length, then you were safe from the radiation.
          </p>
          <p>
            This design is called <em>Truman is (not) the Man</em>.
          </p>
          <h3>George Washington</h3>
          <p>
            The first president of America. Washington is generally regarded as
            a fantastic leader and wartime commander. My combination for him
            revolved around incorporating elements from another well-established
            leader, Cyclops from the X-Men. This design doesn't go super deep, I
            just liked the idea of merging these two together.
          </p>
          <p>
            This one is called <em>Cyked to be President</em>.
          </p>
          <Hr />
          <h2>Available for Purchase</h2>
          <p>
            Each of my designs are available for purchase from{' '}
            <a
              href="https://www.etsy.com/shop/PardontheApparel"
              target="_blank"
              rel="noreferrer noopener"
            >
              my Etsy store
            </a>
            .
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Presidents;
