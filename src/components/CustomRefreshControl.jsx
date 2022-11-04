import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native-gesture-handler';
import theme from '../config/theme';

const CustomRefreshControl = ({ refetch }) => {
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = useState();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            refetch();
            setRefreshing(false);
        });
    }, []);

    return (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.base}
        />
    )
}

export default CustomRefreshControl