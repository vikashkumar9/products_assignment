import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { BACK } from "../config";
const Card1 = () => {
  const [products, setProducts] = useState([]);
  const userdata = localStorage.getItem("loginData");
  const user = JSON.parse(userdata);
  const token = user?.token;

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setProducts(data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Link
        to={`/user/dashboard`}
        className="text-white bg-yellow-500 rounded hover:bg-yellow-600 text-lg p-2 m-2"
      >
        {BACK}
      </Link>
      <Products products={products} />
    </div>
  );
};

export default Card1;
