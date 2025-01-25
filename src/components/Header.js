// import { LOGO_URL } from "../constant/common"; 
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../constant/useOnlineStatus";
// // import UserContext from "../constant/UserContext";
// import { useSelector } from "react-redux";


// const Header = () => {
//   const [BtnName, setBtnName] = useState("LOGIN");

//   const onlineStatus = useOnlineStatus();

//   // const { loggedInUser } = useContext(UserContext);
//   // console.log(loggedInUser);

//   // subscribing to store using a selector
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <div className="flex justify-between bg-white shadow-md z-50 h-20 fixed mx-0 my-0 w-full">
//       <div className="logo-container">
//         <img className="w-40 h-20" alt="img2" src={LOGO_URL} />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex m-4 p-4">
//           <li className="px-4">
//             Online Status: {onlineStatus ? "✅" : "❌"}
//           </li>
//           <li className="px-4">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/about">About Us</Link>
//           </li>
//           <li className="px-4">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           {/* <li className="px-4">
//             <Link to="/grocery">Grocery</Link>
//           </li> */}
//            <li className="px-4 ">
//             <Link to="/Sign in">Sign in</Link>
//           </li>
//           <li className="px-4 cursor-pointer font-bold">
//             <Link to="/cart">Cart({cartItems.length} items)</Link>
//           </li>
         
//           {/* <button
//             className="LOGIN border border-green-300 px-3 py-1 hover:bg-white hover:text-red-500"
//             onClick={() => {
//               BtnName === "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN");
//             }}
//           >
//             {BtnName}
//           </button> */}
//           {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
//         </ul>
//       </div>
//     </div>
//      );
//     };
    
//     export default Header;
















    import { LOGO_URL } from "../constant/common";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [BtnName, setBtnName] = useState("LOGIN");

  const onlineStatus = useOnlineStatus();

  // subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex flex-wrap items-center justify-between bg-white shadow-md z-50 h-20 fixed top-0 left-0 w-full px-4 md:px-8 lg:px-16">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-32 h-16" alt="Logo" src={LOGO_URL} />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        <ul className="flex items-center space-x-4">
          <li>
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li>
            <Link to="/Sign in" className="hover:text-blue-500">Sign in</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 font-bold">
              Cart({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          className="text-gray-600 hover:text-blue-500 focus:outline-none"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.toggle("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      <div
        id="mobile-menu"
        className="hidden absolute top-20 left-0 w-full bg-white shadow-lg md:hidden"
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li>
            <Link to="/Sign in" className="hover:text-blue-500">Sign in</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 font-bold">
              Cart({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


















