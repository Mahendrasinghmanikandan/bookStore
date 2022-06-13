/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./index.css";
import _ from "lodash";
import { motion } from "framer-motion";
import headTitle from "../Contents/headTitle";

const Chapter = () => {
  const targetId = window.location.href.split("/")[4];
  const newChapter = headTitle.filter((res) => {
    return res.id === Number(targetId);
  });
  if (localStorage.getItem("history") === null) {
    localStorage.setItem("history", "[0]");
  } else {
    var result = JSON.parse(localStorage.getItem("history")).some((res) => {
      return res === targetId;
    });
    if (!result) {
      var old_history = JSON.parse(localStorage.getItem("history"));
      console.log(targetId, "etId");
      old_history.push(targetId);
      localStorage.setItem("history", JSON.stringify(old_history));
    }
  }

  return (
    <>
      <h1 className="cards">{_.get(newChapter, "[0].title", [])}</h1>
      <div>
        {_.get(newChapter, "[0].chapter", []).map((resp) => {
          return (
            <>
              <div class="row">
                <div class="chapter-column">
                  <br />

                  <motion.div
                    whileHover={{
                      scale: 0.88,
                      transition: { duration: 1 },
                    }}
                    class="chapter-card"
                  >
                    {" "}
                    <div>
                      <h1 className="chapter-title-chap">{resp.title}</h1>
                    </div>
                    <br />
                    <p className="chapter-story-pic">
                      {resp.stories === "#A1" ? (
                        <>
                          <br />
                          <br />
                        </>
                      ) : (
                        resp.stories
                      )}
                    </p>
                    <br />
                  </motion.div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Chapter;
