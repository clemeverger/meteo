import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../config/theme';

const CustomText = ({ children, fs, fw, m, mb }) => {
    const styles = StyleSheet.create({
        text: {
            color: theme.colors.base,
            fontSize: fs,
            fontWeight: fw,
            margin: m,
            marginBottom: mb
        },
    });
    return (
        <Text style={styles.text}>{children}</Text>
    )
}



export default CustomText