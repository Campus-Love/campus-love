import React from "react";
import {FlatList, TouchableOpacity, View, Text,Image, StyleSheet } from "react-native"
import campusers from "../Constants/fakedata";
import ButtonComponent from "./Button";
import {theme} from "../theme"


const CampuserData = ()=>{

    const Item = ({item})=>(
        <TouchableOpacity style = {styles.containerCardStyle} activeOpacity={0.3}>
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
           <View>

               <ButtonComponent 
               mode = "contained" 
               text='Relation Request' icon = "send"
               color = {`${theme.colors.primary}`}
               />
            </View>

        </TouchableOpacity>
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
    },
    itemStyle:{
        flexDirection:"row",
        flex:1,
        marginBottom:6 
       
    },
    imageStyle:{
        width:80,
        height:80,
        marginLeft:-10,
        marginRight:20,
        borderRadius:50
    },
    nameStyle:{
        fontSize:15,
        fontWeight:"700",

    },
})

export default CampuserData