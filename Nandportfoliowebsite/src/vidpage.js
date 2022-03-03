import React from "react";
// import "./education.css";
import "./vidpage.css";
import vid from "./videos/Brain_animation.mp4";

function vidpage() {
  const btn = document.querySelector(".switch-btn");
  const video = document.querySelector(".video-container");

  return (
    <div className="b1" id="homepage">
      <header>
        {/* <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_1TcivY.json"
          background="transparent"
          speed="1"
          style={{width : '1500px', height : '1000px', padding: "10% 30%"}}
          loop
          hover
        ></lottie-player> */}

        {/* <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_kb4a0pbp.json"
          background="transparent"
          speed="1"
          style={{ padding: "20% 30%" }}
          loop
          hover
        ></lottie-player> */}

        <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_kb4a0pbp.json"
          background="transparent"
          speed="0.5"
          style={{ padding: "15% 20%" }}
          hover
          // loop
          autoplay
        ></lottie-player>

        {/* <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_kb4a0pbp.json"
          background="transparent"
          speed="0.7"
          style={{width: "1000px" , height: "1000px", padding: "350px 50px 20px"}}
          hover
          loop
        ></lottie-player> */}

        {/* <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_1LhsaB.json"
          mode="bounce"
          background="transparent"
          speed="1"
          style={{width : '700px', height : '700px', padding: "350px 50px 20px"}}
          loop
          controls
          autoplay
        ></lottie-player> */}

        {/* <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_1pxqjqps.json"
          background="transparent"
          speed="1"
          hover
        ></lottie-player> */}

        {/* <video muted autoPlay loop class="video-container">
          <source src={vid} type="video/mp4" />
        </video> */}
        {/* <h2> hello and welcome!!! </h2> */}
      </header>
    </div>
  );
}

export default vidpage;
