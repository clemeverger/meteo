import React from 'react'
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import theme from '../config/theme';

interface ICustomText {
    children?: React.ReactNode,
    fs?: string,
    fw?: string,
    m?: number,
    mb?: number
}

const CustomText = ({ children, fs, fw, m, mb }: ICustomText) => {
    const styles: any = StyleSheet.create({
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