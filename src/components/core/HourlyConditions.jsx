import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getHourly } from '../../utilities';
import useMeteo from '../../hooks/useMeteo';
import Condition from '../Condition';
import CustomRefreshControl from '../CustomRefreshControl';
import CustomText from '../CustomText'
import Line from '../Line';

const HourlyConditions = ({ route }) => {
    const { date } = route.params;
    const [isLoading, isError, data, refetch] = useMeteo(date);

    return (
        <ScrollView style={styles.container} refreshControl={<CustomRefreshControl refetch={refetch} />} >
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
                data && !isError &&
                data.hourly.map((hourly) =>
                    <View key={hourly.datetime}>
                        <Line style={styles.hourly}>
                            <CustomText>{getHourly(hourly.datetime)}</CustomText>
                            <Condition uri={hourly.icon} condition={hourly.condition} />
                            <CustomText>{hourly.temperature.value}{hourly.temperature.unit}</CustomText>
                        </Line>
                    </View>
                )
            }
        </ScrollView>
    )
}

export default HourlyConditions

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