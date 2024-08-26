
// import './App.css'
// import Home from './Home'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Workexperience from './Workexperiencee'
// import Navbar from './Navbar'
// import HackathonProject from './HackathonProject'

// function App() {

//   return (
    
//     <Router>
//       <div className='Route'>
//         <Navbar/>
//         <div>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/work" element={<Workexperience/>}/>
//           <Route path="/hackathon" element={<HackathonProject/>}/>
//       </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App 

import './App.css'
import Home from './Home'

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workexperience from './Workexperiencee';
import Navbar from './Navbar';
import Hackathon from './Hackathon';
import Project from './Project';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workexperience from './Workexperiencee'
import Navbar from './Navbar'
import HackathonProject from './HackathonProject'


function App() {

  return (
    

    // <Router basename='/MyWebsite'>

    <Router>
      <div className='Route'>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Workexperience/>}/>

          <Route path="/hackathon" element={<Hackathon/>}/>
          <Route path="/project" element={<Project/>}/>

          <Route path="/hackathon" element={<HackathonProject/>}/>

      </Routes>
      </div>
    </Router>
  );
}
export default App 

  
   
