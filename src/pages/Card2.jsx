import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACK, BRAND, CATEGORY, DESCRIPTION, PRICE } from "../config";

const Card2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userdata = localStorage.getItem("newProduct");
    if (userdata) {
      const result = JSON.parse(userdata);
      setProducts(result);
    }
  }, []);

  console.log("card2", products);

  return (
    <div>
      <Link
        to={`/user/dashboard`}
        className="text-white bg-yellow-500 rounded hover:bg-yellow-600 text-lg p-2 m-2"
      >
        {BACK}
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p>
              {PRICE}: ${product.price}
            </p>
            <p>
              {CATEGORY}: {product.category}
            </p>
            <p>
              {DESCRIPTION}: {product.description}
            </p>
            <p>
              {BRAND}: {product.brand}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
