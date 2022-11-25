import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'
import theme from '../config/theme'

const MinMaxTemperature = ({ min, max, unit }) => {
    return (
        <View>
            <CustomText fs={xs} fw={bold} mb={5}>Min {min}{unit}</CustomText>
            <CustomText fs={xs} fw={bold} mb={5}>Max {max}{unit}</CustomText>
        </View>
    )
}

let xs = theme.fontSize.xs
let bold = theme.fontWeight.bold

export default MinMaxTemperature