import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Routines = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me;
console.log(user)
  if (!user) {
    return <div>Please sign or log in to get started</div>;
  }

  if (loading) {
    return <div>Loading Routines</div>;
  }

  if (user.savedRoutines.length === 0) {
    return (
      <>
        <div className=" mt-[250px] flex justify-center text-4xl mb-10  dark:text-slate-300 text-slate-400 ml-5">
          <p>GO make a New Routine to get started!</p>
        </div>
      </>
    );
  }

  return (
    <div className="container mt-[150px]">
      <div className="w-full flex flex-col mx-auto max-w-screen-lg">
      {/* go ahead and write over this style tag to a tailwind CSS classname, make sure it wil push it down below the header */}
      <h1 className="flex justify-start text-4xl mb-10 mt-10 dark:text-slate-300 text-slate-400 ml-5">Hello {user.username}! Here is a list of your favorite workouts</h1>
      <div className="mt-5">
      {user.savedRoutines.map((routine) => (
        <div key={routine._id} className="my-2">
           <div className="border-b-2 border-b-gray-400">
            <div className="flex">
              <div className="flex flex-row ml-5">
            <div className="text-lg dark:text-slate-300 text-gray-500">Routine name: </div>
                <div className="ml-5 text-lg dark:text-slate-300 text-gray-500 "> {routine.Title}</div>
                </div>
              {routine.exercises.map((exercise) => {
                return (
                  <ul>
                  {/* <li>{exercise._id}</li> */}
                  <li>{exercise.name}</li>
                  <li>{exercise.muscle}</li>
                  <li>{exercise.instructions}</li>
                  </ul>
                );
              })}
               </div>
          </div>
        </div>
      ))}
      </div>
      </div>
      </div>
  );
};
export default Routines;
