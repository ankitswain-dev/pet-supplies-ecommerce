import React from 'react';
import { motion } from 'framer-motion';

const categoryData = [
  {
    title: "🐶 Food",
    description: "Nutritious and tasty meals for dogs and cats.",
    bg: "bg-orange-100",
  },
  {
    title: "🧸 Toys",
    description: "Fun, durable toys to keep your pet active and happy.",
    bg: "bg-yellow-100",
  },
  {
    title: "🐕 Accessories",
    description: "Leashes, beds, grooming kits, and more.",
    bg: "bg-blue-100",
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white px-6">
      <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">Shop by Category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categoryData.map((item, index) => (
          <motion.div
            key={index}
            className={`${item.bg} p-6 rounded-2xl shadow hover:scale-105 transition`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
