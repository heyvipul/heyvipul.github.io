import React from "react";
import img1 from "../images/pictures/profile.jpeg";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div id="home" className="hero" onClick={() => {
        if (boolean === false) handleClick();
      }}>
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <span class="inner-circle circle">
            <img className="home-img" src={img1} alt="profile" />
          </span>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        {/* <div className="txt-light-red twent">
          Namaste<span className="wave">🙏</span>, my name is
        </div> */}
        <div className="txt-light-red twent">
          Greetings, fellow developers!, Me...
        </div>
        <div id="user-detail-name" className="newname">
          Vipul Girhe
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Do Frontend.")
                .pause(2000)
                .deleteAll()
                .typeString("I Do Backend.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
          An enthusiastic Full Stack Web Developer with a strong set of technical skills like HTML, CSS, Javascript, React and nodeJs as well as non-technical skills and a dedication towards creating useful and interactive web applications using MERN stack..
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
