import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import News from './SRC/News';
import Converter from './SRC/Converter';
import Notepad from './SRC/Notepad';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
          <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Converter" component={Converter} />
        <Tab.Screen name="Notepad" component={Notepad} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



