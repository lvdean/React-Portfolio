import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../pages/AboutMe.css"

export default function About() {
    return (
        <div className="about">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&display=swap" rel="stylesheet" />
            <div class = "fonts">
                <h1>About Me</h1>
                <h2>Hi, I'm Lauren! I am a full stack developer with a passion for creating and improving web applications.</h2>
            </div>
            <img src="./src/assets/profilepic.jpg" alt="profile pic" />
            <div className="img-thumbnail">
                <div className="footer">
                    <a href="https://github.com/lvdean" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow Profile">
                        <i><FontAwesomeIcon icon={faStackOverflow} /></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
  