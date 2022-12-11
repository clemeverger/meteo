import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../config/theme';

const Loading = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size='large'
                color={color}
            />
        </View>
    );
};

const color = theme.colors.base;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
});

export default Loading;
