import "../src/contact.css";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import {
  faYoutube,
  faLinkedin,
  faGithub,
  faGmail,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import Divider from "../src/DividerWithText";

let observer;
var classNames = require("classnames");
// var form = document.getElementById("form");

class Contact extends Component {
  state = {
    startanimation: false,
    showResult: false,
  };
  componentDidMount() {
    observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    observer.observe(document.getElementById("contactinf"));
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
      line6: this.state.startanimation,
    });

    const Result = () => {
      return (
        <p>
          {" "}
          Your message have been submitted. I will contact you in 2-3 business
          days.
        </p>
      );
    };

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_ix06kzr",
          "template_x36e8wf",
          e.target,
          "user_rvc0G4yRU0PItQFoEMxnC"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      e.target.reset();
      this.setState({ showResult: true });
    };

    setTimeout(() => {
      this.setState({ showResult: false });
    }, 6000);

    return (
      <div>
        <Grid
          className="lay"
          container
          alignItems="center"
          justifyContent="space-between"
          direction="column"
        >
          <Grid item>
            <div id="contactinf" className={aboutclass}>
              {" "}
              Contact Me{" "}
            </div>
          </Grid>

          <Grid item xs={8}>
            <div
              className="container border"
              style={{
                // marginTop: "20px",
                width: "150%",
                height: "70%",
                // backgroundImage: `url('https://media.istockphoto.com/vectors/contact-icon-futuristic-digital-abstract-blue-background-vector-id1180650814?k=20&m=1180650814&s=612x612&w=0&h=hVmJPwh4sj6WTSkK1GqETQ8hPlJcYothMyNoFgyt0dE=')`,
                backgroundImage: `url(https://curtisfamilydental.com/wp-content/uploads/2015/10/Dentist-background-contactform.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h2 style={{ marginTop: "10px" }}> Contact Form </h2>

              <form
                className="row"
                style={{ margin: "10px 85px 75px 100px" }}
                onSubmit={sendEmail}
                id="form"
              >
                <label> Full Name </label>
                <input
                  type="text "
                  name="name"
                  className="form-control"
                  pattern="^[a-zA-Z ]*$"
                  title="name can only contain alphabets and no whitespace at the beginning and end"
                  placeholder="Your name.."
                  required
                />

                <label> Email </label>
                <input
                  type="email "
                  name="user_email"
                  className="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email in the format : abc@company.com"
                  placeholder="Your email.."
                  required
                />

                <label> Message </label>
                <textarea
                  type="message "
                  name="message"
                  rows="5"
                  className="form-control"
                  required
                  placeholder="Please leave a message here..."
                />
                <input
                  type="submit"
                  value="Send"
                  className=" btn-primary btn-lg"
                  style={{ margin: "10px" }}
                />
                {/* <button onclick="document.getElementById('myInput').value = ''" type='submit' value='Send'className=" form-control btn-primary">Clear input field</button> */}

                <input
                  type="reset"
                  value="Reset"
                  className="  btn-primary btn-lg"
                  style={{ margin: "10px" }}
                ></input>

                <div>{this.state.showResult ? <Result /> : null} </div>
                {/* <label> { this.state.showResult ? <Result/> : null }  </label> */}
              </form>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            className="footer"
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item xs={2}>
              <h5 style={{ color: "white" }}>
                {" "}
                © Copyright 2021 - Nand Kishore Khuswaha. All Rights Reserved.
              </h5>
              {/* © Copyright 2021 Nand Kishore Khuswaha. All Rights Reserved.  */}
              {/* <Divider>© Copyright 2021 Nand Kishore Khuswaha. All Rights Reserved. </Divider> */}
            </Grid>
            <Grid item xs={2}>
              <a
                href="https://www.linkedin.com/in/nand-kishore-khuswaha/"
                className="linkedin social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faLinkedin} size="4x" /> */}
                <i class="fab fa-linkedin fa-4x"></i>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a
                href="https://github.com/Nandsgit"
                className="github social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="4x" />
              </a>
            </Grid>
            <Grid item xs={2}>
              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=nandk1ishore369@gmail.com
                "
                className="google social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faGoogle} size="4x" /> */}
                <i class="fas fa-envelope fa-4x"></i>
              </a>
            </Grid>
          </Grid>
        </Grid>

        {/* <h1>  hello </h1> */}
      </div>
    );
  }
}

export default Contact;
