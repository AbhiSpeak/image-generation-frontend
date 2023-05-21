import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components";
import Message from "../components/Message";
import SignupSuccessMessage from "../components/SignUpSuccess";
import { register } from "../actions/userActions";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  // initialize useNavigate hook
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const setNameFun = (event) => {
    setName(event.target.value);
  };

  const setEmailFun = (event) => {
    setEmail(event.target.value);
  };

  const setPassFun = (event) => {
    setPassword(event.target.value);
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const signUpSubmit = async (event) => {
    event.preventDefault();
    dispatch(register(name, email, password))
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Sign up</h1>
      {error && <Message variant="failure">{error}</Message>}
      {loading && <Loader />}
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
          onClick={signUpSubmit}
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
