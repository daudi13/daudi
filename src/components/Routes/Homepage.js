import Header from '../Header';
import './Homepage.css';

function Homepage() {
  return (
    <div className="App">
      <section class="intro" id="home!">
            <div class="align-left" data-aos="zoom-in">
                <p class="hello">Hello, I am David,</p>
                <h2 class="job-des">I'm a <br/> <span class="special ">Front-end Developer</span></h2>
                <p class="belief">
                    "I believe in diverse skill sets and people as they make products and communities unique. As a developer I believe in changing the world using technology and improving individuals to be better versions of themselves by supporting small businesses and community based organizations with an aim of making the blue planet a better place for each and everyone of us."
                </p>
                <a href="#about!" class="btn">Read more</a>
            </div>
    </section>
    </div>
  );
}

export default Homepage;