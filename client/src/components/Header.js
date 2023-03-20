import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Switcher from "./Switcher";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="nav flex justify-between items-center w-full px-4 fixed pr-20 pl-10 bg-slate-400 dark:bg-stone-800 h-[150px]">
        <div>
          <Link
            className=""
            to="/"
          >
            <h1 className="flex-row text-4xl m-0 font-bold text-slate-100">
              Hacker Fit
            </h1>
          </Link>
          <p className="m-0 text-xl text-slate-100">
            Create and track
            your workouts!
          </p>
        </div>
        <div className="flex flex-row px-2 mt-4 ">
          {Auth.loggedIn() ? (
            <>
              <Link
                className="text-white"
                to="/Profile"
              >
                {
                  Auth.getProfile()
                    .data
                    .username
                }
                's profile
              </Link>

              <div className="ml-4 text-white">
                <Link to="/NewRoutine">
                  New Routine
                </Link>
              </div>
              
              <div className="ml-4 text-white">
                <Link to="/RoutineLog">
                  Routine Log
                </Link>
              </div>
  
              <div className="ml-4 text-white">
                <button
                  onClick={
                    logout
                  }
                >
                  Logout
                </button>
              </div>
                  <div className="ml-4">
                <Switcher />
                </div>
            </>
          ) : (
            <>
              <Link
                className="text-xl hover:underline text-white bg-gradient-to-br from-teal-300 via-teal-400 to-teal-600 px-6 py-3 my-8 flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5 "
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-lg btn-light text-xl hover:underline m-2 text-gray-600 bg-gradient-to-br from-white via-gray-100 to-gray-300 px-6 py-3 my-8  flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5"
                to="/signup"
              >
                Signup
                </Link>
                <div className="ml-4 mt-10">
                <Switcher />
                </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
