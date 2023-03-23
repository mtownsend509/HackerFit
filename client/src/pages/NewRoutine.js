import React, { useEffect, useState } from "react";

import Dropdown from "../components/Dropdown";
import CreateRoutine from "../components/CreateRoutine";


import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

import { useMutation } from '@apollo/client';
import { ADD_ROUTINE } from '../utils/mutations';
import { ADD_EXERCISE } from '../utils/mutations';
import { DELETE_EXERCISE } from '../utils/mutations';

const fetch = require("node-fetch");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": process.env.REACT_APP_API_KEY,
    // 'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  },
};

const searchAPIExercises = (query) => {
  return fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${query}`,
    options
  );
};

// const searchSingleAPIExercise =
//   (query) => {
//     return fetch(
//       `https://api.api-ninjas.com/v1/exercises?name=${query}`,
//       options
//     );
//   };



const NewRoutine = () => {


  // create state for holding returned google api data
  const [searchedExercises, setSearchedExercises] = useState([]);

  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const [addToWorkoutState, setAddToWorkoutState] = useState(
    () => JSON.parse(localStorage.getItem("exercise_list")) || []
  );

  const [setCount, setSetCount] = useState(0);

  const [repCount, setRepCount] = useState(0);

  const [routineName, setRoutineName] = useState("");

  // Function to increment count by 1
  const incrementRepCount = () => {
    // Update state with incremented value
    setRepCount(repCount + 1);
  };

  // Function to decrement count by 1
  const decrementRepCount = () => {
    // Update state with incremented value
    setRepCount(repCount - 1);
  };

  // Function to increment count by 1
  const incrementSetCount = () => {
    // Update state with incremented value
    setSetCount(setCount + 1);
  };

  // Function to increment count by 1
  const decrementSetCount = () => {
    // Update state with incremented value
    setSetCount(setCount - 1);
  };

  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchAPIExercises(searchInput);

      console.log("search input =", searchInput);
      console.log("exercise results", response);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const items = await response.json();
      console.log("items", items);
      const exerciseData = items.map((exercise) => ({
        name: exercise.name,
        muscle: exercise.muscle,
        difficulty: exercise.difficulty,
        instructions: exercise.instructions,
      }));

      setSearchedExercises(exerciseData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [searchInput, handleFormSubmit]);


  const[addExercise, {error,data}] = useMutation(ADD_EXERCISE);
  // create function to handle saving a exercise to local storage
  const addToWorkout = async (
    event
  ) => {
    event.preventDefault();
    //object in array data
    const title = window.localStorage.getItem("routinename");
    console.log(title);
    const name = event.target.dataset.name;
    const instructions = event.target.dataset.instructions;

    const muscle = event.target.dataset.muscle
    const newObject = {title: title, name:name, instructions: instructions, muscle: muscle}
    console.log("lookhere",newObject)
    // const {
    //   // name,
    //   instructions,
    //   muscle
    // } = event.target.dataset;

    try{
      const {data} = await addExercise({
        variables: {...newObject}
      });
      console.log(data);
      window.alert("exercise added")
          setAddToWorkoutState([
      ...addToWorkoutState,
      {
        name,
        instructions,
        muscle,
      },
    ]);
    } catch (e) {
      console.error("shit gdi", e.networkError.result.errors)
    }

  };


  const[delExercise, {newerror,newdata}] = useMutation(DELETE_EXERCISE);
  const deleteExercise = async (event) => {
    const exerciseName = event.target.parentElement.children[0].innerHTML.slice(15);
    const title = window.localStorage.getItem("routinename");
    const exerciseObject = {exerciseName: exerciseName, routineName: title}
    try{
      const {data} = await delExercise({
        variables: {...exerciseObject}
      });
      
      console.log("Matt", addToWorkoutState[1].name)
      window.alert(`It's deleted believe me plz`)
      function test (exercise) {
        return exercise.name !== exerciseName;
      }
      setAddToWorkoutState(
        addToWorkoutState.filter(test)
      );
    } catch (e) {
      console.error("shit gdi", e.networkError.result.errors)
    } 
  }

  const handleRepsAndSets = (
    event
  ) => {
    console.log(
      event.target.dataset
    );
    const {
      index,
      name,
      count,
    } = event.target.dataset;
    const tempWorkout = [
      ...addToWorkoutState,
    ];
    const selectedWorkout =
      tempWorkout[index];
    selectedWorkout[name] =
      count == "increase"
        ? selectedWorkout[name] + 1
        : selectedWorkout[name] - 1;
    tempWorkout[index] = selectedWorkout;
    setAddToWorkoutState(tempWorkout);
  };

  // create function to handle saving a toutine to our database



  


  return (
    <>
      <main
        name="NewRoutine"
        className="w-full mt-[150px] flex flex-col sm:flex-row justify-around"
      >

        {/* {beginning of CreateRoutines stuff} */}
        <div className="flex flex-col w-[45%] mt-[50px] items-center mx-auto max-w-screen-lg mb-4 mr-5">
          <CreateRoutine />


          <div className="ml-[-200px] sm:ml-0 sm:mr-10 grid grid-cols-1 gap-4 mb-4 w-full text-neutral-600 dark:text-slate-300">
            <div>
              <div className="px-2 py-3">
                <>
                  {/* {console.log(
                    addToWorkoutState
                  )} */}{" "}
                </>
                <div className="mt-5">

                  {addToWorkoutState.map((exercise, index) => {
                    return (
                      <div key={exercise.name}>
                        <div>
                          <div className="border-b-2 border-b-gray-400">
                            <div>
                              <p className="px-2 py-3 m-2 font-bold">
                                Exercise Name: {exercise.name}
                              </p>
                              <p className="px-2 py-3 m-2">
                                Instructions: {exercise.instructions}
                              </p>
                              <p className="px-2 py-3 m-2 font-bold">
                                Muscle Group: {exercise.muscle}
                              </p>

                              <div className="flex flex-row mb-4">
                                <div name="sets" className="flex flex-row">
                                  <p className="ml-5">Reps:</p>

                                  <div className="flex flex-row">
                                    <button
                                      data-index={index}
                                      data-name={"reps"}
                                      data-count={"increase"}
                                      onClick={
                                        // incrementRepCount
                                        handleRepsAndSets

                                      }
                                      // in state there is are mutliple workouts in an array so button needs to fins specific exercise in array to decrease or increase number
                                      className=" ml-5"
                                    >
                                      +{/* <AiOutlineCaretUp /> */}
                                    </button>

                                    <button
                                      data-index={index}
                                      data-name={"reps"}
                                      data-count={"decrease"}
                                      onClick={
                                        // decrementRepCount
                                        handleRepsAndSets
                                      }
                                      className=" ml-5"
                                    >
                                      -{/* <AiOutlineCaretDown /> */}
                                    </button>
                                  </div>


                                  <div className="ml-5">{exercise.reps}</div>
                                </div>

                                <div name="reps" className="flex flex-row">
                                  <p className="ml-5">Sets:</p>

                                  <div className="flex flex-row">
                                    <button
                                      data-index={index}
                                      data-name={"sets"}
                                      data-count={"increase"}
                                      onClick={
                                        // incrementSetCount
                                        handleRepsAndSets
                                      }
                                      className=" ml-5 "
                                    >
                                      +{/* <AiOutlineCaretUp /> */}
                                    </button>

                                    <button
                                      data-index={index}
                                      data-name={"sets"}
                                      data-count={"decrease"}
                                      onClick={
                                        // decrementSetCount
                                        handleRepsAndSets

                                      }
                                      className=" ml-5"
                                    >
                                      -{/* <AiOutlineCaretDown /> */}
                                    </button>
                                  </div>

                                  <div className="ml-5">{exercise.sets}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {end of CreateRoutines stuff} */}
        {/* {beginning of exercise dropdown stuff} */}
        <div className="w-[50%] flex flex-col items-center mx-auto sm:max-w-screen-lg max-w-screen-md ">
          <div className="mt-10 ml-10">
            <Dropdown onSelect={setSearchInput} />
          </div>

          <div className="grid mt-[-200px] gap-4 text-neutral-600 dark:text-slate-300 grid-cols-1 mb-10/">
            {searchedExercises.map((exercise) => {
              return (
                <div key={exercise.name}>
                  <div>
                    <div className="shadow shadow-gray-600 rounded-lg">
                      <div>
                        <p className="px-2 py-3 m-2 font-bold">
                          Muscle Group: {exercise.muscle}
                        </p>
                        <p className="px-2 py-3 m-2 font-bold">
                          Exercise Name: {exercise.name}
                        </p>
                        <p className="px-2 py-3 m-2">
                          Instructions: {exercise.instructions}
                        </p>

                        <button
                          id={exercise.name}
                          data-name={exercise.name}
                          data-muscle={exercise.muscle}
                          data-instructions={exercise.instructions}
                          className="ml-3 mb-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
                          style={{
                            cursor: "pointer",
                          }}
                          type="submit"
                          variant="success"
                          onClick={addToWorkout}
                        >
                          Add to workout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {end of exercise dropdown stuff} */}
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default NewRoutine;
