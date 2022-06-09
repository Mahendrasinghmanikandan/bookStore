/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { List, Button, Card, Row, Col, Badge, Drawer } from "antd";
import headTitle from "../Contents/headTitle";
import "./index.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Home = () => {
  const [show, setShow] = useState(false);
  const renderSlides = () =>
    headTitle.map((res) => {
      var a =
        !_.isEmpty(JSON.parse(localStorage.getItem("history"))) &&
        JSON.parse(localStorage.getItem("history")).includes(`${res.id}`);
      return (
        a && (
          <>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2 }}
            >
              <Link to={"/Chapter/" + res.id}>
                <img className="history-pic" src={res.image} />
                <br />
                <h2 className="htext">{res.title}</h2>
              </Link>
            </motion.div>
          </>
        )
      );
    });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const handleClear = () => {
    localStorage.clear();
    setShow(false);
  };

  return (
    <div>
      <br />
      <br />
      {!_.isEmpty(JSON.parse(localStorage.getItem("history"))) &&
        JSON.parse(localStorage.getItem("history")).length > 4 && (
          <div className="App">
            <p style={{ float: "left" }}>Continue Reading</p>
            <p
              className="continue"
              onClick={() => {
                setShow(true);
              }}
            >
              Show All
            </p>
            <br />
            <br />
            <Slider {...settings}>{renderSlides()}</Slider>
          </div>
        )}
      <br />
      <br />
      <br />
      <br />
      {headTitle.map((res) => {
        return (
          <div class="row">
            <div class="column">
              <Link to={"/Chapter/" + res.id}>
                <Badge.Ribbon
                  placement="start"
                  text={res.views + "reads"}
                  color="magenta"
                >
                  <motion.div
                    whileHover={{
                      scale: 0.88,
                      transition: { duration: 1 },
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                    class="card"
                  >
                    <img className="story-pic" src={res.image} />
                    <br />
                    <br />
                    <h1 className="chapter-title-chap">{res.title}</h1>
                    <p className="short">{res.shorts}</p>
                  </motion.div>
                </Badge.Ribbon>
              </Link>
            </div>
          </div>
        );
      })}
      <Drawer width={400} onClose={() => setShow(false)} visible={show}>
        <p style={{ float: "left" }}>Continue Reading</p>
        <p className="continue" onClick={handleClear}>
          Clear All
        </p>
        {renderSlides()}
      </Drawer>
    </div>
  );
};

export default Home;
