import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Condition from './Condition';
import CustomText from './CustomText'
import Line from './Line';

const HourlyConditions = ({ route }) => {
    const { data } = route.params;

    const getHourly = (date) => {
        return new Date(date).toLocaleTimeString().slice(0, 5);
    }

    return (
        <ScrollView style={styles.container}>
            {
                data.map((hourly) =>
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
});