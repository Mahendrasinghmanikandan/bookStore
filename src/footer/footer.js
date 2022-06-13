import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <div>
      <footer>
        <div class="rows primary">
          <div class="columns about">
            <h2>Best Stories</h2>

            <p>
              I think books are like people in the sense that they’ll turn up in
              your life when you most need them.
              <br />
              <br />A reader lives a thousand lives before he dies... The man
              who never reads lives only one.
            </p>
          </div>

          <div class="columns links">
            <ul>
              <li>
                <a href="#Tamil"> Tamil Stories</a>
              </li>
              <li>
                <a href="#English"> English Stories</a>
              </li>
              <li>
                <a href="#Random"> Random Stories</a>
              </li>
              <li>
                <a href="#Popular"> Popular Stories</a>
              </li>
              <li>
                <a href="#Comedy"> Comedy Stories</a>
              </li>
            </ul>
          </div>

          <div class="columns links">
            <ul>
              <ul>
                <li>
                  <a href="#Comedy"> Comedy Stories</a>
                </li>
                <li>
                  <a href="#Popular"> Popular Stories</a>
                </li>
                <li>
                  <a href="#Random"> Random Stories</a>
                </li>
                <li>
                  <a href="#English"> English Stories</a>
                </li>
                <li>
                  <a href="#Tamil"> Tamil Stories</a>
                </li>
              </ul>
            </ul>
          </div>
          <div class="columns links">
            <h2>Contact Us</h2>
            <ul>
              <ul>
                <li>
                  <a href="#"> +91 9876543210</a>
                </li>
                <li>
                  <a href="#">beststories@gmail.com</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
