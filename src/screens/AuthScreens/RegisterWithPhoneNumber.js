import React, {useState, useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { HelperText, Subheading, TextInput } from 'react-native-paper';
import { theme } from '../../theme';
import ReusableButton from '../../components/authButton';
import PhoneInputComponent from "../../components/PhoneInput/PhoneInput";
import {numberError} from "../../helpers"

const RegisterWithPhoneNumber = ({
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeEmail,
  handlePasswordChange,
  handleConfirmPasswordChange,
  handleSubmit,
  firstNameError,
  lastNameError,
  confirmPasswordError,
  emailError,
  passwordError,
  handleLoader,
  handleDisabled,
  navigation
}) => {
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const phoneInput = useRef(null);

    const moveToLogin = ()=>{
      navigation.navigate("Auth",
    {
      screen:"Login"
  }
    )
    }

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
            paddingTop: '10%',
          }}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{ paddingBottom: 400 }}
        >
          <Subheading
            theme={{ colors: { text: 'gray' } }}
            style={{ textAlign: 'center' }}
          >
            Please  fill in all details and receive a code on your phone
          </Subheading>
          <View>
            <TextInput
              label="User Name"
              onChangeText={handleChangeFirstName}
              style={{
                backgroundColor: theme.colors.accent,
                top: 4,
                color: 'black',
                width: '96%',
                alignSelf: 'center',
              }}
              theme={{ colors: { text: 'black' }, roundness: 10 }}
              mode={'outlined'}
              autoCorrect={false}
              error={firstNameError}
            />
            <HelperText type="error" visible={true}>
              {firstNameError}
            </HelperText>
          </View>
          <View>
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

          </View>

          <View
            style={{ padding: 10, top: 20, width: '100%', alignSelf: 'center' }}
          >
            <ReusableButton
              title={'register'}
              buttonStyle={{ padding: 5, alignSelf: 'center', width: '100%' , backgroundColor:theme.colors.primary, marginTop:-10}}
              handleLoader={handleLoader}
              disabled={handleDisabled}
              onPress={handleSubmit}
            />
            <TouchableOpacity  onPress ={moveToLogin} style={{marginTop:30}}>
              <Text style={{ color: 'black', textAlign: 'center', top: 13 }}>
                Already have an account?{' '}
                <TouchableOpacity onPress={moveToLogin} >
                <Text
                  style={{ fontWeight: 'bold', fontSize: 17, color: 'blue' , marginBottom:-5}}
                >
                  Login{' '}
                </Text>
                  
                </TouchableOpacity>
                
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );s
};

export default RegisterWithPhoneNumber;
