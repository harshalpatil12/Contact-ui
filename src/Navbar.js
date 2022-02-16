import React from 'react'
import css from '../App.css';
import { RiArrowDropRightLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="wrapper">
    <div className="multi_color_border"></div>
    <div className="top_nav">
        <div className="left">
			<p className='lm'><span>innov<span style={{color: "grey"}}>fide</span> </span>
    
         
			</p>
            Technologies Solutions & Services
			
      
      </div> 
      
      <div className="right">
        <ul>
         
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        
        </ul>
      </div>
    </div>
    <div className="bottom_nav">
      <ul>
        <li className=''><t>ContactUs</t></li>
        <li><a href="#" >Home  </a></li>
        <span className='lk'> <RiArrowDropRightLine /> </span>
        <li><c> Contact</c></li>
      </ul>
  </div>
    
  
    
    </div>
  );
}

export default Navbar;