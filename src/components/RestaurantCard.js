import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  isOpen,
}) => {
  return (
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
        <h4>
          {cuisines.length > 2
            ? `${cuisines.slice(0, 2).join(",")}...`
            : cuisines.join(",")}
        </h4>
        <h4 className="res-cost">{`${costForTwo}`}</h4>
      </div>
      <div className="res-card-details">
        <h4>{avgRating}⭐</h4>
        <h4>
          {isOpen ? (
            <span className="open">OPEN</span>
          ) : (
            <span className="closed">CLOSED</span>
          )}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
