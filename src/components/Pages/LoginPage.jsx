import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Card from "../../global components/Card";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucsess, setSucsess] = useState("");

  const { signIn } = UserAuth();

  const toMyGarden = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      setError("");
      setSucsess("All Good! 🤙🏽");
      setTimeout(() => {
        setPassword("");
        setEmail("");
        toMyGarden("/account");//!
        setSucsess("");
      }, 2000);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className="login page flex-center">
      <Card className="user_login ">
        <div className="user_image">some img</div>
        <div className="max-w-[600px] mx-auto p-4">
          <div>
            <h1 className="text-xl font-bold py-2"> Sign in to your account</h1>
            <p className="py-2">
              {" "}
              Already have an account?{" "}
              <Link className="italic" to={"/signup"}>
                Sign up.
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className=" py-2 rounded-lg border border-blue-200 px-2 focus:border-blue-500"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className=" py-2 font-medium" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                className="rounded-lg py-2 border border-blue-200 px-2 focus:border-blue-500"
                type="password"
                name="password"
              />
            </div>
            <button className="rounded-lg w-full bg-blue-600 p-3 my-2 text-white hover:bg-blue-500 border border-blue-500">
              Sign in
            </button>
            <span className="underline text-red-500">{error && error}</span>
            <span className="underline text-green-500">
              {sucsess && sucsess}
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
