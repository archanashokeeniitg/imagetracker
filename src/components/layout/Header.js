// import React from "react";

// function Header() {
//   return <div>Header</div>;
// }

// export default Header;

import React from "react";

//components
import Home from "../Home";
import Upload from "../Upload";

import { Router, Route, useLocation } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const history = createHistory();

const Header = () => {
  //   const location = useLocation();
  return (
    <div>
      <Router history={history}>
        <Navbar color="dark">
          <NavbarBrand href="/" className="text-white">
            Image Gallery
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink className="text-white" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/upload">
                upload Image
              </NavLink>
            </NavItem>
          </Nav>
          <AmplifySignOut />
        </Navbar>
        <Route path="/about">
          <Home />
        </Route>
        {/* <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} /> */}
      </Router>
    </div>
  );
};
export default Header;
