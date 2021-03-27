import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-auto">
      <div className="container-fluid mx-auto">
        <a className="navbar-brand mx-auto" href="#" style={{color: "white"}}>
          Chef Brian Gomez
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav">
            <li className="nav-item dropdown" >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                style={{color: "white"}}
              >
                Follow Me
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
