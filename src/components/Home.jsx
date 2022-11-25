import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DailyConditions from './core/DailyConditions';
import WeeklyConditions from './core/WeeklyConditions';
import CustomText from './CustomText';
import useMeteo from '../hooks/useMeteo';
import theme from '../config/theme';
import Refresh from './Refresh';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
    const { isLoading, isError, data, refetch } = useMeteo();

    return (
        <View style={styles.container}>
            <StatusBar style={theme.statusBar.style} backgroundColor={theme.colors.secondary} />
            {
                isLoading &&
                <View style={styles.wrapper}>
                    <CustomText>Loading</CustomText>
                </View>
            }
            {
                isError &&
                <View style={styles.wrapper}>
                    <CustomText>Error</CustomText>
                </View>
            }
            {
                !isLoading && !isError && data &&
                <>
                    <DailyConditions data={data.currentConditions}></DailyConditions>
                    <ScrollView refreshControl={<Refresh refetch={refetch} />} >
                        <WeeklyConditions data={data.next5DaysConditions} navigation={navigation}></WeeklyConditions>
                    </ScrollView>
                </>
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    wrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});