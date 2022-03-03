import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./educationWork.css";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ComputerIcon from "@mui/icons-material/Computer";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';

// import Zoom from 'react-reveal/Zoom';
// import Flip from "react-reveal/Flip";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

let observer;
var classNames = require("classnames");

class EducationWork extends Component {
  state = {
    startanimation: false,
    timelineControl: "education",
  };

  componentDidMount() {
    observer = new IntersectionObserver(this.callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    observer.observe(document.getElementById("EduWork"));
  }

  callback = (entries, observer) => {
    if (entries[0].isIntersecting) {
      this.setState({ startanimation: true });
    }
  };

  setEducation = () => {
    this.setState({ timelineControl: "education" });
  };

  setWork = () => {
    this.setState({ timelineControl: "work" });
  };

  render() {
    var aboutclass = classNames({
      heading: true,
      line2: this.state.startanimation,
    });

    return (
      <>
        {/* <Rotate top left> */}
          {/* <h1>React Reveal</h1> */}
          <Grid
            container
            className="body1"
            alignItems="center"
            direction="column"
          >
            <Grid item style={{ height: "10vh" }}>
              <div className={aboutclass} id="EduWork">
                Education/Work
              </div>
              {/* some text here */}
            </Grid>
            <LightSpeed left>
            <Grid item style={{ height: "10vh" }}>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Button
                  variant="contained"
                  onClick={this.setEducation}
                  startIcon={<SchoolIcon />}
                >
                  Education
                </Button>

                <Button
                  variant="contained"
                  onClick={this.setWork}
                  endIcon={<WorkIcon />}
                >
                  Work
                </Button>
              </Stack>
            </Grid>
            </LightSpeed>

          <Grid>
            {this.state.timelineControl == "work" && (
              <Grid item>
                <div>
                  {/* some extra text here */}
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        March 2014- Jan 2015
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                          <MedicalServicesIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Heal Home Care Pvt. Ltd
                        </Typography>
                        <Typography> Software Developer </Typography>
                        <Typography>Kathmandu, Nepal </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        Jan 2019 - June 2019
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                          <ComputerIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Foothill College
                        </Typography>
                        <Typography>Math and CS Tutor</Typography>
                        <Typography>Los Altos Hills, California </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        June 2019 - Aug 2019
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Silicon Valley Education Foundation
                        </Typography>
                        <Typography>Education Assitant </Typography>
                        <Typography>San Jose, California </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </Grid>
            )}


            {this.state.timelineControl == "education" && (
              <Grid item>
                <div>
                  {/* some extra text here */}
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        April 2013- July 2015
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                          <HomeWorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Modern Indian School
                        </Typography>
                        <Typography>Cambridge A-Level </Typography>
                        <Typography>Kathmandu, Nepal </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        2016-2019
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                          <HolidayVillageIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Foothill College
                        </Typography>
                        <Typography>
                          Associate Degree in Computer Science
                        </Typography>
                        <Typography>Los Altos Hills, California </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        2019-2021
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          San Jose State University
                        </Typography>
                        <Typography>Bachelor's in Computer Science </Typography>
                        <Typography>San Jose, California </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </Grid>
            )}
            </Grid>
          </Grid>
          
          {/* </Rotate> */}
      </>
    );
  }
}

export default EducationWork;
