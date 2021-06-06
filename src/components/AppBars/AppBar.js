import React from "react";
import { Appbar,Badge } from 'react-native-paper';
import { theme } from "../../theme";
import {View, StyleSheet, Platform} from "react-native";
import { useSelector } from "react-redux";


const AppBar = ({navigation , previous, title, showBadge,elevate})=>{



  const { dateRequests} = useSelector(({auth})=>auth)
    const unread = 4;
    const MORE_ICON = Platform.OS === 'ios' || Platform.OS === "web" ?
     'dots-horizontal' : 'dots-vertical';
    return (
        <Appbar.Header
         dark = {true}
         style = {{
          backgroundColor:`${theme.colors.primary}`,
          width:"100%",
          elevation:elevate?0:null

         }} >
     {previous ? 

      <Appbar.BackAction onPress={navigation.goBack} /> 
     : null}
     
        <Appbar.Content 
        title={title} 
        titleStyle = {styles.titleStyle}
         />
         {
           showBadge&&
           <View>
           <Badge
             visible={dateRequests && dateRequests.length>0}
             size={17}
             style={styles.badgeStyle}
           >
             {`+${dateRequests.length}`}
           </Badge>
           <Appbar.Action
           color ="#fff"
             icon={'account-check-outline'}
             accessibilityLabel="TagChat"
             onPress={() => navigation.navigate('DateDetails', {title:"Dates"})}
             
           />
    </View>
         }

         {
           showBadge&&
           <View>
          <Badge
            visible={unread && unread > 0}
            size={16}
            style={styles.badgeStyle}
          >
            {`+${unread}`}
          </Badge>
          <Appbar.Action
            color ="#fff"
            icon={'account-heart'}
            accessibilityLabel="TagChat"
            onPress={() => {}}
          />

   </View>
         }
      
   
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
    appHeaderStyle:{
      backgroundColor:`${theme.colors.primary}`,
      width:"100%",
    },
    badgeStyle:{
        position: 'absolute', 
        top: 5, right: 5 ,
      color:`${theme.colors.primary}`,
       backgroundColor:"#fff",
       fontWeight:"700",
       fontSize:10,
       zIndex:20

    },
    titleStyle:{
      marginTop:-10
    },
})
export default AppBar