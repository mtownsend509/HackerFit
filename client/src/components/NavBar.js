import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
    {/* will end up flexing these  */}
    <ul className="">
      <li className="">
        <a
          href="#CreateRoutine"
          onClick={() => handlePageChange("CreateRoutine")}
          // ternary operators checking for the truthiness of nav-link ( kinda like req.params)
          // dont add classNames to this anchor tag, might mess with navigation
          className={currentPage === "CreateRoutine" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          Create Routine
        </a>
      </li>

      <li className="">
        <a
          href="#RoutineLogg"
          // when the client clicks on the event button to trigger this function, it will perform another functon to swap the page
          onClick={() => handlePageChange("RoutineLogg")}
          // checks to see if the currentPage STATE VALUE is equal to the htmls tag "Blog" if it is, it will set 'nav-link active' otherwise just "nav-link"
          className={currentPage === "RoutineLogg" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          Routine Logg
        </a>
      </li>
      <li className="">
        <a
          href="#Profile"
          // when the client clicks on the event button to trigger this function, it will perform another functon to swap the page
          onClick={() => handlePageChange("Profile")}
          // checks to see if the current page STATE VALUE is equal to the htmls tag "Contact" if it is, it will set 'nav-link active' otherwise just "nav-link"
          className={
            currentPage === "Profile" ? "nav-link active" : "nav-link"
          }
          id="navButton"
        >
          Profile
        </a>
      </li>
      {/* <li className="navContainer">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          //ternary operators checking for the truthiness of nav-link ( kinda like req.params)
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          Resume
        </a>
      </li> */}
    </ul>
    </div>
  );
}

export default NavBar;