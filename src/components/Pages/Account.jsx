import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Account() {
  const { user, logout } = UserAuth();
  const navigateHome = useNavigate();

  async function handleLogOut() {
    try {
      await logout();
      navigateHome("/");
      console.log("you are logged out");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className=" text-2xl font-bold py-4">Account</h1>

      <p>User Email: {user && user.email}</p>
      <button
        onClick={handleLogOut}
        className="border px-6 py-2 my-4 bg-blue-500 text-white"
      >
        Log Out
      </button>
    </div>
  );
}

export default Account;
