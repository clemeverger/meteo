import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getHourly } from '../../utilities/index';
import useMeteo from '../../hooks/useMeteo';
import Condition from '../Condition';
import CustomText from '../CustomText'
import Line from '../Line';
import Refresh from '../Refresh';

const HourlyConditions = ({ route }) => {
    const { date } = route.params;
    const { isLoading, isError, data, refetch } = useMeteo(date);

    return (
        <ScrollView style={styles.container} refreshControl={<Refresh refetch={refetch} />} >
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    wrapper: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20
    },
});

export default HourlyConditions