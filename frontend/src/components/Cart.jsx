import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  sendOrder,
  addItemToCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [room, setRoom] = useState("");
  
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const userEmail = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(cartItems)
  const handleOrder = () => {
    if (room === "" ) {
      alert("Lütfen oda numarasını giriniz.");
      return;
    }
    const order = {
      items: cartItems,
      totalAmount,
      room,
      userEmail
    };
    dispatch(sendOrder(order)).then(() => {
      navigate("/orders");
    });
  };

  const handleQuantityChange = (id, change) => {
    if (change > 0) {
      dispatch(
        addItemToCart({
          id,
          price: cartItems.find((item) => item.id === id).price,
        })
      );
    } else {
      dispatch(removeItemFromCart(id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sepet</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border-b border-gray-200"
            >
              <span className="text-gray-700">{item.title}</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg transition duration-200"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg transition duration-200"
                >
                  +
                </button>
              </div>
              <span className="text-gray-700">${item.totalPrice}</span>
            </div>
          ))}
          <div className="font-bold text-xl text-gray-800 mt-4">
            Toplam: ${totalAmount}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Oda Seçin:
            </label>
            <select
              required
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                Oda Seçin
              </option>
              <option value="101">Oda 101</option>
              <option value="102">Oda 102</option>
              <option value="103">Oda 103</option>
              {/* Diğer odaları buraya ekleyebilirsiniz */}
            </select>
          </div>
       
          <button
            onClick={handleOrder}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg mt-4 transition duration-200"
          >
            Sipariş Oluştur
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
