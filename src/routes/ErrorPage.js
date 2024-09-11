import { useRouteError } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Main from '../components/Main';
import Limiter from '../containers/Limiter';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Main>
      <Container>
        <Card hero>
          <Limiter>
            <h1>
              {error.status}: {error.statusText || error.message}
            </h1>
            <p>Let's get you out of here. Go back to the home page.</p>
            <Button to="/">Return Home</Button>
          </Limiter>
        </Card>
      </Container>
    </Main>
  );
};

export default ErrorPage;
