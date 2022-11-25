import { useQuery } from '@tanstack/react-query'
import { getHourlyConditions, getWeeklyConditions } from '../apis/meteo'

const useMeteo = (date: IProps) => {
  const getWeeklyConditionsQuery = useQuery(['getWeeklyConditions'], () => getWeeklyConditions('Nantes'), { enabled: !date });
  const getHourlyConditionsQuery = useQuery(['getHourlyConditions', date], () => getHourlyConditions('Nantes', date), { enabled: !!date });

  let isLoading;
  let isError;
  let data;

  if (!date) {
    isLoading = getWeeklyConditionsQuery.isLoading;
    isError = getWeeklyConditionsQuery.isError;
    data = getWeeklyConditionsQuery.data;
  }
  else {
    isLoading = getHourlyConditionsQuery.isLoading;
    isError = getHourlyConditionsQuery.isError;
    data = getHourlyConditionsQuery.data;
  }

  const refetch = () => {
    if (!date) {
      getWeeklyConditionsQuery.refetch();
    }
    else {
      getHourlyConditionsQuery.refetch();
    }
  }

  return { isLoading, isError, data, refetch }
}

export default useMeteo