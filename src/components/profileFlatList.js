import React from "react";
import {FlatList, TouchableOpacity, View, Text,Image, StyleSheet , SafeAreaView} from "react-native";
import {theme} from "../theme";
import {profileData} from "../Constants/profiledata"

const Item = ({item})=>(
    <SafeAreaView style = {styles.containerStyle} >
        <TouchableOpacity activeOpacity = {0.8} >
        <Image
        style = {styles.imageStyle}
        source = {{uri:`${item.image}`}}
        />
        </TouchableOpacity>

    </SafeAreaView>
)

const renderItem = ({item})=>(
    <View >
           
            <Item item = {item}/>
    </View>


)

const ProfileFlatList = ()=>{
    return (
        <FlatList
        data = {profileData[0].recentProfileImage}
        numColumns = {2}
        renderItem = {renderItem}
        keyExtractor={(profilInfo)=>profilInfo.id}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:"#fff"
    
    },
    imageStyle:{
        width:200,
        height:200,
        margin:5
    }
})
export default ProfileFlatList