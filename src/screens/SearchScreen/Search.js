import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import SearchBar from "../../components/search/searchComponent";
import {useSelector} from "react-redux";
import CampuserData from "../../components/FlatList"

const Search =()=>{
    return(
        <View style = {styles.homeContainer}>
        <Image
        style = {StyleSheet.absoluteFillObject}
       source  = {{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}}
/>
<CampuserData/>
</View>
    )

}
const styles = StyleSheet.create({
    searchContainer:{flex:1,backgroundColor:"#fff"}
})
export default Search