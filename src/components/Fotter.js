const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 mt-10 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Foodie Express. All rights reserved.
          </p>
          <div className="flex justify-center mt-2">
            <a href="/" className="mx-2 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/" className="mx-2 hover:text-gray-300">
              Terms of Service
            </a>
            <a href="/contact" className="mx-2 hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
