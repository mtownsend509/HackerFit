import React from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const Footer = () => {
  const location =
    useLocation();
  const navigate =
    useNavigate();
  return (
    <footer className="flex justify-around items-center w-full p-4  bg-white dark:bg-stone-800">
      <div className="text-center">
        {location.pathname !==
          "/" && (
          <button
            className="text-gray-500  dark:text-white dark:hover:text-slate-200 hover:text-gray-700"
            onClick={() =>
              navigate(-1)
            }
          >
            &larr; Go Back
          </button>
        )}

        <div className="flex flex-row">
          <h4 className="text-gray-500  dark:text-white">
            Made with
          </h4>
          <span
            className="emoji animate-beat mx-1"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>
          <h4 className="text-gray-500  dark:text-white">
            by the Hacker Fit
            team
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
