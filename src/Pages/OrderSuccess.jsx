import { NavLink } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-green-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-3xl font-semibold mb-4">Order Placed Successfully</h1>
        <p className="text-gray-600">
          Your order has been successfully placed. Thank you for shopping with us!
        </p>
        <NavLink to="/">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-8">
          Continue Shopping
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderSuccess;
