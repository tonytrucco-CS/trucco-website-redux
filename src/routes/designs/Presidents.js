import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Limiter from '../../containers/Limiter';

const Presidents = () => {
  return (
    <Container>
      <Hero title="Presidential Graphics and Tees" limited />
      <Card hero>
        <Limiter>
          <h2>Text</h2>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Presidents;
