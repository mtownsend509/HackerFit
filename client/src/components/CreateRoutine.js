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
    ...props
  })

  // setExerciseState({
  //   ...exerciseState,
  //   [name]: props.name,
// });
  console.log(exerciseState)
  console.log("line19", props) //we are getting the props (current selected workouts)
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
      // props.onSubmit({
      //   name: exerciseState.name,
      //   muscle: exerciseState.muscle,
      //   instructions: exerciseState.instructions
      // })
      const { data } = await addRoutine({
        variables: {...formState, ...exerciseState} ,
      });
      console.log("HIPPO LINE 33", data)
      // console.log(data.addUser.token)
      // Auth.login(data.addUser.token);
    } catch (e) {
      console.error("LINE 36 ERROR", e);
    }
  };

  return (
    <div>
    <input
    className=""
    placeholder="Type something"
    required
    name="Title"
    id=""
    type="text"
    value={
      formState.Title
    }
    data-name={props.name}
    data-muscle={props.muscle}
    data-instructions={props.instructions}
    onChange={
      
      handleChange
    }
    
  />
  {console.log(props.addToWorkoutstate)}
  <button
    className=""
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
    Save routine
  </button>
  </div>
  );
};

export default CreateRoutine;