import { useRouteError } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import Gradient from "../components/Gradient";
import Hero from "../components/Hero";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Gradient />
      <Container>
        <Hero title="Oops!" />
        <Card hero>
          <p>An error has occurred.</p>
          <p>
            {error.statusText || error.message}
          </p>
        </Card>
      </Container>
    </>
  )
}

export default ErrorPage;