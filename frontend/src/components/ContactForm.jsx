import React from "react";

const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 mb-4 border rounded-lg"
      />

      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 mb-4 border rounded-lg"
      />

      <label className="block mb-2 font-medium">Message</label>
      <textarea
        rows="4"
        placeholder="Your Message"
        className="w-full p-2 mb-4 border rounded-lg"
      />

      <button
        type="submit"
        className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
