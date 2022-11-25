import React from 'react'
import { TouchableOpacity } from 'react-native'
import { getDay } from '../../utilities'
import MinMaxTemperature from '../MinMaxTemperature'
import CustomText from '../CustomText'
import Condition from '../Condition'
import Line from '../Line'
import theme from '../../config/theme'

const WeeklyConditions = ({ data, navigation }) => {
    return (
        <>
            {
                data.map((day) =>
                    <TouchableOpacity key={day.date} onPress={() => navigation.navigate('HourlyConditions', { date: day.date })}>
                        <Line>
                            <CustomText fw={bold}>{getDay(day.date)}</CustomText>
                            <Condition uri={day.icon} condition={day.condition} />
                            <MinMaxTemperature min={day.temperature.min} max={day.temperature.max} unit={day.temperature.unit}></MinMaxTemperature>
                        </Line>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

let bold = theme.fontWeight.bold

export default WeeklyConditions