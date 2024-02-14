import React from "react";

function ServiceData(props) {
  return (
    <div className="card my-4 bg-dark text-white shadow-lg rounded-3">
      <img
        src={props.img}
        className="card-img-top img-fluid rounded-3"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title border-bottom pb-2 border-white border-2">
          {props.title}
        </h5>
        <p className="card-text mt-3">{props.txt}</p>
      </div>
      <div className="card-body text-center">
        <a href={props.btnLink} className="card-link btn btn-success">
          Start With TravelPulse
        </a>
      </div>
    </div>
  );
}

export default ServiceData;
