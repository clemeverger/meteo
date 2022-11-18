import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import theme from '../config/theme';
import CustomText from './CustomText';

const Condition = ({ uri, condition }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: uri }} style={styles.icon}></Image>
            <CustomText fw={light} fs={xs}>{condition}</CustomText>
        </View>
    )
}

let xs = theme.fontSize.xs;
let light = theme.fontWeight.light;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        aspectRatio: 1 / 1,
        marginRight: 5
    },
});

export default Condition