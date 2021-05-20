import React from "react";
import { Button } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux"
import { deleteDateRequest, sendDateRequest } from "../redux/authSlice/authSlice";



const ButtonComponent = ({icon, color, text, mode, onPress})=>{
    return (
        <Button
          contentStyle = {{
              flexDirection:"row-reverse"
          }}
         icon = {icon}
         mode = {mode}
         color = {color}
         uppercase={false}
         onPress = {onPress}
        >{text}</Button>
    )
}

export default ButtonComponent