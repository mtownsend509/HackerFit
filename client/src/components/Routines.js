import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import {QUERY_USER} from "../utils/queries"
// import {QUERY_ROUTINES} from "../utils/queries";

const Routines = () => {


  const{loading, data} = useQuery(QUERY_USER, {    
    variables: {username: "new"}
})

  console.log("routines Comp line 20")
  console.log(data)
  const user = data?.user
  
  // console.log(data.data.user.username)
  // console.log(user.username)
  // const user = "Stuff"
  // const { exercise } = useQuery()
  
  return (
    <>
      <div className="container my-1">

      
        {user ? (
          <>
          {/* go ahead and fix this style tag to a tailwind CSS classname, make sure it wil push it down below the header */}
          <h1 style={{marginTop:"200px"}}>{user.username}</h1>
            {user.savedRoutines.map((routine) => (
            
              <div key={routine._id} className="my-2">

                <div className="flex-row">
                <div>Routine: {data.user.savedRoutines}</div>

                    </div>
                </div>
            ))}
          </>
        ) : (
          <div>no info</div>
        )}
      </div>
    </>
  );
}
export default Routines;
