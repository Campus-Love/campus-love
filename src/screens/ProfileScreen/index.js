import React , {useEffect, useState}from "react";
import {View, Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView} from "react-native" ;
import { Entypo } from '@expo/vector-icons';
import {theme} from "../../theme";
import {profileData} from "../../Constants/profiledata";
import {Headline, Divider, Text} from "react-native-paper"
import ProfileFlatList from "../../components/profileFlatList";

const ProfileScreen = ({navigation})=>{

    return(
     <ScrollView style = {styles.containerStyle}>
         <View style={styles.containerImageStyle}>
             <Image
               source = {{uri:`${profileData[0].profileImage}`}}
               style = {styles.imageStyle}
             />
         </View>
         <TouchableOpacity activeOpacity = {0.4} 
         onPress = {()=>navigation.navigate("Picker")}
         style = {styles.profileCamera}>
           <Entypo name="camera" size={24}
            color={'#fff'}
             style = {styles.profileCameraIcon}
            />
         </TouchableOpacity>

         <View style = {styles.locationDetails}>
             <View>
             <Headline>About {'  '} {`${profileData[0].name}`}</Headline>
             </View>
             <Divider/>
             <View>
                 <Text>Location {'  '} {`${profileData[0].location}`}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Contact{'     '} {`${profileData[0].contact}`}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Age {'     '} {`${profileData[0].age} `}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Hobby{'   '} {`${profileData[0].hobby}`}</Text>
             </View>
             <Divider/>
         </View>
         <View>
             <Text style = {{margin:5}}>Recent Profile Pictures</Text> 
         <ProfileFlatList/>
         </View>
     </ScrollView>
    )
}

const styles = StyleSheet.create({
containerStyle:{
    flex:1,
    marginTop:30
},
containerImageStyle:{
    alignItems:"center"
},
 imageStyle:{
     width:150,
     height:150,
     borderRadius:80,
     
 },
 profileCamera:{
    alignItems:"center",
    justifyContent:"center",
     backgroundColor:theme.colors.primary,
     color:theme.colors.text,
     width:50,
     height:50,
     borderRadius:27,
     position:"absolute",
     top:100,
     right:100,
     zIndex:20

 },
 profileCameraIcon:{
     alignSelf:"center"
 },
 locationDetails:{
     alignItems:"center",
     justifyContent:"center",
     margin:20,
     padding:10,
     backgroundColor:"grey"
 }

})

export default ProfileScreen