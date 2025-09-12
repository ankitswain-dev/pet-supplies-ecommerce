import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-md px-6 py-3 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with bounce animation */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🐾 PetStore
          </Link>
        </motion.div>

        {/* Links */}
        <div className="flex gap-6">
          {["Home", "Shop", "Cart", "Contact"].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 hover:text-blue-600 transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
