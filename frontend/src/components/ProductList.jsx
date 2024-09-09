import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../authApi/authService";

import { CgLogOut } from "react-icons/cg";
const products = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = [
    "Tümü",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
    <div className="p-4 mt-8">
      <div className="flex justify-end items-center  space-x-4">
      <button
        onClick={handleSignout}
        className="relative"
      >
        <CgLogOut size={24} className="text-dark-500 transition-transform hover:scale-110" />
        
      </button>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={27} className="text-blue-500 transition-transform hover:scale-110" />
          {totalItemsInCart > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
              {totalItemsInCart}
            </span>
          )}
        </Link>
        <Link to="/orders">
          <img
            src="/shopping-bag.png"
            alt="Shopping Bag"
            width={30}
            height={30}
            className="cursor-pointer transition-transform hover:scale-110 "
          />
        </Link>
      
      </div>
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold text-gray-800 mb-1">
                {product.title}
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                {product.desc}
              </p>
              <p className="text-sm font-bold text-gray-900 mb-2">
                ${product.price}
              </p>
              <button
                onClick={() => dispatch(addItemToCart(product))}
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded transition-colors duration-200"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
