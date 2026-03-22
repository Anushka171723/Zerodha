import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <img
            src="/images/education.svg"
            alt="Education"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&amp;A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;