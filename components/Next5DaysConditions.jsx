import React from 'react'
import { TouchableOpacity } from 'react-native'
import Condition from './Condition';
import CustomText from './CustomText';
import Line from './Line';
import MinMaxTemperature from './MinMaxTemperature';

const Next5DaysConditions = ({ data, navigation }) => {
    const getDay = (date) => {
        switch (new Date(date).getDay()) {
            case 0:
                return "Lundi";
            case 1:
                return "Mardi";
            case 2:
                return "Mercredi";
            case 3:
                return "Jeudi";
            case 4:
                return "Vendredi";
            case 5:
                return "Samedi";
            case 6:
                return "Dimanche";
        }
    }
    return (
        <>
            {
                data.map((day) =>
                    <TouchableOpacity key={day.date} onPress={() => navigation.navigate('HourlyConditions', { data: day.hourly })}>
                        <Line>
                            <CustomText>{getDay(day.date)}</CustomText>
                            <Condition uri={day.icon} condition={day.condition} />
                            <MinMaxTemperature min={day.temperature.min} max={day.temperature.max} unit={day.temperature.unit}></MinMaxTemperature>
                        </Line>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default Next5DaysConditions