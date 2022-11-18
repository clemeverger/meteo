
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Credit from './src/pages/Credit'
import theme from './src/config/theme';
import Stack from './src/components/Stack';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.base,
          tabBarInactiveTintColor: theme.colors.base,
          tabBarLabelStyle: { fontSize: 15 },
          tabBarStyle: { backgroundColor: theme.colors.secondary }
        }}>
          <Tab.Screen
            name="Home"
            component={Stack}
            options={{ tabBarIcon: () => <Image style={styles.icon} source={require('./src/assets/home.png')}></Image> }}
          />
          <Tab.Screen
            name="Credit"
            component={Credit}
            options={{ tabBarIcon: () => <Image style={styles.icon} source={require('./src/assets/credit.png')}></Image> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
});

export default App;