import React from "react";
import { Button } from 'react-native-paper';


const ButtonComponent = ({icon, color, text, mode})=>{
    return (
        <Button
          contentStyle = {{
              flexDirection:"row-reverse"
          }}
         icon = {icon}
         mode = {mode}
         color = {color}
        >{text}</Button>
    )
}

export default ButtonComponent