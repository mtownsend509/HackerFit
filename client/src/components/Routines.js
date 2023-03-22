import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Routines = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me;

  if (!user) {
    return <div>Please sign or log in to get started</div>;
  }

  if (loading) {
    return <div>Loading Routines</div>;
  }

  if (user.savedRoutines.length === 0) {
    return (
      <>
        <div style={{ marginTop: "250px" }}>
          <p>GO make a New Routine to get started!!!!</p>
        </div>
      </>
    );
  }

  return (
    <div className="container my-1">
      {/* go ahead and write over this style tag to a tailwind CSS classname, make sure it wil push it down below the header */}
      <h1 style={{ marginTop: "200px" }}>{user.username}</h1>
      {user.savedRoutines.map((routine) => (
        <div key={routine._id} className="my-2">
          <div className="flex-row">
            <div>Routine: {routine.Title}</div>
            
              {routine.exercises.map((exercise) => {
                return (
                  <ul>
                  <li>{exercise._id}</li>
                  <li>{exercise.name}</li>
                  <li>{exercise.muscle}</li>
                  <li>{exercise.instructions}</li>
                  </ul>
                );
              })}
            
          </div>
        </div>
      ))}
    </div>
  );
};
export default Routines;
