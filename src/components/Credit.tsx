import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import theme from '../config/theme';

const Credit = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <StatusBar
                style={'light'}
                backgroundColor={theme.colors.secondary}
            />
            <CustomText>Application de Clément Verger</CustomText>
        </View>
    );
};

export default Credit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
    },
});
