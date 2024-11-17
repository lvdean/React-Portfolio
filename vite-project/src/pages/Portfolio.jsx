// https://github.com/Teacher2Coder/project-1
// https://teacher2coder.github.io/project-1/

// https://github.com/agrove21/tiny-steps-baby-blog
// https://tiny-steps-baby-blog.onrender.com/

// https://lvdean.github.io/Challenge1-Refractoring-Horiseon-website/
// https://github.com/lvdean/Challenge1-Refractoring-Horiseon-website?tab=readme-ov-file

// https://lvdean.github.io/Taskboard-application/
// https://github.com/lvdean/Taskboard-application?tab=readme-ov-file

// https://lvdean.github.io/JavaScript-Password-Generator/
// https://github.com/lvdean/JavaScript-Password-Generator

// https://lvdean.github.io/Portfolio-skills-showcase/
// https://github.com/lvdean/Portfolio-skills-showcase

import "../pages/Portfolio.css"; // Import the external CSS file

export default function Portfolio() {
  return (
    <div className="img-thumbnail">
      <h1>Portfolio Page</h1>
      <p>Here are some of my projects:</p>

      <div className="image-container">
        <img src="./src/assets/portfolio1.png" alt="portfolio 1" />
        <div className="text">Portfolio 1</div>
      </div>

      <div className="image-container">
        <img src="./src/assets/portfolio2.png" alt="portfolio 2" />
        <div className="text">Portfolio 2</div>
      </div>

      <div className="image-container">
        <img src="./src/assets/portfolio3.png" alt="portfolio 3" />
        <div className="text">Portfolio 3</div>
      </div>

      <div className="image-container">
        <img src="./src/assets/portfolio4.png" alt="portfolio 4" />
        <div className="text">Portfolio 4</div>
      </div>

      <div className="image-container">
        <img src="./src/assets/portfolio5.png" alt="portfolio 5" />
        <div className="text">Portfolio 5</div>
      </div>

      <div className="image-container">
        <img src="./src/assets/portfolio6.png" alt="portfolio 6" />
        <div className="text">Portfolio 6</div>
      </div>
    </div>
  );
}
