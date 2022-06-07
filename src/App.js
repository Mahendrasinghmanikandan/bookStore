/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./stories/Home";
import Chapter from "./stories/chapter";
import { BackTop, Tooltip } from "antd";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/Chapter/:id" element={<Chapter />} />
      </Routes>
      <Tooltip title="back to top">
        <BackTop>
          <div>
            <img
              width="70px"
              height="50px"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif"
            />
          </div>
        </BackTop>
      </Tooltip>
    </div>
  );
};

export default App;
