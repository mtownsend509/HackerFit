import React, {
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [
    formState,
    setFormState,
  ] = useState({
    username: "",
    password: "",
  });
  const [
    login,
    { error, data },
  ] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (
    event
  ) => {
    const { name, value } =
      event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit =
    async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } =
          await login({
            variables: {
              ...formState,
            },
          });
        console.log(data);
        Auth.login(
          data.login.token
        );
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        username: "",
        password: "",
      });
    };

  return (
    <main
      name="login"
      className="h-screen w-full"
    >
      <div className="flex flex-col items-center mx-auto max-w-screen-lg">
        <div className="w-full max-w-md ">
          <h4 className="bg-slate-400 text-white text-md p-4  border border-slate-400 font-bold">
            Login
          </h4>
          <div className="card-body inline ">
            {data ? (
              <p>
                Success! You
                may now head{" "}
                <Link to="/">
                  back to the
                  homepage.
                </Link>
              </p>
            ) : (
              <form
                onSubmit={
                  handleFormSubmit
                }
                className="bg-white rounded-b-md px-8 pt-6 pb-8 mb-4"
              >
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="username"
                    id="username"
                    type="text"
                    value={
                      formState.username
                    }
                    onChange={
                      handleChange
                    }
                  />
                  <label
                    for="username"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Username
                  </label>
                </div>

                <div class="relative z-0 w-full mb-6 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="password"
                    id="password"
                    type="password"
                    value={
                      formState.password
                    }
                    onChange={
                      handleChange
                    }
                  />
                  <label
                    for="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded-md bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Remember
                    me
                  </label>
                </div>

                <div class="flex items-center justify-between">
                  <button
                    className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
                    style={{
                      cursor:
                        "pointer",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-slate-400 hover:text-slate-500"
                    href="#"
                  >
                    Forgot
                    Password?
                  </a>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {
                  error.message
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
