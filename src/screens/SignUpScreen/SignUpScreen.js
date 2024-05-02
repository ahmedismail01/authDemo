import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput.js/CustomInput';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.mainText}>Create Account</Text>
      <CustomInput
        placeholder={'username'}
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder={'email'} value={email} setValue={setEmail} />
      <CustomInput
        placeholder={'password'}
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder={'confirm password'}
        value={confirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry
      />
      <CustomButton
        title={'Sign In'}
        backgroundColor={'#3c73f4'}
        fntColor={'white'}
      />
      <Text style={styles.policyText}>
        By registering, you confirm that you accept our{' '}
        <Text> Terms of Use </Text>and <Text>Privacy Policy</Text>.
      </Text>
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
        title={"Have An Account?"}
        withoutBackground={true}
        fntColor={'grey'}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fafe',
    alignItems: 'center',
    padding: 30,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 30,
    marginTop : 40,
    fontWeight: 'bold',
  },
  policyText : {
    color : '#A6A8AA',
    marginVertical : 7,
    width : '100%',
    fontSize : 13
  }
});

export default SignUpScreen;
