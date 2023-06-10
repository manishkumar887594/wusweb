import React from 'react';
import './App.css';
import './css/style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Contact from './pages/Contact';
import Login from './pages/Login';
import Cs from './pages/Cybersecurity';
import Home from './pages/home';
import New from './pages/new';

// import 'slick-carousel/slick/slick-theme.css';
// import Carousel from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import o from './img/demo/logo.png';
import {palette} from './pages/colour.css';

function App() {
    
     
   
    return (
    <div className='row box palette' background ><div className='col-1'>        <img src={o} alt="WUS logo"style={{width:'10vw',height:"6vh",padding:"1px"}} className="wiHi center container-fluid img"/></div>

        <Router >
        <div className='container-fluid bg-info col-11  '>
        
    <Link to="" >Home</Link>&nbsp;&nbsp;
    <Link to="cs">cybersecurity</Link>&nbsp;&nbsp;
    <Link to="contact" >contact</Link>&nbsp;&nbsp;
    <Link to="login">login</Link>
  
    </div> <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/cs" element={<Cs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
           
        </Routes >
    
   </Router>
   </div>
) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);}
export default App;
