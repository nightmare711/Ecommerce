import React from 'react';
import './style.css';

export const Overlay = () => {
  // eslint-disable-next-line linebreak-style
  return(
    <div id='overlay'>
      <div className='select__network'>
        <h2>Select Network</h2>
        <div className='network__group__btn'>
          <button>
            <div className='binance'>
              <p><img src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=014'></img> Binance</p>
            </div>
          </button>
          <button>
            <div className='polygon'>
              <p><img src='https://cryptologos.cc/logos/polygon-matic-logo.png?v=014'></img> Polygon</p>
            </div>
          </button>
        </div>
        <h2>Import Your Wallet</h2>
        <div className='wallet__group_btn'>
          <div className='metamask'>
            <button>
              <img src='https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=014'></img>
            </button>
            <p>Metamask</p>
          </div>
          <div className='wallet__connection'>
            <button>
              <img src='https://cryptologos.cc/logos/synthetix-network-token-snx-logo.png?v=014'></img>
            </button>
            <p>Wallet Connection</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overlay;