import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import * as Screens from "./screens";

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="black"
        barStyle={{ backgroundColor: '#24C0EB' }}
      >
        <Tab.Screen 
          name="Home"
          component={Screens.Home}
          options={{tabBarIcon:({ color }) => (<Icon name="home" color={color} size={26} />)}}
        />

        <Tab.Screen 
          name="Produtos"
          component={Screens.Produtos}
          options={{tabBarIcon:({ color }) => (<Icon name="gamepad" color={color} size={22} />)}}
        />

        <Tab.Screen 
          name="Pedidos"
          component={Screens.Pedidos}
          options={{tabBarIcon:({ color }) => (<Icon name="clipboard" color={color} size={24} />)}}
        />

        <Tab.Screen 
          name="Lojas"
          component={Screens.Lojas}
          options={{tabBarIcon:({ color }) => (<Icon name="map-marker" color={color} size={26} />)}}
        />

        <Tab.Screen 
          name="Contatos"
          component={Screens.Contatos}
          options={{tabBarIcon:({ color }) => (<Icon name="address-book" color={color} size={26} />)}}
        />

        <Tab.Screen 
          name="Comentarios"
          component={Screens.Comentarios}
          options={{tabBarIcon:({ color }) => (<Icon name="comment" color={color} size={23} />)}}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
