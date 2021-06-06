import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Loading from '../../components/Indicators/Loading';
import Genres from '../../components/ReusableComponents/genres';
import Rating from '../../components/ReusableComponents/rate';

//my screen
const {height, width} = Dimensions.get("window")
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.6;
const SPACER_ITEM = (width-ITEM_SIZE)/2;

const BackDrop = ({images, scrollX})=>{
    return<View style={{ height, width , position:"absolute", flex:1}}>
      <LinearGradient
          colors={['#AF052E', 'red','white']}
          style={{
            height,
            width,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
  }

  const DateRequests = ()=>{
    const {dateRequests } = useSelector(({ auth }) => auth);
    
    //getImages

    //setImages
    const [dates , showDates] = useState(null);
    useEffect(()=>{
        showDates([{key:"left_space"}, ...dateRequests.map(item=>item),{key:"right_space"}])


    },[])
    


   
  //scrollX
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const genres = ['genre1','genre2']
  
    return dates==null?
    <Loading/>
    :<View style={styles.container}>
      <BackDrop/>
  
      <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={dates}
      snapToInterval={ITEM_SIZE}
      decelerationRate={0}
      keyExtractor={item=>item.id}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
      renderItem={
        ({item, index})=>{
          if(!item.id){
            return <View style={{width:SPACER_ITEM, backgroundColor:"red"}}
             key={index}
            ></View>
          }
          const inputRange = [(index - 1) * ITEM_SIZE, 
            index*ITEM_SIZE,
  
            (index + 1) * ITEM_SIZE
          ];
          const outputRange = [0, -50, 0];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange
          });
          return (
            <View style={{width:ITEM_SIZE}} key={item.id}>
              <Animated.View
               style={{
                 marginHorizontal:SPACING,
                 padding:SPACING*2,
                 alignItems:"center",
                 backgroundColor:"white",
                 borderRadius:34,
                 transform:[{translateY}]
               }}
              >
                <Image
                 source={{uri:item.image}}
                 style ={styles.detailsImage}
                />
                <Text style={{fontSize:24}}>{item.name}</Text>
                <Rating rating={5}/>
                <Genres genres={genres}/>
                <Text style={{fontSize:12}}>{item.hobby}</Text>
  
              </Animated.View>
  
            </View>
          )
        }
      }
      contentContainerStyle={{alignItems:"center"}}
      />
      </View>
  
  }
  

export default DateRequests

const styles = StyleSheet.create(
    {
      container:{
        flex:1
      },
      detailsImage:{
        width: '100%',
        height: ITEM_SIZE,
        resizeMode: 'cover',
        borderRadius: 15,
        margin: 0,
        marginBottom: 20,
      }
  
  })
  
