import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-5 fs-5">
          Free equity investments, flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="/images/pricingEquity.svg" />
          <h1>Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
                <div className="col-4 p-4">
          <img src="/images/intradayTrades.svg" />
          <h1>Intraday and F&O trades</h1>                                                           
          <p className="text-muted ">
            Flat ₹20 or 0.03% (whichever is lower) per
             executed order for intraday and F&O trades. Equity delivery investments are absolutely free — ₹ 0
            brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/images/pricingEquity.svg" />
          <h1>Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
