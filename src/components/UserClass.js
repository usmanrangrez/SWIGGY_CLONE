import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { GITHUB_LINK, GITHUB_USER_LINK } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy!",
        location: "Default!",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await axios.get(GITHUB_USER_LINK);
      const res = await data?.data;
      this.setState({
        userInfo: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { name, location, blog, avatar_url } = this?.state?.userInfo;

    return (
      <div className="user-card">
        <div>
          <img className="user-image" src={avatar_url} alt="Dev" />
        </div>
        <div>
          <h2 className="user-name">Name: {name}</h2>
          <h3 className="user-location">
            Location: {location || "No Location found!"}
          </h3>
          {blog && (
            <h4 className="user-contact">
              <Link to={blog} target="_blank" className="user-contact-btn">
                Portfolio
              </Link>
            </h4>
          )}
        </div>
        <div className="git-container">
          <Link
            to={GITHUB_LINK}
            target="_blank"
            className="git-btn"
          >{` Show Github Profile `}</Link>
        </div>
      </div>
    );
  }
}

export default UserClass;
