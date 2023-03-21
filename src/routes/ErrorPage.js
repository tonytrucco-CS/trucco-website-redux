import { useRouteError } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Gradient from '../components/Gradient';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Limiter from '../containers/Limiter';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <Gradient />
      <Main>
        <Container>
          <Hero title="Oops!" limited />
          <Card hero>
            <Limiter>
              <h2>
                {error.status}: {error.statusText || error.message}
              </h2>
              <p>Let's get you out of here. Go back to the home page.</p>
              <Button to="/">Return Home</Button>
            </Limiter>
          </Card>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default ErrorPage;
