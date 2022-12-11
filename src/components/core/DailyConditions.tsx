import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import CustomText from '../CustomText';
import theme from '../../config/theme';

interface IHumidity {
    unit: string;
    value: number;
}

interface ITemperature {
    unit: string;
    value: number;
}

interface IWindSpeed {
    unit: string;
    value: number;
}

interface IProps {
    data: {
        condition: string;
        conditionKey: string;
        datetime: string;
        humidity: IHumidity;
        icon: string;
        iconBig: string;
        temperature: ITemperature;
        windSpeed: IWindSpeed;
    };
}

const DailyConditions = ({ data }: IProps): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image
                    source={{ uri: data.iconBig }}
                    style={{ width: 100, aspectRatio: 1 / 1 }}
                />
                <View>
                    <CustomText
                        fw={light}
                        mb={5}>
                        Actuellement
                    </CustomText>
                    <CustomText
                        fs={lg}
                        fw={bold}>
                        {data.temperature.value}
                        {data.temperature.unit}
                    </CustomText>
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.wrapper}>
                    <Image
                        source={require('../../assets/wind.png')}
                        style={styles.icon}></Image>
                    <CustomText
                        fw={bold}
                        m={5}>
                        {data.windSpeed.value}
                        {data.windSpeed.unit}
                    </CustomText>
                    <CustomText
                        fw={light}
                        fs={xs}>
                        Vent
                    </CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image
                        source={require('../../assets/humidity.png')}
                        style={styles.icon}></Image>
                    <CustomText
                        fw={bold}
                        m={5}>
                        {data.humidity.value}
                        {data.humidity.unit}
                    </CustomText>
                    <CustomText
                        fw={light}
                        fs={xs}>
                        Humidité
                    </CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image
                        source={require('../../assets/rain.png')}
                        style={styles.icon}></Image>
                    <CustomText
                        fw={bold}
                        m={5}>
                        XX
                    </CustomText>
                    <CustomText
                        fw={light}
                        fs={xs}>
                        Pluie
                    </CustomText>
                </View>
                <View style={styles.wrapper}>
                    <Image
                        source={require('../../assets/sun.png')}
                        style={styles.icon}></Image>
                    <CustomText
                        fw={bold}
                        m={5}>
                        XX
                    </CustomText>
                    <CustomText
                        fw={light}
                        fs={xs}>
                        UV
                    </CustomText>
                </View>
            </View>
        </SafeAreaView>
    );
};

const xs = theme.fontSize.xs;
const lg = theme.fontSize.lg;
const light = theme.fontWeight.light;
const bold = theme.fontWeight.bold;

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
        marginBottom: 25,
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25,
    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DailyConditions;
