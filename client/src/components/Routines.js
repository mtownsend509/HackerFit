import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_ROUTINES, QUERY_USER } from "../utils/queries";
// import {QUERY_ROUTINES} from "../utils/queries";

const Routines = () => {
  // going to need something that will actually find the Current users data in the variable
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: "newguy" },
  });

  // const {rLoading, rData} = useQuery(QUERY_ROUTINES, {
  //   variables: {_id: "641a01fe7b15bb2d0c7fd26b"}
  // })
  // console.log(rData)
  // console.log("routines Comp line 20")
  // console.log(data)
  // console.log(data.user.savedRoutines)

  const user = data?.user;

  // const routine = rData?.savedRoutines

  // console.log(data.data.user.username)

  if (loading) {
    return <div>Loading Routines</div>;
  } else if (user.savedRoutines.length === 0) {
    return (
      <>
        <div style={{ marginTop: "250px" }}>
          <p>GO make a New Routine to get started!!!!</p>
        </div>
      </>
    );
  } else {
    console.log(user.savedRoutines) // we are getting the data
    return (
      <>
        <div className="container my-1">
          {user ? (
            <>
              {/* go ahead and fix this style tag to a tailwind CSS classname, make sure it wil push it down below the header */}
              <h1 style={{ marginTop: "200px" }}>{user.username}</h1>
              
              {user.savedRoutines.map((savedRoutine) => (
                <div key={savedRoutine._id} className="my-2">
                  <div className="flex-row">
                    {/* nope <div>Routine: {routine.Title}</div> */}
                    {/* nope <div>Routine: {user.Routines.title}</div> */}
                    {/* nope <div>Routine: {user.Routines.Title}</div> */}
                    {/* nope <div>Routine: {user.savedRoutine.data.title}</div> */}
                    {/* nope <div>Routine: {data.user.savedRoutine.title}</div> */}
                    {/* nope <div>Routine: {user.savedRoutines.title}</div> shows hard-coded div but nor data */}
                    <div>Routine: {user.savedRoutine}</div>
                    

                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>Please Sign up or Login to get started .</div>
          )}
        </div>
      </>
    );
  }
};
export default Routines;
