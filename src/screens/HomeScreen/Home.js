import React ,{useEffect}from "react"
import {View,  Image, StyleSheet} from "react-native"
import CampuserData from "../../components/FlatLists/FlatList";
import {useDispatch, useSelector} from "react-redux";
import { returnBackWithData } from "../../redux/dataSlice/dataSlice";
import { useIsFocused } from '@react-navigation/native';
import Loading from "../../components/Indicators/Loading";

const Home = ()=>{
    const isFocused = useIsFocused();
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.users)

    useEffect(()=>{
     dispatch(returnBackWithData())
    },[isFocused])
    
    return data.length?
        <View style = {styles.homeContainer}>
                    <Image
                    style = {StyleSheet.absoluteFillObject}
            source  = {{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}}
            />
           <CampuserData/>
        </View>:
        <Loading/>

    
}

 const styles = StyleSheet.create({
     homeContainer:{flex:1,backgroundColor:"#fff"}
 })
export default Home