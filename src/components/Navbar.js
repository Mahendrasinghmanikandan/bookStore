/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Carousel } from "antd";

const Navbar = () => {
  return (
    <>
      <>
        <Carousel className="Carousel" effect="fade">
          <motion.div
            whileHover={{
              scale: 0.44,
              transition: { duration: 1 },
            }}
          >
            <h1 className="hero-section">
              A reader lives a thousand lives before he dies...
              <br />
              The man who never reads lives only one.
            </h1>
          </motion.div>
        </Carousel>
        <nav className="main-nav">
          <motion.div
            whileHover={{
              scale: 15,
              transition: { duration: 2 },
            }}
          >
            <img
              width="70px"
              height="70px"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif"
            ></img>
          </motion.div>
        </nav>
        <div></div>
      </>
    </>
  );
};

export default Navbar;
