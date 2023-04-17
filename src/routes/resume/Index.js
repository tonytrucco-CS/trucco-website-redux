import styled from 'styled-components';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Hr from '../../components/Hr';
import Limiter from '../../containers/Limiter';
import Chip from '../../components/Chip';
import ScrollTop from '../../components/ScrollTop';
import Back from '../../components/Back';

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Small = styled.small`
  margin-bottom: 0;
`;

const Index = () => {
  return (
    <Container>
      <Hero title="Tony Trucco's Résumé" limited />
      <Card hero flex>
        <Limiter>
          <Back to="/about" label="← About Me" />
          <h2>PDF</h2>
          <p>
            You can find the PDF version of my résumé by clicking the link
            below.
          </p>
          <p>
            <a
              href="/trucco-resume2023.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              View PDF version of my résumé
            </a>
            .
          </p>
          <Hr />
          <Nav>
            <Chip label="Technology" to="#tech" hash />
            <Chip label="Experience" to="#experience" hash />
            <Chip label="Personal" to="#personal" hash />
            <Chip label="Education" to="#education" hash />
          </Nav>
          <h2 id="tech">Technology</h2>
          <h3>Languages and Frameworks</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
          <h3>Knowledge and Applications</h3>
          <ul>
            <li>UX best practices</li>
            <li>Responsive design</li>
            <li>PURE design methodology</li>
            <li>Version control</li>
            <li>Cross-browser support</li>
            <li>Mobile optimization</li>
            <li>User testing</li>
            <li>Figma</li>
            <li>Balsamiq</li>
            <li>Sketch</li>
            <li>InVision</li>
            <li>Adobe CC Suite</li>
            <li>Sublime Text / VSCode</li>
            <li>GitHub</li>
          </ul>
          <Hr />
          <h2 id="experience">Experience</h2>
          <h3>Vora Labs</h3>
          <Small>Director of User Experience (2022–Present)</Small>
          <ul>
            <li>
              Responsible for managing user experience objectives for multiple
              businesses within Vora Ventures.
            </li>
            <li>
              Created design concepts for templatizing an administrative tool
              meant to view and QA 3D rendered images, moving it from single- to
              multi-client capability.
            </li>
            <li>
              Led the design, testing, and implemention of a website overhaul,
              featuring improved navigation and filtering capabilities.
            </li>
            <li>
              Conceived and designed a gamification strategy for a mental health
              mobile application.
            </li>
            <li>Designed and ran user testing and interview scenarios.</li>
          </ul>
          <h3>Everything But The House</h3>
          <Small>Director of User Experience (2020–2022)</Small>
          <ul>
            <li>
              Interfaced with numerous departments, ensuring buy-in on
              development initiatives and aligning business goals with design
              and development needs.
            </li>
            <li>
              Created a library of design system components for use across
              multiple projects, increasing productivity and reducing
              development time.
            </li>
            <li>
              Designed, tested, and built a redesigned version of the EBTH
              website, incorporating UX best practices and new branding
              guidelines.
            </li>
            <li>
              Built and updated internal tools for warehouse staff—including
              touchscreen enhancements—to improve item processing throughput.
            </li>
            <li>
              Retrofitted entire user-facing website to be ADA compliant,
              allowing EBTH to avoid expensive litigation for non-compliance.
            </li>
          </ul>
          <h3>Tangram Flex</h3>
          <Small>UX Designer / Team Lead (2018–2020)</Small>
          <ul>
            <li>
              Responsible for creating the overall look and feel for the Tangram
              Pro web application.
            </li>
            <li>
              Managed workload and prioritized tasks for the frontend team,
              gathering requirements and distilling customer problems and
              requests into workable user stories.
            </li>
            <li>
              Created and presented design mockups for all customer-facing
              features, incorporating changes and additions in an agile and
              fast-paced work environment.
            </li>
            <li>
              Lead user interviews with internal customers, ensuring that
              implemented features met their expected needs.
            </li>
            <li>
              Met bi-weekly with application stakeholder, presenting initial
              concepts in a design review format for feedback and assurance of
              strategic alignment.
            </li>
          </ul>
          <h3>Axcess Financial</h3>
          <Small>Frontend Designer (2018)</Small>
          <ul>
            <li>
              Created a cohesive design strategy for web applications, taking à
              la carte styles and combining them into a unified system to be
              used across all frontend projects.
            </li>
            <li>
              Established best practices for style sheets and implemented an
              extensible method for styling across the development team.
            </li>
            <li>
              Responsible for creating all initial designs for new pages and
              features, requiring communication and coordination across multiple
              departments.
            </li>
            <li>
              Managed implementation of designs from prototype to production,
              ensuring a suitable user experience across all responsive
              breakpoints.
            </li>
          </ul>
          <h3>CompleteSet</h3>
          <Small>Frontend Engineer (2016–2018)</Small>
          <ul>
            <li>
              Learned React methodology and rewrote entire frontend code-base
              from .erb into React in less than three months.
            </li>
            <li>
              Designed and implemented numerous feature changes to the main
              website to increase mobile-friendliness and reduce user
              frustration. This included an improved search flow and
              dramatically reducing the footprint of imagery across the site,
              utilizing services such as Cloudinary to deliver optimized images.
            </li>
            <li>
              Built, tested, and launched a new bidding feature in less than two
              months. In October 2017, this feature won Best New Product at the
              Greater Cincinnati Venture Association Awards.
            </li>
            <li>
              Created a code-repository template to increase the speed at which
              new products and sites could be designed and launched.
            </li>
            <li>
              Managed and built the entire frontend for a client-facing
              subdomain, utilized by collectible sellers to list and ship
              products.
            </li>
          </ul>
          <h3>NIOSH - contracted through CACI</h3>
          <Small>Web Author (2015–2016)</Small>
          <ul>
            <li>
              Managed the development and distribution of web content for all of
              NIOSH through the proprietary CMS system.
            </li>
            <li>
              Collaborated with clients and the Visual Communications team to
              create graphics and presentations that communicated complex,
              scientific topics to the general public and other target
              audiences.
            </li>
            <li>
              Guided the process of updating NIOSH's custom web ticket system
              into a robust and easy-touse application that could be implemented
              institute-wide.
            </li>
            <li>
              Worked with the Branch Chief of the Information Resources and
              Distribution Branch to update intranet pages with a more intuitive
              and user-friendly design.
            </li>
            <li>
              Received three Flying High awards in less than a year for going
              above and beyond the requirements of the position on multiple
              occasions.
            </li>
          </ul>
          <h3>Top Gun Sales Performance</h3>
          <Small>Interaction Designer (2012–2015)</Small>
          <ul>
            <li>
              Lead UI/UX designer for all client-facing applications,
              responsible for meeting business requirements and targeted goals
              between clients and the development leads.
            </li>
            <li>
              Lead developers through the construction of frontend interfaces
              using Foundation, HAML, SASS and Angular.
            </li>
            <li>
              Built testing scenarios and lead user testing for applications.
            </li>
            <li>Developed and implemented a new style guide and brand.</li>
            <li>
              Lead the design and UX effort for an online, resource viewing
              application. It was implemented to simplify the complex process of
              sharing internal resources.
            </li>
            <li>
              Created 'Welcome' touchscreens for the Mason Tech Center. This
              included designing each page, mocking up all interactions, and
              implementing the entire frontend design in one week.
            </li>
            <li>
              Acted as lead designer and project manager for interactive menu
              boards for an external client.
            </li>
          </ul>
          <h3>Hobsons</h3>
          <Small>Web Designer (2008–2012)</Small>
          <ul>
            <li>
              Lead designer for Hobsons' Professional Services, directly
              responsible for generating $600,000 of revenue annually.
            </li>
            <li>
              Standardized HTML/E-mail professional services to improve cost of
              services.
            </li>
            <li>
              Created, from inception to production, Hobsons' Flash-based Group
              Chat application using Adobe Flex against an asynchronous ASMX
              service. Designed the layout and developed all images, widgets,
              and UI elements using vector tools and Adobe Flash.
            </li>
            <li>
              Created new product offerings for Professional Services such as
              the Online Orientation application and Student Adviser Portal in
              Flash.
            </li>
          </ul>
          <Hr />
          <h2 id="personal">Personal Projects and Services</h2>
          <Small>Web Design, Front-End Services, Personal Art</Small>
          <h3>Achievements</h3>
          <ul>
            <li>
              Designed and built the frontend for an online score tracker for
              the board game Twilight Imperium.
            </li>
            <li>
              Designed and built a mobile-friendly web application for serving
              cards in a family board game. This online system replaced an
              inconsistent and analog method that was previously used. New cards
              could also be added into the game via an online submission form.
            </li>
            <li>
              Created numerous designs for t-shirts utilizing multiple methods
              of art style, including handdrawn, vector-based, and
              image-manipulated solutions.
            </li>
            <li>
              Painted hundreds of D&D-based miniatures, incorporating various
              painting techniques such as dry brushing, wash painting, and edge
              highlighting.
            </li>
            <li>
              Designed and built the website for a family business, addressing
              multiple company needs and delivering a final product ahead of
              schedule.
            </li>
          </ul>
          <Hr />
          <h2 id="education">Education</h2>
          <h3>University of Cincinnati</h3>
          <Small>Class of 2008</Small>
          <p>
            Bachelor of Science in Digital Design from the College of Design,
            Architecture, Art and Planning
          </p>
          <ScrollTop />
        </Limiter>
      </Card>
    </Container>
  );
};

export default Index;
