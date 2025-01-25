// import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import ItemList from './ItemList';
// const FoodCart = () => {
//   // Sample cart data
//   const [cartItems, setCartItems] = useState(0);

//   // Function to remove an item from the cart
// //   const handleRemove = (id) => {
// //     const updatedCart = cartItems.filter(item => item.id !== id);
// //     setCartItems(updatedCart);
// //   };
// const ItemList = ({ items = [] }) => {
//     const dispatch = useDispatch();
//   const handleRemoveItem = (id) => {
//     dispatch(removeItem(id));
//   };

//   return (
//     <div>
      
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id} style={{ margin: '10px 0' }}>
//               <span>{item.name} - ₹{item.price}</span>
//               <button className="p-2 mx-1 rounded-lg bg-red-500 text-white shadow-lg"
//                 onClick={() => handleRemoveItem(item.card.info.id)}
//                     >
//                     - Remove
//                 </button>
              
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };
// }
// export default FoodCart;
