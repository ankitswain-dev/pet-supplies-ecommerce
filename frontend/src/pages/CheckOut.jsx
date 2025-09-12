import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">✅ Order Placed Successfully!</h2>
        <p className="text-gray-600 mt-2">You’ll be redirected to home shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <textarea placeholder="Address" required className="w-full p-2 border rounded" />
          <select className="w-full p-2 border rounded" required>
            <option value="">Select Payment</option>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <hr className="my-4" />
          <h3 className="text-lg font-bold">Total: ₹{total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
