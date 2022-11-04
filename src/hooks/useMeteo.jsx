import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getHourlyConditions, getNext5DaysConditions } from '../apis/meteo';

const useMeteo = (date) => {
  const getNext5DaysConditionsQuery = useQuery(['getNext5DaysConditions'], () => getNext5DaysConditions('Nantes'), { enabled: !date });
  const getHourlyConditionsQuery = useQuery(['getHourlyConditions', date], () => getHourlyConditions('Nantes', date), { enabled: !!date });

  let isLoading;
  let isError;
  let data;
  if (!date) {
    isLoading = getNext5DaysConditionsQuery.isLoading;
    isError = getNext5DaysConditionsQuery.isError;
    data = getNext5DaysConditionsQuery.data;
  }
  else {
    isLoading = getHourlyConditionsQuery.isLoading;
    isError = getHourlyConditionsQuery.isError;
    data = getHourlyConditionsQuery.data;
  }

  const refetch = () => {
    if (!date) {
      getNext5DaysConditionsQuery.refetch();
    }
    else {
      getHourlyConditionsQuery.refetch();
    }
  }

  console.log(isError)

  return [isLoading, data, isError]
}

export default useMeteo