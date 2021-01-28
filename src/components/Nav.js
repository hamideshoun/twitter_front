import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav left">
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
        { localStorage.getItem("id") !== null &&
        <li>
          <NavLink to='/settings' activeClassName="active">
            Settings
          </NavLink>
        </li>
        }
        <li>
          <NavLink to='/login' activeClassName="active" onClick={()=> localStorage.clear()}>
            {localStorage.getItem('token') ? 'logout' : 'login'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
