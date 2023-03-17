import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main name="signup"   className="h-screen w-full">
         <div className="flex flex-col items-center mx-auto max-w-screen-lg">
        <div className="w-full max-w-md ">
          <h4 className="bg-slate-400 text-white text-md p-4  border border-slate-400 font-bold">
           Sign up
          </h4>
          <div className="card-body inline">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
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
                    name="floating_email"
                    id="floating_email"
                    type="email"
                    value={
                      formState.floating_email
                    }
                    onChange={
                      handleChange
                    }
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="floating_username"
                    id="floating_username"
                    type="text"
                    value={
                      formState.floating_username
                    }
                    onChange={
                      handleChange
                    }
                  />
                  <label
                    for="floating_username"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Username
                  </label>
                </div>

                <div class="relative z-0 w-full mb-6 group">
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="floating_password"
                    id="floating_password"
                    type="password"
                    value={
                      formState.floating_password
                    }
                    onChange={
                      handleChange
                    }
                  />
                  <label
                    for="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                    </label>
                  </div>

        
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

export default Signup;