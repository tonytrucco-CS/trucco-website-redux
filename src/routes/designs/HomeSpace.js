import Back from '../../components/Back';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Hr from '../../components/Hr';
import Next from '../../components/Next';
import ScrollTop from '../../components/ScrollTop';
import Limiter from '../../containers/Limiter';

const HomeSpace = () => {
  return (
    <Container>
      <Card hero>
        <Limiter>
          <Back to="/designs" label="Designs" />
          <h1>Home Space</h1>
          <p>
            <strong>Home Space</strong> is a 3D rendered video, created as part
            of my senior capstone when I was at DAAP (2008). It features a
            fictional character named Captain Mitchel on his quest to find water
            on the moon.
          </p>
          <p>
            It would be natural to ask why I am including a school project from
            2008 on my professional website. The answer: because it's a great
            reflection of who I am, and what I'm interested in. Plus, despite
            its flaws and limitations, I adore it.
          </p>
          <Hr />
          <h2>Watch the Video</h2>
          <p>
            Enjoy <em>Home Space</em> in all its glory below. Narration for the
            video was provided by my friend, Brian Sespico. Everything
            else—modeling, texturing, animating, recording, and editing—is by
            me.
          </p>
          <div
            style={{
              padding: '66.67% 0 0 0',
              position: 'relative',
              marginBottom: '2em',
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/38610964?h=16d5f4cdd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Home Space"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <ScrollTop />
          <Hr />
          <Next type={'designs'} id={5} />
        </Limiter>
      </Card>
    </Container>
  );
};

export default HomeSpace;
