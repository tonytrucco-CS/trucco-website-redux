import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';

const Index = () => {
  return (
    <Container>
      <Hero title="Contact Me" limited />
      <Card hero flex>
        <Limiter>
          <p>
            Normally there would be something like a contact form here, but
            that's a good amount of work. Instead, enjoy some simple links to my
            preferred methods of contact.
          </p>
          <p>
            I would be happy to hear your thoughts on me, my website, or any
            work we might collaborate on in the future. I look forward to
            hearing from you.
          </p>
          <h2>Email</h2>
          <p>
            This is my preferred method of contact. I respond to emails as
            quickly as I can, often within the hour they're received.
          </p>
          <h3>
            <a href="mailto:tonytrucco@gmail.com">tonytrucco@gmail.com</a>
          </h3>
          <Hr />
          <h2>Phone Number</h2>
          <p>
            Expect to leave a voicemail, but I will definitely call you back.
            For better results, send me a text.
          </p>
          <h3>
            <a href="tel:614-282-8186">(614) 282-8186</a>
          </h3>
          <Hr />
          <h2>GitHub</h2>
          <p>
            Although it's not really a means of contacting me, I figure you're
            probably interested in checking out my GitHub.
          </p>
          <h3>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/tonytrucco-CS"
            >
              tonytrucco-CS
            </a>
          </h3>
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
