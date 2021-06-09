import React from 'react'
import { StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {theme} from "../../theme";
import Home from "./Home";
import {Avatar} from "react-native-paper";
import {useFocusKeyboard} from "../../customHooks/useFocus"
import Loading from "../../components/Indicators/Loading";
import Empty from '../defaultScreen/empty';



//screen

//create tabs
const Tab  = createBottomTabNavigator()


const LandingScreen = ({navigation}) => {

  //focus keyboard
  const focusKeyboard = useFocusKeyboard();
  
  //

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
        component={Loading}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
                    <Pressable onPress = {()=>{focusKeyboard&&navigation.navigate("Search")}}>
                       <EvilIcons name="search" 
                     size={30} 
                     color={color}

                  
                      />

                    </Pressable>
                     
            

          ),
        
        }}
      />
      <Tab.Screen
        name="chat"
        component={Loading}
        options={{
          tabBarLabel: 'chat',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={24} color={color} />
          ),
        
        }}
      />

<Tab.Screen
        name="Profile"
        component={Loading}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Pressable
            onPress = {
              ()=>navigation.navigate("Profile")
              /*()=>alert('pressed')*/
          }
            >
                 <Avatar.Image size={24} source={{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}} 
             color = {color}
             size = {24}
           />
            </Pressable>
           
          ),
        
        }}
      />
      
    </Tab.Navigator>
    )
}

export default LandingScreen

const styles = StyleSheet.create(
  {


})
