import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

import "./Header.css";
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        
        <PersonIcon className='header_icon' fontSize='large' />
      </IconButton>
      <img className='header_logo'
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG18.png"
        alt=""
      />
      <IconButton>
      <ForumIcon fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  );
}

export default Header;
