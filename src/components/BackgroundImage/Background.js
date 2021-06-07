import { Feather } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { StyleSheet, View, ImageBackground, Animated, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import { theme } from '../../theme';
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/dataSlice/dataSlice';


const { width } = Dimensions.get("screen");
//avatar width
const AVATAR_WIDTH = (width / 3);



const Background = ({ previous }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch()



  return (
    <ImageBackground
      // Image from https://unsplash.com/photos/EYnirI5zPT0
      source={{ uri: 'https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612' }}
      style={{ width: '100%', opacity: 0.7 }}>
      <Appbar.Header style={{
        backgroundColor: 'transparent',
        width: '100%',
        elevation: 0,
        height: 100
      }}>
        {previous ?

          <Appbar.BackAction onPress={navigation.goBack}
            color={theme.colors.primary}
            style={{
              position: 'absolute',
              top: 5,
              left: 5
            }}
            size={28}
          />
          : null}

        <Appbar.Content 
        title="Katende Nicholas" 
        subtitle={'Makerere University'}
        color={theme.colors.backdrop}
            style={{
              position: 'absolute',
              top: 5,
              left:AVATAR_WIDTH-5
            }}
         />



        <Avatar.Image
          source={{ uri: "https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612" }}
          style={{
            position: 'absolute',
            top: 50,
            left: AVATAR_WIDTH
          }}
          size={100}
        />
        <Appbar.Action icon="camera"
          onPress={() => dispatch(showModal())}
          color={theme.colors.primary}
          style={{
            position: 'absolute',
            top: 50,
            left: AVATAR_WIDTH - 20
          }}
          size={35}
        />
        <Appbar.Action icon="camera"
          color={theme.colors.primary}
          style={{
            position: 'absolute',
            top: 50,
            right: 15
          }}
          size={30}
          onPress={() => dispatch(showModal())}
        />
      </Appbar.Header>
    </ImageBackground>


  )
}

export default Background

const styles = StyleSheet.create({

})
