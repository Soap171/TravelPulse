import React from "react";

function Section(props) {
  return (
    <div className="container bg-transparent my-5 p-5">
      <div className="row justify-content-center align-items-center" id="start">
        <div className="col col-md-5 text-center d-none d-md-block">
          <img src={props.img} className="img-fluid rounded-5 shadow-lg " />
        </div>
        <div className="col col-md-7 text-center">
          <div className="display-5 text-white fw-bold">{props.header}</div>
          <div className="lead text-white fw-bold my-2">{props.txt}</div>
          <div className="col col-md-10 mx-auto me-auto">
            <ul className="list-group  text-white my-4">
              {props.listItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-start mt-2"
                >
                  <div className="ms-auto me-auto">
                    <div className="fw-bold">{item.header}</div>
                    {item.text}
                  </div>
                  <span className="badge bg-dark rounded-pill">
                    {item.number}
                  </span>
                </li>
              ))}
            </ul>
          </div>
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

export default Section;
