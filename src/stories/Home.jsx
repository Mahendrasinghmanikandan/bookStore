/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { List, Input, Card, Row, Col, Badge, Drawer } from "antd";
import headTitle from "../Contents/headTitle";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../footer/footer";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const renderSlides = () =>
    headTitle.map((res) => {
      var a =
        !_.isEmpty(JSON.parse(localStorage.getItem("history"))) &&
        JSON.parse(localStorage.getItem("history")).includes(`${res.id}`);
      return (
        a && (
          <>
            <motion.div
              class="card"
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2 }}
            >
              <Link to={"/Chapter/" + res.id}>
                <img className="story-pic" src={res.image} />
                <br />
                <br />
                <h1 className="chapter-title-chap">{res.title}</h1>
                <p className="short">{res.shorts}</p>
              </Link>
            </motion.div>
            <p>&nbsp;</p>
          </>
        )
      );
    });
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const handleClear = () => {
    localStorage.clear();
    setShow(false);
  };

  const searchContent = (value) => {
    if (value.target.value === "") {
      setShowAll(false);
    } else {
      setShowAll(true);
      setSearchValue(value.target.value);
    }
  };

  return (
    <>
      <br />
      <br />

      {!showAll &&
        !_.isEmpty(JSON.parse(localStorage.getItem("history"))) &&
        JSON.parse(localStorage.getItem("history")).length > 4 && (
          <>
            <div className="App">
              <div className="title">
                <h3
                  className="title-right"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Show All&nbsp;&nbsp;
                </h3>
                <h3 className="title-left">&nbsp;&nbsp; Continue Reading</h3>
              </div>
              <br />
              <br />
              <Slider {...settings}>{renderSlides()}</Slider>
            </div>
          </>
        )}
      <Input
        className="Search-bar"
        size="large"
        placeholder="Search Stories"
        onKeyUp={(value) => searchContent(value)}
      />
      {!showAll && (
        <>
          <>
            <>
              <div className="App" id="Tamil">
                <div className="title">
                  <br />
                  <br />
                  <h3 className="title-left">&nbsp;&nbsp; Tamil Stories</h3>
                </div>
                <br />
                <Slider {...settings}>
                  {headTitle
                    .filter((result) => {
                      return result.language === "tamil";
                    })
                    .map((res) => {
                      return (
                        <>
                          {res.language === "tamil" ? (
                            <>
                              <Badge.Ribbon
                                placement="start"
                                text={res.views + "reads"}
                                color="magenta"
                              >
                                <motion.div
                                  class="card"
                                  whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 1 },
                                  }}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2 }}
                                >
                                  <Link to={"/Chapter/" + res.id}>
                                    <img
                                      className="story-pic"
                                      src={res.image}
                                    />
                                    <br />
                                    <br />
                                    <h1 className="chapter-title-chap">
                                      {res.title}
                                    </h1>
                                    <p className="short">{res.shorts}</p>
                                  </Link>
                                </motion.div>
                              </Badge.Ribbon>
                              <p>&nbsp;</p>
                            </>
                          ) : null}
                        </>
                      );
                    })}
                </Slider>
              </div>
              <div className="App" id="English">
                <div className="title">
                  <br />
                  <br />
                  <h3 className="title-left">&nbsp;&nbsp; English Stories</h3>
                </div>
                <br />
                <Slider {...settings}>
                  {headTitle
                    .filter((result) => {
                      return result.language === "english";
                    })
                    .map((res) => {
                      return (
                        <>
                          {res.language === "english" && (
                            <>
                              <Badge.Ribbon
                                placement="start"
                                text={res.views + "reads"}
                                color="magenta"
                              >
                                <motion.div
                                  class="card"
                                  whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 1 },
                                  }}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2 }}
                                >
                                  <Link to={"/Chapter/" + res.id}>
                                    <img
                                      className="story-pic"
                                      src={res.image}
                                    />
                                    <br />
                                    <br />
                                    <h1 className="chapter-title-chap">
                                      {res.title}
                                    </h1>
                                    <p className="short">{res.shorts}</p>
                                  </Link>
                                </motion.div>
                              </Badge.Ribbon>
                              <p>&nbsp;</p>
                            </>
                          )}
                        </>
                      );
                    })}
                </Slider>
              </div>
              <div className="App" id="Popular">
                <div className="title">
                  <br />
                  <br />
                  <h3 className="title-left">&nbsp;&nbsp; Popular Stories</h3>
                </div>
                <br />
                <Slider {...settings}>
                  {headTitle
                    .filter((result) => {
                      return result.id % 2 === 0;
                    })
                    .sort()
                    .map((res) => {
                      return (
                        <>
                          <Badge.Ribbon
                            placement="start"
                            text={res.views + "reads"}
                            color="magenta"
                          >
                            <motion.div
                              class="card"
                              whileHover={{
                                scale: 1.1,
                                transition: { duration: 1 },
                              }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2 }}
                            >
                              <Link to={"/Chapter/" + res.id}>
                                <img className="story-pic" src={res.image} />
                                <br />
                                <br />
                                <h1 className="chapter-title-chap">
                                  {res.title}
                                </h1>
                                <p className="short">{res.shorts}</p>
                              </Link>
                            </motion.div>
                          </Badge.Ribbon>
                          <p>&nbsp;</p>
                        </>
                      );
                    })}
                </Slider>
              </div>
            </>
            <div className="App" id="Comedy">
              <div className="title">
                <br />
                <br />
                <h3 className="title-left">&nbsp;&nbsp;Comedy Stories</h3>
              </div>
              <br />
              <Slider {...settings}>
                {headTitle
                  .filter((result) => {
                    return result.id % 2 !== 0 && result.id !== 1;
                  })
                  .reverse()
                  .map((res) => {
                    return (
                      <>
                        <Badge.Ribbon
                          placement="start"
                          text={res.views + "reads"}
                          color="magenta"
                        >
                          <motion.div
                            class="card"
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 1 },
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2 }}
                          >
                            <Link to={"/Chapter/" + res.id}>
                              <img className="story-pic" src={res.image} />
                              <br />
                              <br />
                              <h1 className="chapter-title-chap">
                                {res.title}
                              </h1>
                              <p className="short">{res.shorts}</p>
                            </Link>
                          </motion.div>
                        </Badge.Ribbon>
                        <p>&nbsp;</p>
                      </>
                    );
                  })}
              </Slider>
            </div>
            <div className="App" id="Random">
              <div className="title">
                <br />
                <br />
                <h3 className="title-left">&nbsp;&nbsp;Random Stories</h3>
              </div>
              <br />
              <Slider {...settings}>
                {headTitle
                  .filter((result) => {
                    return result.id !== 1;
                  })
                  .reverse()
                  .map((res) => {
                    return (
                      <>
                        <Badge.Ribbon
                          placement="start"
                          text={res.views + "reads"}
                          color="magenta"
                        >
                          <motion.div
                            class="card"
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 1 },
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2 }}
                          >
                            <Link to={"/Chapter/" + res.id}>
                              <img className="story-pic" src={res.image} />
                              <br />
                              <br />
                              <h1 className="chapter-title-chap">
                                {res.title}
                              </h1>
                              <p className="short">{res.shorts}</p>
                            </Link>
                          </motion.div>
                        </Badge.Ribbon>
                        <p>&nbsp;</p>
                      </>
                    );
                  })}
              </Slider>
            </div>
          </>
          <Footer />
        </>
      )}

      {showAll && (
        <div>
          <div className="title">
            <br />
            <br />
            <h3 className="title-left">&nbsp;&nbsp;Search Result</h3>
          </div>
          {headTitle.map((res) => {
            return (
              res.title
                .toLowerCase()
                .includes(searchValue.toLocaleLowerCase()) && (
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
                          class="search-card"
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
              )
            );
          })}
        </div>
      )}

      <Drawer width={700} onClose={() => setShow(false)} visible={show}>
        <div className="title">
          <h3 className="title-right" onClick={handleClear}>
            Clear All&nbsp;&nbsp;
          </h3>
          <h3 className="title-left">&nbsp;&nbsp; Continue Reading</h3>
        </div>
        {renderSlides()}
      </Drawer>
    </>
  );
};

export default Home;
