import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header >
      <div className="nav flex justify-between items-center w-full h-40 px-4 fixed pr-20 pl-10 bg-slate-400">
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
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info text-xl hover:underline text-white bg-gradient-to-b from-teal-300 to-teal-600 px-6 py-3 my-8 flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5 " to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light text-xl hover:underline m-2 text-gray-600 bg-gradient-to-b from-gray-300 to-white px-6 py-3 my-8  flex-items-center rounded-md hover:scale-110 duration-300 mb-20 ml-5" to="/signup">
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

// import React, {
//     useState,
// } from "react";

// import {
//     FaBars,
//     FaTimes,
//   } from "react-icons/fa";

// const NavBar = ({
//     setCurrentPage,
//   }) => {
//     const [nav, setNav] =
//       useState(false);
  
//     const links = [
    
//       {
//         id: 1,
//           link: "Profile",
//           setCurrentPage: () =>
//           setCurrentPage(
//             "Profile"
//           ),
//       },
//       {
//         id: 2,
//         link: "Create Routine",
//       },
     
//       {
//         id: 3,
//         link: "Routine Logg",
//       },
     
//     ];
  
//     const handleNavClick = (
//       link
//     ) => {
//       setCurrentPage(link);
//       setNav(false);
//     };
  
//     return (
//       <div className="nav flex justify-between items-center w-full h-20 px-4 fixed pr-20">
//         <div>
//           <h1 className="text-5xl font-brand ml-2 text-white">
            
//           </h1>
//         </div>
  
//         <ul className="hidden md:flex ">
//           {links.map(
//             ({ id, link }) => (
//               <li
//                 onClick={() =>
//                   setCurrentPage(
//                     link
//                   )
//                 }
//                 key={id}
//                 className="nav px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-600 duration-200"
//               >
//                 {link}
//               </li>
//             )
//           )}
//         </ul>
  
//         <div
//           onClick={() =>
//             setNav(!nav)
//           }
//           className="cursor-pointer z10 text-gray-500 hover:scale-105 duration-200 hover:text-gray-600 md:hidden"
//         >
//           {nav ? (
//             <FaTimes
//               size={30}
//             />
//           ) : (
//             <FaBars size={30} />
//           )}
//         </div>
  
//         {nav && (
//           <ul className="hamburger-page flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from black to-gray-800">
//             <li
//               onClick={() =>
//                 setNav(false)
//               }
//             >
//               <FaTimes
//                 size={30}
//               />
//             </li>
//             {links.map(
//               ({
//                 id,
//                 link,
//               }) => (
//                 <li
//                   onClick={() =>
//                     handleNavClick(
//                       link
//                     )
//                   }
//                   key={id}
//                   className="hamburger-links mt-5 px-4 py-6 text-4xl cursor-pointer capitalize  text-gray-500 hover:scale-105 duration-200"
//                 >
//                   {link}
//                 </li>
//               )
//             )}
//           </ul>
//         )}
//       </div>
//     );
//   };
  
//   export default NavBar;
