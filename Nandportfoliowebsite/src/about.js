import React, { Component } from "react";
import "../src/about.css";
import Grid from "@material-ui/core/Grid";
// import profpic from "../src/images/pic.png";
import dev from "../src/images/developer.png";

import Fade from "react-reveal/Fade";

let observer;
var classNames = require("classnames");
class Animated_Comp extends Component {
  state = {
    startanimation: false,
  };
  componentDidMount() {
    observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    observer.observe(document.getElementById("about"));
  }
  callback = (entries, observer) => {
    console.log("callback");
    if (entries[0].isIntersecting) {
      this.setState({ startanimation: true });
      console.log("change");
    }
  };
  render() {
    var aboutclass = classNames({
      heading: true,
      line5: this.state.startanimation,
    });
    return (
      <div>
        {/* <div className = "b2">  */}

        {/* <h1>React Reveal</h1> */}

        <Grid
          container
          className="b2"
          alignItems="center"
          justifyContent="space-around"
          direction="column"
        >
          <Grid item>
            {" "}
            <div className={aboutclass} id="about">
              {" "}
              About{" "}
            </div>{" "}
          </Grid>

          {/* <Grid item > */}

          <Grid container justifyContent="space-between" xs={6}>
            <Fade left>
              <img src={dev} alt="Profesional Pic" width="400" height="250" />
            </Fade>

            <Grid item xs={6}>
              <Fade right>
                I am a result-driven software developer with some experience in
                Backend software development and some experience in Frontend
                software development. Currently, I am pursuing a bachelor's
                degree in computer science at San Jose State University.
                <br /> <br />
                {/* <ColoredLine color="black" /> */}I have worked with several
                programming languages like Java, Python, and PHP. I have also
                worked with the Software Development Life Cycle (SDLC)
                framework, where I have implemented custom design software for a
                company from scratch.
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        {/* </div>  */}
      </div>
    );
  }
}

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 5
//         }}
//     />
// );

// const Header = {
//     padding: "10px 20px",
//     textAlign: "center",
//     color: "green",
//     fontSize: "40px"
// }

export default Animated_Comp;
