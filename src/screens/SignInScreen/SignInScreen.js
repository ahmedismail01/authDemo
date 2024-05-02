import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../../components/CustomInput.js/index.js';
import CustomButton from '../../components/CustomButton/index.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const signInOnPress = ()=> {
  fetch('http://192.168.1.3:8080/api/v1/auth/login',
  {
    method : 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      "password" : userName,
      "email" : password,
    })
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
}


const SignInScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.main}>
      <Image
        source={require('../../../assets/images/logo-design.png')}
        style={styles.img}
        resizeMode="contain"
      />
      <CustomInput
        placeholder={'username'}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder={'password'}
        value={password}
        setValue={setPassword}
      />
      <CustomButton
        title={'Sign In'}
        backgroundColor={'#3c73f4'}
        fntColor={'white'}
        onPress={signInOnPress}
      />
      <CustomButton
        title={'forget password'}
        withoutBackground={true}
        fntColor={'grey'}
      />
      <CustomButton
        title={'Sign In With FaceBook'}
        backgroundColor={'#e6eaf5'}
        d
        fntColor={'#526ca2'}
      />
      <CustomButton
        title={'Sign In With Google'}
        backgroundColor={'#f4e8ea'}
        fntColor={'#e04d4c'}
      />
      <CustomButton
        title={"Don't Have An Account"}
        withoutBackground={true}
        fntColor={'grey'}
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9fafe',
    alignItems: 'center',
    padding: 30,
  },
  img: {
    marginVertical: 40,
    margin: 20,
    width: '70%',
    height: 170,
  },
});

export default SignInScreen;
