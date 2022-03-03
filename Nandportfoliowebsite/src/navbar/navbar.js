import React, { useState } from "react";
import "../navbar/navbar.css";
import logo from "../images/milkyway.svg";
import logotemp from "../images/chatbot.svg";


window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("logo").style.height = "100px";


  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.width = "130px";
    document.getElementById("logo").style.height = "50px";
  }
}
const Navbar = () => {
  return (
    <>
      <div id="navbar">
        {/* <img src={logo} alt="My_logo" width="75" height="75" /> */}

        {/* <a href="#default" id="logo"> */}
          <img src={logotemp} alt="My_logo" id="logo" />
        {/* </a> */}

        {/* <a href="#default" id="logo">
          <img src={logo} alt="My logo" />
        </a> */}

        <div id="navbar-right">
          <a href="#homepage" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#EduWork">Education </a>
          <a href="#EduWork">Work </a>
          <a href="#Projectheading">Projects</a>
          <a href="#Skillheading"> Skills</a>
          <a href="#contactinf">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
