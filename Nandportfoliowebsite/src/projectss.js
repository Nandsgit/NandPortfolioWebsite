import React, {Component} from "react";
import '../src/projects.css';
// import "./educationWork.css";

import Grid from '@material-ui/core/Grid';
import tutor from '../src/images/tutoring.png';
import background1 from '../src/images/background1.jpeg';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
// import climatechange from '../src/images/climatechange.png';
import climatechange from '../src/images/climate.png';



let observer;
var classNames = require('classnames');

class Projectss extends Component{
    state={
        startanimation:false
    }
    componentDidMount()
    {
    observer= new IntersectionObserver(this.callback,{root:null,rootMargin:'0px',threshold:0.3});
    observer.observe(document.getElementById('Projectheading'));
    }
    callback=(entries,observer)=>{
    console.log('callback');
    if(entries[0].isIntersecting)
    {
    this.setState({startanimation:true});
    console.log('change');
    }
    }
    render(){
        var aboutclass = classNames({
            'heading' : true,
            'line3' : this.state.startanimation,

        })
        return(
            <div>
                <Grid container className="b3 " alignItems= 'center'  justifyContent='space-around' direction='column'>
                    <Grid item ><div id='Projectheading' className = {aboutclass} > Projects  </div>  </Grid>
                    <Grid item justifyContent='space-around' >
                        <Carosuelcomp ></Carosuelcomp>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Projectss;


function Carosuelcomp(props){
    return (
        <Carousel className='size' autoPlay={false} stopAutoPlayOnHover="true" interval={3000}
        animation= {"fade"} >
            <Paper className="items" style={{ backgroundImage:`url(${climatechange})`}}>
            <Grid container alignItems='center' justifyContent='space-between' spacing={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} style ={ { height: "20vh"}}>
                <h1 class = "heading-animation"> Carbon Footprint Calculator </h1> 
                    {/* <Item>1</Item> */}
                </Grid>
                <Grid item xs={4} style ={ { height: "30vh", padding: '50px' }}  >
                    <div class="toolsUsed" xs={5} >
                                <h2>  Tools used  </h2>
                                <ul class="check-list">
                                    <li style = {{ fontSize: "40px"}}>React</li>
                                    <li style = {{ fontSize: "40px"}}> MongoDB </li>
                                    <li style = {{ fontSize: "40px"}}>Express</li>
                                    <li style = {{ fontSize: "40px"}}>NodeJS</li>
                
                                </ul>
                        </div>


                        {/* <Item>2</Item> */}
                </Grid>
                <Grid item xs={8} style ={ { height: "40vh", textAlign:'center', padding: '30px' }}>
                    
                    <div>
                        <p id= 'stroketxt'>  
                        this text has stroke

                        </p>
                    </div>
                    {/* <Item>3</Item> */}
                </Grid>
                <Grid item xs={12}  style ={ { height: "20vh", textAlign:'center' }}>
                    <div>
                        some extra text heree.......
                    </div>
                    {/* <Item>4</Item> */}
                </Grid>
      </Grid>





            
        </Paper>

        <Paper className="items" style={{ backgroundImage:`url(${tutor})`}}> 
            <h2>bldsajndsjada1</h2>
            <p>dsadnsadsa</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>

        <Paper className="items" style={{ backgroundImage:`url(${tutor})`}}> 
            <h2>bldsajndsjada1</h2>
            <p>dsadnsadsa</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
        </Carousel>
    )
}