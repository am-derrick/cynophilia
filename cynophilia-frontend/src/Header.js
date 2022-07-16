import React from 'react';
import './Header.css';
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';
import NoteIcon from '@material-ui/icons/Note';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <FaceIcon fontSize='large' className='header__icon'/>
        </IconButton>

        <img 
            className='header__logo'
            src='https://firebasestorage.googleapis.com/v0/b/tinder-dummy-ab30a.appspot.com/o/Dog%20Lovers%20Logo.png?alt=media&token=b199e646-6b19-4618-81a4-eb0a6a52adec'
            alt=''
        />
        <IconButton>
        <NoteIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  );
}

export default Header;