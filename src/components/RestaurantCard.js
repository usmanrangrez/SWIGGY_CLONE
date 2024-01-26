import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  id,
}) => {
  return (
    <Link to={`restaurants/${id}`}>
      <div className="res-card">
        <img
          className="res-logo"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className="res-name-cuis">
          <h3 className="res-name-title">
            {name.length > 20 ? `${name.substring(0, 20)}...` : name}
          </h3>
        </div>
        <div className="res-dets-cost">
          <h4 className="cuisines">
            {cuisines.length > 2
              ? `${cuisines.slice(0, 1).join(",")}...`
              : cuisines.join(",")}
          </h4>
          <h4 className="res-cost">{`${costForTwo}`}</h4>
        </div>
        <div className="res-card-details">
          <h4>{avgRating}⭐</h4>
          <h4 className="open">{sla?.deliveryTime} MIN 🛵</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
