import React from "react";
import { Appbar } from 'react-native-paper';
import { theme } from "../theme";
const AppBar = ({navigation , previous})=>{
    return (
        <Appbar.Header
         dark = {true}
         style = {{backgroundColor:`${theme.colors.primary}`}} >
     {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
     
        <Appbar.Content title="Campuslove" 
         />
         <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
    )
}
export default AppBar