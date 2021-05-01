import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="col-10 container">
      <div className="d-flex justify-content-center d-flex align-items-center home-details me-md-5">
        <div className="home-full-text-part">
          <h2>Hay, I am</h2>
          <h1 className="mt-4">Md Nayem Hossain</h1>
          <h6 className="mt-4">
            <span style={{ color: "red" }}>
              <Typewriter
                options={{
                  strings: [
                    "web developer",
                    "web designer",
                    "frontend developer",
                    "javaScript developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h6>
          <p className="mt-4">
            I can provide clean code and pixel perfect design. <br /> I also
            make website more & more interactive with web animations.
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1mzqyv155YOGd-WuWP5WPztPoXx_I95hr/view?usp=sharing"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
