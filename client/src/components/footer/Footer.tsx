const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-gray-300 py-8 px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Amit_Eats. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;