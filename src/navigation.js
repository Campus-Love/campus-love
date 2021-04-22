import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';


const Stack = createStackNavigator();

const Checker = ()=>{
  return (
    <View><Text>Checked</Text></View>
  )
}


const Navigation = ()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName = "Home"
        headerMode ="screen"       
        >
           <Stack.Screen name="Home" 
           component = {LandingScreen}
           options = {{
             title:"Account",
             header:(props)=>(<AppBar {...props} title = "CampusLove" showBadge/>),
           }}
           />
           <Stack.Screen name="MyAccount"
           options = {{
             header:(props)=>(<AppBar {...props} title="Profile"/>)
           }}
            component ={Checker}/>
        </Stack.Navigator>
    
      </NavigationContainer>

    )
}

export default Navigation;