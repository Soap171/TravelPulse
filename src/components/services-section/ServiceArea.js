import ServiceData from "./ServiceData";
import Img from "../../assets/images/TravelPulse (2).jpg";
import Img2 from "../../assets/images/TravelPulse (5).jpg";
import Img3 from "../../assets/images/TravelPulse (9).jpg";

function ServiceArea() {
  return (
    <div className="container-fluid bg-white">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4 text-center">
          <ServiceData
            img={Img}
            title="Travel Tips & Hacks"
            txt="Learn insider tips and hacks to make the most of your travels,from packing efficiently to saving money on accommodations."
            btnLink="/contact"
          />
        </div>
        <div className="col-12 col-md-4 text-center">
          <ServiceData
            img={Img2}
            title="Top Destinations"
            txt="Explore our curated list of top destinations worldwide, from iconic landmarks to hidden gems, and discover your next adventure"
            btnLink="/contact"
          />
        </div>
        <div className="col-12 col-md-4 text-center">
          <ServiceData
            img={Img3}
            title="Family-Friendly Fun"
            txt="Discover family-friendly destinations and activities perfect for creating unforgettable memories with your loved ones."
            btnLink="/contact"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
