import React from 'react';

function Pricing() {
    return ( 
        <div className="container py-5">
            <div className="row align-items-center">
                
                {/* Left Section */}
                <div className="col-md-6">
                    <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{textDecoration:"none"}}>
                        See Pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

<div className="col-md-6">
  <div className="row text-center">

    {/* Item 1 */}
    <div className="col-md-4 d-flex flex-column align-items-center">
      <img
        src="/images/pricing0.svg"
        alt="pricing"
        style={{ width: "120px" }}
      />
      <p className="mt-3 text-muted">
        Free account <br /> opening
      </p>
    </div>

    {/* Item 2 */}
    <div className="col-md-4 d-flex flex-column align-items-center">
      <img
        src="/images/pricingEquity.svg"
        alt="pricing"
        style={{ width: "120px" }}
      />
      <p className="mt-3 text-muted">
        Free equity delivery <br /> and direct mutual funds
      </p>
    </div>

    {/* Item 3 */}
    <div className="col-md-4 d-flex flex-column align-items-center">
      <img
        src="/images/intradayTrades.svg"
        alt="pricing"
        style={{ width: "120px" }}
      />
      <p className="mt-3 text-muted">
        Intraday and <br /> F&amp;O
      </p>
    </div>

  </div>
</div>            </div>
        </div>
     );
}

export default Pricing;