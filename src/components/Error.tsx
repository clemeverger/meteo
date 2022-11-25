import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomText from './CustomText'

const Error = () => {
    return (
        <View style={styles.container}>
            <CustomText>Error</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Error