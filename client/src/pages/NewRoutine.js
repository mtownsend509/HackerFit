import React, {
  useState,
} from "react";

import Dropdown from "../components/Dropdown";

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

  const handleFormSubmit =
    async (event) => {
      event.preventDefault();

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

  return (
    <>
      <main className="h-full w-full mt-[150px] bg-white dark:bg-gradient-to-b from-slate-900 via-slate-700 to-slate-600 pb-10">
        <div className="flex flex-col items-center mx-auto max-w-screen-lg">
          <div className="mt-10">
          <Dropdown  />
          </div>
     
          <div className="max-w-lg ">
            <h2 className="">
              {searchedExercises.length
                ? `Viewing ${searchedExercises.length} results:`
                :  "" }
            </h2>
            <form
              onSubmit={
                handleFormSubmit
              }
              className="bg-white rounded-b-md px-8 pt-6 pb-8 mb-4"
            >
              <div class="w-full mb-6">
                <input
                  name="searchInput"
                  value={
                    searchInput
                  }
                  onChange={(
                    e
                  ) =>
                    setSearchInput(
                      e.target
                        .value
                    )
                  }
                  type="text"
                  size="lg"
                  placeholder="Select muscle group"
                />

             
                
                <div class="flex py-4">
                  <button
                    className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
                    style={{
                      cursor:
                        "pointer",
                    }}
                    type="submit"
                    variant="success"
                  >
                    Submit
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="grid  gap-4 text-neutral-600 dark:text-slate-300 grid-cols-1">
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
            
                          <button className="ml-3 mb-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
                            style={{
                              cursor:
                                "pointer",
                            }}
                            type="submit"
                            variant="success"
                          >
                              Add to workout
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
      </main>
    </>
  );
};

export default NewRoutine;


  {/* {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )} */}