import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SignupSuccessMessage from "../components/SignUpSuccess";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); // initialize useNavigate hook

  const setNameFun = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const setEmailFun = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const setPassFun = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const signUp = async (event) => {
    event.preventDefault();
    const userObj = {
      name: name,
      email: email,
      password: password,
    };
    try {
      console.log(`Hitting signup route`);
      const res = await axios.post(
        "http://localhost:8080/api/user/register",
        userObj
      );
      console.log(`SUCCESS ${JSON.stringify(res?.data)}`);
      if (res?.data?.success) {
        console.log(`SUCCESS ${JSON.stringify(res?.data?.success)}`);
        setName("");
        setEmail("");
        setPassword("");
        setSignupSuccess(true); // Set signupSuccess state to true
        //window.location.reload();
        navigate("/login"); // navigate to login page after successful signup
      }
    } catch (error) {
      console.log(`Error hitting signup route ${JSON.stringify(error)}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Sign up</h1>
      {signupSuccess && <SignupSuccessMessage />}
      <form className="w-80" method="POST">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-400"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={setNameFun}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-400"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={setEmailFun}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-400"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={setPassFun}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
          onClick={signUp}
        >
          Sign up
        </button>
      </form>
      <div className="mt-4">
        <span className="text-gray-600">Already have an account?</span>{" "}
        <Link to="/login" className="text-blue-500 font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
