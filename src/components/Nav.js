import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Tweet
          </NavLink>
        </li>
        <li>
          <NavLink to="/activity" activeClassName="active">
            Activity
          </NavLink>
        </li>
        <li>
          <NavLink to='profile' activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='login' activeClassName="active" onClick={()=> localStorage.clear()}>
            {localStorage.getItem('token') ? 'logout' : 'login'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
