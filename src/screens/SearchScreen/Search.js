import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {useSelector} from "react-redux";
import CampuserData from "../../components/FlatLists/FlatList";

const Search =()=>{
    const {noResultsFound} =  useSelector(({users})=>users)
   
    return(
        <View style = {styles.searchContainer}>
        <Image
        style = {StyleSheet.absoluteFillObject}
       source  = {{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}}/>
          {noResultsFound?
           <View style={styles.containerResults}>
           <Text style={styles.paragraph} >No results found</Text>
         </View>

          :
          <View style={styles.flatList}>
            <CampuserData/>

          </View>
          
          }
</View>
    )

}
const styles = StyleSheet.create({
    searchContainer:{flex:1,backgroundColor:"#fff"},
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      containerResults:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100
      },
      flatList:{
        marginTop:100
      }
})
export default Search