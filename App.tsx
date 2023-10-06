import React from 'react'
import { StyleSheet, Text, View, Button ,Dimensions, Platform, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CameraScreen from './screen/CameraScreen';
import HomeScreen from './screen/HomeScreen';
import SignatureScreen from './screen/SignatureScreen';
import CapScreen from './screen/CapScreen';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CameraScreen" component ={CameraScreen}/>
      <Stack.Screen name="SignatureScreen" component ={SignatureScreen}/>
      <Stack.Screen name="CapScreen" component ={CapScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

