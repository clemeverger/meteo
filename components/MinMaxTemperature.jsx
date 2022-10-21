import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText';

const MinMaxTemperature = ({ min, max, unit }) => {
    return (
        <View>
            <CustomText>Min {min}{unit}</CustomText>
            <CustomText>Max {max}{unit}</CustomText>
        </View>
    )
}

export default MinMaxTemperature