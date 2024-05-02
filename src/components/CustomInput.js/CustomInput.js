import {View, StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder, value, setValue ,secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#eceff4',
    borderWidth :.5,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 25,
    height: 50,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
export default CustomInput;
