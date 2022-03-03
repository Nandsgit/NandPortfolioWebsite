import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

import "../skills/skills.css";
import "../skills/default.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import $ from "jquery";

const { Raphael } = require("react-raphael");

let observer;
var classNames = require("classnames");

//source: http://tympanus.net/codrops/2011/04/22/animated-skills-diagram/
var o = {
  init: function () {
    this.diagram();
  },
  random: function (l, u) {
    return Math.floor(Math.random() * (u - l + 1) + l);
  },
  diagram: function () {
    var r = Raphael("diagram", 600, 600),
      rad = 73,
      defaultText = "Skills",
      speed = 250;

    r.circle(300, 300, 85).attr({ stroke: "none", fill: "#193340" });

    var title = r
      .text(300, 300, defaultText)
      .attr({
        font: "20px Arial",
        fill: "#fff",
      })
      .toFront();

    r.customAttributes.arc = function (value, color, rad) {
      var v = 3.6 * value,
        alpha = v == 360 ? 359.99 : v,
        random = o.random(91, 240),
        a = ((random - alpha) * Math.PI) / 180,
        b = (random * Math.PI) / 180,
        sx = 300 + rad * Math.cos(b),
        sy = 300 - rad * Math.sin(b),
        x = 300 + rad * Math.cos(a),
        y = 300 - rad * Math.sin(a),
        path = [
          ["M", sx, sy],
          ["A", rad, rad, 0, +(alpha > 180), 1, x, y],
        ];
      return { path: path, stroke: color };
    };

    $(".get")
      .find(".arc")
      .each(function (i) {
        var t = $(this),
          color = t.find(".color").val(),
          value = t.find(".percent").val(),
          text = t.find(".text").text();

        rad += 30;
        var z = r.path().attr({ arc: [value, color, rad], "stroke-width": 26 });

        z.mouseover(function () {
          this.animate({ "stroke-width": 50, opacity: 0.75 }, 1000, "elastic");
          if (Raphael.type != "VML")
            //solves IE problem
            this.toFront();
          title.stop().animate({ opacity: 0 }, speed, ">", function () {
            this.attr({ text: text + "\n" + value + "%" }).animate(
              { opacity: 1 },
              speed,
              "<"
            );
          });
        }).mouseout(function () {
          this.stop().animate(
            { "stroke-width": 26, opacity: 1 },
            speed * 4,
            "elastic"
          );
          title.stop().animate({ opacity: 0 }, speed, ">", function () {
            title
              .attr({ text: defaultText })
              .animate({ opacity: 1 }, speed, "<");
          });
        });
      });
  },
};

// $(function () {
//   o.init();
// });

class Skills extends Component {
  state = {
    startanimation: false,
  };
  componentDidMount() {
    observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    observer.observe(document.getElementById("Skillheading"));

    $(function () {
      o.init();
    });
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
      line1: this.state.startanimation,
    });

    return (
      <div className="pagedim">
        <Grid
          container
          // alignItems="center"
          // justifyContent="space-around"
          // direction="column"
        >
          <Grid item xs={12} alignItems="center">
            <div
              id="Skillheading"
              className={aboutclass}
              style={{ height: "10vh", alignSelf: "center" }}
            >
              Skills
            </div>
          </Grid>

          <Grid item xs={6}>
            <section>
              {/* <header> Skills</header> */}
              <div class="skill">
                <div class="set">
                  <span class="fas fa-code"></span>

                  <header> Front End </header>
                  <div class="list">
                    <label> HTML</label>
                    <i class="fab fa-html5"></i>
                  </div>
                  <div class="list">
                    <label> CSS</label>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  <div class="list">
                    <label> JavaScript</label>
                    <i class="fab fa-js-square"></i>
                  </div>
                  <div class="list">
                    <label> React </label>
                    <i class="fab fa-react"></i>
                  </div>
                  <div class="list">
                    <label> Bootstrap</label>
                    {/* <i class="fab fa-react"></i> */}
                    <i class="fab fa-bootstrap"></i>
                  </div>
                  <div class="list">
                    <label> Material UI</label>
                    {/* <i class="fab fa-react"></i> */}
                    <i class="fab fa-bootstrap"></i>
                  </div>
                </div>

                {/* <div class="skill"> */}
                <div class="set">
                  <span class="fas fa-cogs"></span>
                  {/* <i class="fas fa-cogs"></i> */}
                  <header> Back End </header>
                  {/* <div class="list">
                    <label> Java</label>
                    <i class="fab fa-java"></i>
                  </div>
                  <div class="list">
                    <label> Python</label>
                    <i class="fab fa-python"></i>
                  </div> */}
                  <div class="list">
                    <label> JavaScript</label>
                    <i class="fab fa-js-square"></i>
                  </div>
                  <div class="list">
                    <label> NodeJS </label>
                    <i class="fab fa-node"></i>
                  </div>
                  <div class="list">
                    <label> Express</label>
                    <i class="fab fa-react"></i>
                  </div>
                  <div class="list">
                    <label> MongoDB</label>
                    {/* <i class="fab fa-react"></i> */}
                    <i class="fas fa-database"></i>
                  </div>
                </div>
                {/* </div> */}

                {/* <div class="skill"> */}
                <div class="set">

                  <span class="fas fa-laptop-code"></span>
                  <header> Other Technologies </header>
                  <div class="list">
                    <label> Machine Learning </label>
                    <i class="fas fa-robot"></i>
                  </div>
                  <div class="list">
                    <label> Android Dev </label>
                    <i class="fab fa-android"></i>
                  </div>
                  <div class="list">
                    <label> Agile/Scrum</label>
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  <div class="list">
                    <label> SDLC</label>
                    <i class="fab fa-js-square"></i>
                  </div>
                  <div class="list">
                    <label> Github</label>
                    <i class="fab fa-github"></i>
                  </div>

                  
                </div>
              </div>
              {/* </div> */}
            </section>
          </Grid>

          <Grid item xs={0}>
            <div id="diagram">
              <div class="get">
                <div class="arc">
                  <span class="text">Front End </span>
                  <input type="hidden" class="percent" value="85" />
                  <input type="hidden" class="color" value="#97BE0D" />
                </div>
                <div class="arc">
                  <span class="text">Backend </span>
                  <input type="hidden" class="percent" value="75" />
                  <input type="hidden" class="color" value="#D84F5F" />
                </div>
                <div class="arc">
                  <span class="text">Other tech</span>
                  <input type="hidden" class="percent" value="70" />
                  <input type="hidden" class="color" value="#88B8E6" />
                </div>

                {/* <div class="arc">
                  <span class="text">Communication </span>
                  <input type="hidden" class="percent" value="95" />
                  <input type="hidden" class="color" value="#BEDBE9" />
                </div>
                <div class="arc">
                  <span class="text">Team Work</span>
                  <input type="hidden" class="percent" value="85" />
                  <input type="hidden" class="color" value="#EDEBEE" />
                </div> */}

                {/* <div class="arc">
                  <span class="text">FrontEnd</span>
                  <input type="hidden" class="percent" value="75" />
                  <input type="hidden" class="color" value="#BEDBE9" />
                </div> */}
              </div>
            </div>
          </Grid>

          {/* <Grid item xs={6}>
            <i class="fab fa-node"></i>
            some text.....
            <a href="https://icons8.com/icon/84710/bootstrap">
              Bootstrap icon by Icons8
            </a>
            <a href="https://icons8.com/icon/UVMl6gMRl2Sq/gmail">
              Gmail icon by Icons8
            </a>
            <i class="bi bi-bootstrap"></i>
            {console.log("somw text here.....")}
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Skills;
