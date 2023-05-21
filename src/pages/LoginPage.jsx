import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [history, userInfo, redirect]);

  const setNameFun = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordFun = (event) => {
    setPassword(event.target.value);
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      {error && <Message variant="failure">{error}</Message>}
      {loading && <Loader />}
      <form className="w-80">
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
            required
            onChange={setNameFun}
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
            required
            onChange={setPasswordFun}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
          onClick={loginSubmit}
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <span className="text-gray-600">Don't have an account?</span>{" "}
        <Link to="/register" className="text-blue-500 font-medium">
          Register
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
