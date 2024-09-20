import React from "react";
import { CATEGORY, EDIT } from "../config";
import { PRICE } from "../config";
import { Link } from "react-router-dom";
const ProductCard = ({ id, title, category, price, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}

      <div className="py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-1">
          {CATEGORY}: {category}
        </p>
        <div className="flex justify-between items-center space-x-4">
          <p className="text-gray-900 font-bold text-lg">
            {PRICE}: ${price}
          </p>
          <Link
            to={`/user/edit/${id}`}
            className="text-white bg-yellow-500 rounded hover:bg-yellow-600 text-lg p-2"
          >
            {EDIT}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
