import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomText from './CustomText';
import theme from '../config/theme';

interface IProps {
    uri: string;
    condition: any;
}

const Condition = ({ uri, condition }: IProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                style={styles.icon}></Image>
            <CustomText
                fw={light}
                fs={xs}>
                {condition}
            </CustomText>
        </View>
    );
};

const xs = theme.fontSize.xs;
const light = theme.fontWeight.light;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        aspectRatio: 1 / 1,
        marginRight: 5,
    },
});

export default Condition;
