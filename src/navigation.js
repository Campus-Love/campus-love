import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Photos from './screens/Photos/photos';
import Login from "./screens/AuthScreens/Login";
import AuthBar from "./components/AuthBar";
import {theme} from "./theme"


const Stack = createStackNavigator();

const Checker = () => {
  return (
    <View><Text>Checked</Text></View>
  )
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="screen"
      >
        <Stack.Screen
        name="Login"
         component ={Login}
         options = {{
           header:()=>(<AuthBar
            title={'Login'}
            titleStyle={{ fontSize: 30, fontWeight: 'bold', alignSelf:"center" }}
            headerStyles={{ backgroundColor: theme.colors.primary, elevation: 0 }}
            back
          />)

         }}
        />
        <Stack.Screen name="Home"
          component={LandingScreen}
          options={{
            title: "Account",
            header: (props) => (<AppBar {...props} title="CampusLove" showBadge />),
          }}
        />
        <Stack.Screen name="Profile"
          options={{
            header: (props) => (<AppBar {...props} title="Profile" />)
          }}
          component={ProfileScreen} />
        <Stack.Screen name="Photos"
          options={{
            headerShown:false
          }}
          component={Photos} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default Navigation;