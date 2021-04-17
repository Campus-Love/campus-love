import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {theme} from "../../theme"


//create tabs
const Tab  = createBottomTabNavigator()

//Default tab
const DefaultTab = ()=>{
    return (<View><Text>Hello </Text></View>)
}
const HomeScreen = () => {
    return (
        <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: `${theme.colors.primary}`,
        inactiveTintColor:`${theme.colors.placeholder}`,
        tabStyle:{
            marginBottom:5,
            PaddingLeft:2,
            paddingRight:2,
            marginTop:5
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={DefaultTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={DefaultTab}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" size={30} color={color} />
          ),
        
        }}
      />
      <Tab.Screen
        name="Camera"
        component={DefaultTab}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="camera" size={24} color={color} />
          ),
        
        }}
      />

<Tab.Screen
        name="Settings"
        component={DefaultTab}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        
        }}
      />
      
    </Tab.Navigator>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
