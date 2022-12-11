import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getHourly } from '../../utilities/index';
import Condition from '../Condition';
import CustomText from '../CustomText';
import Line from '../Line';
import Refresh from '../Refresh';
import theme from '../../config/theme';
import Loading from '../Loading';
import Error from '../Error';
import useHourlyConditions from '../../hooks/useHourlyConditions';
import { useRoute } from '@react-navigation/native';

const HourlyConditions = (): JSX.Element => {
    const route = useRoute<any>();
    const { date } = route.params;

    const { isLoading, isError, data, refetch } = useHourlyConditions(date);

    if (isLoading) return <Loading />;
    return (
        <ScrollView
            style={styles.container}
            refreshControl={<Refresh refetch={refetch} />}>
            {isError ? (
                <Error />
            ) : isLoading ? (
                <Loading />
            ) : (
                data.hourly.map((hourly) => (
                    <View key={hourly.datetime}>
                        <Line>
                            <CustomText>{getHourly(hourly.datetime)}</CustomText>
                            <Condition
                                uri={hourly.icon}
                                condition={hourly.condition}
                            />
                            <CustomText>
                                {hourly.temperature.value}
                                {hourly.temperature.unit}
                            </CustomText>
                        </Line>
                    </View>
                ))
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    wrapper: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20,
    },
});

export default HourlyConditions;
