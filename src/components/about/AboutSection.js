import AboutImg from "../../assets/images/TravelPulse (4).jpg";

function AboutSection() {
  return (
    <div className="container-fluid text-dark bg-white">
      <div className="row justify-content-center align-items-center  p-5">
        <div className="col-12 col-md-7 text-start ">
          <ul className="list group">
            <li className="list-group-item display-6 mt-4">
              <i class="fa-solid fa-medal me-2"></i>Fine Quality
            </li>
            <li className="list-group-item display-6 mt-4">
              {" "}
              <i class="fa-solid fa-boxes-packing me-2"></i>Custom Packages
            </li>
            <li className="list-group-item display-6 mt-4">
              <i class="fa-solid fa-comments me-2"></i>
              Consultant Services
            </li>
            <li className="list-group-item display-6 mt-4">
              <i class="fa-solid fa-location-dot me-2"></i>
              Execellent Accomadations
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-5 text-center d-block ">
          <img src={AboutImg} className="img-fluid rounded-3" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
