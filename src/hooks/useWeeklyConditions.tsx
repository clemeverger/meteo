import { useQuery } from '@tanstack/react-query';
import { getWeeklyConditions } from '../apis/meteo';

interface IProps {
    isLoading;
    isError;
    data;
    refetch;
}

const useWeeklyConditions = (): IProps => {
    const getWeeklyConditionsQuery = useQuery(['getWeeklyConditions'], async () => getWeeklyConditions('Nantes'), {});

    const isLoading = getWeeklyConditionsQuery.isLoading;
    const isError = getWeeklyConditionsQuery.isError;
    const data = getWeeklyConditionsQuery.data;

    const refetch = (): void => {
        getWeeklyConditionsQuery.refetch();
    };

    return { isLoading, isError, data, refetch };
};

export default useWeeklyConditions;
