import React from "react";
import './Home.css';

const Home = () => {
  return (
      <div className="col-10 container">
        <div className="d-flex justify-content-center d-flex align-items-center home-details">
          <div className="text-center">
            <h2>Hi, I'am Md Nayem Hossain</h2>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. <br/>I also make website more & more interactive with web animations.</p>
            <a target="_blank" href="https://drive.google.com/file/d/1mzqyv155YOGd-WuWP5WPztPoXx_I95hr/view?usp=sharing" className="btn btn-primary" rel="noreferrer">Download CV</a>
          </div>
        </div>
      </div>
  );
};

export default Home;
