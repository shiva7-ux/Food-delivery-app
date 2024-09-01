import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s "}></img>
          </div>
         <div className="Nav-items">
           <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Cart</li>
           </ul>
       </div>
       </div>
    );
 };


 const RestaurantCard=(props) =>{
    const {resData} = props;
     console.log(resData);
     
    const{
       cloudinaryImageId,
       name,
       avgRating,
       cuisines,
       costForTwo,
       deliveryTime,
    } =resData?.data;
 
 return(
       <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img  className="res-logo" res alt="res-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100}FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
       </div>
    );
  };