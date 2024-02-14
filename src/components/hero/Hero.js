import React from "react";
import "./Hero.css";

function Hero(props) {
  const classProperties = `container-fluid ${props.classType} d-flex justify-content-center align-items-center flex-column min-vh-100`;
  return (
    <div className={classProperties}>
      <div className="text-center">
        <div className="display-3 text-white fw-bold">{props.header}</div>
        <div className="display-6 my-3 text-white">{props.text}</div>
        <div>
          {props.btnLink && (
            <a href={props.btnLink} className="btn btn-success my-2">
              {props.btnTxt}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
