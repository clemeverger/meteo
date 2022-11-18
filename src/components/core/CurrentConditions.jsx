import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'
import theme from '../../config/theme';
import CustomText from '../CustomText';

const CurrentConditions = ({ data }) => {
    return (
        <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
            <View style={styles.main}>
                <Image source={{ uri: data.iconBig }} style={{ width: 100, aspectRatio: 1 / 1 }} />
                <View>
                    <CustomText fw={light} mb={5}>Actuellement</CustomText>
                    <CustomText fs={lg} fw={bold}>{data.temperature.value}{data.temperature.unit}</CustomText>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/wind.png')} style={styles.icon}></Image>
                    <CustomText fw={bold} m={5}>{data.windSpeed.value}{data.windSpeed.unit}</CustomText>
                    <CustomText fw={light} fs={xs}>Vent</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/humidity.png')} style={styles.icon}></Image>
                    <CustomText fw={bold} m={5}>{data.humidity.value}{data.humidity.unit}</CustomText>
                    <CustomText fw={light} fs={xs}>Humidité</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/rain.png')} style={styles.icon}></Image>
                    <CustomText fw={bold} m={5}>XX</CustomText>
                    <CustomText fw={light} fs={xs}>Pluie</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/sun.png')} style={styles.icon}></Image>
                    <CustomText fw={bold} m={5}>XX</CustomText>
                    <CustomText fw={light} fs={xs}>UV</CustomText>
                </View>
            </View>
        </SafeAreaView>
    )
}

let xs = theme.fontSize.xs;
let lg = theme.fontSize.lg;
let light = theme.fontWeight.light;
let bold = theme.fontWeight.bold;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25
    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CurrentConditions