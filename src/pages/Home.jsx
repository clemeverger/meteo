import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CurrentConditions from '../components/core/CurrentConditions';
import Next5DaysConditions from '../components/core/Next5DaysConditions';
import CustomText from '../components/CustomText';
import useMeteo from '../hooks/useMeteo';
import theme from '../config/theme';
import useRefresh from '../hooks/useRefresh';

const Home = ({ navigation }) => {
    const { isLoading, isError, data, refetch } = useMeteo();
    const refresh = useRefresh(refetch);

    return (
        <View style={styles.container}>
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
                <>
                    <CurrentConditions data={data.currentConditions}></CurrentConditions>
                    <ScrollView refreshControl={refresh} >
                        <Next5DaysConditions data={data.next5DaysConditions} navigation={navigation}></Next5DaysConditions>
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