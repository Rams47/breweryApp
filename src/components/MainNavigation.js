import classes from "./MainNavigation.module.css";
import LogoutButton from "../utils/LogoutButton";
import SearchComponent from "../utils/SearchComponent";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div className={classes.navDiv}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className={classes.navIcon}>Brewery</p>
      </Link>
      <SearchComponent />
      <LogoutButton className={classes.LogoutButton} />
    </div>
  );
}

export default MainNavigation;
