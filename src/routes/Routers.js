// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "../pages/Home";
// import AllFoods from "../pages/AllFoods";
// import FoodDetails from "../pages/FoodDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Contact from "../pages/Contact";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/foods" element={<AllFoods />} />
//       <Route path="/foods/:id" element={<FoodDetails />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/contact" element={<Contact />} />
      
//     </Routes>
//   );
// };

// export default Routers;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Make sure to import useAuth

// import Home from "../pages/Home";
// import AllFoods from "../pages/AllFoods";
// import FoodDetails from "../pages/FoodDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Contact from "../pages/Contact";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// // ProtectedRoute component for authenticated routes
// const ProtectedRoute = ({ children }) => {
//   const { currentUser } = useAuth();

//   return currentUser ? children : <Navigate to="/login" />;
// };

// // Routers component
// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/foods" element={<AllFoods />} />
//       <Route path="/foods/:id" element={<FoodDetails />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route
//         path="/checkout"
//         element={
//           <ProtectedRoute>
//             <Checkout />
//           </ProtectedRoute>
//         }
//       />
      
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default Routers;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure to import useAuth
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

// ProtectedRoute component for authenticated routes
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

// Routers component
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
