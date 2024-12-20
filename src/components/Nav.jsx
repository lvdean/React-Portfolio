import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faAddressBook, faFileLines, faFolderOpen } from "@fortawesome/free-solid-svg-icons"
import "../components/Nav.css"

// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >    
            Home
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AboutMe"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
            <FontAwesomeIcon icon={faAddressBook} />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
            <FontAwesomeIcon icon={faFolderOpen} />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
            <FontAwesomeIcon icon={faFileLines} />
          </Link>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  