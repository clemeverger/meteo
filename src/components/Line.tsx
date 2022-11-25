import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../config/theme'

const Line = ({children}) => {
    return (
        <View>
            <View style={styles.container}>
                {children}
            </View>
            <View style={styles.line} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: theme.colors.border
    }
})

export default Line