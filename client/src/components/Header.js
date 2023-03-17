import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='h-[300px]' >
      <div className="nav flex justify-between items-center w-full px-4 fixed pr-20 pl-10 bg-slate-400 h-[150px]">
              <div>
                  
          <Link className="" to="/">
            <h1 className="flex-row text-4xl m-0 font-bold text-slate-100">Hacker Fit</h1>
          </Link>
          <p className="m-0 text-xl  text-slate-100">Create and track your workouts!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
                     {/* another link for each url    */}
                <div>
                  <div className="flex flex-row px-2 mt-4">
                    <div className="ml-4"><Link to="/RoutineLog">Routine Log</Link></div>
                    <div className="ml-4"><Link to="/Profile">Profile</Link></div>
                    <div className="ml-4"><Link to="/NewRoutine">New Routine</Link></div>
                  </div>
                </div>
              
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
              <>
              
              <Link className="text-xl hover:underline text-white bg-gradient-to-br from-teal-300 via-teal-400 to-teal-600 px-6 py-3 my-8 flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5 " to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light text-xl hover:underline m-2 text-gray-600 bg-gradient-to-br from-white via-gray-100 to-gray-300 px-6 py-3 my-8  flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5" to="/signup">
                Signup
                </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


