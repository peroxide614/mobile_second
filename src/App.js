import React from 'react';
import './App.css';
import logo from './image/microsel_logo.png';
import firsticon from './image/first_icon.png';

function App() {
  return (
    <div className="full-page">
      <div className="main-element">
        <div>
          <img src={logo} className="microsel-logo"></img>
        </div>
        <div className="receipt-wrapper">
          <div className="receipt-element">
            <div className="first">
              <div className="receipt-title">Ödeme Özeti</div>
              <div className="receipt-info">
                <div className="receipt-line-info">
                  <div className="receipt-line-text">Sipariş Numarası</div>
                  <div className="receipt-line-output">11458523</div>
                </div>
                <div className="receipt-line-info">
                  <div className="receipt-line-text">KDV</div>
                  <div className="receipt-line-output">%20</div>
                </div>
                <div className="receipt-line-info">
                  <div className="receipt-line-text">KDV Tutari</div>
                  <div className="receipt-line-output">$ 123,28</div>
                </div>
                <div className="receipt-line-info">
                  <div className="receipt-line-text">Sipariş Tutarı</div>
                  <div className="receipt-line-output">$ 403,04</div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-container">
            <div className="dashed-line"></div>
          </div>
          <div className="third">
            <div className="third-wrapper">
              <div className="third-title">Ödenecek Tutar</div>
              <div className="third-price">$ 576,32</div>
            </div>
            <div className="third-icon">
              <img src={firsticon}></img>
            </div>
          </div>
        </div>
        <div className="data-page">
          <div className="icon-w-title">
            <img></img>
            <div>Ödeme</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
