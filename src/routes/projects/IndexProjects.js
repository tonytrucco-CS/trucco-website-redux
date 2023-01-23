import Card from "../../components/Card";
import Container from "../../components/Container";
import Hero from "../../components/Hero";

const IndexProjects = () => {
  return (
    <Container>
      <Hero title="Projects" />
      <Card hero>
        <p>What you'll find on this page is a collection of projects that I'ved worked on as 
        a contractor and a full-time employee. I try to approach each client and situation with 
        the respectful differences they possess while maintaining an objective and time-tested 
        process.</p>
      </Card>
    </Container>
  )
}

export default IndexProjects;