import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { addToCart } from "../services/cartService";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { dispatch } = useCart();
  const userId = 1; // Replace with dynamic userId

  if (!product) {
    return <div className="p-6 text-red-500">Product not found!</div>;
  }

  const handleAddToCart = async () => {
    try {
      await addToCart(userId, product.id, 1);
      dispatch({ type: "ADD_TO_CART", payload: product });
      alert("✅ Product added to cart!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("❌ Could not add to cart.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image with Animation */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover max-h-[400px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Product Details with staggered fade-in */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h1
            className="text-3xl font-bold text-gray-800 mb-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {product.name}
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {product.description}
          </motion.p>

          <motion.p
            className="text-2xl font-semibold text-blue-600 mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            ₹{product.price}
          </motion.p>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow hover:shadow-xl transition"
          >
            🛒 Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
