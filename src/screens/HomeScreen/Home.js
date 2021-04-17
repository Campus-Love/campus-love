import React from "react"
import {View, Text, SafeAreaView, Image, StyleSheet} from "react-native"
import CampuserData from "../../components/FlatList";


const Home = ()=>{
    return (
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
     homeContainer:{flex:1,backgroundColor:"#fff"}
 })
export default Home