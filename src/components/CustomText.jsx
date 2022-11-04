import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../utilities/theme';

const CustomText = ({ children }) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.colors.base
    },
});

export default CustomText