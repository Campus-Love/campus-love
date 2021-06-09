import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView, Alert, Modal, TouchableHighlight } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { theme } from "../../theme";
import { profileData } from "../../Constants/profiledata";
import { Text, Avatar } from "react-native-paper"
import ProfileFlatList from "../../components/FlatLists/profileFlatList";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/dataSlice/dataSlice";
import { Pressable } from "react-native";

const ProfileScreen = ({ navigation }) => {

  const { openModal } = useSelector(state => state.users)
  //hide modal through dispatch
  const dispatch = useDispatch();

  const showCamera = () => {
    dispatch(closeModal())
    navigation.navigate("Photos")
  }
  const pickImage = () => {
    dispatch(closeModal())
    navigation.navigate("Photos",
      {
        screen: "Gallery",
        initial: false,
        params: { gallery: "Gallery" }
      },


    )
  }
  //tweets
  const fake = [
    { key: 1, tweet: "Recent Images" },

  ]

  return (
    <ScrollView style={styles.containerStyle}>
      {/*modal arae */}
      {

        openModal && <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            presentationStyle="overFullScreen"
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <Text style={{
                color: theme.colors.text, marginTop: 10, fontWeight: "bold"
                , textAlign: "center"
              }}>Profile Update</Text>
              <View style={styles.modalView}>

                <View style={styles.modalContent}>
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={pickImage}
                  >
                    <View style={{ color: theme.colors.text, marginRight: 20 }}>
                      <Avatar.Image size={30}
                        source={{ uri: "https://code.recuweb.com/c/u/3a09f4cf991c32bd735fa06db67889e5/2018/08/wordpress-photo-gallery-plugins1.png" }}
                      />
                      <Text style={{ color: theme.colors.text }}>Gallery</Text>
                    </View>


                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={showCamera}>
                    <View style={{ color: theme.colors.text, marginLeft: 20 }}>
                      <Entypo size={30} name="camera" color="#FFF" />
                      <Text style={{ color: theme.colors.text }}>Camera</Text>
                    </View>

                  </TouchableOpacity>

                </View>


                <TouchableHighlight
                  underlayColor="#fff"
                  style={{ ...styles.openButton, backgroundColor: 'white', width: "100%", marginTop: 10 }}
                  onPress={() => dispatch(closeModal())}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

        </View>
      }
      {/*content section */}
      <View style={{ marginLeft: 30 }}>
        {
          fake.map((item) =>
            <View key={item.key} style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 30,
              borderBottomColor: theme.colors.primary,

            }}>

                <Pressable
                 onPress={()=>navigation.navigate("RecentImages")}
                 style={{ flexDirection: "row" }}
                >
                  <Avatar.Image size={30}
                    style={{ marginRight: 20 }}
                    source={{ uri: "https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612" }}
                  />
                  <View>
                    <Text>{item.tweet}</Text>
                  </View>

                </Pressable>




            </View>)
        }

      </View>


      {/*content section */}


    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 30
  },
  containerImageStyle: {
    alignItems: "center"
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 80,

  },
  profileCamera: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    width: 50,
    height: 50,
    borderRadius: 27,
    position: "absolute",
    top: 100,
    right: 100,
    zIndex: 20

  },
  profileCameraIcon: {
    alignSelf: "center"
  },
  locationDetails: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 10,
    backgroundColor: "grey"
  },
  centeredView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: theme.roundness,
    borderTopRightRadius: theme.roundness
  },
  modalView: {
    margin: 15,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: 'space-around',
    color: theme.colors.text
  },


})

export default ProfileScreen