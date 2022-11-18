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
                    <CustomText>Actuellement</CustomText>
                    <CustomText>{data.temperature.value}{data.temperature.unit}</CustomText>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/wind.png')} style={styles.icon}></Image>
                    <CustomText>{data.windSpeed.value}{data.windSpeed.unit}</CustomText>
                    <CustomText>Vent</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/humidity.png')} style={styles.icon}></Image>
                    <CustomText>{data.humidity.value}{data.humidity.unit}</CustomText>
                    <CustomText>Humidité</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/rain.png')} style={styles.icon}></Image>
                    <CustomText>XX</CustomText>
                    <CustomText>Pluie</CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image source={require('../../assets/sun.png')} style={styles.icon}></Image>
                    <CustomText>XX</CustomText>
                    <CustomText>UV</CustomText>
                </View>
            </View>
        </SafeAreaView>
    )
}

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
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CurrentConditions