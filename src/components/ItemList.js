import { ITEM_IMG_CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="each-item w-9/12">
            <div className="menu-item-left">
              <div className="menu-item-name"> {item?.card?.info?.name}</div>
              <div className="menu-item-pricename">
                Rs-
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </div>
            </div>
            <div className="  menu-item-right w-3/12">
              <img
                className="menu-item-img"
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                alt="Menu-Item_Image"
              />
              <button className=" absolute bottom-0 right-1 rounded-lg p-1 shadow-lg text-lg fw-medium bg-yellow-500  ">
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
