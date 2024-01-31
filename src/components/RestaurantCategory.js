import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleToggle = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={handleToggle}
        className=" cursor-pointer w-6/12 mx-auto shadow-lg my-4 text-center p-4 bg-blue-100"
      >
        {/* Accordion header */}
        <div className="flex justify-between">
          <span className=" font-semibold text-black text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {/* Accordion body */}
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;
