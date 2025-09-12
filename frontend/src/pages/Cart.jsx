import { useEffect, useState } from "react";
import { getCartByUser, removeFromCart, clearCart } from "../services/cartService";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const userId = 1;
      const response = await getCartByUser(userId);
      setCartItems(response);
      const totalAmount = response.reduce(
        (sum, item) => sum + item.Product.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    };
    fetchCart();
  }, []);

  const handleRemove = async (cartId) => {
    try {
      await removeFromCart(cartId);
      const updatedItems = cartItems.filter((item) => item.id !== cartId);
      setCartItems(updatedItems);
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.Product.price * item.quantity,
        0
      );
      setTotal(newTotal);
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-4 mt-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <motion.p
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Cart is empty
        </motion.p>
      ) : (
        <motion.div
          layout
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.Product.image_url}
                    alt={item.Product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      {item.Product.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      ₹{item.Product.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Clear Cart button */}
          {cartItems.length > 0 && (
            <motion.button
              onClick={async () => {
                await clearCart(1); // assuming userId = 1
                setCartItems([]);
                setTotal(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </motion.button>
          )}

          {/* Animated Total */}
          <motion.div
            key={total} // re-triggers animation when value changes
            className="text-right text-xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Total: ₹{total}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;
