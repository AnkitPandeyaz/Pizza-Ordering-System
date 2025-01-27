
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
import Dashboard from "../pages/Dashboard";

// ProtectedRoute component for authenticated routes
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // If the user is not logged in, redirect them to the login page
  return currentUser ? children : <Navigate to="/login" />;
};

// Routers component
const Routers = () => {
  return (
    <Routes>
      {/* Redirect to the home page by default */}
      <Route path="/" element={<Navigate to="/home" />} />
      
      {/* Public Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected Routes */}
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default Routers;
