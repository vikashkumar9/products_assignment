import React from "react";
import { Link } from "react-router-dom";

import { ADD_PRODUCT, EXISTING_PRODUCTS, NEW_PRODUCT } from "../config";
const Dashboard = () => {
  const userdata = localStorage.getItem("loginData");
  const user = JSON.parse(userdata);

  return (
    <>
      <header className="text-black p-4">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            Welcome {user ? `${user.firstName} ${user.lastName}` : "Guest"}
          </h1>
          {user && (
            <div className="flex items-center mt-2">
              <img
                src={user.image}
                alt="User"
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Link
            to="/user/add"
            className="text-white bg-yellow-500 rounded hover:bg-yellow-600 mt-4 m-4 text-lg p-2"
          >
            {ADD_PRODUCT}
          </Link>
        </div>
      </header>
      <Link
        to="/user/card1"
        className="text-white bg-yellow-500 rounded hover:bg-yellow-600 mt-4 m-4 text-lg p-2"
      >
        {EXISTING_PRODUCTS}
      </Link>
      <Link
        to="/user/card2"
        className="text-white bg-yellow-500 rounded hover:bg-yellow-600 mt-4 m-4 text-lg p-2"
      >
        {NEW_PRODUCT}
      </Link>
    </>
  );
};

export default Dashboard;
