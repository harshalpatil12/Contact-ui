import React from 'react'
import "./style.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";

const Section = () => {
    return (
      <>
<section className="head pb-5">
      <div className="container py-5">
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className='row pt-3'>
                  <div className='col-lg-1 offset-1 col-md-2 col-sm-2 col-2'>
                    
                  </div>
                  <div className='col-lg-10' col-md-9 col-sm-9 col-9>
                    <h3>Get in touch with us</h3>
                    <p>Contact us for a Website, Mobile application, Digital marketing<br/> 
                      or IT support.</p>
                    
                  </div>
                </div>
                <br />
               
                <div className='row pt-3'>
                  <div className='col-lg-1 offset-1 col-md-2 col-sm-2 col-2'>
                  <span className='hr'> <FaMapMarkerAlt/> </span>
                  </div>
                  <div className='col-lg-10' col-md-9 col-sm-9 col-9>
                    <h6>Innovfide Technologies</h6>
                    <p>Anulekha, Anurag Nagar, Tulinj, <br/>
                        Nallasopara East</p>
                    
                  </div>
                </div>
                
                <div className='row pt-3'>
                  <div className='col-lg-1 offset-1 col-md-2 col-sm-2 col-2'>
                    <span className='hr'><HiOutlineMailOpen /></span>
                  </div>
                  <div className='col-lg-10' col-md-9 col-sm-9 col-9><br />
                    <p>business@innovfide.com</p>
                    
                  </div>
                </div>

                <div className='row pt-3'>
                  <div className='col-lg-1 offset-1 col-md-2 col-sm-2 col-2'>
                  <span className='hr'><FiPhoneCall/></span>
                  </div>
                  <div className='col-lg-10' col-md-9 col-sm-9 col-9><br />
                    
                    <p>8767484648</p>
                    
                  </div>
                </div>

              </div>
              <div className='col-lg-6 col-md-12  col-sm-12 col-12'>

  <div class="container">
   
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name:<span className='hd'>*</span></span>
            <input type="text" placeholder="Please enter your First Name" required />
          </div>
          <div class="input-box">
            <span class="details">Last Name:<span className='hd'>*</span></span>
            <input type="text" placeholder="Please enter your last Name" required />
          </div>
          <div class="input-box">
            <span class="details">Email:<span className='hd'>*</span></span>
            <input type="text" placeholder="Please enter your Email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone:<span className='hd'>*</span></span>
            <input type="text" placeholder="Please enter your Phone No." required />
          </div>
         
         
        <div class="gender-details">
          <input type="radio" name="website" id="dot-1" />
          <input type="radio" name="website" id="dot-2" />
          
         
          <span class="gender-title">Do you have a Website?<span className='hd'>*</span></span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Yes</span>
          </label>
        
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">No</span>
            </label>
          </div>
        </div>
        </div>
        
        {/* <div class="input-box">
            <span class="details">Website URL:</span>
            <input type="text" placeholder="Please enter your Website URL" required />
          </div> */}
          
          
          <div>
            <span className='kl'>Website URL:</span>
            <br />
            
            <input className="rk" type="text" placeholder="Please enter your Website URL" required />
          </div>
          
        
        <div class="button">
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  </div>


              
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  
  <span className='jkm'>All Rights Reserved | <span style={{color: "blue"}}>Innovfide Technologies</span>| 2021</span>
  </>
  )
}

export default Section;