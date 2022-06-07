/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./index.css";
import _ from "lodash";

import headTitle from "../Contents/headTitle";

const Chapter = () => {
  const targetId = window.location.href.split("/")[4];
  const newChapter = headTitle.filter((res) => {
    return res.id === Number(targetId);
  });

  return (
    <>
      <h1 className="cards">{_.get(newChapter, "[0].title", [])}</h1>
      <div>
        {_.get(newChapter, "[0].chapter", []).map((resp) => {
          return (
            <>
              <div class="row">
                <div class="chapter-column">
                  <div class="chapter-card">
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
                  </div>
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
