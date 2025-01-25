import { useDispatch } from "react-redux";
import { addItem } from "../constant/cartSlice";
import { CDN_URL } from "../constant/common";
import FoodCart from "./removenbtn";
// const ItemList = ({items}) => {
//     console.log(items);

// const dispatch = useDispatch();
// const handleAddItem = (item) => {
//  //dispatch action
//   dispatch(addItem(item));
//   console.log(item);
// }

//  return (
//     <div>
//         {items.map((item) =>  (
//           <div 
//           key = {item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//           >
             
//              <div className="w-9/12">
//               <div className="py-2">
//                 <span>{item.card.info.name}</span>
//                 <span>
//                     -₹
//                     {item.card.info.price 
//                     ? item.card.info.price/100 
//                     : item.card.info.defaultPrice/100}
//                 </span>
//               </div>
//               <p className="text-xs">{item.card.info.description}</p>
//               </div>
//               <div className="w-3/12 p-4">
//                <div className="absolute">
//                 <button className="p-2 mx-6 rounded-lg bg-white shadow-lg"
//                   onClick={() => handleAddItem(item)}
//                 >
//                     Add+
//                 </button>
//                 </div>
//               <img src={CDN_URL + item.card.info.imageId} alt="img1" className="w-full"/>
//               </div>

//                 {/* <FoodCart/> */}

              
//           </div>
//         ))}
//     </div>
//     );
// };

// export default ItemList;






import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../constant/cartSlice";
import { CDN_URL } from "../constant/common";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart); // Get cart items from Redux store

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Dispatch remove action
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute flex">
              <button
                className="p-2 mx-1 rounded-lg bg-green-500 text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
              <button
                className="p-2 mx-1 rounded-lg bg-red-500 text-white shadow-lg"
                onClick={() => handleRemoveItem(item.card.info.id)}
              >
                Remove
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="img1"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;







// const ItemList = ({ items = [] }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

 

//   return (
//     <div>
//       {items.length > 0 ? (
//         items.map((item) => (
//           <div
//             key={item.card.info.id}
//             className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//           >
//             <div className="w-9/12">
//               <div className="py-2">
//                 <span>{item.card.info.name}</span>
//                 <span>
//                   -₹
//                   {item.card.info.price
//                     ? item.card.info.price / 100
//                     : item.card.info.defaultPrice / 100}
//                 </span>
//               </div>
//               <p className="text-xs">{item.card.info.description}</p>
//             </div>
//             <div className="w-3/12 p-4">
//               <div className="absolute flex">
//                 <button
//                   className="p-2 mx-1 rounded-lg bg-green-500 text-white shadow-lg"
//                   onClick={() => handleAddItem(item)}
//                 >
//                   Add+
//                 </button>
                
//               </div>
//               <img
//                 src={CDN_URL + item.card.info.imageId}
//                 alt="img1"
//                 className="w-full"
//               />
//             </div>
//           </div>
//         ))
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default ItemList;

