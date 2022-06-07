/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Carousel } from "antd";

const Navbar = () => {
  return (
    <>
      <>
        <Carousel className="Carousel" effect="fade">
          <div>
            <h1 className="hero-section">
              A reader lives a thousand lives before he dies...
              <br />
              The man who never reads lives only one.
            </h1>
          </div>
        </Carousel>
        <nav className="main-nav">
          <div>
            <img
              // style={{ position: "fixed" }}
              width="70px"
              height="70px"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif"
            ></img>
          </div>
          <div className="social-media">
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <GiHamburgerMenu />
            </div>
          </div>
        </nav>
        <div></div>
      </>
    </>
  );
};

export default Navbar;
