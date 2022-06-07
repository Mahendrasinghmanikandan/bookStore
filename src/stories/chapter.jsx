/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./index.css";
import { Button, Tooltip, Modal } from "antd";
import _ from "lodash";
import { motion } from "framer-motion";
import headTitle from "../Contents/headTitle";
import { FaCartArrowDown } from "react-icons/fa";
const Chapter = () => {
  const [visible, setVisible] = useState(false);
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
                  <Tooltip title="Buy Now For Read More..">
                    <Button
                      className="card-botton"
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      <FaCartArrowDown />
                    </Button>
                  </Tooltip>
                  <motion.div
                    whileHover={{
                      scale: 0.88,
                      transition: { duration: 1 },
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                    class="chapter-card"
                  >
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
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
      ></Modal>
    </>
  );
};

export default Chapter;
