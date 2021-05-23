import React from "react";
import DateRequests from "./datesRequests";
import AuthBar from "../../components/AuthBar";
import ReceivedDates from "./receivedDates";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";


//create tabs
const Tab  = createBottomTabNavigator()
const Dates = () => {
    return (
      <Tab.Navigator
      initialRouteName="Sent"
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
        name="Sent"
        component={DateRequests}
        options={{
          
          tabBarLabel: 'Dates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Received"
        component={DateRequests}
        options={{
          
          tabBarLabel: 'Received',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      </Tab.Navigator>
    )

}
export default Dates;