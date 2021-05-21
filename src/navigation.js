
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Photos from './screens/Photos/photos';
import AuthScreen from "./screens/AuthScreens/Auth";
import SearchScreen from "./screens/SearchScreen/Search";
import SearchComponent from './components/search/searchComponent';
import {useDispatch, useSelector} from "react-redux"
import {returnBackWithData} from "./redux/dataSlice/dataSlice"



const Stack = createStackNavigator();

const Checker = () => {
  return (
    <View><Text>search me</Text></View>
  )
}





const Navigation = () => {
  const { isloggedIn} = useSelector(({auth})=>auth)
  const dispatch = useDispatch()
  return isloggedIn?
  (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
      >
        <Stack.Screen name="Home"
          component={LandingScreen}
          options={{
            header: (props) => (<AppBar {...props} title="CampusLove" showBadge />),
          }}
        />
         
         <Stack.Screen name="Search"
          component={SearchScreen}
          options={{
            header:({navigation})=>(
            <SearchComponent
            searchStyles={{  
              elevation: 10,
              height:100,
             }}

             icon = {'arrow-left'}
             iconPressed = {()=>{
               dispatch(returnBackWithData())
               return navigation.navigate("Home")
              }}

            />)
           
          }}
        />

        <Stack.Screen name="Profile"
          options={{
            header: (props) => (<AppBar {...props} title="Profile" />)
          }}
          component={ProfileScreen} />

        
        <Stack.Screen name="Photos"
          options={{
            headerShown: false
          }}
          component={Photos} />
      </Stack.Navigator>

    </NavigationContainer>

  )
  :
  <NavigationContainer>
    <Stack.Navigator
     headerMode="screen"
     initialRouteName="Auth"
    >
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            headerShown: false

          }}
        />

    </Stack.Navigator>

  </NavigationContainer>
  
}

export default Navigation;