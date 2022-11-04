
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Credit from './src/pages/Credit'
import theme from './src/utilities/theme';
import Stack from './src/components/Stack';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarIcon: () => { return null },
          tabBarActiveTintColor: theme.colors.base,
          tabBarInactiveTintColor: theme.colors.base,
          tabBarLabelStyle: { fontSize: 15 },
          tabBarStyle: { backgroundColor: theme.colors.secondary }
        }}>
          <Tab.Screen name="Stack" component={Stack} />
          <Tab.Screen name="Credit" component={Credit} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
export default App;