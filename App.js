
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Credit from './pages/Credit'
import theme from './utilities/theme';
import Stack from './components/Stack';

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