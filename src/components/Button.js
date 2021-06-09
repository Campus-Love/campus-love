import React from "react";
import { Button } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux"
import { deleteDateRequest, sendDateRequest } from "../redux/authSlice/authSlice";



const ButtonComponent = ({icon, color, text, mode, onPress, fullWidth, disabled})=>{
    return (
        <Button
          contentStyle = {{
              flexDirection:"row-reverse",
              width:fullWidth&&"100%"
          }}
         icon = {icon}
         mode = {mode}
         color = {color}
         uppercase={false}
         onPress = {onPress}
         disabled={disabled}
        >{text}</Button>
    )
}

export default ButtonComponent