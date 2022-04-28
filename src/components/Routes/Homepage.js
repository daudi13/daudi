import './Homepage.css';
import myPic from '../images/20200217_111546(0).jpg'
import Testimonials from '../Testimonials/Testimonials';

function Homepage() {
  return (
    <div className="App">
      <section className="intro" id="home">
            <div className="align-left" data-aos="zoom-in">
                <h1 className="hello">Hello, I'm David,</h1>
                <h2 className="job-des">A <span className="special ">Front-end Developer</span></h2>
                <p className="belief">
                    "I believe in diverse skill sets and people as they make products and communities unique. As a developer I believe in changing the world using technology and improving individuals to be better versions of themselves by supporting small businesses and community based organizations with an aim of making the blue planet a better place for each and everyone of us."
                </p>
            </div>
      </section>
      <section className="about">
        <div className="about-title"><h2>About Me</h2><span><hr className="line"/></span></div>
        <div className="desc">
          <div className="wording">
        <p className="belief">
          Currently a I'm a front-end developer who enjoys bringing ideas to life by translating web designs and wireframes to functional websites. I'm also an effective developer who brings out the vision and executes the strategy with minimal resources
        </p>
        <p className="belief">
          In my 3 years of experience in web development, I've developed extensive knowledge in :
        </p>
        <ul className="list">
          <li> Front-end development: ReactJS | Vanilla Javascript| API | Apollo Client</li>
          <li>Styling: Styled-components | SASS | CSS-in-JS | Bootstrap </li>
          <li>Pair programming and remote working</li>
          <li>Version Control: GIT | Github</li>
          <li>Product management: Figma | wireframing</li>
          <li>Hosting: Heroku | Githubpages | Vercel | Netlify </li>
        </ul>
        <p className="belief">
          I'm passionate about sharing knowledge, implementing product designs and solving problems using front-end technologies. I'm also a team-player and I'm always looking forward to join a passionate team of developers. At the moment I'm open to Front-end opportunities in small start-ups as well a big companies.
            </p>
          </div>
          <img src={myPic} className="pix" alt="David ouma"/>
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