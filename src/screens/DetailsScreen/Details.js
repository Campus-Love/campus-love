import React, { useRef, useState, useEffect } from 'react'
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import ButtonComponent from '../../components/Button';
import { sendDateRequest } from '../../redux/authSlice/authSlice';
import { filterDatedUsers } from '../../redux/dataSlice/dataSlice';
import { theme } from '../../theme';

const images = [
    {
        id: 1,
        recentImage: "https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id: 2,
        recentImage: "https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
        id: 3,
        recentImage: "https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id: 4,
        recentImage: "https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
        id: 5,
        recentImage: "https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]
const { width, height } = Dimensions.get("screen")
const newHeight = height / 2;
const Details = ({route:{params:{item}}}) => {
     const dispatch = useDispatch()
      const [disable, setDisable] = useState(false)

     //filterdata and add date request
    const filterSendRequest = (detail) => {
        //alert(JSON.stringify(detail))
        dispatch(sendDateRequest(detail))
        dispatch(filterDatedUsers(detail.id))
        setDisable(true)
    }
    useEffect(() => {
        
    }, [disable])

    //create 2 refs
    const topRef = useRef();
    const thumbRef = useRef();

    //active index
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollToActiveIndex = (index) => {
        //set index and scroll flatlist
        setActiveIndex(index)

        //scroll flatlist
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        })
        //some simple logic
        //10 represents spacing
        //80 is the image size
        if ((index * (80 + 10) - (80 / 2)) > width / 2) {
            thumbRef?.current?.scrollToOffset({
                offset: index * (80 + 10) - (width / 2) + (80 / 2),
                animated: true
            })
        }
        else {

            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true
            })

        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.text }}>
            <FlatList
                data={images}
                ref={topRef}
                keyExtractor={item => String(item.id)}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(
                        Math.floor(ev.nativeEvent.contentOffset.x / width)
                    )
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flex: 1, width, height: newHeight }}>
                            <Image
                                source={{ uri: item.recentImage }}
                                style={{ width, height: newHeight  }}
                                resizeMode="cover"
                            />
                        </View>
                    )
                }}
            />
            {/*second flatlist */}
            <FlatList
                data={images}
                ref={thumbRef}
                keyExtractor={item => String(item.id)}
                horizontal
                style={{ position: "absolute", bottom: newHeight - 50 }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            onPress={() => scrollToActiveIndex(index)}
                        >
                            <Image
                                source={{ uri: item.recentImage }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 12,
                                    marginRight: 10,
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    borderColor: activeIndex == index ? theme.colors.primary : "transparent"
                                }}
                            />
                        </Pressable>



                    )
                }}
            />
            {/*second flatlist */}

            {/*second flatlist */}
            {/*details abt person  card*/}
            <View style={{flex:1 , marginTop:-20}}>
            <Card mode="outlined">
                <Card.Title title={item?.name} subtitle={item.uni}  />
                <Card.Content style={{flexDirection:"row", 
                
                
                }}>
                    <Title >Age</Title>
                    <Paragraph style={{marginLeft:10, marginTop:8}}>{item.age}</Paragraph>
                </Card.Content>
                <Card.Content style={{flexDirection:"row", 
                
                
                }}>
                    <Title >Location</Title>
                    <Paragraph style={{marginLeft:10, marginTop:8}}>{item.location}</Paragraph>
                </Card.Content>
                <Card.Content style={{flexDirection:"row", 
                
                
                }}>
                    <Title >Gender</Title>
                    <Paragraph style={{marginLeft:10, marginTop:8}}>{item.gender}</Paragraph>
                </Card.Content>
                <Card.Content style={{flexDirection:"row", 
                
                
                }}>
                    <Title >hobby</Title>
                    <Paragraph style={{marginLeft:10, marginTop:8}}>{item.hobby}</Paragraph>
                </Card.Content>

                <Card.Actions style={{flex:1}}>
                    <ButtonComponent 
                    mode="contained" 
                    fullWidth
                    icon="send"
                    onPress={()=>filterSendRequest(item)}
                    color={theme.colors.primary}
                    disabled={disable}
                    text="Date"/>
                </Card.Actions>
            </Card>

            </View>
            
            {/*details */}
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({})
