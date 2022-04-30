import { GitHub, LinkedIn, Mail, Twitter } from '@material-ui/icons';
import { AttentionSeeker, Slide, Zoom } from 'react-awesome-reveal';
import Testimonials from '../../Testimonials/Testimonials';
import './Homepage.css';

function Homepage() {
  return (
    <div className="App">
      <section className="intro" id="home">
            <div className="align-left">
                <h1 className="hello">Hello, I'm David Ouma,</h1>
                <h2 className="job-des">a <span className="special ">Front-end Developer</span></h2>
                <p className="belief openner">
                    "I'm passionate about sharing knowledge, implementing product designs and solving problems using front-end technologies. I'm also a team-player and I'm always looking forward to join a passionate team of developers. At the moment I'm open to Front-end opportunities in small start-ups as well a big companies"
                </p>
        </div>
        <AttentionSeeker delay="20">
        <div className="socials">
          <ul>
            <li>
            <a href="https://github.com/daudi13" rel="noreferrer" target="_blank">
            <GitHub className="social-icon"/>
          </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/david-owour-ouma/" rel="noreferrer" target="_blank">
            <LinkedIn className="social-icon" />
          </a>
            </li>
            <li>
            <a href="mailto:davouma13@gmail.com" rel="noreferrer" target="_blank">
            <Mail className="social-icon"/>
          </a>
            </li>
            <li>
            <a href="https://twitter.com/davouma" rel="noreferrer" target="_blank">
            <Twitter className="social-icon"/>
          </a>
            </li>
          </ul>
        </div>
        </AttentionSeeker>
      </section>
      <section className="about">
        <div className="about-title"><h2>About Me</h2><span><hr className="line"/></span></div>
        <div className="desc">
          <Slide>
          <div className="wording">
        <p className="belief about-desc">
          I'm a front-end developer who enjoys bringing ideas to life by translating web designs and wireframes to functional websites. I'm also an effective developer who brings out the vision and executes the strategy with minimal resources
        </p>
        <p className="belief about-desc">
          In my 3 years of experience in web development, I've developed extensive knowledge in :
        </p>
        <ul className="list">
          <li> Front-end development: ReactJS, Vanilla Javascript, API, JEST, Redux, Thunk, Unit testing</li>
          <li>Styling: Styled-components, SASS, CSS-in-JS, Bootstrap </li>
          <li>Pair programming and remote working</li>
          <li>Version Control : GIT, Github</li>
          <li>Product management : Figma, wireframing</li>
          <li>Hosting : Heroku, Githubpages, Vercel, Netlify </li>
          <li>Research : Google, Stack-overflow, Medium articles </li>
        </ul>
        <p className="belief section-two">
          I believe in diverse skill sets and people as they make products and communities unique. As a developer I believe in changing the world using technology and improving individuals to be better versions of themselves by supporting small businesses and community based organizations with an aim of making the blue planet a better place for each and everyone of us.
            </p>
          </div>
          </Slide>
          <Zoom>
          <img src='../images/20200217_111546(0).jpg' className="pix" alt="David ouma"/>
          </Zoom>
          </div>
      </section> 
      <section className="testimonials">
        <h2 className="testimonial-title">Testimonials</h2>
        <Testimonials />
      </section>
    </div>
  );
}

export default Homepage;