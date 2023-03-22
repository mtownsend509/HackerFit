import React, {
  useState,
} from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

// import { useQuery } from "@apollo/client";
// import {
//   Navigate,
//   useParams,
// } from "react-router-dom";

// import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = () => {
  const [image, setImage] =
    useState(null);

  const handleImageChange = (
    e
  ) => {
    if (e.target.files[0]) {
      setImage(
        e.target.files[0]
      );
    }
  };
  console.log(image);

  const handleSubmit = () => {
    /* const imageRef = ref(storage, "image"); ? */
  };

  // const {
  //   username: userParam,
  // } = useParams();
  // const { loading, data } =
  //   useQuery(
  //     userParam
  //       ? QUERY_USER
  //       : {
  //           variables: {
  //             username:
  //               userParam,
  //           },
  //         }
  //   );

  // const user =
  //   data?.me ||
  //   data?.user ||
  //   {};
  // // navigate to personal profile page if username is yours
  // if (
  //   Auth.loggedIn() &&
  //   Auth.getProfile().data
  //     .username === userParam
  // ) {
  //   return (
  //     <Navigate to="/Profile" />
  //   );
  // }

  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       Use the navigation
  //       links above to sign up
  //       or log in!
  //     </h4>
  //   );
  // }

  return (
    <main
      name="Profile"
      className="w-full mt-[150px] flex flex-col"
    >
      {Auth.loggedIn() ? (
        <>
          <div className="mx-auto max-w-screen-lg flex flex-row w-full mt-10">
            <div className="flex flex-col p-4 mt-5 w-[30%] mr-5">
                 
            <Avatar
                className="mt-5"
                alt="Profile Picture"
                src="/static/images/avatar/1.jpg" /* {url} */
                sx={{
                  width: 200,
                  height: 200,
                }}
              />

              <input
                className="p-4"
                type="file"
                onChange={
                  handleImageChange
                }
              />

              <button
                onClick={
                  handleSubmit
                }
                className="ml-4 w-[100px] text-lg hover:underline text-white bg-gradient-to-br from-teal-300 via-teal-400 to-teal-600 py-3 px-4 rounded-md"
              >
                Upload
              </button>

              <div className=" w-full border-t mt-10">
              <form className="px-2 py-2 m-2 text-slate-500 dark:text-white">
                <div className="flex">
                  <p className="mb-3 mr-2 font-brand text-4xl mt-5">
                    Stats
                  </p>
                </div>

                <input
                  type="submit"
                  value="RPE:"
                  className="hover:cursor-pointer"
                />
                <textarea
                  id="text"
                  name="text"
                  multiline
                  rows="1"
                  type="text"
                  className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                  placeholder="Rate of Perceived Exertion (6-20)"
                ></textarea>

                <input
                  type="submit"
                  value="HRV:"
                  className="hover:cursor-pointer"
                />
                <textarea
                  id="text"
                  name="text"
                  multiline
                  rows="1"
                  type="text"
                  className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                  placeholder="Heart Rate Variability (high-low)"
                ></textarea>
                <input
                  type="submit"
                  value="BMI:"
                  className="hover:cursor-pointer"
                />
                <textarea
                  id="text"
                  name="text"
                  multiline
                  rows="1"
                  type="text"
                  className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                  placeholder="Body Mass Index"
                ></textarea>
              </form>
              </div>

            </div>

            <div className="flex flex-col mt-10 w-[70%] mb-10 text-slate-500 dark:text-white">
              <div className="flex flex-row text-4xl">
                <h1 className="mr-1">
                  {" "}
                  Hello
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

              <div className="mt-10 h-full w-full shadow shadow-gray-600 dark:shadow-slate-100 rounded-lg mr-4">
                <form className="px-2 py-3 m-2 font-bold text-slate-500 dark:text-white">
                  <p className="mb-3 font-brand text-4xl">
                    Goals
                  </p>
                  <textarea
                    id="text"
                    name="text"
                    multiline
                    rows="9"
                    type="text"
                    className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                    placeholder="Type something"
                  ></textarea>
                  {/* <input
              type="submit"
              value="Save"
              className="hover:cursor-pointer"
            /> */}
                </form>
              </div>

              <div className="mt-4 h-full w-full shadow shadow-gray-600 dark:shadow-slate-100 rounded-lg mr-4">
              <form className="px-2 py-3 m-3 font-bold text-slate-500 dark:text-white">
                <p className="mb-3 font-brand text-4xl">
                  Notes
                </p>
                <textarea
                  id="text"
                  name="text"
                  multiline
                  rows="9"
                  type="text"
                  className="w-full text-gray-500 dark:text-white bg-inherit focus:outline-none focus:ring-0"
                  placeholder="Type something"
                ></textarea>
                {/* <input
              type="submit"
              value="Save"
              className="hover:cursor-pointer"
            /> */}
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
