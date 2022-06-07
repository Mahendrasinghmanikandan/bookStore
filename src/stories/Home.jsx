/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { List, Image, Card, Row, Col, Badge } from "antd";
import headTitle from "../Contents/headTitle";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {headTitle.map((res) => {
        return (
          <div class="row">
            <div class="column">
              <Link to={"/Chapter/" + res.id}>
                <Badge.Ribbon text="Hippies" color="magenta">
                  <div class="card">
                    <img className="story-pic" src={res.image} />
                    <br />
                    <br />
                    <h1 className="chapter-title-chap">{res.title}</h1>
                    <p className="short">{res.shorts}</p>
                  </div>
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
