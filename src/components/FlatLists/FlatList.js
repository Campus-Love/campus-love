import React, { useState, useRef } from "react";
import { FlatList, TouchableOpacity, View, Text, Image, Animated,Dimensions, StyleSheet, SafeAreaView, Platform, Pressable, Modal } from "react-native"
import ButtonComponent from "../Button";
import { theme } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import { sendDateRequest } from "../../redux/authSlice/authSlice";
import { useNavigation } from "@react-navigation/core";
import { filterDatedUsers } from "../../redux/dataSlice/dataSlice";
import { AntDesign } from '@expo/vector-icons';
import { PinchGestureHandler, PanGestureHandler } from "react-native-gesture-handler";

const {height, width} =  Dimensions.get('screen')



const CampuserData = () => {

    //create a reference
    //const scale = useRef(new Animated.Value(1)).current;
    //modal
    const [showModal, setShowModal] = useState(false);
    //handle gesture
    //const handlePinch = Animated.event([{ nativeEvent: { scale } }])

    const navigation = useNavigation();


    const { profileInfo, dateRequests } = useSelector(({ auth }) => auth)
    console.log(JSON.stringify(profileInfo[0].id))
    const { data } = useSelector(state => state.users)
    const dispatch = useDispatch();

    //filterdata and add date request
    const filterSendRequest = (item) => {
        dispatch(sendDateRequest(item))
        dispatch(filterDatedUsers(item.id))
    }
    //setimageurl
    const [imageURL, setImageUrl] =  useState(null)
    const getImageUrl = (imageUrl)=>{
        //alert(imageUrl);
          setImageUrl(imageUrl)
        setShowModal(true);

    }
    //removeModal
    const removeModal = ()=>{
        setShowModal(false)
        setImageUrl(null)
    }


    const Item = ({ item }) => (
        <SafeAreaView style={styles.containerCardStyle}>
            <TouchableOpacity activeOpacity={0.8}
                style={styles.itemStyle}

            >
                  <Pressable onPress={()=>getImageUrl(item.image)}>
                  <Image
                        style={styles.imageStyle}
                        source={{ uri: `${item.image}` }}
                    />
                  </Pressable>
                  {/*modal to show a big image */}
                  {
                      showModal&&
                      <View style={styles.modalStyle}>
                  <Modal visible={imageURL&&showModal}>
                      <View style={styles.modalStyleInside}>
                      <Pressable onPressOut={removeModal}>
                      <Image
                        style={styles.modalImage}
                        source={{ uri: `${imageURL}` }}
                    />
                          
                      </Pressable>


                      </View>
                      
                  </Modal>

                  </View>
                  
                  }
                  
                  {/*modal to show a big image */}

                    

        
                <View>
                    <Text style={styles.nameStyle}>{`Name ${'     '} ${item.name.length > 10 && Platform.OS != "web" ?
                            ((item.name).substring(0, 8) + '...')
                            : item.name}`}</Text>
                    <Text>{`Gender ${'    '} ${item.gender}`}</Text>
                    <Text>{`Location ${' '} ${item.location}`}</Text>
                    <Text>{`Age ${'          '} ${item.age}`}</Text>
                    <Text>{`Hobby ${"       "}${item.hobby}`}</Text>
                </View>



            </TouchableOpacity>
            <View style={styles.homeButtonStyle}>
                <View style={styles.homeButtonSend}>


                    <ButtonComponent
                        mode="contained"
                        text='Date' icon="send"
                        color={`${theme.colors.primary}`}
                        datePerson={item}
                        onPress={() => filterSendRequest(item)}

                    />



                </View>
                <View style={styles.homeButtonMore}>
                    <ButtonComponent
                        mode="contained"
                        text='More' icon="more"
                        color={`${theme.colors.primary}`}
                        onPress={() => navigation.navigate("Details", {
                        item

                        }
                        )}
                    />
                </View>

            </View>

        </SafeAreaView>
    )

    const renderItem = ({ item }) => (
        <View >

            <Item item={item} />
        </View>


    )
    return (
        <FlatList
              
            data={data}
            renderItem={renderItem}
            keyExtractor={(data) => data.id}


        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: `#fff`,
        flex: 1
    },
    containerCardStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 12,
        margin: 20,
        paddingLeft: Platform.OS === "web" ? 30 : 20,
        paddingTop: Platform.OS === "web" ? 20 : 20,
        paddingBottom: Platform.OS === "web" ? 20 : 20,
        paddingRight: 20
    },
    itemStyle: {
        flexDirection: "row",
        flex: 1,
        marginBottom: 6,
        marginLeft: 0
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginLeft: -5,
        marginRight: 10,
        borderRadius: 50
    },
    modalImage:{
        width,
        height:height/2,
        zIndex:1,
        overflow: "hidden",
        justifyContent:"center",
        marginTop:height/5,
        marginBottom:height/11

    },
    nameStyle: {
        fontSize: 15,
        fontWeight: "700",

    },
    homeButtonStyle: {
        flexDirection: "row"
    },
    homeButtonSend: {
        width: "50%",
        flex: 0.5,
        marginRight: 15
    },
    homeButtonMore: {
        width: "50%",
        flex: 0.5
    },
    modalStyle:{
        width,
        backgroundColor:theme.colors.primary
    },
    closeModal:{
      position: "absolute",
      top:10,
      right: 20
    },
    modalStyleInside:{
        width,
        height,
        backgroundColor:theme.colors.onBackground
    }
})

export default CampuserData