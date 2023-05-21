import React, { useState, Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { useDispatch, useSelector } from "react-redux";
import { Home, CreatePost } from "./pages";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUp";
import { logout } from "./actions/userActions";
import Favourites from "./pages/Favourites";

const App = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(`USER INFO ${JSON.stringify(userInfo)}`);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex justify-end space-x-4">
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
          {userInfo ? (
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <span>{userInfo.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 8a1 1 0 01.707-.293l6 0a1 1 0 01.707.293l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 8zm0 4a1 1 0 01.707-.293l6 0a1 1 0 01.707.293l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <Link
                      to="/favourite"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Favourites
                    </Link>
                    <span
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={logoutHandler}
                    >
                      Logout
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
