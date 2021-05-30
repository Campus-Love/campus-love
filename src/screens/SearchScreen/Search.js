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
          <View>
              <Text>No Results found</Text>
          </View>
          :<CampuserData/>}
</View>
    )

}
const styles = StyleSheet.create({
    searchContainer:{flex:1,backgroundColor:"#fff"}
})
export default Search