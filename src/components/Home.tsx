import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DailyConditions from './core/DailyConditions'
import WeeklyConditions from './core/WeeklyConditions'
import useMeteo from '../hooks/useMeteo'
import Refresh from './Refresh'
import { StatusBar } from 'expo-status-bar'
import theme from '../config/theme'
import Error from './Error'
import Loading from './Loading'

const Home = ({ navigation }) => {
    const { isLoading, isError, data, refetch } = useMeteo(null);

    return (
        <View style={styles.container}>
            <StatusBar style={'light'} backgroundColor={theme.colors.secondary} />
            {
                isError ?
                    <Error />
                    :
                    isLoading ?
                        <Loading />
                        :
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
})