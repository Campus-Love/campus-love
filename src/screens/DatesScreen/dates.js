import React from "react";
import DateRequests from "./datesRequests";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';


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
            <MaterialIcons name="present-to-all" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Received"
        component={DateRequests}
        options={{
          
          tabBarLabel: 'Received',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="call-received" color={color} size={24} />
          ),
        }}
      />

      </Tab.Navigator>
    )

}
export default Dates;