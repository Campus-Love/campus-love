import React from "react";
import { Appbar } from 'react-native-paper';
import { theme } from "../../theme";
import {View, StyleSheet,} from "react-native";
import SearchComponent from "./searchComponent";

const Searching = ({navigation , previous, title,headerStyles, titleStyle})=>{
    
    return (
        <Appbar.Header
         dark = {true}
         style = {headerStyles} >
     {previous ? 

      <Appbar.BackAction onPress={navigation.goBack} /> 
     : null}
     <View>
     <SearchComponent/>
     </View>

      </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    searchView:{
        flex:1,
      width:"100%"
    },
    titleStyle:{
      marginTop:-10
    },
})
export default Searching