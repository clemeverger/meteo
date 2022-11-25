import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native';
import theme from '../config/theme';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Refresh = ({ refetch }) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.colors.base} />;
}

export default Refresh