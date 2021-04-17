import React from "react";
import { Appbar,Badge } from 'react-native-paper';
import { theme } from "../theme";
import {View, StyleSheet, Platform} from "react-native"
const AppBar = ({navigation , previous})=>{
    const unread = 4;
    const MORE_ICON = Platform.OS === 'ios' || Platform.OS === "web" ?
     'dots-horizontal' : 'dots-vertical';
    return (
        <Appbar.Header
         dark = {true}
         style = {styles.appHeaderStyle} >
     {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
     
        <Appbar.Content title="Campuslove" 
         />
       <View>
          <Badge
            visible={unread && unread > 0}
            size={17}
            style={styles.badgeStyle}
          >
            {unread}
          </Badge>
          <Appbar.Action
          color ="#fff"
            icon={'account-supervisor-circle'}
            accessibilityLabel="TagChat"
            onPress={() => {}}
            
          />
   </View>
   <View>
          <Badge
            visible={unread && unread > 0}
            size={16}
            style={styles.badgeStyle}
          >
            {unread}
          </Badge>
          <Appbar.Action
            color ="#fff"
            icon={'account-heart'}
            accessibilityLabel="TagChat"
            onPress={() => {}}
          />

   </View>
   <Appbar.Action
            color ="#fff"
            icon={MORE_ICON}
            accessibilityLabel="TagChat"
            onPress={() => {}}
          />

   

      </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    appHeaderStyle:{backgroundColor:`${theme.colors.primary}`},
    badgeStyle:{
        position: 'absolute', 
        top: 5, right: 5 ,
      color:`${theme.colors.primary}`,
       backgroundColor:"#fff",
       fontWeight:"700",
       fontSize:10

    }
})
export default AppBar