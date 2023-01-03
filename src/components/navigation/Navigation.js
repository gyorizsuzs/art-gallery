import React from "react";
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../authentication/contexts/UserContext";
import { signOutUser } from "../authentication/firebase/Firebase";

import "./Navigation.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <header className="nav-container">
        <nav className="nav-bar">
          <Link className="logo" to="/">
            The Art Gallery
          </Link>
          <ul className="nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/artworks">
                Artworks
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
            <li style={{ marginLeft: "auto", marginRight: "1rem" }}>
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  Sign Out
                </span>
              ) : (
                <Link className="nav-link" to="/auth">
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
