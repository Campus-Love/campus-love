import React from "react";
import {FlatList, TouchableOpacity, View, Text,Image, StyleSheet , SafeAreaView} from "react-native"
import campusers from "../Constants/fakedata";
import ButtonComponent from "./Button";
import {theme} from "../theme"


const CampuserData = ()=>{

    const Item = ({item})=>(
        <SafeAreaView style = {styles.containerCardStyle}>
            <TouchableOpacity activeOpacity = {0.8} style = {styles.itemStyle}>
            <Image
            style = {styles.imageStyle}
            source = {{uri:`${item.image}`}}
            />
            <View>
                <Text style = {styles.nameStyle}>{`Name ${'     '} ${item.name}`}</Text>
                <Text>{`Gender ${'    '} ${item.gender}`}</Text>
                <Text>{`Location ${' ' } ${item.location}`}</Text>
                <Text>{`Age ${'          '} ${item.age}`}</Text>
                <Text>{`Hobby ${"       "}${item.hobby}`}</Text>
            </View>
            

            </TouchableOpacity>
           <View style = {styles.homeButtonStyle}>
               <View style ={styles.homeButtonSend}>
               <ButtonComponent 
               mode = "contained" 
               text='RR' icon = "send"
               color = {`${theme.colors.primary}`}
               />
               </View>
               <View style = {styles.homeButtonMore}>
               <ButtonComponent 
               mode = "contained" 
               text='More' icon = "more"
               color = {`${theme.colors.primary}`}
               
               />
               </View>
               
            </View>

        </SafeAreaView>
    )

    const renderItem = ({item})=>(
        <View >
               
                <Item item = {item}/>
        </View>


    )
    return (
     <FlatList
    
     data = {campusers}
     renderItem = {renderItem}
     keyExtractor = {(campuser)=>campuser.id}
     
     />
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:`#fff`,
        flex:1
    },
    containerCardStyle:{
        backgroundColor:"rgba(255, 255, 255, 0.9)",
        borderRadius:12,
        padding:20,
        margin:20,
        paddingRight:20
    },
    itemStyle:{
        flexDirection:"row",
        flex:1,
        marginBottom:6,
        marginLeft:-10 
       
    },
    imageStyle:{
        width:100,
        height:100,
        marginLeft:-5,
        marginRight:10,
        borderRadius:50
    },
    nameStyle:{
        fontSize:15,
        fontWeight:"700",

    },
    homeButtonStyle:{
        flexDirection:"row"
    },
    homeButtonSend:{
        width:"50%",
        flex:0.5,
        marginRight:15
    },
    homeButtonMore:{
        width:"50%",
        flex:0.5
    }
})

export default CampuserData