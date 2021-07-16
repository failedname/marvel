import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='ui red huge borderless inverted menu'>
      <div className='header item'>
        <Link to='/'>Marvel</Link>
      </div>
    </div>
  );
}

export default Header;
