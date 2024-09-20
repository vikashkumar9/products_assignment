import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ADD_PRODUCT } from "../config";
const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();
  const [stock, setStock] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const storedProducts = localStorage.getItem("newProduct");
  const prod = storedProducts ? JSON.parse(storedProducts) : [];
  console.log("prod", prod);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      title,
      price,
      discountPercentage,
      stock,
      rating,
      description,
      brand,
      category,
    };

    const userdata = localStorage.getItem("loginData");
    const user = JSON.parse(userdata);
    const token = user?.token;

    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Product added:", result);
      alert("Product added successfully!");

      localStorage.setItem("newProduct", JSON.stringify([...prod, result]));

      navigate("/user/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-black">
          Add Products
        </h2>
        <ProductForm
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          discountPercentage={discountPercentage}
          setDiscountPercentage={setDiscountPercentage}
          stock={stock}
          setStock={setStock}
          rating={rating}
          setRating={setRating}
          description={description}
          setDescription={setDescription}
          brand={brand}
          setBrand={setBrand}
          category={category}
          setCategory={setCategory}
          isEdit={false}
        />
        <Button type="submit" className="w-full">
          {ADD_PRODUCT}
        </Button>
      </form>
    </div>
  );
};

export default AddProducts;
