import "../pages/Portfolio.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"



export default function Portfolio() {
  return (
    <div className="portfolio">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Poetsen+One&display=swap" rel="stylesheet" />
      <div >
        <h1>Portfolio Page</h1>
        <h2>Here are some of my projects! Check out the deployed websites and GitHub repositories</h2>
      </div>
      <div className="img-thumbnail">
        <div className="image-container">
          <img src="./public/portfolio1.png" alt="portfolio 1" />
          <div className="icon">
            <p>Marvel API</p>
            <a href="https://github.com/Teacher2Coder/project-1" target="_blank" rel="noreferrer">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://teacher2coder.github.io/project-1/" target="_blank" rel="noreferrer">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>

        </div>

        <div className="image-container">
          <img src="/public/portfolio2.png" alt="portfolio 2" />
          <div className="icon">
            <p>Baby Blog</p>
            <a href="https://github.com/agrove21/tiny-steps-baby-blog" target="_blank" rel="noreferrer">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://tiny-steps-baby-blog.onrender.com/" target="_blank" rel="noreferrer">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/portfolio3.png" alt="portfolio 3" />
          <div className="icon">
            <p>Refractory Challenge</p>
            <a href="https://github.com/lvdean/Challenge1-Refractoring-Horiseon-website?tab=readme-ov-file" target="_blank" rel="noreferrer">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://lvdean.github.io/Challenge1-Refractoring-Horiseon-website/" target="_blank" rel="noreferrer">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/portfolio4.png" alt="portfolio 4" />
          <div className="icon">
            <p>Task Board Challenge</p>
            <a href="https://github.com/lvdean/Taskboard-application?tab=readme-ov-file">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://lvdean.github.io/Taskboard-application/">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/portfolio5.png" alt="portfolio 5" />
          <div className="icon">
            <p>Password Generator</p>
            <a href="https://github.com/lvdean/JavaScript-Password-Generator">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://lvdean.github.io/JavaScript-Password-Generator/">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/portfolio6.png" alt="portfolio 6" />
          <div className="icon">
            <p>Skills Showcase</p>
            <a href="https://github.com/lvdean/Portfolio-skills-showcase">
              <i class="github"><FontAwesomeIcon icon={faSquareGithub} style={{ color: "#050505", }} /></i>
            </a>
            <a href="https://lvdean.github.io/Portfolio-skills-showcase/">
              <i class="website"><FontAwesomeIcon icon={faGlobe} /></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
