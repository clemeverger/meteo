import React, { useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import theme from '../config/theme';
import { wait } from '../utilities';

interface IProps {
    refetch;
}

const Refresh = ({ refetch }: IProps): JSX.Element => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.base}
        />
    );
};

export default Refresh;
