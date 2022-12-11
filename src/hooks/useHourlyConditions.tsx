import { useQuery } from '@tanstack/react-query';
import { getHourlyConditions } from '../apis/meteo';

interface IProps {
    isLoading;
    isError;
    data;
    refetch;
}

const useHourlyConditions = (date: string): IProps => {
    const getHourlyConditionsQuery = useQuery(['getHourlyConditions', date], async () => getHourlyConditions('Nantes', date), { enabled: !!date });

    const isLoading = getHourlyConditionsQuery.isLoading;
    const isError = getHourlyConditionsQuery.isError;
    const data = getHourlyConditionsQuery.data;

    const refetch = (): void => {
        getHourlyConditionsQuery.refetch();
    };

    return { isLoading, isError, data, refetch };
};

export default useHourlyConditions;
