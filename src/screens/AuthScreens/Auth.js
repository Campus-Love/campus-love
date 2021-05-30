import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import RegisterWithPhoneNumber from "./RegisterWithPhoneNumber";
import AuthBar from "../../components/AppBars/AuthBar"
import { theme } from "../../theme"
const Stack = createStackNavigator();
const AuthScreen = () => {

  const ScreensToRender = [
    {
      name: "Login",
      screen: Login


    },
    {
      name: "Phone",
      screen: RegisterWithPhoneNumber
    }
  ]

  return (

    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => 
          (<AuthBar
            title={'Login'}
            titleStyle={{ fontSize: 30, fontWeight: 'bold', alignSelf: "center" }}
            headerStyles={{ backgroundColor: theme.colors.primary, elevation: 0 }}

          />)

        }}
      />
      <Stack.Screen
        name="SignUp"
        component={RegisterWithPhoneNumber}
        options={{
          header: () => (<AuthBar
            title={'Register'}
            titleStyle={{ fontSize: 30, fontWeight: 'bold', alignSelf: "center" }}
            headerStyles={{ backgroundColor: theme.colors.primary, elevation: 0 }}
          />)


        }}
      />

    </Stack.Navigator>

  )
}
export default AuthScreen;