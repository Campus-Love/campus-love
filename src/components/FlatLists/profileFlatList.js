import React from "react";
import {FlatList, TouchableOpacity, View, Text,Image, StyleSheet , SafeAreaView} from "react-native";
import {theme} from "../../theme";
import {useSelector, useDispatch} from "react-redux"

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
    //fetch the data
    const {profileInfo} = useSelector(({auth})=>auth)
    //console.log(profileInfo[0].)
    return (
        <FlatList
        data = {profileInfo[0].recentProfileImage}
        numColumns = {2}
        renderItem = {renderItem}

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