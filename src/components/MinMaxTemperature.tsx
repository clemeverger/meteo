import React from 'react';
import { View } from 'react-native';
import CustomText from './CustomText';
import theme from '../config/theme';

interface IProps {
    min: number;
    max: number;
    unit: string;
}

const MinMaxTemperature = ({ min, max, unit }: IProps): JSX.Element => {
    return (
        <View>
            <CustomText
                fs={xs}
                fw={bold}
                mb={5}>
                Min {min}
                {unit}
            </CustomText>
            <CustomText
                fs={xs}
                fw={bold}
                mb={5}>
                Max {max}
                {unit}
            </CustomText>
        </View>
    );
};

const xs = theme.fontSize.xs;
const bold = theme.fontWeight.bold;

export default MinMaxTemperature;
