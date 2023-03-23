import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_ROUTINE } from '../utils/mutations';

import Auth from '../utils/auth';

const CreateRoutine = (props) => {

  const [formState, setFormState] = useState({
    Title: '',
  });

const [exerciseState, setExerciseState] = useState({
  variables: {...props}
})

  // setExerciseState({
  //   ...exerciseState,
  //   [name]: props.name,
// });
  console.log(exerciseState)
  console.log("line19", props) //no longer getting this data...
  const [addRoutine, { error, data }] = useMutation(ADD_ROUTINE);

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("formState", formState);

    try {
      const { data } = await addRoutine({
        variables: {...formState, ...exerciseState} ,
      });
      console.log("HIPPO LINE 33", data)
      console.log(formState.Title)
      window.localStorage.setItem('routinename', formState.Title)
      window.alert("routine created")
      // Auth.login(data.addUser.token);
    } catch (e) {
      console.error("LINE 36 ERROR", e);
    }
  };


  if( window.localStorage.getItem("routinename") === null ) {
    return (
    <div className='flex flex-row sm:ml-[250px] w-full items-center mr-40 ml-[-50px]'>
    <p className="ml-[-100px] sm:ml-5 font-bold px-4 py-3 block text-md text-gray-400 dark:text-gray-200">
              A Name for Your Routine:
    </p>
    {console.log("Stoarge", window.localStorage.getItem("routinename"))}
    <input
     className="sm:w-[30%] w-20 p-2  font-bold block text-md text-gray-400 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-300 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0"
    placeholder="Type something"
    required
    name="Title"
    id=""
    type="text"
    value={
      formState.Title
    }
    onChange={
      
      handleChange
    }
    
  />

  <button
    className="ml-3 mb-4 w-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md"
    style={{
      cursor:
        "pointer",
    }}
    type="submit"
    variant="success"
    onClick={
      handleFormSubmit
    }
  >
    Save Routine Name

  </button>
  </div>
  );}

  if( window.localStorage.getItem("routinename") !== null) {
    return (
      <>
     <div>{window.localStorage.getItem("routinename")}</div>
    </>
    )
  }
  
};

export default CreateRoutine;