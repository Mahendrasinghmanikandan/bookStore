/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { List, Button, Card, Row, Col, Badge } from "antd";
import headTitle from "../Contents/headTitle";
import "./index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
