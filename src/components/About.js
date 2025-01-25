// import User from "./User";
// import UserClass from "./UserClass";
// import React from "react";
// class About extends React.Component{
//     constructor(props){
//         super(props);
    
//     }
    



//   render(){
  
//     return(
//         <div className="pt-24">
//             <User name={"I am shiva kumar"}/>


//             <UserClass name={"I am raj kumar"} location={"HYDERBAD CLASS"}/>
//         </div>
//     );
//   }

// }





// export default About;








const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center">
     
      <div className="w-full bg-green-500 h-12 flex items-center justify-center">
        <p className="text-white text-sm font-semibold">Welcome to FoodieExpress!</p>
      </div>

     
      <div className="px-6 py-12 w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold">FoodieExpress</span>, your trusted food delivery partner.
          </p>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At FoodieExpress, we strive to bring your favorite meals to your doorstep with speed and reliability. 
            We partner with local restaurants to ensure a variety of cuisines and fresh ingredients to satisfy every craving.
          </p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fast and reliable delivery services.</li>
            <li>A wide selection of cuisines from top-rated restaurants.</li>
            <li>User-friendly app interface for easy ordering.</li>
            <li>Real-time tracking of your orders.</li>
            <li>Exclusive discounts and deals.</li>
          </ul>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600">
            We prioritize customer satisfaction, quality, and sustainability. By choosing us, you contribute to 
            supporting local businesses and promoting eco-friendly packaging solutions.
          </p>
        </div>

      
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 mb-4">
            Ready to explore delicious meals? Download our app now and enjoy seamless food delivery!
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


