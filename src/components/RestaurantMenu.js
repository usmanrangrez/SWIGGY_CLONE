import axios from "axios";
import { useEffect, useState } from "react";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  SWIGGY_RESTAURANT_MENU_API_URL,
} from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [actualMenu, setActualMenu] = useState([]);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await axios.get(SWIGGY_RESTAURANT_MENU_API_URL + resId);
      const info = data?.data?.data?.cards[0]?.card?.card?.info;
      const menuDets =
        data?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card;

      setResInfo(info);
      setActualMenu(menuDets);
    } catch (error) {
      console.log(error);
    }
  };

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
          <h5>{resInfo?.cuisines.join(",")}</h5>
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
