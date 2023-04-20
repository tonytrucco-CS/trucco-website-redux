import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import ImageGrid from '../../components/ImageGrid';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';

const TEE2018 = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/camptrucco2018.png?updatedAt=1681927915985${transforms.square_lg}`,
    alt: '2018 Camp Trucco illustration, featuring a circle shape with a camp fire in the middle.',
    description: 'T-shirt design',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/2018_gen.jpg?updatedAt=1682000426736${transforms.square_lg}`,
    alt: 'Red graphic tee worn by a white male against a brick background',
    description: 'Printed and worn',
  },
];

const TEE2020 = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/camptrucco2020.png?updatedAt=1681928745860${transforms.square_lg}`,
    alt: '2020 Camp Trucco illustration, featuring a triangle shape against a black background.',
    description: 'T-shirt design',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/2020_gen.jpg?updatedAt=1682000425652${transforms.square_lg}`,
    alt: 'Black graphic tee worn by a white male against a brick background',
    description: 'Printed and worn',
  },
];

const TEE2022 = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/camp2022.png?updatedAt=1681928563520${transforms.square_lg}`,
    alt: '2022 Camp Trucco illustration, featuring curvy, vintage type that says Camp Trucco.',
    description: 'T-shirt design',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/2022_gen.jpg?updatedAt=1682000424381${transforms.square_lg}`,
    alt: 'Purple graphic tee worn by a white male against a brick background',
    description: 'Printed and worn',
  },
];

const Camp = () => {
  return (
    <Container>
      <Hero title="Camp Trucco T-Shirts" limited />
      <Card hero>
        <Limiter>
          <Back to="/designs" label="← Designs" />
          <h2>What is Camp Trucco?</h2>
          <p>
            Starting in 2014, my immediate family started to gather once every
            other year at a state park to hang out for the weekend and be with
            one another. Starting that year, I created camp t-shirts for
            everyone to wear. They have become a huge reveal each time now, and
            family members look forward to the shirts almost as much as camp
            itself.
          </p>
          <Hr />
          <h2>Recent Designs</h2>
          <h3>2018</h3>
          <p>
            Starting in 2018, I began to collaborate with my then girlfriend,
            Nikki (now wife). This first collaboration was the last time I had
            final say over the design, and it's definitely the weakest of this
            new era her and I established. Over the years we would learn how to
            work together on designs, and they only got better from here.
          </p>
          <ImageGrid columns={2} images={TEE2018} />
          <h3>2020</h3>
          <p>
            In 2020 Nikki and I achieved t-shirt nirvana. The design, combined
            with the color selection for the shirt (black), established this
            camp tee as a go-to for family members for any and all get-togethers
            in the future.
          </p>
          <ImageGrid columns={2} images={TEE2020} />
          <h3>2022</h3>
          <p>
            Our most recent design, and our most ambitious. Graphically, I think
            it's one of the most interesting designs we've ever created. The
            purple color of the shirt makes it less versatile in the Trucco
            wardrobe, but it was nonetheless very well received.
          </p>
          <ImageGrid columns={2} images={TEE2022} />
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Camp;
