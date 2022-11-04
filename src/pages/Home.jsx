import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import CurrentConditions from '../components/core/CurrentConditions';
import Next5DaysConditions from '../components/core/Next5DaysConditions';
import CustomText from '../components/CustomText';
import useMeteo from '../hooks/useMeteo';
import theme from '../utilities/theme';

const Home = ({ navigation }) => {
    const [isLoading, data, isError] = useMeteo();

    return (
        <View style={styles.container}>
            {
                isLoading &&
                <View style={styles.wrapper}>
                    <Text>Loading</Text>
                </View>
            }
            {
                isError &&
                <View style={styles.wrapper}>
                    <CustomText>Error</CustomText>
                </View>
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
    wrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});