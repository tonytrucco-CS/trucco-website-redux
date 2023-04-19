import styled from 'styled-components';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import { fonts } from '../../constants/variables';
import Limiter from '../../containers/Limiter';
import ScrollTop from '../../components/ScrollTop';

const Span = styled.span`
  font-family: ${fonts.serif};
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Index = () => {
  return (
    <Container>
      <Hero title="Process" limited />
      <Card hero>
        <Limiter>
          <h2>What is process?</h2>
          <p>
            Process is a set of organized tasks that can be followed to achieve
            a desired objective.
          </p>
          <p>
            When people think of process, they think of something laborious and
            time consuming. Often it's considered, and then discarded in favor
            of "getting work done". The truth is, however, that a good process
            accelerates productivity and limits the amount of rework down the
            line. When I work with companies and clients, this is what I try to
            keep in mind.
          </p>
          <p>
            So, let's get into it. What is <em>my</em> process?
          </p>
          <Nav>
            <Chip label="Discovery" to="#discovery" hash />
            <Chip label="Sketches" to="#sketches" hash />
            <Chip label="Wireframes" to="#wireframes" hash />
            <Chip label="Prototypes" to="#prototypes" hash />
            <Chip label="Code" to="#code" hash />
            <Chip label="Testing" to="#testing" hash />
          </Nav>
        </Limiter>
      </Card>
      <Card hero>
        <Limiter>
          <img
            src="https://ik.imagekit.io/ti4score/Portfolio/diamond_design.svg?updatedAt=1679427387742"
            alt="Double Diamond design methodology, which starts with a problem, expands out during discovery, condenses as a problem is defined, then expands again as solutions are created and finally condenses once more on the final solution."
          />
          <small>
            Any design process is almost never rigidly sequential. Steps loop
            back and sometimes repeat. The double diamond design system above
            illustrates the natural expansion and contraction of every design
            flow; the problem space is explored until the problem is properly
            defined, then solutions are rapidly built and tested until the final
            product is delivered.
          </small>
          <h2 id="discovery">
            <Span>Step 1:</Span> Discovery
          </h2>
          <p>
            The most important part of my design process has nothing to do with
            creating designs. When a new task or project is given to me, the
            first thing I do is ask questions. Any good designer will tell you
            that the problem they've been given is almost never the actual
            problem that needs solving. It is up to me to discover what is
            actually going on, and then help the client find a solution.
          </p>
          <p>
            Asking questions, however, is about more than just getting to the
            root problem. It's also about learning as much as I can about the
            client and whomever is going to be using whatever solution I create.
          </p>
          <h3>
            <Span>Step 1a (optional):</Span> Meet with SMEs
          </h3>
          <p>
            Throughout my career I have often worked on internal tools that
            require specialized training or institutional knowledge. This is
            where it's important to have a discussion with Subject Matter
            Experts (SMEs) and utilize their wealth of experience.
          </p>
          <p>
            Almost every problem you can imagine in a given system has been
            encountered by the SMEs, whether they realize it or not.
          </p>

          <Hr />

          <h2 id="sketches">
            <Span>Step 2:</Span> Sketches
          </h2>
          <p>
            Often, sketching is literally pulling out paper and pencil and
            crafting an initial solution in the most simple terms. However, when
            I think of sketching, what I'm really thinking about is creating a
            mental model of the system I'm dealing with. Afterall, how can I
            confidently give my client a reliable solution if I don't have an
            understanding of the space I'm working in?
          </p>
          <p>
            Sometimes a sketch can be a conversation. This means talking to the
            client and reiterating the process that leads up to the problem I'm
            trying to solve, along with the desired result. It is only when I
            can accurately articulate this scenario to the client—either through
            a sketch or a conversation—that I feel confident enough to begin
            designing in earnest.
          </p>

          <Hr />

          <h2 id="wireframes">
            <Span>Step 3:</Span> Wireframes
          </h2>
          <p>
            After creating an accurate mental model of the system/problem and a
            potential solution, the next step is creating wireframes. These are
            often meant to be simple boxes of the basic structure, sometimes
            with interactive elements.
          </p>
          <p>
            A good wireframe should be quick and easy to produce. It can be low
            or high fidelity, but what's important is that it's a starting point
            for a conversation.
          </p>

          <Hr />

          <h2 id="prototypes">
            <Span>Step 4:</Span> Prototypes
          </h2>
          <p>
            A prototype is simply an interactive wireframe. Sometimes a
            prototype and a wireframe are the same thing. The goal with this
            step is to get something in front of a client or target audience
            that they can use—without having to write hundreds of lines of code.
          </p>
          <p>
            The target audience will often dictate the level of fidelity in a
            prototype. If the project is for internal use by SMEs, I will often
            opt for lower fidelity because it's likely that the core design
            language is changing very little. For products that don't yet exist,
            or if the audience is more likely to be external customers, high
            fidelity will often yield better results.
          </p>
          <p>
            Like all of the steps in my process, this one is flexible, guided by
            what's going to best serve the client.
          </p>

          <Hr />

          <h2 id="code">
            <Span>Step 5:</Span> Code
          </h2>
          <p>
            That's right, I can code as well. In fact, I coded this entire
            website. I got my start as a frontend engineer, and I still enjoy
            creating frontend code and styling. I like to work with engineers
            who can put all of the data each screen requires onto the page and
            then hand it over to me so I can build the structure and styling.
          </p>
          <p>
            Accessibility is incredibly important to me, so every page I build{' '}
            <em>starts</em> with accessiblity in mind, rather than something
            that gets tacked on later.
          </p>
          <p>The internet is for everyone.</p>

          <Hr />

          <h2 id="testing">
            <Span>Special Mention:</Span> Testing
          </h2>
          <p>
            When I am working through a design problem it's important to keep
            testing in mind. Testing can include interviews, surveys, A:B
            testing, etc. The only true requirement is that it cannot wait until
            the design has been "finished." Testing must be frequent and it must
            start early.
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
