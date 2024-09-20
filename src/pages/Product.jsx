import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACK, CATEGORY, PRICE } from "../config";

const Product = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const userdata = localStorage.getItem("loginData");
  const user = JSON.parse(userdata);
  const token = user?.token;

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setProduct(result);
    };

    fetchProduct();
  }, [id, token]);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      {product && (
        <>
          <img
            className="w-full h-48 object-cover"
            src={product.images[0]}
            alt={product.title}
          />
          <h2 className="font-bold text-xl mt-4">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-900 font-bold mt-2">
            {PRICE}: ${product.price}
          </p>
          <p className="text-gray-600">
            {CATEGORY}: {product.category}
          </p>

          <Link
            to={`/user/dashboard`}
            className="text-white bg-yellow-500 rounded hover:bg-yellow-600 text-lg p-2"
          >
            {BACK}
          </Link>
        </>
      )}
    </div>
  );
};

export default Product;
