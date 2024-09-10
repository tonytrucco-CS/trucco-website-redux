import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import ImageGrid from '../../components/ImageGrid';
import Next from '../../components/Next';
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

const TEE2024 = [
  {
    src: `https://ik.imagekit.io/ti4score/2024-tee-design.png?updatedAt=1725566746686${transforms.square_lg}`,
    alt: '2024 Camp Trucco illustration, featuring a circular design surrounded by stars and text that cuts through, saying Camp Trucco.',
    description: 'T-shirt design',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/T-Shirts/2024_gen.jpg?updatedAt=1725570680333${transforms.square_lg}`,
    alt: 'Green graphic tee worn by a white male against a brick background',
    description: 'Printed and worn',
  },
];

const Camp = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/designs" label="Designs" />
          <h1>Camp Trucco T-Shirts</h1>
          <p>
            Starting in 2014, my immediate family decided to get together every
            other year at a state park to "camp" for the weekend. That first
            year, I created t-shirts for everyone to wear. The tradition has
            continued, with each new camp providing an opportunity to express
            different designs and techniques.
          </p>
          <p>
            Each design featured here was a collaboration between myself and my
            wife, Nikki, who is a fellow designer. A keen observer will notice
            common design elements and themes that we've carried through many of
            the designs for consistency.
          </p>
          <Hr />
          <h2>Recent Designs</h2>
          <h3>2024</h3>
          <p>
            The shirts for this year were the first ones that we screen printed
            ourselves, so we opted for a single-color design to reduce the
            likelihood of print failures. I call this design "pilsner" and Nikki
            calls it "snake oil".
          </p>
          <ImageGrid columns={2} images={TEE2024} mb={'2em'} />
          <h3>2022</h3>
          <p>
            Graphically, I think it's one of the most interesting designs ever
            created for camp, combining a whimsical aesthetic with elements that
            echo the Hocking Hills location. The purple color of the shirt
            enhances the vintage appeal.
          </p>
          <ImageGrid columns={2} images={TEE2022} mb={'2em'} />
          <h3>2020</h3>
          <p>
            In 2020 Nikki and I achieved t-shirt nirvana. The design, combined
            with the color selection for the shirt (black), established this
            camp tee as a go-to for family members for any and all get-togethers
            in the future.
          </p>
          <p>
            The purposeful misregistration of the design helps to make the shirt
            look "hand-crafted".
          </p>
          <ImageGrid columns={2} images={TEE2020} mb={'2em'} />
          <h3>2018</h3>
          <p>
            This design is more simplistic than the others, but nevertheless
            provides a pleasing aesthetic when displayed on the red t-shirts,
            with the yellow of the graphic hinting at the flame and sun designs.
          </p>
          <ImageGrid columns={2} images={TEE2018} mb={'2em'} />
          <ScrollTop />
          <Hr />
          <Next type={'designs'} id={1} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Camp;
