import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Text, View, StyleSheet } from 'react-native';
import { getData } from '../apis/mathis';
import theme from '../utilities/theme';
import CurrentConditions from '../components/CurrentConditions';
import Next5DaysConditions from '../components/Next5DaysConditions';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
    const { isLoading, data } = useQuery(['events'], () => getData('Nantes'));
    return (
        <View style={styles.container}>
            {
                isLoading &&
                <Text>Loading</Text>
            }
            {
                data &&
                <>
                    <CurrentConditions data={data.currentConditions}></CurrentConditions>
                    <Next5DaysConditions data={data.next5DaysConditions} navigation={navigation}></Next5DaysConditions>
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
});