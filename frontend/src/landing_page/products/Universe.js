import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" alt="Smallcase" />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/streakLogo.png" alt="Streak" style={{ width: "150px" }} />
          <p className="text-small text-muted">
            Systematic trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/sensibullLogo.svg" alt="Sensibull" />
          <p className="text-small text-muted">
            Options trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ width: "150px" }} />
          <p className="text-small text-muted">
            Asset management platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/tijori.png" alt="Tijori" style={{ width: "150px" }} />
          <p className="text-small text-muted">
            Investment research platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/dittoLogo.png" alt="Ditto" style={{ width: "150px" }}/>
          <p className="text-small text-muted">
            Insurance advisory platform
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;