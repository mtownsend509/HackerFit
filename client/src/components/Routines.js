import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import {QUERY_USER} from "../utils/queries"
import {QUERY_SINGLE_ROUTINE} from "../utils/queries";

const Routines = () => {


  // set state for reps?
  // const [repState, setRepState] = useState("");
    // set state for sets?
  // const [setsState, setSetsState] = useState("")

  const { routineData } = useQuery(QUERY_SINGLE_ROUTINE);

  const { data } = useQuery(QUERY_USER)

  console.log("routines Comp line 20")
  console.log(data)
  let user;
  if (data) {
    user = data.user
  }
  console.log(user)
  // const { exercise } = useQuery()
  return (
    <>
      <div className="container my-1">


        {user ? (
          <>
            {user.savedRoutines.map((routine) => (
              <div key={routine._id} className="my-2">

                <div className="flex-row">
                  {routine.exercises.map(({ _id, name, muscle, instructions }, index) => (
                    <div key={index} className="">
                      <p>{name}</p>
                      <p>{muscle}</p>
                      <p>{instructions}</p>

                      <div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}
export default Routines;
