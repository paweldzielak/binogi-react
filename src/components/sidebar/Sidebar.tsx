import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

const Sidebar :React.FC = () => {
  return (
    <nav className="sidebar">
      <p>
        <Link to="/search">
          {<Button fontSize='1.5rem' size='lg'>Search recipes</Button>}
        </Link>
      </p>
      <p>
        <Link to="/bookmarked">
          {<Button  fontSize='1.5rem'size='lg'>Bookmarked recipes</Button>}
        </Link>
      </p>
    </nav>
  );
};

export default Sidebar;
