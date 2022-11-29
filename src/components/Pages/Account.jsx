import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Card from "../../global components/Card";

function Account() {
  const { user, logout, UserData } = UserAuth();
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
    <Card className={'mt-16 max-w-[700px] mx-auto '}>
      <div className="max-w-[600px] mx-auto my-8 p-4">
        <h1 className=" text-2xl font-bold py-4">Account</h1>
        <p>User: {user && UserData.username}</p>
        <p>User Email: {user && user.email}</p>
        <p>User Name: {user && UserData.displayName}</p>
        {/* <p>User Email: {user && user.email}</p> USER PHOTO */}
        <button
          onClick={handleLogOut}
          className="border px-6 py-2 my-4 bg-blue-500 text-white"
        >
          Log Out
        </button>
      </div>
    </Card>
  );
}

export default Account;
