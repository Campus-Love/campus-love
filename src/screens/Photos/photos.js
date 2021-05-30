import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TakePicture from "../../components/camera";
import PickImage from "../../components/imagepicker";
import AppBar from "../../components/AppBars/AppBar"
const Stack = createStackNavigator();
const Photos = ()=>{
    
    return(

            <Stack.Navigator
            initialRouteName="Camera"
            headerMode="screen"
            >
                <Stack.Screen
                name="Camera"
                component = {TakePicture}
                options = {{
                    header:(props) => (<AppBar {...props} title="Camera" />)
                }}
                />
                <Stack.Screen
                name="Gallery"
                component = {PickImage}
                options = {{
                    header:(props) => (<AppBar {...props} title="Gallery"/>)
                }}
                />

            </Stack.Navigator>
    
    )
}
export default Photos;