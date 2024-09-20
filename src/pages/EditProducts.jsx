import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import Button from "../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_PRODUCT } from "../config";
const EditProducts = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();
  const [stock, setStock] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const result = await response.json();

      if (response.ok) {
        setTitle(result.title);
        setPrice(result.price);
        setDiscountPercentage(result.discountPercentage);
        setStock(result.stock);
        setRating(result.rating);
        setDescription(result.description);
        setBrand(result.brand);
        setCategory(result.category);
      }
    };

    fetchProduct();
  }, [productId]);

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

    const response = await fetch(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    const result = await response.json();
    console.log("result", result);

    if (response.ok) {
      console.log("Product updated:", result);
      alert("Product updated successfully!");
      navigate("/user/dashboard");
    } else {
      console.error("Failed to update product:", result);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form
        className="w-full max-w-sm sm:max-w-md min-w-[300px] p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-2xl font-bold text-center text-black">
          Edit Product
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
          isEdit={true}
        />
        <Button type="submit" className="w-full">
          {UPDATE_PRODUCT}
        </Button>
      </form>
    </div>
  );
};

export default EditProducts;
