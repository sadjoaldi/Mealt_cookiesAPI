import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <div className="navigation">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About us</li>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
