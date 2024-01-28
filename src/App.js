
import './App.css';
import {HashRouter, Link, Navigate, Route,Routes} from "react-router-dom"
import Home from './Home';
import Grovify from './Grovify';
import Jot from './jot';
import GA from './GA';
import Parkinglot from './parkinglot';
import Resume from './resume';
function App() {
  return (
     <Routes>
   
     <Route path="/*" element={<Home />} />
     <Route path="/projects/grovify" element={<Grovify/>} />
     <Route path="/projects/jot" element={<Jot/>} />
     <Route path="/projects/ga" element={<GA/>} />
     <Route path="/projects/spotter" element={<Parkinglot/>} />
     <Route path="/resume" element={<Resume/>} />
     
  </Routes>
  );
}

export default App;
