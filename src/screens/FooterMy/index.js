import React from "react";
import "./index.css";

function FooterMy() {
  return (
    <>
      <footer>
        <div className="icons has-text-centered mt-6-desktop mb-6">
          <a href="https://www.instagram.com/ravien_dalpatadu/">
            <span className="icon mx-5">
              <i className="fa-brands fa-instagram home fas fa-2x icon is-large"></i>{" "}
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ravien-dalpatadu-8718b7223/">
            <span className="icon mx-5">
              <i className="fa-brands fa-linkedin home fas fa-2x"></i>{" "}
            </span>
          </a>
          <a href="#">
            <span className="icon mx-5">
              <i className="fa-solid fa-envelope home fas fa-2x"></i>{" "}
            </span>
          </a>

          <p className="is-nunito has-text-weight-lighter mt-4 is-nunito has-text-grey-light">
            Ravien Dalpatadu 2023
          </p>
        </div>
        <svg
          className="is-clipped"
          viewBox="0 0 1440 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0V344H1380C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344H0V258Z"
            fill="#3579FD"
          />
        </svg>
      </footer>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="./script.js"></script>
      <script>AOS.init();</script>
    </>
  );
}

export default FooterMy;
