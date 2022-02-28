import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import AppMenu from "./AppMenu";

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link className="navbar-brand" to="/">
        Demo
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <AppMenu />
      </div>
    </nav>
  );
};

export default AppHeader;