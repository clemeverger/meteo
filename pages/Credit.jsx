import React from 'react'
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import theme from '../utilities/theme';

const Credit = () => {
    return (
        <View style={styles.container}>
            <CustomText>Application de Clément Verger</CustomText>
        </View>
    )
}

export default Credit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary
    },
});