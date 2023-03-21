import React, {
  useEffect,
  useState,
} from "react";

import Dropdown from "../components/Dropdown";

import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

const fetch = require("node-fetch");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key":
      process.env
        .REACT_APP_API_KEY,
    // 'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  },
};

const searchAPIExercises = (
  query
) => {
  return fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${query}`,
    options
  );
};

const searchSingleAPIExercise =
  (query) => {
    return fetch(
      `https://api.api-ninjas.com/v1/exercises?name=${query}`,
      options
    );
  };

const NewRoutine = () => {
  // create state for holding returned google api data
  const [
    searchedExercises,
    setSearchedExercises,
  ] = useState([]);
  // create state for holding our search field data
  const [
    searchInput,
    setSearchInput,
  ] = useState("");

  const [
    setCount,
    setSetCount,
  ] = useState(0);


    const [
      repCount,
      setRepCount,
    ] = useState(0);
  
  // Function to increment count by 1
  const incrementRepCount =
    () => {
      // Update state with incremented value
      setRepCount(
        repCount + 1
      );
    };

    // Function to decrement count by 1
    const decrementRepCount =
    () => {
      // Update state with incremented value
      setRepCount(
        repCount - 1
      );
      };
  
  // Function to increment count by 1
  const incrementSetCount =
    () => {
      // Update state with incremented value
      setSetCount(
        setCount + 1
      );
    };
  
    // Function to increment count by 1
    const decrementSetCount =
    () => {
      // Update state with incremented value
      setSetCount(
        setCount - 1
      );
    };
  
  const handleFormSubmit =
    async (event) => {
      // event.preventDefault();

      if (!searchInput) {
        return false;
      }

      try {
        const response =
          await searchAPIExercises(
            searchInput
          );

        console.log(
          "search input =",
          searchInput
        );
        console.log(
          "exercise results",
          response
        );
        if (!response.ok) {
          throw new Error(
            "something went wrong!"
          );
        }

        const items =
          await response.json();
        console.log(
          "items",
          items
        );
        const exerciseData =
          items.map(
            (exercise) => ({
              name: exercise.name,
              muscle:
                exercise.muscle,
              difficulty:
                exercise.difficulty,
              instructions:
                exercise.instructions,
            })
          );

        setSearchedExercises(
          exerciseData
        );
        setSearchInput("");
      } catch (err) {
        console.error(err);
      }
    };

  useEffect(() => {
    handleFormSubmit();
  }, [
    searchInput,
    handleFormSubmit,
  ]);

  return (
    <>
      <main
        name="NewRoutine"
        className="w-full mt-[150px]  flex flex-row"
      >
        <div className="w-[50%] flex flex-col items-center mx-auto max-w-screen-lg ">
          <div className="mt-10 ">
            <Dropdown
              onSelect={
                setSearchInput
              }
            />
          </div>

          <div className="grid mt-[-200px] gap-4 text-neutral-600 dark:text-slate-300 grid-cols-1 mb-6">
            {searchedExercises.map(
              (exercise) => {
                return (
                  <div
                    key={
                      exercise.name
                    }
                  >
                    <div>
                      <div className="shadow shadow-gray-600 rounded-lg">
                        <div>
                          <p className="px-2 py-3 m-2 font-bold">
                            Muscle
                            Group:{" "}
                            {
                              exercise.muscle
                            }
                          </p>
                          <p className="px-2 py-3 m-2 font-bold">
                            Exercise
                            Name:{" "}
                            {
                              exercise.name
                            }
                          </p>
                          <p className="px-2 py-3 m-2">
                            Instructions:{" "}
                            {
                              exercise.instructions
                            }
                          </p>

                          <button
                            id={
                              exercise.name
                            }
                            className="ml-3 mb-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
                            style={{
                              cursor:
                                "pointer",
                            }}
                            type="submit"
                            variant="success"
                            onClick={
                              searchSingleAPIExercise
                            }
                          >
                            Add
                            to
                            workout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="flex flex-col w-[45%] mt-[50px] items-center mx-auto max-w-screen-lg mb-4 mr-5">
          <div className="flex flex-row">
            <p className="font-bold px-4 py-3 block text-md text-gray-400 dark:text-gray-200">
              New routine:
            </p>
            <input
              className="w-[300px] p-2 font-bold block text-md text-gray-400 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-300 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0"
              placeholder="Type something"
              required
              name="routine_name"
              id="routine-name"
              type="text"
              // value={
              //   formState.email
              // }
              // onChange={
              //   handleChange
              // }
            />
            <button
              className="ml-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-3 px-4 rounded-md"
              style={{
                cursor:
                  "pointer",
              }}
              type="submit"
              variant="success"
            >
              Save routine
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 w-full text-neutral-600 dark:text-slate-300">
            <div>
              <div className="px-2 py-3">
                <div className="mt-5">
                  {searchedExercises.map(
                    (
                      exercise
                    ) => {
                      return (
                        <div
                          key={
                            exercise.name
                          }
                        >
                          <div>
                            <div className="border-b-2 border-b-gray-400">
                              <div>
                                <p className="px-2 py-3 m-2 font-bold">
                                  Exercise
                                  Name:{" "}
                                  {
                                    exercise.name
                                  }
                                </p>
                                <p className="px-2 py-3 m-2">
                                  Instructions:{" "}
                                  {
                                    exercise.instructions
                                  }
                                </p>

                                <div className="flex flex-row mb-4">
                                  <div
                                    name="sets"
                                    className="flex flex-row"
                                  >
                                    <p className="ml-5">
                                      Reps:
                                    </p>

                                    <div className="flex flex-col">
                                      <button
                                        onClick={
                                          incrementRepCount
                                        }
                                        className=" ml-3 mb-[-5px]"
                                      >
                                        <AiOutlineCaretUp />
                                      </button>

                                      <button
                                        onClick={
                                          decrementRepCount
                                        }
                                        className="ml-3"
                                      >
                                        <AiOutlineCaretDown />
                                      </button>
                                    </div>

                                    <div className="ml-3">
                                      {
                                        repCount
                                      }
                                    </div>
                                  </div>

                                  <div
                                    name="reps"
                                    className="flex flex-row"
                                  >
                                    <p className="ml-5">
                                      Sets:
                                    </p>

                                    <div className="flex flex-col">
                                      <button
                                        onClick={
                                          incrementSetCount
                                        }
                                        className=" ml-3 mb-[-5px]"
                                      >
                                        <AiOutlineCaretUp />
                                      </button>

                                      <button
                                        onClick={
                                          decrementSetCount
                                        }
                                        className="ml-3"
                                      >
                                        <AiOutlineCaretDown />
                                      </button>
                                    </div>

                                    <div className="ml-3">
                                      {
                                        setCount
                                      }
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewRoutine;
