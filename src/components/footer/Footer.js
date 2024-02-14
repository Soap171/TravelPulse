import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid text-white p-3">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 text-center ">
          ©2024 TravelPulse. All rights reserved.
        </div>
        <div className="col-12 col-md-6 text-center">
          <a
            href=""
            className=" me-3 ms-3 footer-link border-bottom border-success border-2 shadow-lg"
          >
            Home
          </a>
          <a
            href=""
            className=" me-3 footer-link border-bottom border-success border-2 shadow-lg"
          >
            About
          </a>
          <a
            href=""
            className=" me-3 footer-link border-bottom border-success border-2 shadow-lg"
          >
            Contact
          </a>
          <a
            href=""
            className=" me-3 footer-link border-bottom border-success border-2 shadow-lg"
          >
            Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
