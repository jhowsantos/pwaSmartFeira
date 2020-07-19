import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './pages/Home';
import ListProductsScreen from './pages/ListProducts';
import Select from './pages/Select';

const Stack = createStackNavigator();

export default function Routes() {

  const deepLink: LinkingOptions = {
    prefixes: ['https://smart-feira.netlify.app/', 'smart-feira.netlify.app/'],
    config: {
      screens: {
        Home: 'home',
        ListProducts: {
          path: 'list-products/:feiranteId/:clienteId',
          parse: {
            feiranteId: (feiranteId) => `feiranteId-${feiranteId}`,
            clienteId: (clienteId) => `clienteId-${clienteId}`,
          },
        },
      }
    }
  };

  return (
    <NavigationContainer linking={deepLink}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListProducts" component={ListProductsScreen} />
        <Stack.Screen name="Select" component={Select} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
