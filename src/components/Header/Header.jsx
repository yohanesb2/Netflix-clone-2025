import React from 'react'
import './Header.css'
import Netflixlogo from '../Images/Netflix_Logo_CMYK.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className='headeroutercontainer'>
        <div className='headercontainer'>
            <div className='header_left'>
                <ul className='nav_menu'>
                    <li ><img src={Netflixlogo} alt='netff' className='nlogo' width=""/></li>
                    {/* <li> Netflix</li> */}
                    <li>Home</li>
                    <li>Tvshows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by language</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li> <SearchIcon/></li>
                    <li> <NotificationsNoneIcon/></li>
                    <li> <AccountBoxIcon/></li>
                    <li> <ArrowDropDownIcon/></li>
                </ul>

            </div>



        </div>







    </div>
  )
}

export default Header