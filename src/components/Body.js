// import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// // import resList from "../constant/MockData";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../constant/useOnlineStatus";
// import Footer from "./Fotter";
// // import Footer from "./footer";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState(null);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//   //whenever state variable update, react triggers a reconciliation cycle (re-render component)
//   // console.log("Body Rendered", listOfRestaurants);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5752184&lng=78.4232303&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     // console.log(json);
//     setListOfRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
//     // console.log(listOfRestaurants);
//   };

//   const onlineStatus = useOnlineStatus();
//   if (!onlineStatus) {
//     return <h1>Looks like you are offline!! Please check your connection.</h1>;
//   }

//   // conditional rendering
//   if (!listOfRestaurants) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body mx-10 pt-24 bg-amber-50">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input
//             type="text"
//             className="border border-solid border-black"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               console.log(searchText);
//               const filteredRestaurants = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurants(filteredRestaurants);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-xl"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setFilteredRestaurants(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//       </div>

//       <div className="res-container flex flex-wrap items-center">
//         {filteredRestaurants.map((restaurant) => (
//           <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
//             {/* if restaurant is promoted then add promoted label */}
//             {restaurant.info.promoted ? (
//               <RestaurantCardPromoted resData={restaurant} />
//             ) : (
//               <RestaurantCard resData={restaurant} />
//             )}
//           </Link>
//         ))}
//       </div>
//             <Footer/>
//     </div>
    
//   );

// };

// export default Body;















import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../constant/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
import Footer from "./Fotter";
// import Footer from "./footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //whenever state variable update, react triggers a reconciliation cycle (re-render component)
  // console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5752184&lng=78.4232303&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(listOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline!! Please check your connection.</h1>;
  }

  // conditional rendering
  if (!listOfRestaurants) {
    return <Shimmer />;
  }

  return (
    <div className="body mx-4 md:mx-10 pt-24 bg-amber-50">
      <div className="filter flex flex-wrap justify-between items-center">
        <div className="search m-4 p-4 w-full md:w-auto md:ml-40">
          <input
            type="text"
            className="border border-solid border-black w-full  md:w-80 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg w-full md:w-auto"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 w-full md:w-auto flex items-center justify-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-xl w-full md:w-auto"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center items-center gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {/* if restaurant is promoted then add promoted label */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;

