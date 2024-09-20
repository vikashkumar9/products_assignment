import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  label,
  disabled,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-black"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:shadow-lg focus:outline-none bg-transparent text-black"
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
