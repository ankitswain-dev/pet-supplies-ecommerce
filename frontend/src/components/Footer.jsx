const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 shadow-inner">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} PetStore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
