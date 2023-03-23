import React from "react";
// import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import Auth from "../utils/auth";

import { QUERY_ME } from "../utils/queries";
import { DELETE_ROUTINE } from "../utils/mutations";

const Routines = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [deleteRoutine] = useMutation(DELETE_ROUTINE);


  const client = useApolloClient(); 

  const user = data?.me;

  console.log(user);

  const handleDeleteRoutine = async (routineId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteRoutine({
        variables: { routineId },
      });
      console.log(data);

      if (data?.deleteRoutine) {
        const updatedUserData = { ...user };
        updatedUserData.savedRoutines = updatedUserData.savedRoutines.filter(
          (savedRoutines) => savedRoutines.routineId !== routineId
        );
        window.alert(`It's deleted believe me plz`)


        client.writeQuery({
          query: QUERY_ME,
          data: { me: updatedUserData },
        });
      }
    } catch (err) {
      console.error(err.networkError.result.errors);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;

  }



  return (
    <div className="container mt-[150px]">
    <div className="w-full flex flex-col mx-auto max-w-screen-lg">
      {/* go ahead and write over this style tag to a tailwind CSS classname, make sure it wil push it down below the header */}
      <h1 className="flex justify-start text-4xl mb-10 mt-10 dark:text-slate-300 text-slate-400 ml-5">
        Hello {user.username}! Here is a list of your favorite workouts
      </h1>
      <div className="mt-5">
        {user.savedRoutines.map((routine) => (
          <div key={routine._id} className="my-2">
          

            <div className="shadow shadow-gray-600 dark:shadow-slate-200 flex flex-col rounded-md justify-between border-gray-400 p-5">

                <div className="flex flex-row justify-between">

                <div className="flex flex-row">
                  <div className="text-lg dark:text-slate-300 text-gray-500">
                    Routine Name:{" "}
                  </div>
                  <div className="text-lg dark:text-slate-300 text-gray-500 ml-3 justify-start">
                    {" "}
                    {routine.Title}
                  </div>
                  </div>
          
                  
                  <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteRoutine(routine._id)}
                  
                  >
                    Delete
                  </Button>
                </div>
                
                  </div>

             <div className="flex w-full justify-start">
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
