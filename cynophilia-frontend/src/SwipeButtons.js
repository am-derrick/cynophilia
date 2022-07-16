import React from 'react';
import './SwipeButtons.css';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import IconButton from '@material-ui/core/IconButton';


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <SettingsBackupRestoreIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <LoyaltyIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <OfflineBoltIcon fontSize='large' />
        </IconButton>
    </div>
  );
}

export default SwipeButtons;