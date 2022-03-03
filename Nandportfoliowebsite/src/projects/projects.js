import React, { Component } from "react";
import "../projects/project.css";
import Grid from "@material-ui/core/Grid";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, CardRow, CardGroup } from "react-bootstrap";

import carbonprint from '../images/carbonfootprint.png';
let observer;
var classNames = require('classnames');
function Projects() {
  const callback =(entries,observer)=>{
    console.log('from project');
    if(entries[0].isIntersecting)
    {
    startanimationsetter(true);
    console.log('insidefromperoject');
    }
  }

  
  const [startanimation,startanimationsetter]= React.useState(false);
  const aboutclass =classNames({
    'heading' : true,
    'projectline' : startanimation,
  })


  React.useEffect(()=>{
    observer= new IntersectionObserver(callback,{root:null,rootMargin:'0px',threshold:0.3});
    observer.observe(document.getElementById('project'));
  },[]);

  return (
    <div>
      <Grid
        className="body1"
        container
        direction="column"
        alignItems='center'
      >
       <Grid item xs={2} className="projecthead">
         <div className="heading" className={aboutclass} id='project' >
          Project
         </div>
         {/* <h1 className="heading" >Project</h1> */}
         
         </Grid>
       <Grid item xs={10} container justifyContent='space-around' className="projectbody"> 
       <Grid item container xs={6} justifyContent='center' className='wrapper'>
       <Card className="card">
        <Card.Img variant="top" src={ carbonprint} className="imageclass"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       </Grid>

       <Grid item container xs={6} justifyContent='center' className='wrapper'>
       <Card className="card" >
        <Card.Img variant="top" src={ carbonprint} className="imageclass"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       </Grid>
       <Grid item container xs={6} justifyContent='center' className='wrapper'>
       <Card className="card">
        <Card.Img variant="top" src={ carbonprint} className="imageclass"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       </Grid> <Grid item container xs={6} justifyContent='center' className='wrapper'>
       <Card className="card">
        <Card.Img variant="top" src={ carbonprint} className="imageclass"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       </Grid>
       </Grid>
      </Grid>


    </div>
      
  );
}


export default Projects;
