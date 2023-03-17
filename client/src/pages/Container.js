// import React, { useState } from 'react'


// import Profile from './Profile';
// import NewRoutine from './NewRoutine';
// import RoutineLogg from "./RoutineLogg"
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';


// const Container = () => {
//   const [currentPage, setCurrentPage] = useState("Profile");
//   // will need some kind of conditional to determine if user is still logged in via token,
//   // if they are, will be directed to profile or thier Routine Logg
//   // if their is no token detected or it is expired, will redirect user to log in or sign up?
//   const renderPage = () => {
//     if (currentPage === "NewRoutine") {
//       return (
//         <div>
//           <NewRoutine />
//         </div>
//       );
//     }
//     if (currentPage === "RoutineLogg") {
//       return (
//         <div>
//           <RoutineLogg
//           />
//         </div>
//       );
//     }
//     if (currentPage === "Profile") {
//       return <Profile />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Header />
//       <NavBar
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// };

// export default Container;
