import CardData from "./CardData";
import Img from "../../assets/images/TravelPulse (5).jpg";
import Img2 from "../../assets/images/TravelPulse (10).jpg";
import Img3 from "../../assets/images/TravelPulse (3).jpg";
import Img4 from "../../assets/images/TravelPulse (8).jpg";

function AboutCards() {
  return (
    <div className="container-fluid bg-secondary">
      <div className="row justify-content-center align-items-center mb-4">
        <div className="display-4 lead text-center fw-bold text-white my-3">
          <i class="fa-solid fa-square-rss me-3 "></i>Our Blog
        </div>
        <div className="col-6 col-md-4 text-center ">
          <CardData
            img={Img}
            txt="Passionate Travel Enthusiasts: We are a team of avid travelers who are passionate about exploring the world and sharing our experiences."
          />
        </div>
        <div className="col-6 col-md-4 text-center">
          <CardData
            img={Img2}
            txt="Expert Advice: Our platform offers expert advice on destinations, travel tips, and insider recommendations to enhance your travel experience."
          />
        </div>
        <div className="col-6 col-md-4 text-center">
          <CardData
            img={Img3}
            txt="Comprehensive Guides: We provide comprehensive guides on a wide range of destinations, from popular tourist spots to path gems."
          />
        </div>
        <div className="col-6 col-md-4 text-center d-md-none">
          <CardData
            img={Img4}
            txt="Reliable Resources: We curate reliable resources including accommodation options, transportation services, and activities."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
