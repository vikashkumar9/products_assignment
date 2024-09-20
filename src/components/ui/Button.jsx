"use client"

const Button = ({ onClick, type = "button", className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`"w-full px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;