
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) return null; // Don't render Header if user is not logged in

  return (
    <header className="  flex justify-between items-center p-4 bg-black text-white ">
      <h1 className="text-3xl font-serif font-bold cursor-pointer" onClick={() => navigate("/jobs")}>
        JobTracker
      </h1>
      <div className="flex items-center space-x-4">
        <img
          src="/user_logo.webp"
          alt="User Logo"
          className="w-10 h-10 rounded-full"
        />
        <button
          className="bg-red-600 px-4 py-2 rounded text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
