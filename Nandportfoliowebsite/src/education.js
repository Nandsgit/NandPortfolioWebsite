// import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
// import Unipic from "../src/images/unipic.png";
// import "./education.css";

// let observer;
// var classNames = require("classnames");

// class Education extends Component {

//     state = {
//     startanimation: false,
//     timelineControl : 'education',

//     };

//     componentDidMount() {
//     observer = new IntersectionObserver(this.callback, {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.3,
//     });
//     observer.observe(document.getElementById("educ"));
//     }

//     callback = (entries, observer) => {
//     if (entries[0].isIntersecting) {
//         this.setState({ startanimation: true });
//     }

//     };

//     setEducation = () => {
//         this.setState({timelineControl: 'education'})
//     }

//     setWork = () => {
//         this.setState({timelineControl: 'work'})
//     }


//     // const [timelineControl,settimelineControl] = useState('education');

//     render() {
//     var aboutclass = classNames({
//       heading: true,
//       line2: this.state.startanimation,
//     });
    
//     return (
//       <div>
//         <Grid
//           container
//           className="body"
//           alignItems="center"
//           justifyContent="space-around"
//         >
//           <Grid item>
//             <div className={aboutclass} id="educ">
//               Education
//             </div>
//           </Grid>
//           {/* <Grid  container item justifyContent='space-around'>
//                         <ul>
//                             <li>
//                                 Associate degree in Computer Science, Foothill College, Los Altos, CA, June 2019
//                             </li>
//                             <li>
//                                 Bachlors in Computer Science, San Jose State University, San Jose, CA, Dec 2021
//                             </li>
//                         </ul>

                        
//                         <Grid item>
//                         <img src={Unipic}  width="500" height="300"/>

//                         </Grid>
//                     </Grid> */}

//         <Grid container item justifyContent="space-around">
//             <section class="qualification section">
//                 {/* <h2 class="section_title"> Qualication </h2>
//                 <span class="section_subtitle"> My Journey!</span> */}

//                 <div class="qualification_container container "> 
//                     <div class = "qualification__tabs"> 
//                         <div class= "qualification_button button--flex qualification__active" onClick= {this.setEducation}>
//                         {/* <i class="uil uil-graduation-cap qualification__icon"></i> */}
//                         Education
//                         </div>

//                         <div class= "qualification_button button--flex"  onClick= {this.setWork}>
//                             <i class="uil uil-briefcase-alt"></i>
//                                 Work 
//                         </div>
//                     </div>
//                     {
//                         this.state.timelineControl == 'work' && 
//                         <div class= "qualification__section">
                            
//                             {/* qualification content 1 */}
    
//                             <div class ="qualification__content qualification__active" data-content-id="education" >
//                                 {/* qualification 1 */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> Computer Science 123</h3>
//                                         <span class= "qualification__subtitle"> ABC college  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2009-2014
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
//                                                           {/* qualification 2 */}
//                                 <div class ="qualification__data"> 
//                                     <div> </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
    
//                                     <div>
//                                         <h3 class= "qualification__title"> Web Design</h3>
//                                         <span class= "qualification__subtitle"> CDE college  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 20014-2017
//                                         </div>
//                                     </div>
    
//                                 </div> 
    
//                                                           {/* qualification 3  */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> Web Development</h3>
//                                         <span class= "qualification__subtitle"> EFC college  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2017-2019
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
    
//                               {/* qualification 4 */}
//                               <div class ="qualification__data"> 
//                                 <div> </div>
//                                 <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         {/* <span class = "qualification__line"></span> */}
//                                     </div>
//                                     <div>
//                                         <h3 class= "qualification__title"> Master in Computer Science</h3>
//                                         <span class= "qualification__subtitle">SJSU  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2019-2021
//                                         </div>
//                                     </div>
//                                 </div> 
//                             </div>
    
    
//                             {/* qualification content 2 */}
    
    
//                             <div class ="qualification__content" data-content-id="work">
//                                 {/* qualification 1 */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> Software Engineer</h3>
//                                         <span class= "qualification__subtitle"> to-enter-value </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2016-2018
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
//                                                           {/* qualification 2 */}
//                                 <div class ="qualification__data"> 
//                                     <div> </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
    
//                                     <div>
//                                         <h3 class= "qualification__title"> Frontend Developer </h3>
//                                         <span class= "qualification__subtitle"> to-enter-value123  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 20018-2020
//                                         </div>
//                                     </div>
    
//                                 </div> 
    
//                                                           {/* qualification 3  */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> UI designer</h3>
//                                         <span class= "qualification__subtitle"> XYZ organization  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2017-2019
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         {/* <span class = "qualification__line"></span> */}
//                                     </div>
//                                 </div> 
    
    
    
    
    
    
//                             </div>
                    
//                         </div>
//                     } 

//                     {
//                         this.state.timelineControl == 'education' && 
//                         <div class= "qualification__section">
                            
//                             {/* qualification content 1 */}
    
//                             <div class ="qualification__content qualification__active" data-content-id="education" >
//                                 {/* qualification 1 */}
//                                 <div class ="qualification__data"> 

//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
//                                                           {/* qualification 2 */}
//                                 <div class ="qualification__data"> 
//                                     <div> </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
    
//                                     <div>
//                                         <h3 class= "qualification__title"> Web Design</h3>
//                                         <span class= "qualification__subtitle"> CDE college  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 20014-2017
//                                         </div>
//                                     </div>
    
//                                 </div> 
    
//                                                           {/* qualification 3  */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> Web Development</h3>
//                                         <span class= "qualification__subtitle"> EFC college  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2017-2019
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
    
//                               {/* qualification 4 */}
//                               <div class ="qualification__data"> 
//                                 <div> </div>
//                                 <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         {/* <span class = "qualification__line"></span> */}
//                                     </div>
//                                     <div>
//                                         <h3 class= "qualification__title"> Master in Computer Science</h3>
//                                         <span class= "qualification__subtitle">SJSU  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2019-2021
//                                         </div>
//                                     </div>
//                                 </div> 
//                             </div>
    
    
//                             {/* qualification content 2 */}
    
    
//                             <div class ="qualification__content" data-content-id="work">
//                                 {/* qualification 1 */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> Software Engineer</h3>
//                                         <span class= "qualification__subtitle"> to-enter-value </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2016-2018
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
//                                 </div> 
    
//                                                           {/* qualification 2 */}
//                                 <div class ="qualification__data"> 
//                                     <div> </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         <span class = "qualification__line"></span>
//                                     </div>
    
//                                     <div>
//                                         <h3 class= "qualification__title"> Frontend Developer </h3>
//                                         <span class= "qualification__subtitle"> to-enter-value123  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 20018-2020
//                                         </div>
//                                     </div>
    
//                                 </div> 
    
//                                                           {/* qualification 3  */}
//                                 <div class ="qualification__data"> 
//                                     <div>
//                                         <h3 class= "qualification__title"> UI designer</h3>
//                                         <span class= "qualification__subtitle"> XYZ organization  </span>
//                                         <div class = "qualification__calendar">
//                                             <i class="uil uil-calendar-alt"></i>
//                                                 2017-2019
//                                         </div>
//                                     </div>
    
//                                     <div> 
//                                         <span class="qualification__rounder"> </span>
//                                         {/* <span class = "qualification__line"></span> */}
//                                     </div>
//                                 </div> 

//                             </div>
                    
//                         </div>
//                     } 


//                 </div>
//             </section>
//         </Grid>
//         </Grid>
//     </div>
//     );
// }
// }

// export default Education;
