import React from 'react'
import './navbar.css'
import {Search, NotificationsNone} from '@material-ui/icons'
import {ArrowDropDown} from '@material-ui/icons'


function Navbar(){
    const [isScrolled, setIsScrolled] = React.useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
    return(
      <div className={isScrolled ? "navbarscrolled" : "navbar"}>
            <div className='container'>
                <div className='left'>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Languages</span>
                </div>
                <div className='right'>
                   <Search className='icon'/>
                   <span>Children</span>
                   <NotificationsNone className='icon'/>
                   <img src="data:image/png;base64,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"/>
                   <div className='profile'>
                      <ArrowDropDown className='icon'/>
                   <div className='options'>
                     <span>Settings</span>
                     <span>Logout</span>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar