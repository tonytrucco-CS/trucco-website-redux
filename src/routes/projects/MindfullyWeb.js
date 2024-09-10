import Back from '../../components/Back';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import ImageCard from '../../components/ImageCard';
import ImageGrid from '../../components/ImageGrid';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';
import { transforms } from '../../utils/helpers';
import MaterialIcon from '../../components/MaterialIcon';
import ChipScroll from '../../components/ChipScroll';
import Next from '../../components/Next';

const GUIDE = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/After/Font_Information.png?updatedAt=1681748434372${transforms.four3_lg}`,
    alt: 'Font information for Mindfully, showing heading details from H1s down to small text.',
    description: 'Heading and text information, including margin details.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/After/Colors.png?updatedAt=1681748430282${transforms.four3_lg}`,
    alt: 'Mindfully colors shown in a grid on the left, with usage details on the right.',
    description:
      'Mindfully colors, with accessibility considerations and usage details.',
  },
];

const FILTER = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Before/Care.png?updatedAt=1678462199474${transforms.square_lg}`,
    alt: 'Alphabetized list of care providers on a single page, showing their headshot and names.',
    description:
      'The original, unpaginated, non-filterable list of care providers.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/After/Care.png?updatedAt=1678462213668${transforms.square_lg}`,
    alt: 'Paginated list of care providers, with filtering options on the left.',
    description: 'Updated list of care providers, with easy-to-use filters.',
  },
];

const MindfullyWeb = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/projects" label="Projects" />
          <h1>Mindfully Website Redesign</h1>
          <ChipScroll>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Testing" to="#testing" hash />
          </ChipScroll>
          <p>
            <strong>Mindfully</strong> is a company working to provide online
            mental healthcare for teens and adults. They have a robust roster of
            professionals available for a wide variety of services. Clients are
            able to chat, have online video calls, and receive many different
            services and assessments through Mindfully's online offering.
          </p>
          <p>
            Mindfully provides care in a number of different states, and makes
            use of a few different platforms, including their website, which you
            can visit to{' '}
            <a
              href="https://mindfully.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              learn more
              <MaterialIcon icon={'open_in_new'} size="18px" />
            </a>
            .
          </p>
          <Hr />
          <h2 id="problem">Problem Statement</h2>
          <p>
            The initial website for Mindfully was built with a do-it-yourself
            service called Weebly, which limited the ability to create
            customizations and meant that the staff listing couldn't have
            meaningful filtering for potential clients.
          </p>
          <p>
            Another issue facing Mindfully's website was a lack of accessibility
            and the impact it can have on SEO. Lastly, because of the restricted
            tools in Weebly, the branding of the initial site never quite
            achieved the desired aesthetic.
          </p>
          <Hr />
          <h2 id="scope">Project Scope</h2>
          <p>
            The Mindfully website needed to be redone, so we decided to use
            React as the frontend framework. Before we could start working on
            it, we had to create a plan for how users would interact with the
            site, which involved making wireframes and doing rounds of testing.
            We also moved all of the website content into a CMS called
            Contentful, making sure to integrate it seamlessly with the new
            design.
          </p>
          <Hr />
          <h2 id="role">My Role</h2>
          <p>
            I was brought in to manage the user experience for the updated
            website, oversee the creation of a website branding guide, and code
            the full frontend implementation of the site redesign.
          </p>
          <ImageGrid columns={2} images={GUIDE} />
          <Hr />
          <h2 id="designs">Designs</h2>
          <h3>Improved Navigation</h3>
          <p>
            One of my main areas of concern was the improvement of overall
            navigation across the site. In the previous iteration, too many
            links were getting lost in dropdown menus and the main header was
            beginning to suffer from bloat. I trimmed the list of links down as
            much as was feasible and ensured that all labels were clear.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/Before/Top_Nav.png?updatedAt=1678462200520`,
              alt: 'Header navigation, featuring a sloppy mess of links and structure.',
              description:
                'Original Mindfully website navigation. Each link shown was a dropdown menu, despite the lack of signifier.',
            }}
            mb={'2em'}
          />
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/Mindfully/After/Top_Nav.png?updatedAt=1678462213450`,
              alt: 'Header navigation, with the Mindfully logo on the left, links to pages after that, and then sign in links on the right.',
              description:
                'Updated header design. Notice the updated phrasing to make navigation more clear.',
            }}
            mb={'2em'}
          />
          <h3>Robust Filtering</h3>
          <p>
            A shortcoming of the initial website was its inability to surface
            care providers that matched the needs of potential clients. The
            listing was a single page of all staff, with no filtering available.
          </p>
          <p>
            The most common reason potential and current clients come to the
            Mindfully website is to find information about services and to find
            a care provider that matches their needs. To this end, I created a
            paginated list of the entire care team and implemented intuitive
            filter options to help narrow down the results.
          </p>
          <ImageGrid columns={2} images={FILTER} />
          <h3>Accessibility</h3>
          <p>
            Throughout the entire development process we focused on ensuring
            users with many different needs would be able to find the content
            they were seeking, with every element on the site meeting or
            exceeding WCAG standards.
          </p>
          <Hr />
          <h2 id="testing">Testing</h2>
          <p>
            With a compressed timeline for getting this work accomplished (4
            months), I was unable to perform the robust testing that I prefer.
            However, we managed to work with internal stakeholders throughout
            the process to test and improve the site at various milestones.
          </p>
          <ScrollTop />
          <Hr />
          <Next type={'projects'} id={4} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default MindfullyWeb;
