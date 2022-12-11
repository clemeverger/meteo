import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DailyConditions from './core/DailyConditions';
import WeeklyConditions from './core/WeeklyConditions';
import useWeeklyConditions from '../hooks/useWeeklyConditions';
import Refresh from './Refresh';
import theme from '../config/theme';
import Error from './Error';
import Loading from './Loading';
import { StatusBar } from 'expo-status-bar';

const Home = (): JSX.Element => {
    const { isLoading, isError, data, refetch } = useWeeklyConditions();

    return (
        <View style={styles.container}>
            <StatusBar
                style={'light'}
                backgroundColor={theme.colors.secondary}
            />
            {isError === true ? (
                <Error />
            ) : isLoading === true ? (
                <Loading />
            ) : (
                <>
                    <DailyConditions data={data.currentConditions}></DailyConditions>
                    <ScrollView refreshControl={<Refresh refetch={refetch} />}>
                        <WeeklyConditions data={data.next5DaysConditions}></WeeklyConditions>
                    </ScrollView>
                </>
            )}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
});
