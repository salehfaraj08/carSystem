import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (<>
      <div>
        <nav>
          <ul className='nav-bar'>
            <li>
              <Link className='a' to="/">Home</Link>
            </li>
            <li>
              <Link className='a' to="/users">Display Workers</Link>
            </li>
            <li>
              <Link className='a' to="/match">Match a vehicle</Link>
            </li>
          </ul>
        </nav>
      </div>
  </>);
};

export default Header;
