import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
const Footer=() =>{
  return (
    <div className='footer_outer_contener'>
      <div className='footer_inner_contener'>
             <div className='footer_icons'>
                 {/* <FacebookOutlinedIcon/>
                 <InstagramIcon/>
                 <YouTubeIcon/> */}
              </div>
              <div className='footer_date'>
                <div>
                   <ul>
                      <li>Audio Descripion</li>
                      <li>Investor Relations</li>
                      <li> Legal Notice</li>
                   </ul>
                </div>
                <div>
                  <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Gift Card</li>
                    <li>Term of Use</li>
                    <li>Corporate Information</li>
                  </ul>    
                </div>
                <div>
                  <ul>
                    <li>Medical Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
               <div className='Service_Code'>
                   <p>
                     Service Code
                   </p>
               </div>
               <div className='Copy_Write'>
                    &copy; 1997-2024 Netflix,Inc.
               </div>
       </div>
    </div>
    
    
  )
}


export default Footer