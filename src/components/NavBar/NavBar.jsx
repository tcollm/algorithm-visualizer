import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="algorithms" className={classes.link}>
            Algorithms
          </Link>
        </li>
      </ul>
      <ul className={classes.navListRight}>
        <li>
          <Link to="about" className={classes.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
