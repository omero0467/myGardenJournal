import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import {
  // addDoc,
  // collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import FormInput from "../Form/FormInput";
import { userInputs as inputs } from "../../InputFields";
import Card from "../../global components/Card";

function SignUp() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [sucsess, setSucsess] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      const userRes = await createUser(data.email, data.password);
      setError("");
      setSucsess("All Good! 🤙🏽");
      setTimeout(() => {
        setData({});
        navigate("/account");
        setSucsess("");
      }, 2000);
      await setDoc(doc(db, "users", userRes.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      })
        .then((res) => console.log(res.id))
        .catch((err) => err.message);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold text-white py-2"> Sign up to your account</h1>
        <p className="py-2">
          {" "}
          Already have an account?{" "}
          <Link className="italic" to={"/login"}>
            Sign in.
          </Link>
        </p>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <FormInput
              key={input.id + index}
              input={input}
              setFunc={handleInput}
            />
          ))}
          <button
            type="submit"
            className="rounded-lg w-full bg-blue-600 p-3 my-2 text-white hover:bg-blue-500 border border-blue-500"
          >
            Sign Up
          </button>
          <span className="underline text-red-500">{error && error}</span>
          <span className="underline text-green-500">{sucsess && sucsess}</span>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
