import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

const Sidebar :React.FC = () => {
  return (
    <nav className="sidebar">
      <p>
        <Link to="/search">Search recipes</Link>
      </p>
      <p>
        <Link to="/bookmarked">Bookmarked recipes</Link>
      </p>
    </nav>
  );
};

export default Sidebar;
