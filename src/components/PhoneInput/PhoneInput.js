import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { Platform, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';


const PhoneInputComponent = (props) => {
  const {
    label = 'Phone Number',
    containerStyle = {},
    autoFocus = false,
  } = props;
  return (
    <>
      <Text style={phoneStyle.label}>{label}</Text>
      <PhoneInput
        ref={props.phoneInput}
        defaultValue={props.value}
        layout="first"
        autoFocus={autoFocus}
        defaultCode="UG"
        onChangeFormattedText={props.handleChangeFormatted}
        containerStyle={phoneStyle.container}
        textContainerStyle={{
          ...phoneStyle.textContainerStyle,
          ...containerStyle,
        }}
        onChangeText={props.handleChangeValue}
        placeholder={' '}
        keyboardType={Platform.OS === 'android' ? 'number-pad' : 'default'}
      />
      <Text style={phoneStyle.phoneError}>{props.numberError}</Text>
    </>
  );
};

const phoneStyle = StyleSheet.create({
  container: {
    width: '96%',
    elevation: 0,
    marginLeft: '2%',
    paddingEnd: '1%',
    backgroundColor: theme.colors.accent,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  textContainerStyle: {
    elevation: 0,
    //   borderWidth: 1,
    backgroundColor: theme.colors.accent,
    width: '100%',
    borderColor: 'gray',
    borderRadius: 4,
  },
  phoneError: {
    textAlign: 'left',
    fontSize: 12,
    marginTop: 3,
    marginBottom: 3,
    paddingStart: '3%',
    color: theme.colors.error,
  },
  label: {
    marginLeft: '3%',
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    color:theme.colors.primary,
    alignSelf:"center",
    fontSize: 16,
    opacity: Platform.OS === 'ios' ? 0.9 : 0.8,
    marginBottom:4
  },
});

export default PhoneInputComponent;
