import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_ROUTINE } from '../utils/mutations';

import Auth from '../utils/auth';

const CreateRoutine = () => {
  const [formState, setFormState] = useState({
    Title: '',
  });
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
        variables: {...formState} ,
      });
      console.log("HIPPO LINE 33", data)
      Auth.login(data.addUser.token);
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
    onChange={
      handleChange
    }
  />
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