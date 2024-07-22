import React from 'react'
import "./Header.css";
import Netflixlogo from "../../Assets/Images/th.jpeg"
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Header = () => {
  return (
   < div className='header_outer_container'>
      <div div className='header_container'>
         <div className='header_left'>
            <ul>
               <li>  </li>
              <li>Netfilex</li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Brown by Languages</li>
            </ul>
         </div>
         {/* <div className='header_right'>
            <ul>
              <li><SearchIcon/></li> 
              <li><NotificationNoneIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/></li>
            </ul>
         </div> */}
     </div>
   </div>
  )
}

export default Header