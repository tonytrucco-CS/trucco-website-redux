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

const EBTH_SAMPLE = [
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/EBTH/chess.avif?updatedAt=1680542277592',
    alt: 'A chessboard with Egyptian-inpsired pieces made of resin against a white background',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/EBTH/irondoors.avif?updatedAt=1680542277235',
    alt: 'A side table constructed using wrought iron and furnace doors against a white background',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/EBTH/dresser.avif?updatedAt=1680542277495',
    alt: 'Mid century modern dresser with 9 drawers against a white background',
  },
  {
    src: 'https://ik.imagekit.io/ti4score/Portfolio/EBTH/telescope.avif?updatedAt=1680542277460',
    alt: '19th century nautical telescope against a white background',
  },
];

const EBTH_OLD = [
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/Before/Home_Page.png?updatedAt=1678462298576${transforms.wide_lg}`,
    alt: 'Current home page design, featuring multiple sales and a marketing banner',
    description:
      'Notice how the home page does not present any popular categories in the navigation.',
  },
  {
    src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/Before/Item_Details.png?updatedAt=1678462298493${transforms.wide_lg}`,
    alt: 'Current item details design, showcasing the item in an image gallery on the left, with details on the right',
    description:
      'The item details page, with a hard-to-discover image gallery.',
  },
];

const EBTH = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/projects" label="Projects" />
          <h1>Everything But The House</h1>
          <ChipScroll>
            <Chip label="Problem" to="#problem" hash />
            <Chip label="Scope" to="#scope" hash />
            <Chip label="My Role" to="#role" hash />
            <Chip label="Designs" to="#designs" hash />
            <Chip label="Testing" to="#testing" hash />
            <Chip label="Status" to="#status" hash />
          </ChipScroll>
          <p>
            <strong>Everything But The House</strong> is an online auction
            website where users can find and bid on almost anything. EBTH
            specializes in one-of-a-kind finds and generally focuses on
            second-hand goods.
          </p>
          <p>
            Visit their{' '}
            <a
              href="https://www.ebth.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              website
              <MaterialIcon icon={'open_in_new'} size="18px" />
            </a>{' '}
            and get yourself something nice.
          </p>
          <ImageGrid images={EBTH_SAMPLE} columns={4} />
          <small>Real items that I've purchased from EBTH</small>
          <Hr />
          <h2 id="problem">Problem Statement</h2>
          <p>
            The EBTH website does not represent the premium quality of the
            brand, nor does it properly cater to the browsing methods used by
            actual customers.
          </p>
          <p>
            From an internal perspective, the site's marketing and sales content
            is difficult to update.
          </p>
          <ImageGrid images={EBTH_OLD} columns={1} gap="3rem" />
          <Hr />
          <h2 id="scope">Project Scope</h2>
          <p>
            This project was scoped as an entire rewrite and redesign of the
            EBTH website. I originally estimated it would take a calendar year
            to complete the initial redesign. The design tasks included the
            following:
          </p>
          <ul>
            <li>
              Create and test wireframes for a new website design and flow
            </li>
            <li>
              Reimagine the site design to better reflect branding guidelines
            </li>
            <li>
              Create a design system of components for reuse across multiple
              projects
            </li>
            <li>
              Continually test design changes with user testing and interviews
            </li>
            <li>Implement the new designs and fuctionality across the site</li>
          </ul>
          <Hr />
          <h2 id="role">My Role</h2>
          <p>
            I was the lead designer throughout this project, getting promoted to
            Director of User Experience partway through. It was my job to create
            the new user flows and conduct all testing related to the redesign.
            I also coordinated with marketing, development, and leadership to
            get buy-in and ensure alignment throughout the process.
          </p>
          <p>
            I worked with the frontend team to build the design system
            components in React and Storybook, ensuring each component was
            flexible enough to meet our needs well into the future.
          </p>
          <p>
            I created and analyzed all user testing scenarios, taking feedback
            and incorporating changes as needed.
          </p>
          <Hr />
          <h2 id="designs">Designs</h2>
          <h3>Categories in the Navigation</h3>
          <p>
            During my discovery phase—where I surveyed current customers and
            looked at analytics—I discovered that there were two methods of
            browsing the website: by Sale or by Category. The EBTH site focused
            on Sales but neglected Categories, so that was one of the first
            major design problems I tackled.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/home.jpg?updatedAt=1679422443254${transforms.wide_lg}`,
              alt: 'The redesigned home page, featuring popular categories in the top navigation',
              description:
                'The categories in the header are listed alphabetically, but the goal was to use data and list them by popularity.',
            }}
          />
          <h3>Website Aesthetics</h3>
          <p>
            The marketing team had long lamented that the aesthetics of the
            website did not match the current direction of the branding. Even
            worse, there was no design guide for web content. I quickly worked
            to create a design language that would satisfy marketing and made
            sure to codify it into a design guide.
          </p>
          <ImageGrid
            columns={2}
            images={[
              {
                src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/Before/Browse.png?updatedAt=1678462298560${transforms.wide_lg}`,
                alt: 'The first page of results featuring artwork available to bid on, presented in a grid format with 4 across',
                description: 'Old and busted',
              },
              {
                src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/browse.jpg?updatedAt=1679422453023${transforms.wide_lg}`,
                alt: 'The first page of results featuring vases available to bid on, presented in a grid format with 4 across',
                description: 'The new hotness',
              },
            ]}
          />
          <h3>Image Thumbnails</h3>
          <p>
            A subtle change on the item details page, aside from the new
            branding, was the addition of clickable thumbnails. I learned that
            most users liked to browse all of the available images for an item,
            so I wanted to make them as easy to access as possible.
          </p>
          <ImageCard
            image={{
              src: `https://ik.imagekit.io/ti4score/Portfolio/EBTH/After/item_details.jpg?updatedAt=1679429196979${transforms.four3_lg}`,
              alt: 'Item details page, with image gallery on the left and details on the right',
              description: 'Easy-to-discover image thumbnails.',
            }}
          />
          <Hr />
          <h2 id="testing">Testing</h2>
          <p>
            For testing, I utilized a three-pronged approach: surveys, internal
            testing, and user interviews.
          </p>
          <h3>Surveys</h3>
          <p>
            Both internal and external customers filled out surveys that focused
            on the current website experience. I asked what features they liked,
            what features they didn't, and about browsing habits.
          </p>
          <h3>Internal Testing</h3>
          <p>
            At each stage of design, internal testing was conducted to gauge the
            efficacy of designs and to ensure it met expectations. I like using
            internal customers at this stage because it helps to get buy-in from
            many different departments, which is especially helpful on long-term
            projects.
          </p>
          <h3>User Interviews</h3>
          <p>
            As development progressed, I made use of a tool called UserTesting
            to test designs and interview testers about their experience. These
            were almost exclusively people who had not used the EBTH website but
            did have experience with auction websites.
          </p>
          <Hr />
          <h2 id="status">Status</h2>
          <p>
            As of right now, the website changes I worked on are yet to go live.
            I left the company in early 2022, and the only remaining hurdles at
            that time were technical considerations on the backend.
          </p>
          <ScrollTop />
          <Hr />
          <Next type={'projects'} id={1} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default EBTH;
