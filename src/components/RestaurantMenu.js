import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, actualMenu } = useRestaurantMenu(resId);

  const [categories, setCategories] = useState([]);

  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    if (actualMenu && actualMenu.cards) {
      const cats = actualMenu?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setCategories(cats);
    } else {
      setCategories([]);
    }
  }, [actualMenu]);

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

      {/* Catgeories */}
      <div className="flex flex-col justify-center text-center">
        {categories?.map((cat, index) => {
          return (
            <RestaurantCategory
              key={cat?.card?.card?.title}
              data={cat?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(showIndex === index ? null : index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
