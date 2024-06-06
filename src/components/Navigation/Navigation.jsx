import clsx from "clsx";

import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLink}>
        Movie
      </NavLink>
    </nav>
  );
};

export default Navigation;
