import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <Router>
      <div className='ui red huge borderless inverted menu'>
        <div className='header item'>
          <Link to='/'>Marvel</Link>
        </div>
      </div>
    </Router>
  );
}

export default Header;
