import { useSelector, useDispatch } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { addItem, removeItem, clearCart } from "../utils/cartSlice"; // Use your actual action creators

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    // Assuming addItem action can be reused for incrementing the item quantity
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    // Assuming removeItem action can be reused for decrementing the item quantity
    // and requires the item ID as payload
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const pricePerItem =
      (item?.card?.info?.defaultPrice || item?.card?.info?.price) / 100;
    return acc + pricePerItem * item.quantity;
  }, 0); // Start accumulating from 0

  return (
    <div className="flex w-full bg-yellow-200">
      {cartItems.length === 0 ? (
        <div className="w-full h-[100vh] bg-yellow-50 flex justify-center items-center p-5 font-extrabold text-[50px]">
          Your Cart Seems Empty!
        </div>
      ) : (
        <div className="w-full bg-yellow-200 flex flex-col items-start p-5">
          <button
            onClick={handleClearCart}
            className="border border-black border-1 border-solid p-3 bg-black text-white rounded-md"
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="h-56 w-3/6 bg-gray-200 m-5 flex items-center p-2"
            >
              <div className="mr-10">
                <img
                  className="h-2/4 w-2/7 rounded-lg"
                  src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                  alt="item-img"
                />
              </div>
              <div className="ml-24 flex flex-col">
                <span className="text-2xl font-extrabold text-black">
                  {item?.card?.info?.name}
                </span>
                <span className="my-1 text-xl font-extrabold text-red-600">
                  Rs.
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    className="font-bold text-lg bg-black text-white px-2 py-1"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span>{item?.quantity}</span>
                  <button
                    className="font-bold text-lg bg-black text-white px-2 py-1"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <span className="my-1 text-xl font-bold text-red-600">
                  Total Rs.
                  {(
                    (item?.card?.info?.defaultPrice / 100 ||
                      item?.card?.info?.price / 100) * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="bg-yellow-100 h-[100vh] w-1/3 flex flex-col items-center justify-center font-bold text-2xl">
          <span>Total Price: Rs. {totalPrice.toFixed(2)}</span>
          <button className="border border-1 border-solid border-black p-2 bg-black text-white hover:bg-white hover:text-black rounded-md m-5">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
