import React,{useState} from "react";
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet, SafeAreaView, Platform } from "react-native"
import ButtonComponent from "../Button";
import { theme } from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import { deleteDateRequest, sendDateRequest } from "../../redux/authSlice/authSlice";
import { useNavigation } from "@react-navigation/core";
import { Modal , ActivityIndicator} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

import { Pressable } from "react-native";



const CampuserData = () => {

    //modal
    const [showModal, setShowModal] = useState(false);
    //sliderImages
    const [gallery, setGallery] = useState([1])
    const sliderImages = gallery.map((i) => {
        return { url: `https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612` };
    });


    //modal
  const navigation =  useNavigation();


    const { profileInfo, dateRequests } = useSelector(({ auth }) => auth)
    console.log(JSON.stringify(profileInfo[0].id))
    const { data } = useSelector(state => state.users)

    const dispatch = useDispatch();
    const Item = ({ item }) => (
        <SafeAreaView style={styles.containerCardStyle}>
            <TouchableOpacity activeOpacity={0.8}
             style={styles.itemStyle}

            >  
              <Pressable
              
              onPress ={()=>setShowModal(true)}
              >
              <Image
                    style={styles.imageStyle}
                    source={{ uri: `${item.image}` }}
                />

              </Pressable>
                
                <View>
                    <Text style={styles.nameStyle}>{`Name ${'     '} ${
                            item.name.length > 10 && Platform.OS !="web"?
                            ((item.name).substring(0, 8) + '...')
                            : item.name}`}</Text>
                    <Text>{`Gender ${'    '} ${item.gender}`}</Text>
                    <Text>{`Location ${' '} ${item.location}`}</Text>
                    <Text>{`Age ${'          '} ${item.age}`}</Text>
                    <Text>{`Hobby ${"       "}${item.hobby}`}</Text>
                </View>
                {/*modal area */}
                <Modal visible={showModal} 
                transparent={false}
                animationType="slide"
                onShow ={() => <ActivityIndicator color="red" />}
                >
            <ImageViewer
                renderHeader={()=><View><Text>left</Text></View>}
                imageUrls={sliderImages}
                enableImageZoom={true}
                enableSwipeDown={true}
                onSwipeDown={() => {
                    setShowModal(false);
                }}
                onClick ={()=>setShowModal(false)}
                renderFooter={()=><View><Text></Text></View>}

                loadingRender={() => <ActivityIndicator color="white" />}
                
            />
        </Modal>


            </TouchableOpacity>
            <View style={styles.homeButtonStyle}>
                <View style={styles.homeButtonSend}>
                    {
                        dateRequests.find(({ id }) => id === item.id) ?
                            <ButtonComponent
                                mode="contained"
                                text='Undate' icon="send"
                                color={`${theme.colors.primary}`}
                                undate
                                onPress = {()=>dispatch(deleteDateRequest(item.id))}

                            />
                            :

                            <ButtonComponent
                                mode="contained"
                                text='Date' icon="send"
                                color={`${theme.colors.primary}`}
                                datePerson={item}
                                onPress={()=>dispatch(sendDateRequest(item))}

                            />
                    }


                </View>
                <View style={styles.homeButtonMore}>
                    <ButtonComponent
                        mode="contained"
                        text='More' icon="more"
                        color={`${theme.colors.primary}`}
                        onPress = {()=>navigation.navigate("Details", {
                            person:item

                        })}
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
    }
})

export default CampuserData