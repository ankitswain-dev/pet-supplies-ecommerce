import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Dog Food - Chicken",
    price: 499,
    image: "/images/dog-food.jpg",
  },
  {
    id: 2,
    name: "Cat Toy Ball",
    price: 199,
    image: "/images/cat-toy-ball.jpg",
  },
  {
    id: 3,
    name: "Bird Feeder",
    price: 299,
    image: "/images/bird-feeder.jpg",
  },
  {
    id: 4,
    name: "Dog Collar",
    price: 249,
    image: "/images/dog-collar.jpg",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, //delay between cards
    },
  },
};

const Shop = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  //Check when all images are loaded
  useEffect(() => {
    const loadImages = async () => {
      const promises = products.map(
        (p) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = p.image;
            img.onload = resolve;
            img.onerror = resolve; // still resolve to avoid blocking
          })
      );
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <div className="p-6">
      {/* Title Animation */}
      <motion.h1
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🐾 Shop Our Pet Products
      </motion.h1>

      {/* Grid with stagger effect */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={imagesLoaded ? "show" : "hidden"} // animate only after images are ready
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Optional: Loading indicator */}
      {!imagesLoaded && (
        <p className="text-center mt-6 text-gray-500 animate-pulse">
          Loading products...
        </p>
      )}
    </div>
  );
};

export default Shop;
