import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TakePicture from "../../components/camera";
import PickImage from "../../components/imagepicker";
const Stack = createStackNavigator();
const Photos = ()=>{
    
    return(

            <Stack.Navigator
            initialRouteName="Camera"
            screenOptions = {{
                headerShown:false
            }}
            >
                <Stack.Screen
                name="Camera"
                component = {TakePicture}
                />
                <Stack.Screen
                name="Gallery"
                component = {PickImage}
                />

            </Stack.Navigator>
    
    )
}
export default Photos;