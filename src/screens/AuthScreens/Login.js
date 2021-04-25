import React , {useState, useRef}from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { Subheading, TextInput } from 'react-native-paper';
import { theme } from "../../theme";
import ReusableButton from '../../components/authButton';
import {numberError} from "../../helpers";
import PhoneInputComponent from "../../components/PhoneInput/PhoneInput"


const Login = ({
  handleChangeEmail,
  handlePasswordChange,
  handleSubmit,
  handleLoader,
  handleDisabled,
  navigation
}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.primary }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={{
            backgroundColor: theme.colors.text,
            borderTopRightRadius: theme.roundness,
            borderTopLeftRadius: theme.roundness,
            paddingTop: '5%',
          }}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{ paddingBottom: 400 }}
        >
          <Subheading
            theme={{ colors: { text: 'gray' } }}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              paddingBottom: 10,
              color:theme.colors.primary
            }}
          >
            Welcome Back
          </Subheading>
          <Image
            source={{uri:"data:image/jpeg;base64,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"}}
            style={{ width: '50%', height: '50%', 
            marginBottom:20, 
            justifyContent:"center",
            alignSelf:"center",
            marginTop:10 }}
          />
          <View style={{marginTop:10}}>
        
          <View>
    </View>
        
        
          </View>
          <PhoneInputComponent
        phoneInput={phoneInput}
        value={value}
        handleChangeFormatted={(text) => {
          setFormattedValue(text);
        }}
        handleChangeValue={(text) => {
          setValue(text);
        }}
        numberError={numberError(value)}
      
        label={`Phone Number`}
        autoFocus={false}
      />
         
          <View
            style={{ padding: 10, top: 20, width: '100%', alignSelf: 'center' , marginTop:-20}}
          >
            <ReusableButton
              title={'login'}
              buttonStyle={{ width: '100%', backgroundColor:theme.colors.primary }}
              handleLoader={handleLoader}
              disabled={handleDisabled}
              onPress={()=>navigation.navigate("Home")}
            />
            <TouchableOpacity>
              <Text
                style={{ color: 'black', textAlign: 'center', paddingTop: 40 }}
              >
                Have no account?{' '}
                <Text
                  style={{ fontWeight: 'bold', fontSize: 17, color: 'blue' }}
                >
                  SignUp
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
