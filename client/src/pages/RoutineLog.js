import React, {useState} from 'react';
import { Routines } from '../components/Routines'
import { CreateRoutine } from '../components/CreateRoutine'

const RoutineLog = () => {
  const [formState, setFormState] = useState("")
  return (
    <div>
      <div>
        <Routines />
      </div>
      <div>
        <CreateRoutine />
        {/*  /\ i dont think this is going to work */}
      </div>
    </div>
  )
}

export default RoutineLog;