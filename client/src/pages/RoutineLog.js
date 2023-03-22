import { useQuery } from '@apollo/client';
import React from 'react';
import Routines from '../components/Routines';
import { QUERY_ROUTINES } from '../utils/queries';

const RoutineLog = () => {
  const { loading, data } = useQuery(QUERY_ROUTINES);
  const routines = data?.savedRoutines || [];

  return (
    <Routines />
  )
}

export default RoutineLog;