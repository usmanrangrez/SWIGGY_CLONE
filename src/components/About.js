import Header from "./Header";
import { ABOUT_IMAGE } from "../utils/constants";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <img className="about_image" src={ABOUT_IMAGE} alt="image_about" />
        </div>
        <div className="about-right">
          <span className="text_1">Welcome to the World</span>
          <span className="text_2">Of Tasty,&</span>
          <span className="text_3">DELECIUUUS FOOD</span>
          <span className="text_4">
            "Better you will feel if you eat a healthy meal"
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
