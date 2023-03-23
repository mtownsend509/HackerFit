import React, {
  useState,
  useEffect,
} from "react";

import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import ImageUpload from "../components/ImageUpload";

const Profile = () => {
  const [inputs, setInputs] =
    useState({
      RPEInput: "",
      HRVInput: "",
      BMIInput: "",
    });
  const [notes, setNotes] =
    useState("");
  const [image, setImage] =
    useState(null);
  const [url, setURL] =
    useState(null);

  useEffect(() => {
    const savedInputs =
      JSON.parse(
        localStorage.getItem(
          "inputs"
        )
      );
    if (savedInputs) {
      setInputs(savedInputs);
    }

    const savedNotes =
      localStorage.getItem(
        "notes"
      );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleInputChange = (
    event
  ) => {
    setInputs(
      (prevState) => ({
        ...prevState,
        [event.target.name]:
          event.target.value,
      })
    );
  };

  const handleNotesChange = (
    event
  ) => {
    setNotes(
      event.target.value
    );
  };

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();
    localStorage.setItem(
      "inputs",
      JSON.stringify(inputs)
    );
  };

  const handleNotesSubmit = (
    event
  ) => {
    event.preventDefault();
    localStorage.setItem(
      "notes",
      notes
    );
  };

  const handleDelete = () => {
    localStorage.removeItem(
      "inputs"
    );
    localStorage.removeItem(
      "notes"
    );
    setInputs({
      RPEInput: "",
      HRVInput: "",
      BMIInput: "",
    });
    setNotes("");
  };

  return (
    <main
      name="Profile"
      className="w-full mt-[150px] flex flex-col"
    >
      {Auth.loggedIn() ? (
        <>
          <div className="mx-auto max-w-screen-lg flex flex-col w-full mt-10">
            <div className="flex justify-center text-4xl mb-20 mt-10 text-slate-400">
              <h1 className="mr-1">
                {" "}
                Hello{" "}
              </h1>
              <h1 className="mr-1">
                {
                  Auth.getProfile()
                    .data
                    .username
                }
                ! What's on
                your mind
                today?
              </h1>
            </div>

            <div className="flex flex-row mb-10">
              <ImageUpload />

              <div className="ml-5 h-full w-full shadow shadow-gray-600 dark:shadow-slate-100 rounded-lg mr-4">
                <form
                  className="px-2 py-3 m-3 font-bold text-slate-500 dark:text-white"
                  onSubmit={
                    handleNotesSubmit
                  }
                >
                  <p className="mb-3 font-brand text-4xl">
                    Notes
                  </p>
                  <textarea
                    value={
                      notes
                    }
                    onChange={
                      handleNotesChange
                    }
                    id="text"
                    name="text"
                    rows="9"
                    type="text"
                    className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                    placeholder="Type something"
                  ></textarea>
                  <div className="flex flex-row justify-between">
                    <input
                      type="submit"
                      value="Save"
                      className="hover:cursor-pointer flex justify-end items-end font-bold hover:underline hover:text-slate-600 ml-5"
                    />
                    <input
                      type="submit"
                      value="Delete"
                      onClick={
                        handleDelete
                      }
                      className="hover:cursor-pointer flex justify-end items-end font-bold hover:underline hover:text-slate-600 mr-5"
                    />
                  </div>
                </form>
              </div>

              <div className="w-full shadow shadow-gray-600 dark:shadow-slate-100 rounded-lg">
                <form
                  onSubmit={
                    handleSubmit
                  }
                  className="px-2 py-2 m-2 text-slate-500 dark:text-white"
                >
                  <div className="flex">
                    <p className="mb-3 mr-2 font-brand text-4xl mt-5">
                      {" "}
                      Stats{" "}
                    </p>
                  </div>

                  <h3>
                    Enter
                    today's
                    RPE
                  </h3>

                  <textarea
                    value={
                      inputs.RPEInput
                    }
                    onChange={
                      handleInputChange
                    }
                    id="RPEInput"
                    name="RPEInput"
                    rows="1"
                    type="text"
                    className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                    placeholder="   Rate of
                    Perceived
                    Exertion (6 - 20)"
                  ></textarea>

                  <br />

                  <h3>
                    Enter
                    today's
                    HRV
                  </h3>
                  <textarea
                    value={
                      inputs.HRVInput
                    }
                    onChange={
                      handleInputChange
                    }
                    id="HRVInput"
                    name="HRVInput"
                    rows="1"
                    type="text"
                    className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                    placeholder=" Heart Rate
                    Variability (High - Low)"
                  ></textarea>

                  <br />

                  <h3>
                    Enter your
                    current
                    BMI
                  </h3>
                  <textarea
                    value={
                      inputs.BMIInput
                    }
                    onChange={
                      handleInputChange
                    }
                    id="BMIInput"
                    name="BMIInput"
                    rows="1"
                    type="text"
                    className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                    placeholder="Body Mass Index"
                  ></textarea>

                  <br />
                  <br />
                  <br />

                  <div className="flex flex-row justify-between">
                    <input
                      type="submit"
                      value="Save"
                      className="hover:cursor-pointer flex justify-end items-end font-bold hover:underline hover:text-slate-600 ml-5"
                    />
                    <input
                      type="submit"
                      value="Delete"
                      onClick={
                        handleDelete
                      }
                      className="hover:cursor-pointer flex justify-end items-end font-bold hover:underline hover:text-slate-600 mr-5"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="flex font-brand items-center justify-center text-4xl font-extrabold py-5 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mt-[150px]">
          You need to be
          logged in to view
          your workouts!
          Please
          <Link
            className="ml-2 mr-2  hover:text-purple-500 hover:underline"
            to="/login"
          >
            login
          </Link>
          or
          <Link
            className="ml-2 hover:text-purple-500 hover:underline"
            to="/signup"
          >
            signup.
          </Link>
        </p>
      )}
    </main>
  );
};

export default Profile;
