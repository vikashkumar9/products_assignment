import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { EXISTING_PRODUCTS } from "../config";
const Products = ({ products }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 p-4">
        <div className="font-bold">{EXISTING_PRODUCTS}</div>
        <div className="text-lg">{products.length}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products &&
          products.map((item) => (
            <Link to={`/user/dashboard/${item.id}`}>
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                image={item.images}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
