import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';

const Camp = () => {
  return (
    <Container>
      <Hero title="Camp Trucco T-Shirts" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>What is Camp Trucco?</h2>
          <p>
            Starting in 2014, my immediately family started to gather once every
            other year at a state park to hang out and be with one another.
            Beginning that year, I started creating camp t-shirts for everyone
            to wear. They have become a huge reveal each time now, and family
            members look forward to the shirts almost as much as camp itself.
          </p>
          <Hr />
          <h2>Recent Designs</h2>
          <h3>2018</h3>
          <p>
            Starting in 2018 I began to collaborate with my then girlfriend
            Nikki (now wife). This first collaboration was the last time I had
            final say over the design, and it's definitely the weakest of this
            new era her and I established. Over the years we would learn how to
            work together on designs, and they only got better from here.
          </p>
          <h3>2020</h3>
          <p>
            In 2020 Nikki and I achieved t-shirt nirvana. The design, combined
            with the color selection for the shirt (black), established this
            shirt as a go-to for family members for any and all get-togethers.
          </p>
          <h3>2022</h3>
          <p>
            Our most recent design, and our most ambitious. Graphically I think
            it's one of the most interesting designs we've ever created. The
            purple color of the shirt makes it less versatile in the Trucco
            wardrobe, but it was nonetheless very well received.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Camp;
