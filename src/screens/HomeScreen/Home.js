import React ,{useEffect}from "react"
import {View,  Image, StyleSheet} from "react-native"
import CampuserData from "../../components/FlatLists/FlatList";
import {useDispatch} from "react-redux";
import { returnBackWithData } from "../../redux/dataSlice/dataSlice";
import { useIsFocused } from '@react-navigation/native';



const Home = ({navigation})=>{
    const isFocused = useIsFocused();
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(returnBackWithData())
    },[isFocused])
    
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