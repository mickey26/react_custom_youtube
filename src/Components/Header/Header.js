import React from "react";

import "./Header.css";

// import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <a exact href="/">
              Home
            </a>
          </li>
          {/* <li>
            <a href="/loginpage">Login</a>
          </li>
          <li>
            <a href="/SignupPage">Blogbook</a>
          </li> */}
        </ul>
      </header>
    </div>
  );
}

export default Header;
