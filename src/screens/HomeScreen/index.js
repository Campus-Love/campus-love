import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {theme} from "../../theme";
import Home from "./Home";
import {Avatar} from "react-native-paper"


//create tabs
const Tab  = createBottomTabNavigator()

//Default tab
const DefaultTab = ()=>(<View></View>)

const LandingScreen = ({navigation}) => {
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
        component={Home}
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
        name="account"
        component={DefaultTab}
        options={{
          tabBarLabel: 'account',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity activeOpacity = {0.2}
            onPress = {()=>navigation.navigate("MyAccount")}
            >
                 <Avatar.Image size={24} source={{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}} 
             color = {color}
             size = {24}
           />
            </TouchableOpacity>
           
          ),
        
        }}
      />
      
    </Tab.Navigator>
    )
}

export default LandingScreen

const styles = StyleSheet.create({})
