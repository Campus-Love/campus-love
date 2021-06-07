import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from '../../components/Button';
import Loading from '../../components/Indicators/Loading';
import { deleteDateRequest } from '../../redux/authSlice/authSlice';
import { addUsersUndated } from '../../redux/dataSlice/dataSlice';
import { theme } from '../../theme';

//my screen
const {height, width} = Dimensions.get("window")
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.6;
const SPACER_ITEM = (width-ITEM_SIZE)/2;

const BackDrop = ()=>{
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

    //dispatch action
    const dispatch = useDispatch()
    
    //getImages

    //setImages
    const [dates , showDates] = useState(null);
    useEffect(()=>{
        showDates([{key:"left_space"}, ...dateRequests.map(item=>item),{key:"right_space"}])


    },[dateRequests])
    
    //adddate and undate
    const addDataUndate = (item)=>{
      dispatch(deleteDateRequest(item.id))
      dispatch(addUsersUndated(item))

    }


   
  //scrollX
  const scrollX = useRef(new Animated.Value(0)).current;

  //render no dates screen
  

  
    return dates==null?
    <Loading/>

    :dateRequests.length==0?
    <View><Text>No dates</Text></View>
    :
    <View style={styles.container}>
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
               key={item.id}
              >
                <Image
                 source={{uri:item.image}}
                 style ={styles.detailsImage}
                />
                <Text style={{fontSize:20}}>{item.name}</Text>
                <Text style={{fontSize:18}}>{item.location}</Text>
                <Text style={{fontSize:16}}>{item.uni}</Text>
                <Text style={{fontSize:14}}>{item.age}</Text>
                <Text style={{fontSize:12}}>{item.hobby}</Text>
                <View style={styles.viewButton}>
                  <ButtonComponent text={`Undate`}
                  color={theme.colors.primary}
                  mode="contained"
                  onPress={()=>addDataUndate(item)}
                  />
                </View>
  
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
      },
      viewButton: { marginRight: 4, fontSize: 14 },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4
  },
  
  })
  
