// import logo from './logo.svg';
import './App.css';
// import AnimatePage from '../src/animatedcomp';
// import Animation from '../src/animatedcomp';
import Animated2 from './about';
import Nav from '../src/navbar/navbar';
// import Uni from '../src/education';
// import Projects from '../src/projects/projects';
import Projects from './projectss';
import EduWork from './educationWork';
import Skills from './skills/skills';

import Vid from './vidpage';

import Contact from './contact';




function App() {
  return (
    <div >
      <Nav></Nav>

      <Vid/>
      <Animated2></Animated2>
      <EduWork> </EduWork>
      <Projects></Projects>
      <Skills> </Skills>


      <Contact> </Contact>


      
    </div>
  );
}

export default App;
