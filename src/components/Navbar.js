/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import CarosalItems from "./carosal";
const Navbar = () => {
  return (
    <>
      <>
        <nav className="main-nav">
          <div className="header-menu">
            <a href="#Tamil"> Tamil</a>
            <a href="#English"> English</a>
            <a href="#Popular"> Popular</a>
            <a href="#Random"> Random</a>
            <a href="#Comedy"> Comedy</a>
          </div>
        </nav>
        <Carousel
          autoplay
          dotPosition="right"
          className="Carousel"
          effect="fade"
        >
          {CarosalItems.map((res) => {
            return (
              <motion.div
                whileHover={{
                  scale: 0.44,
                  transition: { duration: 1 },
                }}
              >
                <img
                  src={res.img}
                  width="400px"
                  height="500px"
                  style={{ float: "right" }}
                ></img>
                <br />
                <br />
                <h1 className="hero-section">{res.h1context}</h1>
              </motion.div>
            );
          })}
        </Carousel>

        <div></div>
      </>
    </>
  );
};

export default Navbar;
