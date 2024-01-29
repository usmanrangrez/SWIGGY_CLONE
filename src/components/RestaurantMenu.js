import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, actualMenu } = useRestaurantMenu(resId);

  return resInfo === null ? (
    <MenuShimmer />
  ) : (
    <div className="menu-container">
      <div className="menu-header">
        <div className="left-menu">
          <img
            className="res-menu-img"
            src={IMG_CDN_URL + resInfo?.cloudinaryImageId}
            alt="res-img"
          />
        </div>
        <div className="right-menu">
          <h1>{resInfo?.name}</h1>
          <h5>{resInfo?.cuisines?.join(",")}</h5>
          <div className="res-menu-abbr-dets">
            <h6>{resInfo?.avgRating}⭐</h6>
            <h6>{resInfo?.sla?.deliveryTime} Min 🛵</h6>
            <h6>{resInfo?.costForTwoMessage}</h6>
          </div>
        </div>
      </div>
      <div className="actual-menu">
        {actualMenu?.itemCards?.map((item, idx) => {
          return (
            <div key={idx} className="each-item">
              <div className="menu-item-left">
                <div className="menu-item-name"> {item?.card?.info?.name}</div>
                <div className="menu-item-pricename">
                  Rs-
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
              </div>
              <div className="menu-item-right">
                <img
                  className="menu-item-img"
                  src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                  alt="Menu-Item_Image"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
