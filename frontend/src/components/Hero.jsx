import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-yellow-50 text-center py-12 px-4">
      <motion.h2
        className="text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pamper Your Pet with the Best
      </motion.h2>

      <motion.p
        className="text-lg mb-6 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Quality food, fun toys, and comfy accessories – all in one place.
      </motion.p>

      <motion.button
        className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Shop Now
      </motion.button>

      <motion.img
        src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg"
        alt="Happy pet"
        className="mt-8 mx-auto rounded-2xl shadow-md w-full max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
    </section>
  );
};

export default Hero;
