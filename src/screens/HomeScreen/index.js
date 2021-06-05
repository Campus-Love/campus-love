import React,{useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable ,FlatList,
   Dimensions,Platform, Image, Animated} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {theme} from "../../theme";
import Home from "./Home";
import {Avatar} from "react-native-paper";
import {useFocusKeyboard} from "../../customHooks/useFocus"
import Empty from '../defaultScreen/empty';
import Rating from '../../components/ReusableComponents/rate';
import Genres from '../../components/ReusableComponents/genres';
import { LinearGradient } from 'expo-linear-gradient';



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

const AnimatedScreen = ()=>{
  const examples = [
    {
      key:"left_spacer"
    },
    {
    id:'1',
    image:"https://images.pexels.com/photos/6578940/pexels-photo-6578940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id:'2',
    image:"https://images.pexels.com/photos/3724031/pexels-photo-3724031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
  ,{
    id:"3",
    image:"https://images.pexels.com/photos/4545154/pexels-photo-4545154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id:'4',
    image:"https://images.pexels.com/photos/6578940/pexels-photo-6578940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id:'5',
    image:"https://images.pexels.com/photos/3724031/pexels-photo-3724031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
  ,{
    id:"6",
    image:"https://images.pexels.com/photos/4545154/pexels-photo-4545154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    key:"Right_Spacer"
  }
  

]
//scrollX
const scrollX = React.useRef(new Animated.Value(0)).current;

const genres = ['genre1','genre2']

  return <View style={styles.container}>
    <BackDrop/>

    <Animated.FlatList
    showsHorizontalScrollIndicator={false}
    horizontal
    data={examples}
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
          <View style={{width:ITEM_SIZE}}>
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
              <Text style={{fontSize:24}}>Katende</Text>
              <Rating rating={5}/>
              <Genres genres={genres}/>
              <Text style={{fontSize:12}}>description</Text>

            </Animated.View>

          </View>
        )
      }
    }
    contentContainerStyle={{alignItems:"center"}}
    />
    </View>

}
//screen

//create tabs
const Tab  = createBottomTabNavigator()


const LandingScreen = ({navigation}) => {

  //focus keyboard
  const focusKeyboard = useFocusKeyboard();
  
  //

    return (
        <Tab.Navigator
      initialRouteName="Home"
      
      tabBarOptions={{
        activeTintColor: `${theme.colors.primary}`,
        inactiveTintColor:`${theme.colors.placeholder}`,
        tabStyle:{
            marginBottom:5,
            PaddingLeft:2,
            paddingRight:2,
            marginTop:5
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Empty}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
                    <Pressable onPress = {()=>{focusKeyboard&&navigation.navigate("Search")}}>
                       <EvilIcons name="search" 
                     size={30} 
                     color={color}

                  
                      />

                    </Pressable>
                     
            

          ),
        
        }}
      />
      <Tab.Screen
        name="Camera"
        component={AnimatedScreen}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="camera" size={24} color={color} />
          ),
        
        }}
      />

<Tab.Screen
        name="Profile"
        component={Empty}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity activeOpacity = {0.2}
            onPress = {()=>navigation.navigate("Profile")}
            >
                 <Avatar.Image size={24} source={{uri:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"}} 
             color = {color}
             size = {24}
           />
            </TouchableOpacity>
           
          ),
        
        }}
      />
      
    </Tab.Navigator>
    )
}

export default LandingScreen

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
