import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, updateOrderStatusAsync } from "../redux/cartSlice";
import { signout } from "../authApi/authService";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

const OrderList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [filteredOrders, setFilteredOrders] = useState([]);
  const orders = useSelector((state) => state.cart.orders || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      if (user === "foodz@hotmail.com") {
        // Tüm siparişleri göster
        setFilteredOrders(orders);
      } else {
        // Sadece kullanıcının siparişlerini göster
        setFilteredOrders(orders.filter((order) => order.userEmail === user));
      }
    } else {
      // Kullanıcı yoksa, filtrelenmiş siparişleri boş yap
      setFilteredOrders([]);
    }
  }, [user, orders]);

  const handleStatusChange = (id) => {
    dispatch(updateOrderStatusAsync(id, "Hazır"));
  };

  const handleSignout = async () => {
    try {
      await signout();
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 mt-2">
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-bold text-center mb-6">Siparişler</h2>
        <button onClick={handleSignout} className="relative  ">
          <CgLogOut
            size={24}
            className="text-dark-500 transition-transform hover:scale-110"
          />
        </button>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-center text-lg">Hiçbir siparişiniz bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOrders.map((order, ind) => (
            <div
              key={order._id}
              className={`border rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
                order.status === "Hazır"
                  ? "bg-green-100 border-green-500"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Sipariş #{ind + 1}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center bg-gray-100 p-2 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                      <div className="text-center mt-2">
                        <span className="text-sm font-semibold">
                          {item.title}
                        </span>
                        <span className="block text-xs text-gray-600">
                          ${item.price} x {item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="font-bold mt-4 text-lg">
                  Toplam: ${order.totalAmount}
                </div>
                <div className="mt-2 text-gray-600">Oda: {order.room}</div>
                <div className="mt-2 text-gray-600">
                  Email: {order.userEmail}
                </div>
                <div className="mt-2">
                  <span className="font-semibold">Durum:</span> {order.status}
                </div>
                {order.status !== "Hazır" && (
                  <button
                    onClick={() => handleStatusChange(order._id)}
                    className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                  >
                    Hazır olarak işaretle
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;
