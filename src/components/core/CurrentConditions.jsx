import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'
import theme from '../../utilities/theme';
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
                <View>
                    <CustomText>{data.windSpeed.value}{data.windSpeed.unit}</CustomText>
                    <CustomText>Vent</CustomText>
                </View>
                <View>
                    <CustomText>{data.humidity.value}{data.humidity.unit}</CustomText>
                    <CustomText>Humidité</CustomText>
                </View>
                <View>
                    <CustomText>XX</CustomText>
                    <CustomText>Pluie</CustomText>
                </View>
                <View>
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
});

export default CurrentConditions