import { useRouteError } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <Gradient />
      <Main>
        <Container>
          <Hero title="Oops!" />
          <Card hero>
            <p>An error has occurred.</p>
            <p>
              {error.statusText || error.message}
            </p>
          </Card>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default ErrorPage;