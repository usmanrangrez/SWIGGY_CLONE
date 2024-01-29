import { ABOUT_IMAGE } from "../utils/constants";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <User />
          {/* <UserClass name={"Usmaan Rangrez"} /> */}
        </div>
        <div className="about-right">
          <img className="about_image" src={ABOUT_IMAGE} alt="image_about" />
          <span className="text_1">Welcome to the World</span>
          <span className="text_2">Of Tasty,&</span>
          <span className="text_3">DELECIUUUS FOOD</span>
        </div>
      </div>
    </>
  );
};

export default About;
