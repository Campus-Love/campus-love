import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen/Home';

const Stack = createStackNavigator();
const Navigation = ()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator
         screenOptions = {
           {
             headerShown:false
           }
         }
         
        >
           <Stack.Screen name="Home" component = {Home}/>
        </Stack.Navigator>
    
      </NavigationContainer>

    )
}

export default Navigation;