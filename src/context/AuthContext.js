

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set the logged-in user
      setLoading(false); // Stop loading once the user state is determined
    });

    // Cleanup the listener on component unmount
    return unsubscribe;
  }, []);

  // Logout functionality
  const logout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      setCurrentUser(null); // Set the currentUser to null after logout
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  // Value to be provided to the entire application
  const value = {
    currentUser, // Current logged-in user
    logout, // Logout function
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when loading is done */}
    </AuthContext.Provider>
  );
};
