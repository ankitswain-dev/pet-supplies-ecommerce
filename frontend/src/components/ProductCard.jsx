import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

// Card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProductCard({ product }) {
  const { dispatch } = useCart();
  if (!product) return null;

  return (
    <motion.div
      className="border p-4 rounded-xl shadow-md bg-white"
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
    >
      <Link to={`/product/${product.id}`}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </Link>

      <motion.button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded w-full"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
