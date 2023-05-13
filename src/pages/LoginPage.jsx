import { Link } from "react-router-dom";
import React from "react";

function LoginPage() {
  const login = async () => {};
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
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
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
          onClick={login}
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
