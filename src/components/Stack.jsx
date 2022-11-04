import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import HourlyConditions from './core/HourlyConditions';
import theme from '../config/theme';

const stack = createStackNavigator();

const Stack = () => {
    return (
        <stack.Navigator >
            <stack.Screen name="Météo" component={Home} options={{
                headerShown: false,
                headerTitle: 'Retour'
            }} />
            <stack.Screen name="HourlyConditions" component={HourlyConditions} options={{
                headerStyle: {
                    backgroundColor: theme.colors.secondary,
                },
                headerTitleStyle: {
                    color: theme.colors.base
                },
                headerBackTitleStyle: {
                    color: theme.colors.base
                },
                headerTintColor: theme.colors.base,
                headerTitle: ''
            }} />
        </stack.Navigator>
    )
}

export default Stack