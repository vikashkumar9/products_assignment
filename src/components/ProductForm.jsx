import React from "react";
import Input from "./ui/Input";

const ProductForm = ({
  title,
  setTitle,
  price,
  setPrice,
  discountPercentage,
  setDiscountPercentage,
  stock,
  setStock,
  rating,
  setRating,
  description,
  setDescription,
  brand,
  setBrand,
  category,
  setCategory,
  isEdit,
}) => {
  return (
    <div>
      <Input
        label="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        disabled={isEdit}
      />
      <Input
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <Input
        label="Discount Percentage"
        type="number"
        value={discountPercentage}
        onChange={(e) => setDiscountPercentage(e.target.value)}
      />
      <Input
        label="Stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <Input
        label="Rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        label="Brand"
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <Input
        label="Category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
    </div>
  );
};

export default ProductForm;
