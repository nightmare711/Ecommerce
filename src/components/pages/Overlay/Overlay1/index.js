import React from 'react';
import './style.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LogoutIcon from '@mui/icons-material/Logout';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import PowerSettingsNewSharpIcon from '@mui/icons-material/PowerSettingsNewSharp';

export const Overlay = () => {
  // eslint-disable-next-line linebreak-style
  return(
    <div id='overlay'>
      <div className='overlay__view'>
        <div className='overlay__information'>
          <div className='left__information'>
            <p>0xa84f0...d1297bf0</p>
          </div>
          <div className='right__information'>
            <p><span><FiberManualRecordIcon fontSize='13px'/></span> BSC </p>
          </div>
        </div>
        <div className='account__infor'>
          <div className='account__infor__left'>
            <p><img src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=014'/> bnb</p>
          </div>
          <div className='account__infor__right'>
            <p>0.50</p>
          </div>
        </div>
        <div className='button__group'>
          <button>
            <div className='view__btn'>
              <LogoutIcon/>
              <p>View</p>
            </div>
          </button>
          <button>
            <div className='copy__btn'>
              <FileCopyIcon/>
              <p>Copy</p>
            </div>
          </button>
          <button disabled>
            <div className='switch__btn'>
              <CompareArrowsSharpIcon/>
              <p>Switch</p>
            </div>
          </button>
          <button>
            <div className='disconnect__btn'>
              <PowerSettingsNewSharpIcon/>
              <p>Disconnect</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Overlay;